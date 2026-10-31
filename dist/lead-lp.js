(function () {
  'use strict';

  const SUPABASE_URL = 'https://xyjqmvtlwlenfxpwrdcm.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5anFtdnRsd2xlbmZ4cHdyZGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzOTY3NzcsImV4cCI6MjEwODk3Mjc3N30.9He_amsa08oJx_gMQtU0X9Nvmu_lCcGDuTIbq4CYQGw';
  const STORAGE_KEY = 'cris_leads_store_v3';

  const DEFAULT_SEED_LEADS = [
    {
      id: 'f37d5c6c-3f07-4bc3-a079-2a130cdaf84b',
      nome: 'Lead Exemplo (Visual)',
      numero: '(81) 99999-0000',
      email: 'exemplo@appcris.com.br',
      tem_empresa: true,
      nome_empresa: 'Empresa Exemplo',
      igreja: 'Igreja Exemplo',
      status: 'novo',
      created_at: new Date().toISOString()
    }
  ];

  const state = {
    leads: [],
    filterCompany: 'all',
    filterChurch: 'all',
    filterStatus: 'all',
    searchQuery: ''
  };

  let broadcastChannel = null;
  if ('BroadcastChannel' in window) {
    try {
      broadcastChannel = new BroadcastChannel('cris_leads_sync');
      broadcastChannel.onmessage = function () {
        if (document.getElementById('leads-table-tbody')) {
          loadLeads();
        }
      };
    } catch (_) {}
  }

  function showToast(msg) {
    const toast = document.getElementById('cris-toast');
    const toastMsg = document.getElementById('cris-toast-msg');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 3200);
  }

  function formatPhoneBR(value) {
    const digits = String(value || '').replace(/\D/g, '').slice(0, 11);
    if (!digits) return '';
    if (digits.length <= 2) return '(' + digits;
    if (digits.length <= 6) return '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
    if (digits.length <= 10) {
      return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 6) + '-' + digits.slice(6);
    }
    return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7, 11);
  }

  function formatDateTimeBR(isoString) {
    if (!isoString) return 'Agora';
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'Hoje';
    return d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getLocalLeads() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveLocalLeads(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (_) {}
  }

  async function loadLeads() {
    const syncEl = document.getElementById('sync-status-indicator');
    if (syncEl) syncEl.textContent = '🔄 Sincronizando...';

    const localList = getLocalLeads();
    let cloudList = null;

    try {
      const res = await fetch(SUPABASE_URL + '/rest/v1/cris_leads?select=*&order=created_at.desc', {
        method: 'GET',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: 'Bearer ' + SUPABASE_KEY
        }
      });
      if (res.ok) {
        cloudList = await res.json();
      }
    } catch (_) {
      cloudList = null;
    }

    if (Array.isArray(cloudList)) {
      state.leads = cloudList;
      saveLocalLeads(cloudList);
      if (syncEl) syncEl.textContent = '☁️ Sincronizado em tempo real';
    } else {
      if (localList.length === 0) {
        state.leads = DEFAULT_SEED_LEADS.slice();
        saveLocalLeads(state.leads);
      } else {
        state.leads = localList;
      }
      if (syncEl) syncEl.textContent = '💾 Salvo localmente no navegador';
    }

    updateLeadCountersAndTable();
  }

  async function createLead(leadPayload) {
    const newLead = {
      id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : ('lead-' + Date.now()),
      nome: leadPayload.nome.trim(),
      numero: leadPayload.numero.trim(),
      email: leadPayload.email.trim(),
      tem_empresa: Boolean(leadPayload.tem_empresa),
      nome_empresa: (leadPayload.nome_empresa || '').trim(),
      igreja: leadPayload.igreja.trim(),
      status: 'novo',
      origem: 'LP Simplificada CRIS',
      created_at: new Date().toISOString()
    };

    const currentLocal = getLocalLeads();
    const updatedLocal = [newLead].concat(currentLocal);
    saveLocalLeads(updatedLocal);
    state.leads = updatedLocal;

    try {
      await fetch(SUPABASE_URL + '/rest/v1/cris_leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: 'Bearer ' + SUPABASE_KEY,
          Prefer: 'return=representation'
        },
        body: JSON.stringify({
          id: newLead.id,
          nome: newLead.nome,
          numero: newLead.numero,
          email: newLead.email,
          tem_empresa: newLead.tem_empresa,
          nome_empresa: newLead.nome_empresa,
          igreja: newLead.igreja,
          status: newLead.status,
          origem: newLead.origem
        })
      });
    } catch (_) {}

    if (broadcastChannel) {
      try { broadcastChannel.postMessage({ type: 'lead_added' }); } catch (_) {}
    }

    return newLead;
  }

  async function updateLeadStatus(leadId, newStatus) {
    state.leads = state.leads.map(function (item) {
      if (String(item.id) === String(leadId)) {
        return Object.assign({}, item, { status: newStatus });
      }
      return item;
    });
    saveLocalLeads(state.leads);
    updateLeadCountersAndTable();

    try {
      await fetch(SUPABASE_URL + '/rest/v1/cris_leads?id=eq.' + encodeURIComponent(leadId), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: 'Bearer ' + SUPABASE_KEY
        },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (_) {}

    showToast('Status atualizado!');
  }

  async function deleteLead(leadId) {
    state.leads = state.leads.filter(function (item) {
      return String(item.id) !== String(leadId);
    });
    saveLocalLeads(state.leads);
    updateLeadCountersAndTable();

    try {
      await fetch(SUPABASE_URL + '/rest/v1/cris_leads?id=eq.' + encodeURIComponent(leadId), {
        method: 'DELETE',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: 'Bearer ' + SUPABASE_KEY
        }
      });
    } catch (_) {}

    if (broadcastChannel) {
      try { broadcastChannel.postMessage({ type: 'lead_deleted' }); } catch (_) {}
    }
    showToast('Lead removido.');
  }

  function updateLeadCountersAndTable() {
    const tbody = document.getElementById('leads-table-tbody');
    if (!tbody) return;

    const total = state.leads.length;
    const totalPJ = state.leads.filter(function (l) { return Boolean(l.tem_empresa); }).length;
    const totalPF = total - totalPJ;

    const churchSet = new Set();
    state.leads.forEach(function (l) {
      const ch = String(l.igreja || '').trim();
      if (ch) churchSet.add(ch);
    });

    const kpiTotal = document.getElementById('kpi-total-leads');
    const kpiPJ = document.getElementById('kpi-total-pj');
    const kpiPctPJ = document.getElementById('kpi-pct-pj');
    const kpiPF = document.getElementById('kpi-total-pf');
    const kpiPctPF = document.getElementById('kpi-pct-pf');
    const kpiChurches = document.getElementById('kpi-total-churches');

    if (kpiTotal) kpiTotal.textContent = String(total);
    if (kpiPJ) kpiPJ.textContent = String(totalPJ);
    if (kpiPctPJ) {
      const pct = total > 0 ? Math.round((totalPJ / total) * 100) : 0;
      kpiPctPJ.textContent = pct + '% dos leads têm empresa';
    }
    if (kpiPF) kpiPF.textContent = String(totalPF);
    if (kpiPctPF) {
      const pctPf = total > 0 ? Math.round((totalPF / total) * 100) : 0;
      kpiPctPF.textContent = pctPf + '% membros consumidores';
    }
    if (kpiChurches) kpiChurches.textContent = String(churchSet.size);

    const churchSelect = document.getElementById('filter-church-select');
    if (churchSelect) {
      const currentVal = state.filterChurch;
      const sortedChurches = Array.from(churchSet).sort();
      let optionsHtml = '<option value="all">Todas as igrejas (' + sortedChurches.length + ')</option>';
      sortedChurches.forEach(function (ch) {
        const selectedAttr = currentVal === ch ? ' selected' : '';
        optionsHtml += '<option value="' + escapeHtml(ch) + '"' + selectedAttr + '>' + escapeHtml(ch) + '</option>';
      });
      churchSelect.innerHTML = optionsHtml;
    }

    renderLeadsTable();
  }

  function getFilteredLeads() {
    const q = state.searchQuery.trim().toLowerCase();
    return state.leads.filter(function (lead) {
      if (state.filterCompany === 'pj' && !lead.tem_empresa) return false;
      if (state.filterCompany === 'pf' && lead.tem_empresa) return false;
      if (state.filterChurch !== 'all' && String(lead.igreja || '').trim() !== state.filterChurch) return false;
      if (state.filterStatus !== 'all' && String(lead.status || 'novo') !== state.filterStatus) return false;

      if (q) {
        const haystack = [
          lead.nome,
          lead.numero,
          lead.email,
          lead.igreja,
          lead.nome_empresa
        ].join(' ').toLowerCase();
        if (haystack.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  function renderLeadsTable() {
    const tbody = document.getElementById('leads-table-tbody');
    const emptyBox = document.getElementById('leads-empty-state');
    if (!tbody) return;

    const filtered = getFilteredLeads();
    if (filtered.length === 0) {
      tbody.innerHTML = '';
      if (emptyBox) emptyBox.style.display = 'block';
      return;
    }
    if (emptyBox) emptyBox.style.display = 'none';

    tbody.innerHTML = filtered.map(function (lead) {
      const cleanDigits = String(lead.numero || '').replace(/\D/g, '');
      const waPhone = cleanDigits.startsWith('55') ? cleanDigits : ('55' + cleanDigits);
      const waGreeting = encodeURIComponent(
        'Olá, ' + (lead.nome || '') + '! Paz! Vimos seu cadastro na CRIS' +
        (lead.tem_empresa ? ' como empresa parceira' : '') + '. Tudo bem?'
      );
      const waUrl = 'https://wa.me/' + waPhone + '?text=' + waGreeting;

      const statusVal = lead.status || 'novo';
      const statusClass =
        statusVal === 'contatado' ? 'st-contatado' :
        statusVal === 'grupo' ? 'st-grupo' : 'st-novo';

      const companyBadgeHtml = lead.tem_empresa
        ? '<span class="badge-empresa is-pj">Sim' + (lead.nome_empresa ? ' · ' + escapeHtml(lead.nome_empresa) : '') + '</span>'
        : '<span class="badge-empresa is-pf">Não</span>';

      return (
        '<tr>' +
          '<td class="lead-name-cell">' +
            '<strong>' + escapeHtml(lead.nome) + '</strong>' +
            '<small>' + escapeHtml(formatDateTimeBR(lead.created_at)) + '</small>' +
          '</td>' +
          '<td><strong>' + escapeHtml(lead.numero) + '</strong></td>' +
          '<td>' + companyBadgeHtml + '</td>' +
          '<td><span class="badge-igreja">' + escapeHtml(lead.igreja || '—') + '</span></td>' +
          '<td><a href="mailto:' + escapeHtml(lead.email) + '" style="color:var(--emerald-brand);font-weight:600;text-decoration:underline;">' + escapeHtml(lead.email) + '</a></td>' +
          '<td>' +
            '<select class="status-select-inline ' + statusClass + '" data-status-lead-id="' + escapeHtml(lead.id) + '" aria-label="Status">' +
              '<option value="novo"' + (statusVal === 'novo' ? ' selected' : '') + '>Novo</option>' +
              '<option value="contatado"' + (statusVal === 'contatado' ? ' selected' : '') + '>Contatado</option>' +
              '<option value="grupo"' + (statusVal === 'grupo' ? ' selected' : '') + '>No Grupo VIP</option>' +
            '</select>' +
          '</td>' +
          '<td>' +
            '<div class="lead-actions-row">' +
              '<a href="' + waUrl + '" target="_blank" rel="noopener noreferrer" class="btn-wa-lead">WhatsApp ↗</a>' +
              '<button type="button" class="btn-delete-lead" data-delete-lead-id="' + escapeHtml(lead.id) + '" title="Excluir">✕</button>' +
            '</div>' +
          '</td>' +
        '</tr>'
      );
    }).join('');
  }

  function exportLeadsToCSV() {
    const list = getFilteredLeads();
    if (list.length === 0) {
      showToast('Não há leads para exportar.');
      return;
    }

    const headers = ['Nome', 'Numero_WhatsApp', 'Email', 'Tem_Empresa', 'Nome_Empresa', 'Igreja', 'Status', 'Data_Cadastro'];
    const rows = list.map(function (l) {
      return [
        l.nome || '',
        l.numero || '',
        l.email || '',
        l.tem_empresa ? 'Sim' : 'Não',
        l.nome_empresa || '',
        l.igreja || '',
        l.status || 'novo',
        formatDateTimeBR(l.created_at)
      ].map(function (cell) {
        return '"' + String(cell).replace(/"/g, '""') + '"';
      }).join(';');
    });

    const csvContent = '\uFEFF' + headers.join(';') + '\r\n' + rows.join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'leads-cris-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('CSV exportado!');
  }

  function setCompanySelection(hasCompany) {
    const hiddenInput = document.getElementById('lead-tem-empresa');
    const condBox = document.getElementById('conditional-company-box');
    if (hiddenInput) hiddenInput.value = hasCompany ? 'sim' : 'nao';

    document.querySelectorAll('[data-has-company]').forEach(function (btn) {
      const isSim = btn.getAttribute('data-has-company') === 'sim';
      const active = isSim === hasCompany;
      btn.classList.toggle('is-selected', active);
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });

    if (condBox) {
      condBox.style.display = hasCompany ? 'block' : 'none';
    }
  }

  function initEvents() {
    const phoneInput = document.getElementById('lead-numero');
    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        e.target.value = formatPhoneBR(e.target.value);
      });
    }

    document.querySelectorAll('[data-has-company]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setCompanySelection(btn.getAttribute('data-has-company') === 'sim');
      });
    });

    const leadForm = document.getElementById('cris-lead-form');
    if (leadForm) {
      leadForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const errEl = document.getElementById('lead-form-error');
        if (errEl) errEl.style.display = 'none';

        const nome = (document.getElementById('lead-nome')?.value || '').trim();
        const numero = (document.getElementById('lead-numero')?.value || '').trim();
        const email = (document.getElementById('lead-email')?.value || '').trim();
        const igreja = (document.getElementById('lead-igreja')?.value || '').trim();
        const temEmpresa = (document.getElementById('lead-tem-empresa')?.value === 'sim');
        const nomeEmpresa = (document.getElementById('lead-nome-empresa')?.value || '').trim();

        const phoneDigits = numero.replace(/\D/g, '');
        if (nome.length < 2) {
          if (errEl) {
            errEl.textContent = 'Por favor, informe seu nome.';
            errEl.style.display = 'block';
          }
          document.getElementById('lead-nome')?.focus();
          return;
        }
        if (phoneDigits.length < 10) {
          if (errEl) {
            errEl.textContent = 'Por favor, informe um WhatsApp válido com DDD.';
            errEl.style.display = 'block';
          }
          document.getElementById('lead-numero')?.focus();
          return;
        }
        if (!email || email.indexOf('@') === -1) {
          if (errEl) {
            errEl.textContent = 'Por favor, informe um e-mail válido.';
            errEl.style.display = 'block';
          }
          document.getElementById('lead-email')?.focus();
          return;
        }
        if (igreja.length < 2) {
          if (errEl) {
            errEl.textContent = 'Por favor, informe qual a sua igreja.';
            errEl.style.display = 'block';
          }
          document.getElementById('lead-igreja')?.focus();
          return;
        }

        const submitBtn = document.getElementById('btn-submit-lead');
        const submitText = document.getElementById('btn-submit-text');
        if (submitBtn) submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'Salvando seu cadastro...';

        const saved = await createLead({
          nome: nome,
          numero: numero,
          email: email,
          igreja: igreja,
          tem_empresa: temEmpresa,
          nome_empresa: temEmpresa ? nomeEmpresa : ''
        });

        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.textContent = 'Cadastrar meus dados na CRIS';

        const formContainer = document.getElementById('lead-form-container');
        const successState = document.getElementById('lead-success-state');
        const summaryBox = document.getElementById('saved-lead-summary');

        if (summaryBox) {
          summaryBox.innerHTML =
            '<div><span>Nome:</span> <strong>' + escapeHtml(saved.nome) + '</strong></div>' +
            '<div><span>WhatsApp:</span> <strong>' + escapeHtml(saved.numero) + '</strong></div>' +
            '<div><span>E-mail:</span> <strong>' + escapeHtml(saved.email) + '</strong></div>' +
            '<div><span>Igreja:</span> <strong>' + escapeHtml(saved.igreja) + '</strong></div>' +
            '<div><span>Tem empresa:</span> <strong>' + (saved.tem_empresa ? ('Sim' + (saved.nome_empresa ? ' · ' + escapeHtml(saved.nome_empresa) : '')) : 'Não') + '</strong></div>';
        }

        if (formContainer) formContainer.style.display = 'none';
        if (successState) successState.style.display = 'block';
        showToast('Cadastro recebido com sucesso!');
      });
    }

    const resetBtn = document.getElementById('btn-new-lead-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (leadForm) leadForm.reset();
        setCompanySelection(false);
        const formContainer = document.getElementById('lead-form-container');
        const successState = document.getElementById('lead-success-state');
        if (successState) successState.style.display = 'none';
        if (formContainer) formContainer.style.display = 'block';
      });
    }

    const searchInput = document.getElementById('leads-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        state.searchQuery = e.target.value || '';
        renderLeadsTable();
      });
    }

    document.querySelectorAll('[data-filter-company]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.filterCompany = btn.getAttribute('data-filter-company') || 'all';
        document.querySelectorAll('[data-filter-company]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        renderLeadsTable();
      });
    });

    const churchSelect = document.getElementById('filter-church-select');
    if (churchSelect) {
      churchSelect.addEventListener('change', function (e) {
        state.filterChurch = e.target.value || 'all';
        renderLeadsTable();
      });
    }

    const statusSelect = document.getElementById('filter-status-select');
    if (statusSelect) {
      statusSelect.addEventListener('change', function (e) {
        state.filterStatus = e.target.value || 'all';
        renderLeadsTable();
      });
    }

    const refreshBtn = document.getElementById('btn-refresh-leads');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', function () {
        loadLeads().then(function () {
          showToast('Lista de leads atualizada!');
        });
      });
    }

    const exportBtn = document.getElementById('btn-export-csv');
    if (exportBtn) {
      exportBtn.addEventListener('click', exportLeadsToCSV);
    }

    const tbody = document.getElementById('leads-table-tbody');
    if (tbody) {
      tbody.addEventListener('change', function (e) {
        const target = e.target;
        if (target && target.hasAttribute('data-status-lead-id')) {
          updateLeadStatus(target.getAttribute('data-status-lead-id'), target.value);
        }
      });

      tbody.addEventListener('click', function (e) {
        const delBtn = e.target.closest('[data-delete-lead-id]');
        if (delBtn) {
          deleteLead(delBtn.getAttribute('data-delete-lead-id'));
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initEvents();
    if (document.getElementById('leads-table-tbody')) {
      loadLeads();
    }
  });
})();

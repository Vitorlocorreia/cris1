(function () {
  // ==========================================
  // ESTADO CENTRAL DO SUPER APP CRIS
  // ==========================================
  const state = {
    theme: 'light',
    balanceHidden: false,
    walletTotal: 2489.90,
    walletWeek: 184.20,
    activeProjectIndex: 0,
    projects: [
      'Instituto Pão da Vida',
      'Projeto Sementes do Amanhã',
      'Casa Restauração Familiar'
    ],
    cart: [
      {
        id: 'p1',
        title: 'Cesta Café Artesanal Reino',
        seller: 'Padaria Grão & Graça',
        price: 89.00,
        impactPct: 5,
        photo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 'p2',
        title: 'Café Especial Torra Fresca 500g',
        seller: 'Café Aliança Torrefação',
        price: 48.00,
        impactPct: 6,
        photo: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80'
      }
    ],
    companies: [
      {
        id: 'b1',
        name: 'Padaria Grão & Graça',
        category: 'Alimentação',
        location: 'Boa Viagem · 1,2 km',
        rating: '4.9',
        impactPct: 5,
        photo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
        bio: 'Panificação artesanal de fermentação natural, brunch em família e coffee breaks corporativos.',
        products: ['Pães de fermentação natural', 'Cestas de café da manhã', 'Coffee break para empresas e igrejas'],
        services: ['Buffet corporativo sob encomenda', 'Assinatura semanal de pães'],
        courses: ['Oficina de Panificação Artesanal & Gestão'],
        contact: '(81) 99123-4501 · @graoegraca.pe',
        address: 'Rua dos Navegantes, 410 — Boa Viagem, Recife'
      },
      {
        id: 'b2',
        name: 'Estúdio Raízes Design',
        category: 'Tecnologia',
        location: 'Casa Forte · Atende Brasil',
        rating: '5.0',
        impactPct: 8,
        photo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
        bio: 'Identidade visual, posicionamento de marca e interfaces digitais para empresas que buscam excelência.',
        products: ['Identidade Visual Completa', 'Landing Pages de Alta Conversão', 'Kit Redes Sociais'],
        services: ['Consultoria de Branding', 'Design de Embalagens'],
        courses: ['Posicionamento de Marca com Propósito (Academia CRIS)'],
        contact: '(81) 99812-3302 · @estudioraizes',
        address: 'Av. 17 de Agosto, 1120 — Casa Forte, Recife'
      },
      {
        id: 'b3',
        name: 'Clínica Esperança Saúde',
        category: 'Saúde',
        location: 'Graças · 2,4 km',
        rating: '4.9',
        impactPct: 4,
        photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80',
        bio: 'Cuidado integral em medicina da família, nutrição clínica, psicologia cristã e check-up executivo.',
        products: ['Check-up Preventivo Completo', 'Acompanhamento Nutricional'],
        services: ['Psicoterapia Individual e Familiar', 'Saúde Ocupacional para Empresas'],
        courses: ['Saúde Emocional para Líderes e Empreendedores'],
        contact: '(81) 99440-1190 · @clinicaesperanca',
        address: 'Rua das Creoulas, 285 — Graças, Recife'
      },
      {
        id: 'b4',
        name: 'Bússola Contábil & Fiscal',
        category: 'Serviços B2B',
        location: 'Ilha do Leite · Online',
        rating: '4.8',
        impactPct: 6,
        photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80',
        bio: 'Contabilidade consultiva, planejamento tributário ético e BPO financeiro para PMEs.',
        products: ['Abertura e Regularização de Empresas', 'Planejamento Tributário Anual'],
        services: ['Contabilidade Mensal Consultiva', 'BPO Financeiro Terceirizado'],
        courses: ['Gestão Financeira e Mordomia para Empresários'],
        contact: '(81) 99654-7780 · @bussolacontabil',
        address: 'Empresarial Thomas Edison, Sala 604 — Recife'
      },
      {
        id: 'b5',
        name: 'Café Aliança Torrefação',
        category: 'Alimentação',
        location: 'Espinheiro · 1,8 km',
        rating: '5.0',
        impactPct: 6,
        photo: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80',
        bio: 'Cafés especiais de produtores familiares, torra fresca semanal e espaço para reuniões de negócios.',
        products: ['Café Especial em Grãos 500g', 'Kit Drip Coffee Presenteável'],
        services: ['Fornecimento de Café Corporativo', 'Salas de Reunião & Coworking'],
        courses: ['Barismo Básico & Experiência do Cliente'],
        contact: '(81) 99201-8840 · @cafealianca',
        address: 'Rua da Hora, 520 — Espinheiro, Recife'
      },
      {
        id: 'b6',
        name: 'TechReino Sistemas & IA',
        category: 'Tecnologia',
        location: 'Porto Digital · Brasil',
        rating: '4.9',
        impactPct: 7,
        photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
        bio: 'Automação comercial, CRM e desenvolvimento de software sob medida para empresas em crescimento.',
        products: ['Implantação de CRM Comercial', 'Automação de WhatsApp'],
        services: ['Desenvolvimento Web e Mobile', 'Consultoria de Processos'],
        courses: ['Vendas & Atendimento Digital para Negócios Locais'],
        contact: '(81) 99771-2026 · @techreino',
        address: 'Rua do Apolo, 181 — Bairro do Recife'
      }
    ],
    products: [
      {
        id: 'p1',
        title: 'Cesta Café Artesanal Reino',
        seller: 'Padaria Grão & Graça',
        price: 89.00,
        impactPct: 5,
        photo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 'p2',
        title: 'Café Especial Torra Fresca 500g',
        seller: 'Café Aliança Torrefação',
        price: 48.00,
        impactPct: 6,
        photo: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 'p3',
        title: 'Diagnóstico Financeiro PME',
        seller: 'Bússola Contábil & Fiscal',
        price: 290.00,
        impactPct: 6,
        photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 'p4',
        title: 'Check-up Nutrição & Saúde',
        seller: 'Clínica Esperança Saúde',
        price: 220.00,
        impactPct: 4,
        photo: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 'p5',
        title: 'Identidade Visual + Redes',
        seller: 'Estúdio Raízes Design',
        price: 650.00,
        impactPct: 8,
        photo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 'p6',
        title: 'Coffee Break Executivo (15 p.)',
        seller: 'Padaria Grão & Graça',
        price: 340.00,
        impactPct: 5,
        photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80'
      }
    ],
    muralPosts: [
      {
        id: 'm1',
        type: 'need',
        category: 'Serviços B2B',
        title: 'Preciso de escritório contábil para abertura de segunda filial',
        desc: 'Estamos expandindo nossa operação em Recife e buscamos parceiro contábil da comunidade para assessoria mensal.',
        author: 'Lucas Andrade',
        company: 'Ótica Visão Clara',
        referrals: 4
      },
      {
        id: 'm2',
        type: 'offer',
        category: 'Tecnologia & Marketing',
        title: 'Posso oferecer diagnóstico gratuito de presença digital e Google Meu Negócio',
        desc: 'Reservei 5 horários nesta semana para ajudar empresários da CRIS a serem melhor encontrados nas buscas locais.',
        author: 'Mariana Costa',
        company: 'Estúdio Raízes Design',
        referrals: 8
      },
      {
        id: 'm3',
        type: 'need',
        category: 'Alimentação & Eventos',
        title: 'Busco fornecedor de coffee break para encontro de 40 líderes no sábado',
        desc: 'Precisamos de pães artesanais, frutas e café especial para evento às 8h30 na Zona Norte.',
        author: 'Pr. Henrique Silva',
        company: 'Comunidade Graça Viva',
        referrals: 5
      },
      {
        id: 'm4',
        type: 'offer',
        category: 'Serviços B2B',
        title: 'Ofereço condição especial em BPO Financeiro para membros CRIS (6% vira doação)',
        desc: 'Organizamos todo o contas a pagar, receber e fluxo de caixa da sua empresa para você focar em crescer.',
        author: 'Daniel Vasconcelos',
        company: 'Bússola Contábil & Fiscal',
        referrals: 6
      }
    ],
    connections: [
      {
        id: 'c1',
        partner: 'Padaria Grão & Graça',
        subject: 'Fornecimento de Coffee Break Mensal',
        stage: 'closed',
        value: 1450,
        impact: 72.50,
        date: 'Ontem'
      },
      {
        id: 'c2',
        partner: 'Estúdio Raízes Design',
        subject: 'Redesign de Embalagens e Catálogo',
        stage: 'meeting',
        value: 2800,
        impact: 224.00,
        date: 'Em andamento'
      },
      {
        id: 'c3',
        partner: 'Bússola Contábil & Fiscal',
        subject: 'Indicação feita para Ótica Visão Clara',
        stage: 'referred',
        value: 2150,
        impact: 129.00,
        date: 'Há 2 dias'
      }
    ],
    courses: [
      {
        id: 'cr1',
        title: 'Gestão Financeira e Mordomia nos Negócios',
        instructor: 'Daniel Vasconcelos · Bússola Contábil',
        duration: '6 aulas · 45 min',
        progress: 65,
        tag: 'FINANÇAS & PRINCÍPIOS',
        photo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80',
        summary: 'Como separar pessoa física da jurídica, formar reserva de segurança e precificar com justiça e margem saudável.',
        keyAction: 'Revise hoje os 3 maiores custos fixos da sua empresa e defina sua meta de margem líquida mensal.'
      },
      {
        id: 'cr2',
        title: 'Liderança Servidora e Cultura de Equipe',
        instructor: 'Dra. Helena Moura · Clínica Esperança',
        duration: '5 aulas · 38 min',
        progress: 35,
        tag: 'LIDERANÇA CRISTÃ',
        photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
        summary: 'Como contratar por caráter e competência, dar feedbacks construtivos e criar um ambiente onde as pessoas florescem.',
        keyAction: 'Realize uma conversa individual de 15 minutos de escuta ativa com um colaborador chave nesta semana.'
      },
      {
        id: 'cr3',
        title: 'Posicionamento, Vendas e Indicações na Rede',
        instructor: 'Mariana Costa · Estúdio Raízes',
        duration: '4 aulas · 32 min',
        progress: 100,
        tag: 'VENDAS & REDE',
        photo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
        summary: 'Como apresentar sua empresa com clareza no Mural CRIS, gerar confiança imediata e transformar clientes em indicadores.',
        keyAction: 'Atualize seu Perfil Empresarial na CRIS e publique uma oferta clara no Mural da semana.'
      }
    ],
    events: [
      {
        id: 'ev1',
        title: 'Café de Negócios & Conexões CRIS — Edição Recife',
        date: 'Quinta, 05 Nov · 07h30 às 09h30',
        place: 'Café Aliança (Espinheiro)',
        spots: '18 confirmados · 7 vagas restantes',
        confirmed: false
      },
      {
        id: 'ev2',
        title: 'Rodada Online de Indicações & Parcerias B2B',
        date: 'Terça, 10 Nov · 19h30 (Ao vivo)',
        place: 'Sala Executiva CRIS (Google Meet)',
        spots: '42 empresários inscritos',
        confirmed: true
      }
    ],
    groups: [
      {
        id: 'g1',
        name: 'Empreendedores de Alimentação & Gastronomia',
        members: 64,
        lastMsg: 'Alguém indica fornecedor de embalagens biodegradáveis em PE?'
      },
      {
        id: 'g2',
        name: 'Serviços B2B, Tecnologia, Marketing & Gestão',
        members: 92,
        lastMsg: 'Acabamos de fechar parceria pelo Mural CRIS! Deus seja louvado.'
      },
      {
        id: 'g3',
        name: 'Saúde, Cuidado & Bem-estar Integral',
        members: 48,
        lastMsg: 'Encontro do grupo confirmado para a próxima quarta-feira.'
      }
    ],
    bibleChapters: {
      proverbios16: {
        title: 'Provérbios 16 — Sabedoria e Planos',
        verses: [
          { n: 1, text: 'Ao ser humano pertencem os planos do coração, mas do Senhor vem a resposta da língua.' },
          { n: 3, text: 'Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.', highlighted: true },
          { n: 8, text: 'É melhor ter pouco com retidão do que muito com injustiça.' },
          { n: 9, text: 'Em seu coração o homem planeja o seu caminho, mas o Senhor determina os seus passos.' },
          { n: 11, text: 'Pesos e balanças honestos vêm do Senhor; todos os pesos da bolsa são feitos por ele.' }
        ]
      },
      colossenses3: {
        title: 'Colossenses 3 — Vocação e Serviço',
        verses: [
          { n: 12, text: 'Portanto, como povo escolhido de Deus, santo e amado, revistam-se de profunda compaixão, bondade, humildade, mansidão e paciência.' },
          { n: 17, text: 'E tudo o que fizerem, seja em palavra ou em ação, façam em nome do Senhor Jesus, dando por meio dele graças a Deus Pai.' },
          { n: 23, text: 'Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens,', highlighted: true },
          { n: 24, text: 'sabendo que receberão do Senhor a recompensa da herança. É a Cristo, o Senhor, que vocês estão servindo.' }
        ]
      },
      mateus5: {
        title: 'Mateus 5 — Sal da Terra e Luz do Mundo',
        verses: [
          { n: 13, text: 'Vocês são o sal da terra. Mas, se o sal perder o seu sabor, como restaurá-lo?' },
          { n: 14, text: 'Vocês são a luz do mundo. Não se pode esconder uma cidade construída sobre um monte.' },
          { n: 16, text: 'Assim brilhe a luz de vocês diante dos homens, para que vejam as suas boas obras e glorifiquem ao Pai de vocês, que está nos céus.', highlighted: true }
        ]
      },
      salmos23: {
        title: 'Salmos 23 — O Pastor Fiel',
        verses: [
          { n: 1, text: 'O Senhor é o meu pastor; de nada terei falta.' },
          { n: 2, text: 'Em verdes pastagens me faz repousar e me conduz a águas tranquilas;' },
          { n: 3, text: 'restaura-me o vigor. Guia-me nas veredas da justiça por amor do seu nome.', highlighted: true },
          { n: 6, text: 'Sei que a bondade e a fidelidade me acompanharão todos os dias da minha vida.' }
        ]
      }
    }
  };

  // ==========================================
  // UTILITÁRIOS DE UI & TEMA LIGHT / DARK
  // ==========================================
  const toastEl = document.getElementById('app-toast');
  let toastTimeout;
  function showToast(msg) {
    clearTimeout(toastTimeout);
    toastEl.textContent = msg;
    toastEl.classList.add('is-visible');
    toastTimeout = setTimeout(() => toastEl.classList.remove('is-visible'), 3200);
  }

  function formatBRL(val) {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    document.getElementById('theme-icon-dark').classList.toggle('is-active', state.theme === 'dark');
    document.getElementById('theme-icon-light').classList.toggle('is-active', state.theme === 'light');
    showToast(state.theme === 'dark' ? 'Modo Emerald Dark ativado' : 'Modo Acolhedor Light ativado');
  }

  document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('desktop-toggle-theme')?.addEventListener('click', toggleTheme);

  function openSheet(id) {
    document.getElementById(id)?.classList.add('is-open');
  }

  function closeSheet(id) {
    document.getElementById(id)?.classList.remove('is-open');
  }

  document.querySelectorAll('[data-close-sheet]').forEach(btn => {
    btn.addEventListener('click', () => closeSheet(btn.dataset.closeSheet));
  });

  document.querySelectorAll('.sheet-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) backdrop.classList.remove('is-open');
    });
  });

  // ==========================================
  // NAVEGAÇÃO ENTRE ABAS E SUB-ABAS
  // ==========================================
  const navTabs = document.querySelectorAll('.nav-tab');
  const views = document.querySelectorAll('.app-view');
  const appMain = document.getElementById('app-main');

  function switchMainTab(tabName, subTarget) {
    navTabs.forEach(t => t.classList.toggle('is-active', t.dataset.tab === tabName));
    views.forEach(v => v.classList.toggle('is-active', v.id === `view-${tabName}`));
    appMain.scrollTop = 0;

    if (subTarget) {
      if (tabName === 'marketplace') switchMarketSub(subTarget);
      if (tabName === 'mural') switchMuralSub(subTarget);
      if (tabName === 'bible') switchBibleSub(subTarget);
      if (tabName === 'academy') switchAcademySub(subTarget);
    }
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => switchMainTab(tab.dataset.tab));
  });

  document.querySelectorAll('[data-nav-target]').forEach(el => {
    el.addEventListener('click', () => {
      switchMainTab(el.dataset.navTarget, el.dataset.subTarget);
    });
  });

  document.querySelectorAll('[data-jump-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.proto-quick-jumps .jump-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      switchMainTab(btn.dataset.jumpTab, btn.dataset.jumpSub);
    });
  });

  // Controles do Painel Lateral: Impacto Social, Sem Moldura, Focar no Celular, Voltar ao Início
  const workspaceEl = document.querySelector('.proto-workspace');
  const restoreBarEl = document.getElementById('proto-restore-bar');

  function renderImpactProjectsSheet() {
    const container = document.getElementById('impact-projects-list');
    if (!container) return;
    const projectDetails = [
      { name: 'Instituto Pão da Vida', area: 'Reforço escolar & segurança alimentar · Recife/PE', repassed: 'R$ 14.820,00 repassados' },
      { name: 'Projeto Sementes do Amanhã', area: 'Capacitação profissional de jovens · Olinda/PE', repassed: 'R$ 9.450,00 repassados' },
      { name: 'Casa Restauração Familiar', area: 'Acolhimento e apoio integral a famílias · Jaboatão/PE', repassed: 'R$ 11.290,00 repassados' }
    ];
    container.innerHTML = projectDetails.map((p, idx) => `
      <article class="cris-card" style="margin-bottom:10px;border-color:${state.activeProjectIndex === idx ? 'var(--emerald-bright)' : 'var(--border-color)'};">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
          <div>
            <strong style="font-size:14.5px;display:block;">${p.name}</strong>
            <span style="font-size:11.5px;color:var(--text-muted);display:block;margin:3px 0 6px;">${p.area}</span>
            <span style="font-size:11px;color:var(--emerald-bright);font-weight:700;">✓ Auditado · ${p.repassed}</span>
          </div>
          ${state.activeProjectIndex === idx ? `<span class="verified-badge">Escolhido</span>` : ''}
        </div>
        <button type="button" class="${state.activeProjectIndex === idx ? 'btn-secondary' : 'btn-primary'} btn-full" style="margin-top:10px;padding:8px;" data-select-proj="${idx}">
          ${state.activeProjectIndex === idx ? '✓ Projeto Ativo na sua Carteira' : 'Escolher este Projeto Social'}
        </button>
      </article>
    `).join('');

    container.querySelectorAll('[data-select-proj]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeProjectIndex = Number(btn.dataset.selectProj);
        updateWalletUI();
        renderImpactProjectsSheet();
        showToast(`Projeto apoiado: ${state.projects[state.activeProjectIndex]}`);
      });
    });
  }

  document.getElementById('desktop-open-impact')?.addEventListener('click', function () {
    document.querySelectorAll('.proto-quick-jumps .jump-btn').forEach(b => b.classList.remove('is-active'));
    this.classList.add('is-active');
    renderImpactProjectsSheet();
    openSheet('sheet-impact-projects');
  });

  function enterFramelessMode() {
    workspaceEl.classList.add('is-frameless');
    workspaceEl.classList.remove('is-phone-focused');
    if (restoreBarEl) restoreBarEl.style.display = 'flex';
  }

  document.getElementById('btn-open-frameless')?.addEventListener('click', e => {
    e.preventDefault();
    history.replaceState(null, '', '?frameless=1');
    enterFramelessMode();
    showToast('Modo App Sem Moldura ativado!');
  });

  document.getElementById('btn-focus-phone')?.addEventListener('click', () => {
    workspaceEl.classList.add('is-phone-focused');
    workspaceEl.classList.remove('is-frameless');
    if (restoreBarEl) restoreBarEl.style.display = 'flex';
    showToast('Foco no celular ativado!');
  });

  function resetToHome() {
    document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
    document.querySelectorAll('.proto-quick-jumps .jump-btn').forEach(b => b.classList.remove('is-active'));
    document.querySelector('.proto-quick-jumps [data-jump-tab="home"]')?.classList.add('is-active');
    switchMainTab('home');
    showToast('De volta ao início do Super App!');
  }

  document.getElementById('btn-reset-home')?.addEventListener('click', resetToHome);
  document.getElementById('btn-restore-home')?.addEventListener('click', resetToHome);

  document.getElementById('btn-restore-guide')?.addEventListener('click', () => {
    workspaceEl.classList.remove('is-frameless', 'is-phone-focused');
    if (restoreBarEl) restoreBarEl.style.display = 'none';
    if (location.search.includes('frameless=1')) {
      history.replaceState(null, '', location.pathname);
    }
  });

  if (new URLSearchParams(location.search).get('frameless') === '1') {
    enterFramelessMode();
  }

  document.getElementById('home-search-trigger').addEventListener('click', () => {
    switchMainTab('marketplace', 'companies');
    setTimeout(() => document.getElementById('biz-search-input')?.focus(), 150);
  });

  // ==========================================
  // NOTIFICAÇÃO PUSH "PALAVRA DO DIA"
  // ==========================================
  const pushBanner = document.getElementById('push-banner');
  const notifBadge = document.getElementById('notif-badge');
  let pushTimer;

  function triggerPushNotification() {
    clearTimeout(pushTimer);
    pushBanner.classList.add('is-visible');
    if (notifBadge) notifBadge.style.display = 'grid';
    pushTimer = setTimeout(() => {
      pushBanner.classList.remove('is-visible');
    }, 6500);
  }

  document.getElementById('btn-trigger-push').addEventListener('click', triggerPushNotification);
  document.getElementById('desktop-trigger-push')?.addEventListener('click', triggerPushNotification);
  document.getElementById('btn-test-push-from-bible').addEventListener('click', () => {
    const timeVal = document.getElementById('notif-time-input').value || '07:00';
    triggerPushNotification();
    showToast(`Push diário programado para ${timeVal}!`);
  });

  document.getElementById('push-close-btn').addEventListener('click', e => {
    e.stopPropagation();
    pushBanner.classList.remove('is-visible');
  });

  document.getElementById('push-banner-body').addEventListener('click', () => {
    pushBanner.classList.remove('is-visible');
    if (notifBadge) notifBadge.style.display = 'none';
    switchMainTab('bible', 'devotional');
    showToast('Reflexão do dia aberta!');
  });

  setTimeout(triggerPushNotification, 1800);

  // ==========================================
  // SALDO DE IMPACTO NUBANK + SCANNER DE NOTA
  // ==========================================
  function updateWalletUI() {
    const displayEl = document.getElementById('wallet-total-display');
    const weekEl = document.getElementById('wallet-week-display');
    if (state.balanceHidden) {
      displayEl.textContent = 'R$ ••••••';
      weekEl.textContent = '••••%';
    } else {
      displayEl.textContent = formatBRL(state.walletTotal);
      weekEl.textContent = `+ ${formatBRL(state.walletWeek)} mês`;
    }
    document.getElementById('active-project-short').textContent = state.projects[state.activeProjectIndex];
  }

  document.getElementById('btn-toggle-balance').addEventListener('click', () => {
    state.balanceHidden = !state.balanceHidden;
    updateWalletUI();
  });

  document.getElementById('btn-change-project').addEventListener('click', () => {
    state.activeProjectIndex = (state.activeProjectIndex + 1) % state.projects.length;
    updateWalletUI();
    showToast(`Projeto apoiado: ${state.projects[state.activeProjectIndex]}`);
  });

  // ==========================================
  // SCANNER DE NOTA FISCAL (CÂMERA + LEITOR QR / OCR)
  // ==========================================
  const sampleReceipts = [
    {
      company: 'Padaria Grão & Graça',
      legalName: 'PADARIA GRÃO & GRAÇA LTDA',
      cnpj: 'CNPJ: 28.419.502/0001-84 · RECIFE/PE',
      pct: 5,
      total: 150.00,
      items: [
        ['001 CESTA CAFE REINO', '89,00'],
        ['002 PAO FERM NATURAL', '32,00'],
        ['003 CAFE EXPRESSO DUPLO', '29,00']
      ]
    },
    {
      company: 'Estúdio Raízes Design',
      legalName: 'RAIZES DESIGN & BRANDING LTDA',
      cnpj: 'CNPJ: 41.802.119/0001-12 · RECIFE/PE',
      pct: 8,
      total: 450.00,
      items: [
        ['001 IDENTIDADE VISUAL EXPRESS', '320,00'],
        ['002 PACK EMBALAGENS', '130,00']
      ]
    },
    {
      company: 'Clínica Esperança Saúde',
      legalName: 'CLINICA ESPERANCA SAUDE INTEGRAL',
      cnpj: 'CNPJ: 19.304.881/0001-40 · RECIFE/PE',
      pct: 4,
      total: 220.00,
      items: [
        ['001 CONSULTA NUTRICAO CLINICA', '220,00']
      ]
    },
    {
      company: 'Café Aliança Torrefação',
      legalName: 'CAFE ALIANCA TORREFACAO ARTESANAL',
      cnpj: 'CNPJ: 35.110.904/0001-09 · RECIFE/PE',
      pct: 6,
      total: 85.00,
      items: [
        ['001 CAFE ESPECIAL GRAOS 500G', '48,00'],
        ['002 KIT DRIP COFFEE', '37,00']
      ]
    }
  ];

  let activeSampleIdx = 0;
  let scannerStream = null;
  let isScanningNow = false;

  const viewfinderEl = document.getElementById('scanner-viewfinder');
  const scannerStatusPill = document.getElementById('scanner-status-pill');
  const scanPreviewDonation = document.getElementById('scan-preview-donation');
  const scanPreviewCompany = document.getElementById('scan-preview-company');

  function updateScanPreview() {
    const r = sampleReceipts[activeSampleIdx];
    const donation = (r.total * r.pct) / 100;

    document.getElementById('nfce-company-name').textContent = r.legalName;
    document.getElementById('nfce-cnpj').textContent = r.cnpj;
    document.getElementById('nfce-items-list').innerHTML = r.items
      .map(([desc, val]) => `<div class="nfce-item-row"><span>${desc}</span><span>${val}</span></div>`)
      .join('');
    document.getElementById('nfce-total-val').textContent = r.total.toFixed(2).replace('.', ',');
    document.getElementById('nfce-impact-tag').textContent = `PARCEIRO CRIS: ${r.pct}% VIRA DOAÇÃO`;

    scanPreviewDonation.textContent = `+ ${formatBRL(donation)} (${r.pct}%)`;
    scanPreviewCompany.textContent = `${r.company} · Nota de ${formatBRL(r.total)}`;
  }

  document.querySelectorAll('#scanner-sample-chips .sample-receipt-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#scanner-sample-chips .sample-receipt-chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeSampleIdx = Number(chip.dataset.sampleIdx) || 0;
      scannerStatusPill.textContent = '🎯 QR Code e CNPJ detectados na mira';
      updateScanPreview();
    });
  });

  // Botão Flash
  document.getElementById('btn-scanner-flash').addEventListener('click', function () {
    viewfinderEl.classList.toggle('flash-on');
    this.classList.toggle('is-active');
  });

  // Botão Câmera Real (WebRTC)
  const videoEl = document.getElementById('scanner-video');
  document.getElementById('btn-scanner-camera').addEventListener('click', async function () {
    if (scannerStream) {
      scannerStream.getTracks().forEach(t => t.stop());
      scannerStream = null;
      viewfinderEl.classList.remove('camera-active');
      this.classList.remove('is-active');
      scannerStatusPill.textContent = '🎯 Modo Simulador NFC-e ativo';
      return;
    }
    try {
      scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      videoEl.srcObject = scannerStream;
      await videoEl.play();
      viewfinderEl.classList.add('camera-active');
      this.classList.add('is-active');
      scannerStatusPill.textContent = '📷 Câmera ativa · Aponte para a Nota Fiscal';
    } catch (err) {
      showToast('Câmera não disponível neste navegador; usando leitor visual de NFC-e.');
    }
  });

  // Executa a sequência de escaneamento a laser + OCR
  function executeReceiptScan() {
    if (isScanningNow) return;
    isScanningNow = true;
    const r = sampleReceipts[activeSampleIdx];
    const donation = (r.total * r.pct) / 100;

    viewfinderEl.classList.add('is-scanning');
    scannerStatusPill.textContent = '⚡ Lendo QR Code SEFAZ e Chave NFC-e...';

    setTimeout(() => {
      scannerStatusPill.textContent = `✓ CNPJ Verificado: ${r.company} (${formatBRL(r.total)})`;
    }, 650);

    setTimeout(() => {
      viewfinderEl.classList.remove('is-scanning');
      state.walletTotal += donation;
      state.walletWeek += donation;
      updateWalletUI();
      isScanningNow = false;
      closeSheet('sheet-scanner');
      showToast(`Nota escaneada! +${formatBRL(donation)} enviados para ${state.projects[state.activeProjectIndex]}.`);
      scannerStatusPill.textContent = '🎯 QR Code e CNPJ detectados na mira';
    }, 1450);
  }

  document.getElementById('btn-shutter-scan').addEventListener('click', executeReceiptScan);

  // Galeria / Upload de Foto da Nota
  const fileInput = document.getElementById('scanner-file-input');
  document.getElementById('btn-scanner-gallery').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    if (fileInput.files && fileInput.files.length) {
      executeReceiptScan();
      fileInput.value = '';
    }
  });

  // Digitar Outro Valor na Nota
  document.getElementById('btn-scanner-custom').addEventListener('click', () => {
    const r = sampleReceipts[activeSampleIdx];
    const inputVal = prompt(`Digite o valor da Nota Fiscal em ${r.company} (R$):`, String(r.total));
    if (inputVal !== null) {
      const parsed = parseFloat(inputVal.replace(',', '.'));
      if (!isNaN(parsed) && parsed > 0) {
        r.total = parsed;
        r.items = [['001 COMPRA COM PROPOSITO CRIS', parsed.toFixed(2).replace('.', ',')]];
        updateScanPreview();
        executeReceiptScan();
      }
    }
  });

  document.getElementById('fab-open-scanner').addEventListener('click', () => openSheet('sheet-scanner'));
  document.getElementById('home-scan-receipt-btn').addEventListener('click', () => openSheet('sheet-scanner'));
  document.getElementById('banner-scan-btn').addEventListener('click', () => openSheet('sheet-scanner'));

  // ==========================================
  // CARROSSEL FOTOGRÁFICO NA HOME (ESTILO REF 1 & IFOOD)
  // ==========================================
  function renderHomeFeaturedBusinesses() {
    const container = document.getElementById('home-featured-businesses');
    container.innerHTML = state.companies.map(c => `
      <article class="spot-photo-card" data-open-biz="${c.id}">
        <div class="spot-img-wrap">
          <img src="${c.photo}" alt="${c.name}" loading="lazy">
          <span class="spot-overlay-pill">${c.impactPct}% vira doação</span>
          <span class="spot-rating-pill">★ ${c.rating}</span>
        </div>
        <div class="spot-card-body">
          <h4>${c.name}</h4>
          <p>${c.location}</p>
          <div class="spot-card-foot">
            <span class="spot-tag-chip">${c.category}</span>
            <strong style="color:var(--emerald-bright);">Ver perfil →</strong>
          </div>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-open-biz]').forEach(card => {
      card.addEventListener('click', () => openBusinessProfile(card.dataset.openBiz));
    });
  }

  // ==========================================
  // ABA 2: MARKETPLACE & PERFIL EMPRESARIAL COMPLETO
  // ==========================================
  const marketSubBtns = document.querySelectorAll('[data-market-tab]');
  function switchMarketSub(sub) {
    marketSubBtns.forEach(b => b.classList.toggle('is-active', b.dataset.marketTab === sub));
    document.getElementById('market-sub-companies').style.display = sub === 'companies' ? 'block' : 'none';
    document.getElementById('market-sub-products').style.display = sub === 'products' ? 'block' : 'none';
    document.getElementById('market-sub-quotes').style.display = sub === 'quotes' ? 'block' : 'none';
  }

  marketSubBtns.forEach(btn => {
    btn.addEventListener('click', () => switchMarketSub(btn.dataset.marketTab));
  });

  let activeBizCategory = 'all';
  let bizSearchQuery = '';

  function renderCompanies() {
    const container = document.getElementById('biz-list-container');
    const filtered = state.companies.filter(c => {
      const matchCat = activeBizCategory === 'all' || c.category === activeBizCategory;
      const q = bizSearchQuery.toLowerCase();
      const matchSearch = !q ||
        c.name.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.products.some(p => p.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    if (!filtered.length) {
      container.innerHTML = `<div class="cris-card" style="text-align:center;color:var(--text-muted);">Nenhuma empresa encontrada.</div>`;
      return;
    }

    container.innerHTML = filtered.map(c => `
      <article class="biz-card">
        <div class="biz-card-banner">
          <img src="${c.photo}" alt="${c.name}" loading="lazy">
          <span class="spot-overlay-pill">♥ ${c.impactPct}% revertido em doação</span>
          <span class="spot-rating-pill">★ ${c.rating} · ${c.location}</span>
        </div>
        <div class="biz-card-content">
          <div class="biz-name-row">
            <h4>${c.name}</h4>
            <span class="verified-badge">✓ Verificada CRIS</span>
          </div>
          <p style="font-size:12.5px;color:var(--text-muted);line-height:1.45;margin:6px 0 12px;">${c.bio}</p>
          <div style="display:flex;gap:8px;">
            <button type="button" class="btn-primary" style="flex:1;" data-open-biz="${c.id}">Abrir Perfil Completo</button>
            <button type="button" class="btn-secondary" style="flex:1;" data-refer-biz="${c.name}">Conectar / Indicar</button>
          </div>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-open-biz]').forEach(btn => {
      btn.addEventListener('click', () => openBusinessProfile(btn.dataset.openBiz));
    });

    container.querySelectorAll('[data-refer-biz]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById('conn-partner').value = btn.dataset.referBiz;
        document.getElementById('conn-subject').value = 'Parceria / Indicação via Catálogo CRIS';
        openSheet('sheet-new-connection');
      });
    });
  }

  function openBusinessProfile(bizId) {
    const biz = state.companies.find(b => b.id === bizId);
    if (!biz) return;
    document.getElementById('sheet-biz-title').textContent = biz.name;
    document.getElementById('sheet-biz-body').innerHTML = `
      <div style="height:165px;border-radius:20px;overflow:hidden;position:relative;margin-bottom:14px;">
        <img src="${biz.photo}" alt="${biz.name}" style="width:100%;height:100%;object-fit:cover;">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(9,28,21,0.92));display:flex;flex-direction:column;justify-content:flex-end;padding:14px;color:#fff;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:10px;background:#2ca374;color:#fff;padding:3px 9px;border-radius:99px;font-weight:700;">✓ CNPJ & Reputação Verificados</span>
            <span style="font-size:12px;font-weight:700;color:#5fe3a8;">★ ${biz.rating}</span>
          </div>
          <div style="font-size:12px;color:#d0e6db;margin-top:6px;">📍 ${biz.address}</div>
        </div>
      </div>

      <p style="font-size:13px;line-height:1.55;margin:0 0 14px;">${biz.bio}</p>

      <div class="cris-card" style="padding:13px;margin-bottom:10px;">
        <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--emerald-bright);display:block;margin-bottom:6px;">Produtos & Serviços Oferecidos</strong>
        <ul style="margin:0;padding-left:16px;font-size:12.5px;line-height:1.65;">
          ${biz.products.concat(biz.services).map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="cris-card" style="padding:13px;margin-bottom:10px;">
        <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--emerald-bright);display:block;margin-bottom:4px;">Cursos & Mentorias na Academia CRIS</strong>
        <p style="margin:0;font-size:12.5px;">🎓 ${biz.courses.join(', ')}</p>
      </div>

      <div class="cris-card" style="padding:13px;margin-bottom:14px;">
        <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--emerald-bright);display:block;margin-bottom:4px;">Contato & Canais</strong>
        <p style="margin:0;font-size:12.5px;">💬 ${biz.contact} · <strong>${biz.impactPct}% de toda venda vira doação social</strong></p>
      </div>

      <div style="display:flex;gap:8px;">
        <button type="button" class="btn-primary btn-full" id="modal-biz-connect-btn">Registrar Conexão / Indicação</button>
        <button type="button" class="btn-secondary btn-full" id="modal-biz-scan-btn">Enviar Nota Fiscal</button>
      </div>
    `;

    document.getElementById('modal-biz-connect-btn').addEventListener('click', () => {
      closeSheet('sheet-business-profile');
      document.getElementById('conn-partner').value = biz.name;
      document.getElementById('conn-subject').value = `Negócio / Indicação com ${biz.name}`;
      openSheet('sheet-new-connection');
    });

    document.getElementById('modal-biz-scan-btn').addEventListener('click', () => {
      closeSheet('sheet-business-profile');
      openSheet('sheet-scanner');
    });

    openSheet('sheet-business-profile');
  }

  document.getElementById('biz-search-input').addEventListener('input', e => {
    bizSearchQuery = e.target.value;
    renderCompanies();
  });

  document.querySelectorAll('#biz-category-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#biz-category-chips .chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeBizCategory = chip.dataset.bizCat;
      renderCompanies();
    });
  });

  // Loja de Produtos In-App
  function renderProducts() {
    const container = document.getElementById('product-grid-container');
    container.innerHTML = state.products.map(p => `
      <article class="product-card">
        <div class="product-photo">
          <img src="${p.photo}" alt="${p.title}" loading="lazy">
          <span class="product-impact-tag">${p.impactPct}% vira doação</span>
        </div>
        <div class="product-body">
          <h4>${p.title}</h4>
          <div class="product-seller">${p.seller}</div>
          <div class="product-price-row">
            <span class="product-price">${formatBRL(p.price)}</span>
            <small style="font-size:10px;color:var(--emerald-bright);font-weight:700;">+${formatBRL((p.price * p.impactPct) / 100)}</small>
          </div>
          <button type="button" class="btn-primary btn-full" style="margin-top:8px;padding:8px 10px;font-size:11.5px;" data-add-cart="${p.id}">
            + Adicionar
          </button>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-add-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const prod = state.products.find(item => item.id === btn.dataset.addCart);
        if (prod) {
          state.cart.push({ ...prod });
          updateCartBadge();
          showToast(`"${prod.title}" adicionado à sacola!`);
        }
      });
    });
  }

  function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    badge.textContent = state.cart.length;
    badge.style.display = state.cart.length ? 'grid' : 'none';
  }

  function renderCartModal() {
    const container = document.getElementById('cart-items-container');
    if (!state.cart.length) {
      container.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:20px 0;">Sua sacola está vazia. Explore a Loja no App!</p>`;
      return;
    }

    const total = state.cart.reduce((acc, item) => acc + item.price, 0);
    const totalDonation = state.cart.reduce((acc, item) => acc + (item.price * item.impactPct) / 100, 0);

    container.innerHTML = `
      <div style="max-height:220px;overflow-y:auto;margin-bottom:12px;">
        ${state.cart.map((item, idx) => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border-color);font-size:13px;">
            <div>
              <strong>${item.title}</strong>
              <div style="font-size:11px;color:var(--text-muted);">${item.seller} · ${item.impactPct}% vira doação</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <strong>${formatBRL(item.price)}</strong>
              <button type="button" data-remove-cart="${idx}" style="border:0;background:var(--card-subtle);border-radius:8px;padding:4px 8px;font-size:11px;">✕</button>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="cris-card" style="background:var(--emerald-soft);border-color:transparent;padding:13px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
          <span>Total (mesmo preço da loja):</span>
          <strong>${formatBRL(total)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#14523a;">
          <span>Doação gerada para ${state.projects[state.activeProjectIndex]}:</span>
          <strong>+ ${formatBRL(totalDonation)}</strong>
        </div>
      </div>
      <button type="button" class="btn-primary btn-full" id="btn-checkout-complete">Concluir Pedido (Pix / Cartão)</button>
    `;

    container.querySelectorAll('[data-remove-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.cart.splice(Number(btn.dataset.removeCart), 1);
        updateCartBadge();
        renderCartModal();
      });
    });

    document.getElementById('btn-checkout-complete')?.addEventListener('click', () => {
      state.walletTotal += totalDonation;
      state.walletWeek += totalDonation;
      state.cart = [];
      updateCartBadge();
      updateWalletUI();
      closeSheet('sheet-cart');
      showToast(`Pedido confirmado! +${formatBRL(totalDonation)} gerados para o projeto social.`);
    });
  }

  document.getElementById('btn-open-cart').addEventListener('click', () => {
    renderCartModal();
    openSheet('sheet-cart');
  });
  document.getElementById('market-open-cart-inline').addEventListener('click', () => {
    renderCartModal();
    openSheet('sheet-cart');
  });

  // Pedido de Orçamento
  document.getElementById('quote-request-form').addEventListener('submit', e => {
    e.preventDefault();
    const cat = document.getElementById('quote-category').value;
    const title = document.getElementById('quote-title').value.trim();
    const budget = parseFloat(document.getElementById('quote-budget').value.replace(/[^\d,.-]/g, '')) || 1200;

    state.connections.unshift({
      id: 'c' + Date.now(),
      partner: `Rede ${cat}`,
      subject: `Orçamento: ${title}`,
      stage: 'referred',
      value: budget,
      impact: +(budget * 0.05).toFixed(2),
      date: 'Agora'
    });

    e.target.reset();
    renderConnections();
    switchMainTab('mural', 'connections');
    showToast('Orçamento enviado e registrado no Medidor de Conexões!');
  });

  // ==========================================
  // ABA 3: MURAL “PRECISO / OFEREÇO” & CONEXÕES
  // ==========================================
  const muralSubBtns = document.querySelectorAll('[data-mural-tab]');
  function switchMuralSub(sub) {
    muralSubBtns.forEach(b => b.classList.toggle('is-active', b.dataset.muralTab === sub));
    document.getElementById('mural-sub-board').style.display = sub === 'board' ? 'block' : 'none';
    document.getElementById('mural-sub-connections').style.display = sub === 'connections' ? 'block' : 'none';
  }

  muralSubBtns.forEach(btn => {
    btn.addEventListener('click', () => switchMuralSub(btn.dataset.muralTab));
  });

  let activeMuralFilter = 'all';

  function renderMural() {
    const container = document.getElementById('mural-feed-container');
    const list = state.muralPosts.filter(p => activeMuralFilter === 'all' || p.type === activeMuralFilter);

    container.innerHTML = list.map(post => `
      <article class="mural-card">
        <div class="mural-header">
          <span class="mural-badge ${post.type === 'need' ? 'type-need' : 'type-offer'}">
            ${post.type === 'need' ? 'PRECISO DE...' : 'POSSO OFERECER'}
          </span>
          <span style="font-size:11px;color:var(--text-muted);">${post.category}</span>
        </div>
        <h4 class="mural-title">${post.title}</h4>
        <p class="mural-desc">${post.desc}</p>
        <div class="mural-author">
          <div class="author-info">
            <span class="avatar-circle">${post.author.charAt(0)}</span>
            <div>
              <strong style="display:block;">${post.author}</strong>
              <span style="font-size:11px;color:var(--text-muted);">${post.company}</span>
            </div>
          </div>
          <span style="color:var(--emerald-bright);font-weight:700;font-size:11.5px;">🤝 ${post.referrals} conexões</span>
        </div>
        <div class="mural-actions">
          <button type="button" class="btn-primary" data-connect-mural="${post.id}">Conectar / Atender</button>
          <button type="button" class="btn-secondary" data-refer-mural="${post.id}">Indicar Membro</button>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-connect-mural]').forEach(btn => {
      btn.addEventListener('click', () => {
        const post = state.muralPosts.find(p => p.id === btn.dataset.connectMural);
        if (!post) return;
        post.referrals += 1;
        state.connections.unshift({
          id: 'c' + Date.now(),
          partner: `${post.author} (${post.company})`,
          subject: post.title,
          stage: 'meeting',
          value: 1400,
          impact: 70.00,
          date: 'Agora mesmo'
        });
        renderMural();
        renderConnections();
        showToast(`Conexão iniciada com ${post.author}!`);
      });
    });

    container.querySelectorAll('[data-refer-mural]').forEach(btn => {
      btn.addEventListener('click', () => {
        const post = state.muralPosts.find(p => p.id === btn.dataset.referMural);
        if (!post) return;
        document.getElementById('conn-partner').value = post.company;
        document.getElementById('conn-subject').value = `Indicação para: ${post.title}`;
        openSheet('sheet-new-connection');
      });
    });
  }

  document.querySelectorAll('#mural-filter-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#mural-filter-chips .chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeMuralFilter = chip.dataset.muralFilter;
      renderMural();
    });
  });

  document.getElementById('btn-open-new-mural').addEventListener('click', () => openSheet('sheet-new-mural'));

  document.getElementById('form-new-mural').addEventListener('submit', e => {
    e.preventDefault();
    const type = document.getElementById('mural-post-type').value;
    const category = document.getElementById('mural-post-cat').value;
    const title = document.getElementById('mural-post-title').value.trim();
    const desc = document.getElementById('mural-post-desc').value.trim();

    state.muralPosts.unshift({
      id: 'm' + Date.now(),
      type,
      category,
      title,
      desc,
      author: 'Mateus Correia (Você)',
      company: 'Membro Verificado CRIS',
      referrals: 1
    });

    e.target.reset();
    closeSheet('sheet-new-mural');
    renderMural();
    showToast('Publicado no Mural da Comunidade!');
  });

  // Medidor de Conexões (CRM)
  function renderConnections() {
    const container = document.getElementById('connections-list-container');
    const totalReferrals = state.connections.length + 4;
    const totalMeetings = state.connections.filter(c => c.stage === 'meeting' || c.stage === 'closed').length + 2;
    const closedSum = state.connections
      .filter(c => c.stage === 'closed')
      .reduce((acc, c) => acc + c.value, 4950);

    document.getElementById('metric-referrals-count').textContent = String(totalReferrals);
    document.getElementById('metric-meetings-count').textContent = String(totalMeetings);
    document.getElementById('metric-business-volume').textContent = `R$ ${(closedSum / 1000).toFixed(1).replace('.', ',')}k`;

    const stageLabels = {
      referred: { label: '1. Indicação enviada', badgeBg: 'var(--card-subtle)', nextBtn: 'Marcar Reunião Realizada →' },
      meeting: { label: '2. Reunião realizada', badgeBg: 'var(--gold-soft)', nextBtn: 'Confirmar Negócio Fechado 🎉' },
      closed: { label: '3. Negócio Fechado ✓', badgeBg: 'var(--emerald-soft)', nextBtn: null }
    };

    container.innerHTML = state.connections.map(conn => {
      const st = stageLabels[conn.stage];
      return `
        <article class="cris-card" style="margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px;">
            <div>
              <strong style="font-size:14.5px;display:block;">${conn.partner}</strong>
              <span style="font-size:12px;color:var(--text-muted);">${conn.subject}</span>
            </div>
            <span style="font-size:10px;font-weight:700;padding:4px 9px;border-radius:99px;background:${st.badgeBg};">${st.label}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:12px;padding-top:8px;border-top:1px solid var(--border-color);">
            <span>Negócio: <strong>${formatBRL(conn.value)}</strong> · Doação: <strong style="color:var(--emerald-bright);">+${formatBRL(conn.impact)}</strong></span>
            <small style="color:var(--text-muted);">${conn.date}</small>
          </div>
          ${st.nextBtn ? `
            <button type="button" class="btn-secondary btn-full" style="margin-top:10px;padding:8px;" data-advance-conn="${conn.id}">
              ${st.nextBtn}
            </button>
          ` : ''}
        </article>
      `;
    }).join('');

    container.querySelectorAll('[data-advance-conn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const conn = state.connections.find(c => c.id === btn.dataset.advanceConn);
        if (!conn) return;
        if (conn.stage === 'referred') {
          conn.stage = 'meeting';
          showToast(`Reunião registrada com ${conn.partner}!`);
        } else if (conn.stage === 'meeting') {
          conn.stage = 'closed';
          state.walletTotal += conn.impact;
          state.walletWeek += conn.impact;
          updateWalletUI();
          showToast(`Negócio fechado! +${formatBRL(conn.impact)} somados ao impacto social.`);
        }
        renderConnections();
      });
    });
  }

  document.getElementById('btn-open-new-connection').addEventListener('click', () => openSheet('sheet-new-connection'));

  document.getElementById('form-new-connection').addEventListener('submit', e => {
    e.preventDefault();
    const partner = document.getElementById('conn-partner').value.trim();
    const subject = document.getElementById('conn-subject').value.trim();
    const stage = document.getElementById('conn-stage').value;
    const value = parseFloat(document.getElementById('conn-value').value) || 600;
    const impact = +(value * 0.05).toFixed(2);

    state.connections.unshift({
      id: 'c' + Date.now(),
      partner,
      subject,
      stage,
      value,
      impact,
      date: 'Agora'
    });

    if (stage === 'closed') {
      state.walletTotal += impact;
      state.walletWeek += impact;
      updateWalletUI();
    }

    e.target.reset();
    closeSheet('sheet-new-connection');
    switchMainTab('mural', 'connections');
    renderConnections();
    showToast('Conexão registrada com sucesso!');
  });

  // ==========================================
  // ABA 4: BÍBLIA & REFLEXÃO PRÁTICA DIÁRIA
  // ==========================================
  const bibleSubBtns = document.querySelectorAll('[data-bible-tab]');
  function switchBibleSub(sub) {
    bibleSubBtns.forEach(b => b.classList.toggle('is-active', b.dataset.bibleTab === sub));
    document.getElementById('bible-sub-devotional').style.display = sub === 'devotional' ? 'block' : 'none';
    document.getElementById('bible-sub-reader').style.display = sub === 'bible-reader' ? 'block' : 'none';
  }

  bibleSubBtns.forEach(btn => {
    btn.addEventListener('click', () => switchBibleSub(btn.dataset.bibleTab));
  });

  const devotionalContexts = {
    work: {
      q: 'Pergunta: Qual entrega ou atendimento de hoje você pode fazer com um cuidado acima do esperado?',
      a: 'Ação prática: Escolha um cliente ou colega hoje, revise sua entrega com excelência e envie uma mensagem genuína de cuidado.'
    },
    leadership: {
      q: 'Pergunta: Como sua liderança hoje pode servir e dar clareza para quem trabalha com você?',
      a: 'Ação prática: Elogie publicamente um membro da sua equipe ou parceiro pela dedicação e integridade.'
    },
    family: {
      q: 'Pergunta: Como levar presença inteira e coração grato para dentro de casa após o expediente?',
      a: 'Ação prática: Desconecte-se do celular durante a refeição em família e ore agradecendo pelas provisões da semana.'
    }
  };

  document.querySelectorAll('.context-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.context-pill').forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const ctx = devotionalContexts[pill.dataset.context];
      if (ctx) {
        document.getElementById('devotional-context-question').textContent = ctx.q;
        document.getElementById('devotional-context-action').textContent = ctx.a;
      }
    });
  });

  document.getElementById('btn-save-devotional-action').addEventListener('click', () => {
    showToast('Compromisso prático do dia registrado!');
  });

  let currentBibleBook = 'proverbios16';
  const bibleSelect = document.getElementById('bible-book-select');

  function renderBibleChapter(bookKey) {
    currentBibleBook = bookKey;
    bibleSelect.value = bookKey;
    document.querySelectorAll('#bible-theme-chips .chip').forEach(c => {
      c.classList.toggle('is-active', c.dataset.bibleBook === bookKey);
    });

    const chapter = state.bibleChapters[bookKey];
    if (!chapter) return;
    document.getElementById('bible-chapter-heading').textContent = chapter.title;

    const versesContainer = document.getElementById('bible-verses-container');
    versesContainer.innerHTML = chapter.verses.map((v, idx) => `
      <div class="bible-verse ${v.highlighted ? 'is-highlighted' : ''}" data-verse-idx="${idx}">
        <sup>${v.n}</sup>${v.text}
      </div>
    `).join('');

    versesContainer.querySelectorAll('.bible-verse').forEach(el => {
      el.addEventListener('click', () => {
        const idx = Number(el.dataset.verseIdx);
        chapter.verses[idx].highlighted = !chapter.verses[idx].highlighted;
        renderBibleChapter(currentBibleBook);
        showToast(chapter.verses[idx].highlighted ? 'Versículo destacado!' : 'Destaque removido.');
      });
    });
  }

  bibleSelect.addEventListener('change', e => renderBibleChapter(e.target.value));
  document.querySelectorAll('#bible-theme-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => renderBibleChapter(chip.dataset.bibleBook));
  });

  // ==========================================
  // ABA 5: ACADEMIA CRIS (CURSOS) & COMUNIDADE / EVENTOS
  // ==========================================
  const academySubBtns = document.querySelectorAll('[data-academy-tab]');
  function switchAcademySub(sub) {
    academySubBtns.forEach(b => b.classList.toggle('is-active', b.dataset.academyTab === sub));
    document.getElementById('academy-sub-courses').style.display = sub === 'courses' ? 'block' : 'none';
    document.getElementById('academy-sub-community').style.display = sub === 'community' ? 'block' : 'none';
  }

  academySubBtns.forEach(btn => {
    btn.addEventListener('click', () => switchAcademySub(btn.dataset.academyTab));
  });

  function renderCourses() {
    const container = document.getElementById('courses-list-container');
    container.innerHTML = state.courses.map(course => `
      <article class="biz-card">
        <div class="biz-card-banner">
          <img src="${course.photo}" alt="${course.title}" loading="lazy">
          <span class="spot-overlay-pill">${course.tag}</span>
          <span class="spot-rating-pill">${course.duration}</span>
        </div>
        <div class="biz-card-content">
          <h4 style="font-size:15.5px;margin:0 0 4px;">${course.title}</h4>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">${course.instructor}</div>
          <div style="height:6px;background:var(--card-subtle);border-radius:99px;overflow:hidden;margin-bottom:6px;">
            <div style="height:100%;width:${course.progress}%;background:var(--emerald-bright);border-radius:99px;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-bottom:12px;">
            <span>Progresso: ${course.progress}%</span>
            <span>${course.progress === 100 ? '✓ Concluído' : 'Em andamento'}</span>
          </div>
          <button type="button" class="btn-primary btn-full" data-open-course="${course.id}">
            Assistir Aula & Ferramenta Prática
          </button>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-open-course]').forEach(btn => {
      btn.addEventListener('click', () => {
        const course = state.courses.find(c => c.id === btn.dataset.openCourse);
        if (!course) return;
        document.getElementById('sheet-course-title').textContent = course.title;
        document.getElementById('sheet-course-body').innerHTML = `
          <div style="height:150px;border-radius:18px;overflow:hidden;position:relative;margin-bottom:12px;">
            <img src="${course.photo}" alt="" style="width:100%;height:100%;object-fit:cover;">
            <div style="position:absolute;inset:0;background:rgba(9,28,21,0.65);display:grid;place-items:center;color:#fff;">
              <div style="width:52px;height:52px;border-radius:50%;background:#2ca374;display:grid;place-items:center;font-size:20px;">▶</div>
            </div>
          </div>
          <p style="font-size:13px;line-height:1.55;margin:0 0 12px;">${course.summary}</p>
          <div class="cris-card" style="background:var(--emerald-soft);border-color:transparent;padding:12px;margin-bottom:14px;">
            <strong style="font-size:11px;text-transform:uppercase;color:#14523a;display:block;margin-bottom:4px;">Aplicação Prática na Empresa</strong>
            <p style="margin:0;font-size:12.5px;color:#112a20;">${course.keyAction}</p>
          </div>
          <button type="button" class="btn-primary btn-full" id="btn-complete-lesson">Concluir Aula (+25%)</button>
        `;
        document.getElementById('btn-complete-lesson').addEventListener('click', () => {
          course.progress = Math.min(100, course.progress + 25);
          renderCourses();
          closeSheet('sheet-course');
          showToast(`Progresso atualizado em "${course.title}"!`);
        });
        openSheet('sheet-course');
      });
    });
  }

  function renderCommunity() {
    const eventsContainer = document.getElementById('events-list-container');
    eventsContainer.innerHTML = state.events.map(ev => `
      <article class="cris-card">
        <span class="mural-badge type-offer" style="display:inline-block;margin-bottom:6px;">PRESENCIAL & REDE</span>
        <h4 style="font-size:15px;margin:0 0 6px;">${ev.title}</h4>
        <div style="font-size:12px;color:var(--text-muted);">🗓 ${ev.date} · 📍 ${ev.place}</div>
        <div style="font-size:11.5px;color:var(--emerald-bright);font-weight:700;margin:6px 0 12px;">${ev.spots}</div>
        <button type="button" class="${ev.confirmed ? 'btn-secondary' : 'btn-primary'} btn-full" data-toggle-event="${ev.id}">
          ${ev.confirmed ? '✓ Presença Confirmada' : 'Confirmar Minha Presença'}
        </button>
      </article>
    `).join('');

    eventsContainer.querySelectorAll('[data-toggle-event]').forEach(btn => {
      btn.addEventListener('click', () => {
        const ev = state.events.find(item => item.id === btn.dataset.toggleEvent);
        if (!ev) return;
        ev.confirmed = !ev.confirmed;
        renderCommunity();
        showToast(ev.confirmed ? 'Presença confirmada no evento!' : 'Inscrição cancelada.');
      });
    });

    const groupsContainer = document.getElementById('groups-list-container');
    groupsContainer.innerHTML = state.groups.map(g => `
      <article class="cris-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <strong style="font-size:14px;">${g.name}</strong>
          <span style="font-size:11px;color:var(--emerald-bright);font-weight:700;">${g.members} membros</span>
        </div>
        <p style="font-size:12px;color:var(--text-muted);margin:0 0 10px;background:var(--sheet-bg);padding:9px 11px;border-radius:12px;">
          💬 “${g.lastMsg}”
        </p>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Escrever no grupo..." data-group-input="${g.id}" style="flex:1;padding:9px 12px;border-radius:12px;border:1px solid var(--border-color);font-size:12.5px;background:var(--sheet-bg);">
          <button type="button" class="btn-primary" style="padding:9px 15px;" data-group-send="${g.id}">Enviar</button>
        </div>
      </article>
    `).join('');

    groupsContainer.querySelectorAll('[data-group-send]').forEach(btn => {
      btn.addEventListener('click', () => {
        const gId = btn.dataset.groupSend;
        const input = groupsContainer.querySelector(`[data-group-input="${gId}"]`);
        const text = input?.value.trim();
        if (!text) return;
        const group = state.groups.find(item => item.id === gId);
        if (group) {
          group.lastMsg = `Você: ${text}`;
          renderCommunity();
          showToast('Mensagem enviada ao grupo!');
        }
      });
    });
  }

  // Inicialização
  updateWalletUI();
  updateScanPreview();
  updateCartBadge();
  renderHomeFeaturedBusinesses();
  renderCompanies();
  renderProducts();
  renderMural();
  renderConnections();
  renderBibleChapter('proverbios16');
  renderCourses();
  renderCommunity();
})();

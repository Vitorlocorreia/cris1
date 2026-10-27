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
        whatsapp: '5581991234501',
        address: 'Rua dos Navegantes, 410 — Boa Viagem, Recife',
        founderName: 'Marcos & Débora Silveira · Fundadores',
        founderPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        founderChurch: 'Igreja Batista Esperança · Recife/PE',
        founderBio: 'Cristãos há 18 anos e apaixonados por comunhão à mesa. Abrimos a Grão & Graça para que cada pão sustente famílias e financie o ensino bíblico e alimentar de crianças.',
        founderVerse: '“O pão nosso de cada dia dá-nos hoje.” (Mateus 6:11)'
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
        whatsapp: '5581998123302',
        address: 'Av. 17 de Agosto, 1120 — Casa Forte, Recife',
        founderName: 'Rafael Vasconcelos · Diretor Criativo',
        founderPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
        founderChurch: 'Igreja Presbiteriana de Casa Forte',
        founderBio: 'Cristão há 14 anos, casado com a Mariana e pai do Theo. Criei o Estúdio Raízes para servir negócios cristãos com excelência estética, verdade e mordomia.',
        founderVerse: '“Tudo o que fizerem, façam de todo o coração, como para o Senhor.” (Colossenses 3:23)'
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
        whatsapp: '5581994401190',
        address: 'Rua das Creoulas, 285 — Graças, Recife',
        founderName: 'Dra. Helena & Dr. Lucas Moura · Médicos',
        founderPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        founderChurch: 'Primeira Igreja Batista do Recife',
        founderBio: 'Entendemos a medicina e a psicologia como ministério de acolhimento e cura. Cuidamos do corpo, da mente e da família à luz da graça de Cristo.',
        founderVerse: '“Amado, desejo que te vá bem em todas as coisas e que tenhas saúde.” (3 João 1:2)'
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
        whatsapp: '5581996547780',
        address: 'Empresarial Thomas Edison, Sala 604 — Recife',
        founderName: 'Daniela Lira · Contadora & Consultora',
        founderPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
        founderChurch: 'Igreja Verbo da Vida · Zona Sul',
        founderBio: 'Acredito que integridade fiscal e organização financeira são testemunho cristão. Ajudamos empresários a crescerem com paz no coração e contas transparentes.',
        founderVerse: '“Pesos e balanças honestos vêm do Senhor.” (Provérbios 16:11)'
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
        whatsapp: '5581992018840',
        address: 'Rua da Hora, 520 — Espinheiro, Recife',
        founderName: 'Gabriel Monteiro · Mestre de Torra',
        founderPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
        founderChurch: 'Comunidade da Graça · Espinheiro',
        founderBio: 'Criamos o Café Aliança para valorizar pequenos produtores cristãos do agreste e oferecer um ambiente onde irmãos possam fechar parcerias edificantes.',
        founderVerse: '“Oh! Quão bom e quão suave é que os irmãos vivam em união.” (Salmos 133:1)'
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
        whatsapp: '5581997712026',
        address: 'Rua do Apolo, 181 — Bairro do Recife',
        founderName: 'Tiago Cavalcanti · Engenheiro de Software',
        founderPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
        founderChurch: 'Igreja Batista Cidade Universitária',
        founderBio: 'Tecnologia é ferramenta para multiplicar talentos. Desenvolvemos soluções que liberam tempo do empreendedor cristão para sua família e seu chamado.',
        founderVerse: '“Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.” (Pv 16:3)'
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
    if (typeof setAppMode === 'function') {
      setAppMode('member');
    } else {
      switchMainTab('home');
    }
    showToast('De volta ao início do Super App!');
  }

  document.getElementById('btn-reset-home')?.addEventListener('click', resetToHome);
  document.getElementById('btn-restore-home')?.addEventListener('click', resetToHome);

  function exitSpecialModes() {
    workspaceEl.classList.remove('is-frameless', 'is-phone-focused');
    if (restoreBarEl) restoreBarEl.style.display = 'none';
    if (location.search.includes('frameless=1')) {
      history.replaceState(null, '', location.pathname);
    }
  }

  document.getElementById('btn-restore-guide')?.addEventListener('click', exitSpecialModes);
  document.getElementById('btn-sidebar-back-phone')?.addEventListener('click', exitSpecialModes);

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

    container.innerHTML = filtered.map(c => {
      const cleanPhone = (c.whatsapp || c.contact || '').replace(/\D/g, '') || '5581991234501';
      const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Olá! Vi a empresa ${c.name} no Super App CRIS e gostaria de atendimento.`)}`;
      return `
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
            <p style="font-size:12.5px;color:var(--text-muted);line-height:1.45;margin:6px 0 8px;">${c.bio}</p>
            ${c.founderName ? `
              <div style="display:flex;align-items:center;gap:8px;background:var(--sheet-bg);padding:7px 10px;border-radius:12px;margin-bottom:10px;border:1px solid var(--border-color);">
                <img src="${c.founderPhoto}" alt="${c.founderName}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:1.5px solid var(--gold-warm);flex-shrink:0;">
                <div style="min-width:0;font-size:11px;line-height:1.3;">
                  <strong style="display:block;color:var(--text-main);">✝ ${c.founderName}</strong>
                  <span style="color:var(--text-muted);">${c.founderChurch || 'Empreendedor Cristão da Rede'}</span>
                </div>
              </div>
            ` : ''}
            <div style="display:flex;gap:8px;">
              <button type="button" class="btn-primary" style="flex:1.15;" data-open-biz="${c.id}">Ver Perfil & Bio</button>
              <a href="${waLink}" target="_blank" rel="noopener" class="btn-whatsapp-direct" style="flex:1;padding:10px 12px;font-size:12px;" data-wa-company="${c.name}">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('[data-open-biz]').forEach(btn => {
      btn.addEventListener('click', () => openBusinessProfile(btn.dataset.openBiz));
    });

    container.querySelectorAll('[data-wa-company]').forEach(link => {
      link.addEventListener('click', () => {
        showToast(`Abrindo canal de atendimento direto de ${link.dataset.waCompany}...`);
      });
    });
  }

  function openBusinessProfile(bizId) {
    const biz = state.companies.find(b => b.id === bizId);
    if (!biz) return;
    const cleanPhone = (biz.whatsapp || biz.contact || '').replace(/\D/g, '') || '5581991234501';
    const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Olá! Conheci a ${biz.name} no Super App CRIS e gostaria de conversar.`)}`;

    document.getElementById('sheet-biz-title').textContent = biz.name;
    document.getElementById('sheet-biz-body').innerHTML = `
      <div style="height:160px;border-radius:20px;overflow:hidden;position:relative;margin-bottom:12px;">
        <img src="${biz.photo}" alt="${biz.name}" style="width:100%;height:100%;object-fit:cover;">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(9,28,21,0.92));display:flex;flex-direction:column;justify-content:flex-end;padding:14px;color:#fff;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:10px;background:#2ca374;color:#fff;padding:3px 9px;border-radius:99px;font-weight:700;">✓ CNPJ & Reputação Verificados</span>
            <span style="font-size:12px;font-weight:700;color:#5fe3a8;">★ ${biz.rating}</span>
          </div>
          <div style="font-size:12px;color:#d0e6db;margin-top:6px;">📍 ${biz.address}</div>
        </div>
      </div>

      <p style="font-size:13px;line-height:1.52;margin:0 0 12px;">${biz.bio}</p>

      <!-- BIO DO FUNDADOR CRISTÃO (O Rosto Cristão por Trás da Marca) -->
      <div class="founder-bio-card">
        <div class="founder-header-row">
          <img class="founder-avatar-img" src="${biz.founderPhoto || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'}" alt="${biz.founderName || 'Fundador'}">
          <div>
            <span class="founder-eyebrow">✝ O Rosto Cristão por Trás da Marca</span>
            <strong style="font-size:14px;display:block;margin-top:1px;">${biz.founderName || 'Empreendedor Cristão'}</strong>
            <span class="founder-church-pill">⛪ ${biz.founderChurch || 'Comunidade Local Verificada'}</span>
          </div>
        </div>
        <p class="founder-quote-text">“${biz.founderBio || 'Empreendemos para glorificar a Deus, servir famílias com excelência e abençoar projetos sociais.'}”</p>
        ${biz.founderVerse ? `<small style="display:block;margin-top:6px;font-size:11px;font-weight:700;color:#a47030;">📖 ${biz.founderVerse}</small>` : ''}
      </div>

      <!-- Botão Principal: Chamar Direto no WhatsApp / Canal da Empresa -->
      <div style="margin-bottom:12px;">
        <a href="${waLink}" target="_blank" rel="noopener" class="btn-whatsapp-direct" id="modal-biz-wa-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span>Chamar no WhatsApp / Atendimento (${biz.contact.split('·')[0].trim()})</span>
        </a>
      </div>

      <div class="cris-card" style="padding:12px;margin-bottom:10px;">
        <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--emerald-bright);display:block;margin-bottom:5px;">Produtos & Serviços Oferecidos</strong>
        <ul style="margin:0;padding-left:16px;font-size:12.5px;line-height:1.6;">
          ${biz.products.concat(biz.services).map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="cris-card" style="padding:12px;margin-bottom:12px;">
        <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--emerald-bright);display:block;margin-bottom:4px;">Impacto Social & Cursos</strong>
        <p style="margin:0;font-size:12.5px;">♥ <strong>${biz.impactPct}% de toda venda vira doação</strong> · 🎓 ${biz.courses.join(', ')}</p>
      </div>

      <div style="display:flex;gap:8px;">
        <button type="button" class="btn-primary btn-full" id="modal-biz-connect-btn">Registrar Indicação / Negócio</button>
        <button type="button" class="btn-secondary btn-full" id="modal-biz-scan-btn">Escanear Nota</button>
      </div>
    `;

    document.getElementById('modal-biz-wa-btn')?.addEventListener('click', () => {
      showToast(`Iniciando conversa direta com ${biz.name} no WhatsApp!`);
    });

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
      const itemsText = state.cart.map(i => i.title).join(' + ');
      if (state.bizStoreOrders) {
        state.bizStoreOrders.unshift({
          id: 'bo' + Date.now(),
          client: 'Mateus Andrade (Pedido via App)',
          items: itemsText,
          total,
          type: 'Pedido Loja In-App',
          slot: 'Aguardando confirmação · Hoje',
          status: 'pending'
        });
      }
      state.walletTotal += totalDonation;
      state.walletWeek += totalDonation;
      state.cart = [];
      updateCartBadge();
      updateWalletUI();
      if (typeof renderAllBizViews === 'function') renderAllBizViews();
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

    if (state.bizQuotes) {
      state.bizQuotes.unshift({
        id: 'bq' + Date.now(),
        client: 'Mateus Andrade (Membro CRIS)',
        category: cat,
        title,
        budget,
        urgency: 'Enviado agora pelo App',
        status: 'new',
        proposalNote: '',
        time: 'Agora'
      });
    }

    e.target.reset();
    renderConnections();
    if (typeof renderAllBizViews === 'function') renderAllBizViews();
    switchMainTab('mural', 'connections');
    showToast('Orçamento enviado! (Você também pode vê-lo no Modo Empresário!)');
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

  // ==========================================
  // MODO EMPRESÁRIO & PRESTADOR DE SERVIÇOS (CRIS BUSINESS PJ) + CENTRAL DE PERFIL
  // ==========================================
  state.appMode = 'member'; // 'member' | 'business'
  state.activeBizAccount = 'provider'; // 'provider' (Estúdio Raízes) | 'merchant' (Padaria Grão & Graça)
  state.bizHiddenRevenue = false;

  state.memberProfile = {
    name: 'Mateus Andrade',
    bio: 'Arquiteto & Empreendedor Cristão · Recife/PE',
    location: 'Boa Viagem, Recife',
    phone: '(81) 99812-4490',
    church: 'Igreja Batista Esperança · Recife/PE',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  };

  state.bizAccounts = {
    provider: {
      marketplaceId: 'b2',
      name: 'Estúdio Raízes · Design & Consultoria',
      avatar: 'ER',
      logoPhoto: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=300&q=80',
      coverPhoto: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
      typeTag: 'Prestação de Serviços & B2B',
      cnpj: '34.891.220/0001-19',
      bio: 'Branding, design de embalagens, arquitetura comercial e posicionamento digital para empresas com propósito.',
      address: 'Boa Viagem, Recife (Atende Online)',
      contact: '(81) 99812-3302 · @estudioraizes',
      founderName: 'Rafael Vasconcelos · Diretor Criativo',
      founderChurch: 'Igreja Presbiteriana de Casa Forte',
      founderBio: 'Cristão há 14 anos, casado com a Mariana e pai do Theo. Criei o Estúdio Raízes para servir negócios cristãos com excelência estética, verdade e mordomia.',
      revenue: 18420.00,
      impactRate: 8,
      views: 418,
      salesCount: 47,
      perk: 'Diagnóstico de marca gratuito + 10% OFF no primeiro projeto B2B'
    },
    merchant: {
      marketplaceId: 'b1',
      name: 'Padaria Grão & Graça · Gastronomia',
      avatar: 'GG',
      logoPhoto: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80',
      coverPhoto: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
      typeTag: 'Comércio, Produtos & Eventos',
      cnpj: '28.419.502/0001-84',
      bio: 'Padaria artesanal de fermentação natural, cafés especiais e cestas corporativas que abençoam famílias.',
      address: 'Rua dos Navegantes, 1420 · Boa Viagem, Recife',
      contact: '(81) 99123-4501 · @graoegraca.pe',
      founderName: 'Marcos & Débora Silveira · Fundadores',
      founderChurch: 'Igreja Batista Esperança · Recife/PE',
      founderBio: 'Cristãos há 18 anos e apaixonados por comunhão à mesa. Abrimos a Grão & Graça para que cada pão sustente famílias e financie o ensino bíblico de crianças.',
      revenue: 34890.00,
      impactRate: 6,
      views: 890,
      salesCount: 164,
      perk: 'Café expresso cortesia em compras acima de R$ 60 para membros CRIS'
    }
  };

  state.bizQuotes = [
    {
      id: 'bq1',
      client: 'Clínica Vida Plena (Dr. Lucas)',
      category: 'Design, Marca & Identidade',
      title: 'Redesign da fachada + papelaria médica e sinalização interna',
      budget: 2400,
      urgency: 'Para iniciar esta semana',
      status: 'new', // 'new' | 'proposed' | 'in_progress' | 'completed'
      proposalNote: '',
      time: 'Há 18 min'
    },
    {
      id: 'bq2',
      client: 'Padaria Grão & Graça (Marcos)',
      category: 'Embalagens & Ponto de Venda',
      title: 'Linha de embalagens presenteáveis para cestas corporativas',
      budget: 1650,
      urgency: 'Entrega em 15 dias',
      status: 'proposed',
      proposalNote: 'Proposta enviada com 3 opções de faca gráfica + acompanhamento em gráfica.',
      time: 'Há 2 horas'
    },
    {
      id: 'bq3',
      client: 'Livraria Sêmen & Palavra',
      category: 'Consultoria Digital & Tráfego',
      title: 'Landing page para lançamento de clube de leitura cristão',
      budget: 1900,
      urgency: 'Mês atual',
      status: 'in_progress',
      proposalNote: 'Aprovado! Cronograma em execução (Etapa 2/3).',
      time: 'Ontem'
    },
    {
      id: 'bq4',
      client: 'Construtora Rocha Firme',
      category: 'Apresentação Comercial B2B',
      title: 'Book institucional para captação de investidores',
      budget: 1450,
      urgency: 'Concluído',
      status: 'completed',
      proposalNote: 'Entregue e nota fiscal validada com repasse social.',
      time: '3 dias atrás'
    }
  ];

  state.bizStoreOrders = [
    {
      id: 'bo1',
      client: 'Mateus Andrade (Membro Ouro)',
      items: 'Mentoria Diagnóstico de Posicionamento (2h Online)',
      total: 380.00,
      type: 'Agendamento de Serviço',
      slot: 'Quinta, 15h00 · Google Meet',
      status: 'pending' // 'pending' | 'preparing' | 'done'
    },
    {
      id: 'bo2',
      client: 'Ana Clara Ribeiro',
      items: 'Cesta Café da Manhã Reino + Pão Levain',
      total: 121.00,
      type: 'Pedido Loja In-App',
      slot: 'Entrega Boa Viagem · Hoje até 17h',
      status: 'preparing'
    },
    {
      id: 'bo3',
      client: 'Pr. Eduardo & Igreja Esperança',
      items: 'Coffee Break Executivo para 30 Lideranças',
      total: 890.00,
      type: 'Encomenda Corporativa',
      slot: 'Sábado, 08h30',
      status: 'done'
    }
  ];

  state.bizCatalogItems = [
    {
      id: 'cat1',
      kind: 'service',
      title: 'Identidade Visual Completa & Manual de Marca',
      price: 2200,
      benefit: 'Diagnóstico gratuito + parcelamento em 4x sem juros para membros',
      active: true,
      featured: true
    },
    {
      id: 'cat2',
      kind: 'service',
      title: 'Consultoria Express de Posicionamento Digital (Sessão 2h)',
      price: 380,
      benefit: 'Inclui plano prático de 30 dias + análise de perfil',
      active: true,
      featured: true
    },
    {
      id: 'cat3',
      kind: 'service',
      title: 'Design de Embalagens & Rótulos para Produtos Locais',
      price: 1150,
      benefit: 'Indicação direta de gráficas parceiras da rede CRIS',
      active: true,
      featured: false
    },
    {
      id: 'cat4',
      kind: 'product',
      title: 'Cesta Café da Manhã Reino (Artesanal)',
      price: 89,
      benefit: 'Frete grátis em Boa Viagem para membros CRIS',
      active: true,
      featured: true
    }
  ];

  state.bizSalesHistory = [
    {
      id: 'sh1',
      client: 'Construtora Rocha Firme',
      desc: 'Book Institucional B2B (Nota NFC-e / NFS-e)',
      amount: 1450.00,
      donation: 116.00,
      date: 'Hoje, 10:15'
    },
    {
      id: 'sh2',
      client: 'Mateus Andrade',
      desc: 'Identidade Visual Embalagens (Sinal 50%)',
      amount: 950.00,
      donation: 76.00,
      date: 'Ontem, 16:40'
    },
    {
      id: 'sh3',
      client: 'Café Aliança Torrefação',
      desc: 'Consultoria de Rótulos & Ponto de Venda',
      amount: 680.00,
      donation: 54.40,
      date: '24 Out'
    }
  ];

  function getActiveBiz() {
    return state.bizAccounts[state.activeBizAccount];
  }

  function switchBizTab(bizTabName) {
    document.querySelectorAll('#nav-biz-dock .nav-tab').forEach(t => {
      t.classList.toggle('is-active', t.dataset.bizTab === bizTabName);
    });
    views.forEach(v => v.classList.toggle('is-active', v.id === `view-${bizTabName}`));
    appMain.scrollTop = 0;
  }

  function setAppMode(mode) {
    state.appMode = mode;
    document.querySelectorAll('[data-set-mode]').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.setMode === mode);
    });

    const memberDock = document.getElementById('nav-member-dock');
    const bizDock = document.getElementById('nav-biz-dock');
    const sidebarSubtitle = document.getElementById('sidebar-mode-subtitle');
    const sidebarToggleBtn = document.getElementById('sidebar-mode-toggle-btn');
    const sidebarToggleLabel = document.getElementById('sidebar-mode-toggle-label');

    if (mode === 'business') {
      memberDock.style.display = 'none';
      bizDock.style.display = '';
      if (sidebarSubtitle) sidebarSubtitle.textContent = 'MODO EMPRESÁRIO & PRESTADOR (PJ)';
      if (sidebarToggleLabel) sidebarToggleLabel.textContent = 'Membro';
      sidebarToggleBtn?.classList.add('is-pj-active');
      renderAllBizViews();
      switchBizTab('biz-home');
      showToast('💼 Área do Empresário & Prestador ativada!');
    } else {
      bizDock.style.display = 'none';
      memberDock.style.display = '';
      if (sidebarSubtitle) sidebarSubtitle.textContent = 'SUPER APP · ECONOMIA DO REINO';
      if (sidebarToggleLabel) sidebarToggleLabel.textContent = 'Modo PJ';
      sidebarToggleBtn?.classList.remove('is-pj-active');
      switchMainTab('home');
      showToast('👤 Modo Membro (Consumidor) ativado!');
    }
    syncProfileHubUI();
  }

  // ==========================================
  // CENTRAL DE PERFIL & CONTAS (#sheet-profile-hub)
  // ==========================================
  function switchProfileHubTab(tabName) {
    document.querySelectorAll('[data-profile-tab]').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.profileTab === tabName);
    });
    document.getElementById('profile-tab-personal').style.display = tabName === 'personal' ? 'block' : 'none';
    document.getElementById('profile-tab-company').style.display = tabName === 'company' ? 'block' : 'none';
  }

  document.querySelectorAll('[data-profile-tab]').forEach(btn => {
    btn.addEventListener('click', () => switchProfileHubTab(btn.dataset.profileTab));
  });

  function syncProfileHubUI() {
    const mp = state.memberProfile;
    const biz = getActiveBiz();
    const firstName = mp.name.split(' ')[0] || 'Mateus';

    // Topo Home Membro
    const heroAvatar = document.getElementById('hero-member-avatar');
    if (heroAvatar) heroAvatar.src = mp.photo;
    const heroLoc = document.getElementById('hero-member-location');
    if (heroLoc) heroLoc.textContent = `📍 ${mp.location} ▾`;
    const heroGreet = document.getElementById('hero-member-greeting');
    if (heroGreet) heroGreet.innerHTML = `Olá, ${firstName} <span class="profile-chevron">›</span>`;

    // Topo Home Empresa PJ
    const bizAvatarImg = document.getElementById('biz-active-avatar');
    if (bizAvatarImg && bizAvatarImg.tagName === 'IMG') {
      bizAvatarImg.src = biz.logoPhoto;
    }
    const bizHeaderName = document.getElementById('biz-header-company-name');
    if (bizHeaderName) {
      bizHeaderName.innerHTML = `${biz.name.split('·')[0].trim()} <span class="profile-chevron">›</span>`;
    }

    // Cards de Troca de Conta no Hub
    const cardMember = document.getElementById('acc-card-member');
    const cardBiz = document.getElementById('acc-card-business');
    const checkMember = document.getElementById('acc-check-member');
    const checkBiz = document.getElementById('acc-check-business');

    if (cardMember && cardBiz) {
      const isBiz = state.appMode === 'business';
      cardMember.classList.toggle('is-active', !isBiz);
      cardBiz.classList.toggle('is-active', isBiz);
      checkMember.textContent = !isBiz ? '✓ Em uso' : 'Usar conta →';
      checkBiz.textContent = isBiz ? '✓ Em uso' : 'Acessar PJ →';
    }

    const hubMemberImg = document.getElementById('hub-switch-member-img');
    if (hubMemberImg) hubMemberImg.src = mp.photo;
    const hubMemberName = document.getElementById('hub-switch-member-name');
    if (hubMemberName) hubMemberName.textContent = mp.name;

    const hubBizImg = document.getElementById('hub-switch-biz-img');
    if (hubBizImg) hubBizImg.src = biz.logoPhoto;
    const hubBizName = document.getElementById('hub-switch-biz-name');
    if (hubBizName) hubBizName.textContent = biz.name;
    const hubBizSub = document.getElementById('hub-switch-biz-sub');
    if (hubBizSub) hubBizSub.textContent = `${biz.typeTag} · ♥ ${biz.impactRate}% Repasse`;

    // Aba Perfil Pessoal
    const pImg = document.getElementById('personal-profile-preview-img');
    if (pImg) pImg.src = mp.photo;
    const pName = document.getElementById('personal-showcase-name');
    if (pName) pName.textContent = mp.name;
    const pBio = document.getElementById('personal-showcase-bio');
    if (pBio) pBio.textContent = mp.bio;

    const fName = document.getElementById('prof-member-name');
    if (fName) fName.value = mp.name;
    const fBio = document.getElementById('prof-member-bio');
    if (fBio) fBio.value = mp.bio;
    const fLoc = document.getElementById('prof-member-location');
    if (fLoc) fLoc.value = mp.location;
    const fPhone = document.getElementById('prof-member-phone');
    if (fPhone) fPhone.value = mp.phone;
    const fChurch = document.getElementById('prof-member-church');
    if (fChurch) fChurch.value = mp.church;

    // Aba Perfil Empresa / PJ
    const hubSelect = document.getElementById('hub-biz-account-select');
    if (hubSelect) hubSelect.value = state.activeBizAccount;
    const bCover = document.getElementById('biz-profile-cover-img');
    if (bCover) bCover.src = biz.coverPhoto;
    const bLogo = document.getElementById('biz-profile-logo-img');
    if (bLogo) bLogo.src = biz.logoPhoto;

    const bfName = document.getElementById('prof-biz-name');
    if (bfName) bfName.value = biz.name;
    const bfMod = document.getElementById('prof-biz-modality');
    if (bfMod) bfMod.value = biz.typeTag;
    const bfCnpj = document.getElementById('prof-biz-cnpj');
    if (bfCnpj) bfCnpj.value = biz.cnpj;
    const bfBio = document.getElementById('prof-biz-bio');
    if (bfBio) bfBio.value = biz.bio;
    const bfAddr = document.getElementById('prof-biz-address');
    if (bfAddr) bfAddr.value = biz.address;
    const bfCont = document.getElementById('prof-biz-contact');
    if (bfCont) bfCont.value = biz.contact;
    const bfFounderName = document.getElementById('prof-biz-founder-name');
    if (bfFounderName) bfFounderName.value = biz.founderName || '';
    const bfFounderChurch = document.getElementById('prof-biz-founder-church');
    if (bfFounderChurch) bfFounderChurch.value = biz.founderChurch || '';
    const bfFounderBio = document.getElementById('prof-biz-founder-bio');
    if (bfFounderBio) bfFounderBio.value = biz.founderBio || '';
    const bfPerk = document.getElementById('prof-biz-perk');
    if (bfPerk) bfPerk.value = biz.perk;
  }

  function openProfileHub(initialTab) {
    syncProfileHubUI();
    switchProfileHubTab(initialTab || (state.appMode === 'business' ? 'company' : 'personal'));
    openSheet('sheet-profile-hub');
  }

  // Clicar na foto do Membro abre o Hub na aba Pessoal; clicar na foto da Empresa abre na aba Empresa/PJ
  document.getElementById('btn-open-member-profile')?.addEventListener('click', () => openProfileHub('personal'));
  document.getElementById('btn-open-biz-profile')?.addEventListener('click', () => openProfileHub('company'));
  document.getElementById('sidebar-mode-toggle-btn')?.addEventListener('click', () => {
    openProfileHub(state.appMode === 'business' ? 'company' : 'personal');
  });

  // Trocar Conta nos Cards do Topo do Hub
  document.querySelectorAll('[data-switch-account]').forEach(card => {
    card.addEventListener('click', () => {
      const targetMode = card.dataset.switchAccount;
      setAppMode(targetMode);
      switchProfileHubTab(targetMode === 'business' ? 'company' : 'personal');
    });
  });

  // Upload e troca de Foto Pessoal
  const memberAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  ];

  ['btn-upload-member-photo', 'btn-trigger-member-file'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      document.getElementById('input-member-photo-file')?.click();
    });
  });

  document.getElementById('input-member-photo-file')?.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      state.memberProfile.photo = ev.target.result;
      syncProfileHubUI();
      showToast('Foto do seu perfil pessoal atualizada!');
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('btn-cycle-member-avatar')?.addEventListener('click', () => {
    const cur = memberAvatars.indexOf(state.memberProfile.photo);
    state.memberProfile.photo = memberAvatars[(cur + 1) % memberAvatars.length];
    syncProfileHubUI();
    showToast('Avatar do perfil atualizado!');
  });

  document.getElementById('form-personal-profile')?.addEventListener('submit', e => {
    e.preventDefault();
    state.memberProfile.name = document.getElementById('prof-member-name').value.trim();
    state.memberProfile.bio = document.getElementById('prof-member-bio').value.trim();
    state.memberProfile.location = document.getElementById('prof-member-location').value.trim();
    state.memberProfile.phone = document.getElementById('prof-member-phone').value.trim();
    state.memberProfile.church = document.getElementById('prof-member-church').value.trim();
    syncProfileHubUI();
    closeSheet('sheet-profile-hub');
    showToast('Dados do seu Perfil Pessoal salvos com sucesso!');
  });

  // Edição e Troca de Imagens do Perfil Empresa / Prestador (PJ)
  document.getElementById('hub-biz-account-select')?.addEventListener('change', e => {
    state.activeBizAccount = e.target.value;
    syncProfileHubUI();
    renderAllBizViews();
    showToast(`Editando perfil de: ${getActiveBiz().name}`);
  });

  document.getElementById('btn-upload-biz-logo')?.addEventListener('click', () => {
    document.getElementById('input-biz-logo-file')?.click();
  });

  document.getElementById('btn-upload-biz-cover')?.addEventListener('click', () => {
    document.getElementById('input-biz-cover-file')?.click();
  });

  function syncBizWithPublicMarketplace(biz) {
    const mktComp = state.companies.find(c => c.id === biz.marketplaceId);
    if (mktComp) {
      mktComp.name = biz.name.split('·')[0].trim();
      mktComp.bio = biz.bio;
      mktComp.address = biz.address;
      mktComp.contact = biz.contact;
      mktComp.whatsapp = (biz.contact || '').replace(/\D/g, '') || mktComp.whatsapp;
      mktComp.founderName = biz.founderName || mktComp.founderName;
      mktComp.founderChurch = biz.founderChurch || mktComp.founderChurch;
      mktComp.founderBio = biz.founderBio || mktComp.founderBio;
      mktComp.photo = biz.coverPhoto;
      mktComp.impactPct = biz.impactRate;
      renderHomeFeaturedBusinesses();
      renderCompanies();
    }
  }

  document.getElementById('input-biz-logo-file')?.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const biz = getActiveBiz();
      biz.logoPhoto = ev.target.result;
      syncProfileHubUI();
      renderAllBizViews();
      showToast('Logo / Foto da empresa atualizada!');
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('input-biz-cover-file')?.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const biz = getActiveBiz();
      biz.coverPhoto = ev.target.result;
      syncBizWithPublicMarketplace(biz);
      syncProfileHubUI();
      renderAllBizViews();
      showToast('Imagem de capa da vitrine atualizada!');
    };
    reader.readAsDataURL(file);
  });

  const bizPhotoPresets = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80'
  ];

  document.getElementById('btn-cycle-biz-photos')?.addEventListener('click', () => {
    const biz = getActiveBiz();
    const cur = bizPhotoPresets.indexOf(biz.coverPhoto);
    const nextPhoto = bizPhotoPresets[(cur + 1) % bizPhotoPresets.length];
    biz.coverPhoto = nextPhoto;
    biz.logoPhoto = nextPhoto;
    syncBizWithPublicMarketplace(biz);
    syncProfileHubUI();
    renderAllBizViews();
    showToast('Foto e capa da empresa atualizadas!');
  });

  function saveCompanyProfileFromForm() {
    const biz = getActiveBiz();
    biz.name = document.getElementById('prof-biz-name').value.trim();
    biz.typeTag = document.getElementById('prof-biz-modality').value;
    biz.cnpj = document.getElementById('prof-biz-cnpj').value.trim();
    biz.bio = document.getElementById('prof-biz-bio').value.trim();
    biz.address = document.getElementById('prof-biz-address').value.trim();
    biz.contact = document.getElementById('prof-biz-contact').value.trim();
    biz.founderName = document.getElementById('prof-biz-founder-name')?.value.trim() || biz.founderName;
    biz.founderChurch = document.getElementById('prof-biz-founder-church')?.value.trim() || biz.founderChurch;
    biz.founderBio = document.getElementById('prof-biz-founder-bio')?.value.trim() || biz.founderBio;
    biz.perk = document.getElementById('prof-biz-perk').value.trim();
    syncBizWithPublicMarketplace(biz);
    syncProfileHubUI();
    renderAllBizViews();
  }

  document.getElementById('form-company-profile')?.addEventListener('submit', e => {
    e.preventDefault();
    saveCompanyProfileFromForm();
    closeSheet('sheet-profile-hub');
    showToast('Perfil da Empresa / Prestador atualizado na Vitrine CRIS!');
  });

  document.getElementById('btn-save-and-enter-pj')?.addEventListener('click', () => {
    saveCompanyProfileFromForm();
    closeSheet('sheet-profile-hub');
    setAppMode('business');
  });

  document.getElementById('btn-preview-public-storefront')?.addEventListener('click', () => {
    saveCompanyProfileFromForm();
    closeSheet('sheet-profile-hub');
    openBusinessProfile(getActiveBiz().marketplaceId);
  });

  document.querySelectorAll('[data-set-mode]').forEach(btn => {
    btn.addEventListener('click', () => setAppMode(btn.dataset.setMode));
  });

  document.getElementById('desktop-jump-business')?.addEventListener('click', function () {
    document.querySelectorAll('.proto-quick-jumps .jump-btn').forEach(b => b.classList.remove('is-active'));
    this.classList.add('is-active');
    setAppMode('business');
  });

  // Quando clicar em qualquer atalho do painel guia desktop que seja do membro, garante que volte ao modo membro
  document.querySelectorAll('[data-jump-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.appMode !== 'member') {
        state.appMode = 'member';
        document.getElementById('nav-biz-dock').style.display = 'none';
        document.getElementById('nav-member-dock').style.display = '';
        syncProfileHubUI();
      }
      switchMainTab(btn.dataset.jumpTab, btn.dataset.jumpSub);
    });
  });

  document.querySelectorAll('#nav-biz-dock [data-biz-tab]').forEach(tab => {
    tab.addEventListener('click', () => switchBizTab(tab.dataset.bizTab));
  });

  document.querySelectorAll('[data-biz-nav]').forEach(el => {
    el.addEventListener('click', () => switchBizTab(el.dataset.bizNav));
  });

  document.getElementById('btn-toggle-biz-revenue')?.addEventListener('click', () => {
    state.bizHiddenRevenue = !state.bizHiddenRevenue;
    renderBizDashboard();
  });

  function renderBizDashboard() {
    const biz = getActiveBiz();
    const impactTotal = (biz.revenue * biz.impactRate) / 100;
    const projName = state.projects[state.activeProjectIndex];

    const avatarEl = document.getElementById('biz-active-avatar');
    if (avatarEl) {
      if (avatarEl.tagName === 'IMG') avatarEl.src = biz.logoPhoto;
      else avatarEl.textContent = biz.avatar;
    }
    const headerName = document.getElementById('biz-header-company-name');
    if (headerName) {
      headerName.innerHTML = `${biz.name.split('·')[0].trim()} <span class="profile-chevron">›</span>`;
    }
    document.getElementById('biz-type-tag').textContent = biz.typeTag;
    document.getElementById('biz-hero-rate-pill').textContent = `♥ ${biz.impactRate}% Repasse Social`;
    document.getElementById('biz-revenue-display').textContent = state.bizHiddenRevenue ? 'R$ ••••••' : formatBRL(biz.revenue);
    document.getElementById('biz-impact-generated-display').textContent = state.bizHiddenRevenue
      ? `R$ •••• → ${projName}`
      : `${formatBRL(impactTotal)} → ${projName}`;

    const pendingQuotes = state.bizQuotes.filter(q => q.status !== 'completed').length;
    const pendingOrders = state.bizStoreOrders.filter(o => o.status !== 'done').length;
    document.getElementById('biz-bento-orders-count').textContent = `${pendingQuotes + pendingOrders} Solicitações`;

    const needPosts = state.muralPosts.filter(p => p.type === 'need').length;
    document.getElementById('biz-bento-leads-count').textContent = `${needPosts} Oportunidades`;

    document.getElementById('kpi-views').textContent = biz.views;
    document.getElementById('kpi-quotes').textContent = state.bizQuotes.length + state.bizStoreOrders.length;
    document.getElementById('kpi-sales').textContent = biz.salesCount;

    const historyEl = document.getElementById('biz-sales-history-container');
    historyEl.innerHTML = state.bizSalesHistory.map(s => `
      <article class="cris-card" style="padding:13px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
          <div>
            <strong style="font-size:13.5px;display:block;">${s.client}</strong>
            <span style="font-size:12px;color:var(--text-muted);display:block;margin:2px 0 6px;">${s.desc}</span>
            <span style="font-size:11px;color:var(--emerald-bright);font-weight:700;">♥ +${formatBRL(s.donation)} repassados ao projeto social</span>
          </div>
          <div style="text-align:right;">
            <strong style="font-size:14.5px;display:block;">${formatBRL(s.amount)}</strong>
            <small style="font-size:10.5px;color:var(--text-muted);">${s.date}</small>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Sub-abas de Orçamentos e Pedidos PJ
  const bizOrdersSubBtns = document.querySelectorAll('[data-biz-orders-tab]');
  bizOrdersSubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.dataset.bizOrdersTab;
      bizOrdersSubBtns.forEach(b => b.classList.toggle('is-active', b.dataset.bizOrdersTab === sub));
      document.getElementById('biz-sub-quotes').style.display = sub === 'quotes' ? 'block' : 'none';
      document.getElementById('biz-sub-store').style.display = sub === 'store' ? 'block' : 'none';
    });
  });

  function renderBizOrdersAndQuotes() {
    document.getElementById('badge-quotes-count').textContent = state.bizQuotes.length;
    document.getElementById('badge-orders-count').textContent = state.bizStoreOrders.length;

    const quotesEl = document.getElementById('biz-quotes-list-container');
    const statusMap = {
      new: { label: 'Nova Solicitação', color: '#c8965b', bg: 'var(--gold-soft)' },
      proposed: { label: 'Proposta Enviada', color: '#2ca374', bg: 'var(--emerald-soft)' },
      in_progress: { label: 'Em Execução', color: '#2ca374', bg: 'var(--emerald-soft)' },
      completed: { label: '✓ Serviço Concluído & Faturado', color: '#14523a', bg: 'var(--emerald-soft)' }
    };

    quotesEl.innerHTML = state.bizQuotes.map(q => {
      const st = statusMap[q.status] || statusMap.new;
      return `
        <article class="cris-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:10px;font-weight:800;padding:3px 9px;border-radius:99px;background:${st.bg};color:${st.color};text-transform:uppercase;">${st.label}</span>
            <small style="font-size:11px;color:var(--text-muted);">${q.time} · ${q.urgency}</small>
          </div>
          <h4 style="margin:4px 0;font-size:14.5px;">${q.title}</h4>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">
            👤 <strong>${q.client}</strong> · Setor: ${q.category}
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;background:var(--sheet-bg);padding:9px 12px;border-radius:12px;margin-bottom:10px;font-size:12.5px;">
            <span>Orçamento estimado: <strong>${formatBRL(q.budget)}</strong></span>
            <span style="color:var(--emerald-bright);font-weight:700;">♥ ${getActiveBiz().impactRate}% repasse</span>
          </div>
          ${q.proposalNote ? `<p style="font-size:12px;color:var(--text-muted);margin:0 0 10px;padding-left:8px;border-left:2px solid var(--emerald-bright);">${q.proposalNote}</p>` : ''}
          <div style="display:flex;gap:8px;">
            ${q.status === 'new' ? `<button type="button" class="btn-primary" style="flex:1;" data-open-proposal="${q.id}">Enviar Proposta Comercial</button>` : ''}
            ${q.status !== 'completed' ? `<button type="button" class="btn-secondary" style="flex:1;" data-advance-quote="${q.id}">Avançar Etapa →</button>` : `<span style="font-size:12px;font-weight:700;color:var(--emerald-bright);">🎉 Valor creditado no Faturamento PJ</span>`}
          </div>
        </article>
      `;
    }).join('');

    quotesEl.querySelectorAll('[data-open-proposal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = state.bizQuotes.find(item => item.id === btn.dataset.openProposal);
        if (!q) return;
        document.getElementById('proposal-quote-id').value = q.id;
        document.getElementById('proposal-client').value = `${q.client} — ${q.title}`;
        document.getElementById('proposal-value').value = q.budget;
        openSheet('sheet-biz-proposal');
      });
    });

    quotesEl.querySelectorAll('[data-advance-quote]').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = state.bizQuotes.find(item => item.id === btn.dataset.advanceQuote);
        if (!q) return;
        const order = ['new', 'proposed', 'in_progress', 'completed'];
        const nextIdx = Math.min(order.length - 1, order.indexOf(q.status) + 1);
        q.status = order[nextIdx];
        if (q.status === 'completed') {
          const biz = getActiveBiz();
          const donation = +(q.budget * (biz.impactRate / 100)).toFixed(2);
          biz.revenue += q.budget;
          biz.salesCount += 1;
          state.walletTotal += donation;
          state.bizSalesHistory.unshift({
            id: 'sh' + Date.now(),
            client: q.client,
            desc: q.title,
            amount: q.budget,
            donation,
            date: 'Agora'
          });
          updateWalletUI();
          showToast(`🎉 Serviço concluído! +${formatBRL(q.budget)} no faturamento e +${formatBRL(donation)} de impacto social!`);
        } else {
          showToast('Status do orçamento atualizado!');
        }
        renderAllBizViews();
      });
    });

    // Pedidos da Loja & Agendamentos
    const storeEl = document.getElementById('biz-store-orders-container');
    storeEl.innerHTML = state.bizStoreOrders.map(o => `
      <article class="cris-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span class="verified-badge">${o.type}</span>
          <strong style="font-size:14px;">${formatBRL(o.total)}</strong>
        </div>
        <h4 style="margin:4px 0;font-size:14.5px;">${o.items}</h4>
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">
          👤 ${o.client} · 🗓 ${o.slot}
        </div>
        <button type="button" class="${o.status === 'done' ? 'btn-secondary' : 'btn-primary'} btn-full" data-advance-order="${o.id}">
          ${o.status === 'pending' ? 'Aceitar & Confirmar Atendimento →' : o.status === 'preparing' ? 'Marcar como Entregue / Concluído 🎉' : '✓ Atendimento / Pedido Concluído'}
        </button>
      </article>
    `).join('');

    storeEl.querySelectorAll('[data-advance-order]').forEach(btn => {
      btn.addEventListener('click', () => {
        const ord = state.bizStoreOrders.find(item => item.id === btn.dataset.advanceOrder);
        if (!ord || ord.status === 'done') return;
        if (ord.status === 'pending') {
          ord.status = 'preparing';
          showToast('Pedido / agendamento confirmado com o cliente!');
        } else {
          ord.status = 'done';
          const biz = getActiveBiz();
          const donation = +(ord.total * (biz.impactRate / 100)).toFixed(2);
          biz.revenue += ord.total;
          biz.salesCount += 1;
          state.bizSalesHistory.unshift({
            id: 'sh' + Date.now(),
            client: ord.client,
            desc: ord.items,
            amount: ord.total,
            donation,
            date: 'Agora'
          });
          showToast(`Concluído! +${formatBRL(ord.total)} faturados.`);
        }
        renderAllBizViews();
      });
    });
  }

  // Formulário de Envio de Proposta Comercial
  document.getElementById('form-biz-proposal')?.addEventListener('submit', e => {
    e.preventDefault();
    const qId = document.getElementById('proposal-quote-id').value;
    const val = parseFloat(document.getElementById('proposal-value').value) || 1200;
    const deadline = document.getElementById('proposal-deadline').value.trim();
    const notes = document.getElementById('proposal-notes').value.trim();

    const q = state.bizQuotes.find(item => item.id === qId);
    if (q) {
      q.budget = val;
      q.status = 'proposed';
      q.proposalNote = `Proposta de ${formatBRL(val)} (${deadline}): "${notes}"`;
    }
    closeSheet('sheet-biz-proposal');
    renderAllBizViews();
    showToast('Proposta comercial enviada para o cliente no Super App!');
  });

  // Vitrine & Catálogo PJ
  function renderBizCatalog() {
    const biz = getActiveBiz();
    document.getElementById('catalog-rate-preview').textContent = `♥ ${biz.impactRate}% ativo`;
    document.getElementById('biz-perk-text').textContent = biz.perk;

    document.querySelectorAll('#biz-impact-pct-chips .chip').forEach(chip => {
      chip.classList.toggle('is-active', Number(chip.dataset.setPct) === biz.impactRate);
    });

    const container = document.getElementById('biz-catalog-items-container');
    container.innerHTML = state.bizCatalogItems.map(item => `
      <article class="cris-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span class="mural-badge ${item.kind === 'service' ? 'type-offer' : 'type-need'}">
            ${item.kind === 'service' ? '🛠 PRESTAÇÃO DE SERVIÇO' : '🛍 PRODUTO NA LOJA'}
          </span>
          <strong style="font-size:15px;">${formatBRL(item.price)}</strong>
        </div>
        <h4 style="margin:4px 0;font-size:15px;">${item.title}</h4>
        <p style="font-size:12px;color:var(--text-muted);margin:4px 0 12px;">🎁 ${item.benefit}</p>
        <div style="display:flex;gap:8px;">
          <button type="button" class="${item.active ? 'btn-secondary' : 'btn-primary'}" style="flex:1;padding:8px;" data-toggle-cat-item="${item.id}">
            ${item.active ? '✓ Visível no Marketplace' : 'Ativar na Vitrine'}
          </button>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-toggle-cat-item]').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = state.bizCatalogItems.find(i => i.id === btn.dataset.toggleCatItem);
        if (!item) return;
        item.active = !item.active;
        renderBizCatalog();
        showToast(item.active ? 'Item ativado no Marketplace!' : 'Item pausado temporariamente.');
      });
    });
  }

  document.querySelectorAll('#biz-impact-pct-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const pct = Number(chip.dataset.setPct);
      getActiveBiz().impactRate = pct;
      renderAllBizViews();
      showToast(`Repasse social da sua empresa atualizado para ${pct}%!`);
    });
  });

  document.getElementById('btn-edit-perk')?.addEventListener('click', () => {
    const biz = getActiveBiz();
    const presets = [
      'Diagnóstico gratuito + 15% OFF no primeiro contrato para membros CRIS',
      'Atendimento prioritário VIP + 10% de bônus em serviços recorrentes',
      'Frete grátis + brinde artesanal em pedidos pelo Super App CRIS'
    ];
    const next = presets[(presets.indexOf(biz.perk) + 1) % presets.length];
    biz.perk = next;
    renderBizCatalog();
    showToast('Benefício exclusivo para membros CRIS atualizado!');
  });

  // Abrir modal de Novo Serviço / Produto
  ['biz-quick-new-item', 'btn-open-new-catalog-item'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => openSheet('sheet-biz-new-item'));
  });

  document.getElementById('form-biz-new-item')?.addEventListener('submit', e => {
    e.preventDefault();
    const kind = document.getElementById('new-item-kind').value;
    const title = document.getElementById('new-item-title').value.trim();
    const price = parseFloat(document.getElementById('new-item-price').value) || 250;
    const benefit = document.getElementById('new-item-benefit').value.trim();
    const biz = getActiveBiz();

    state.bizCatalogItems.unshift({
      id: 'cat' + Date.now(),
      kind,
      title,
      price,
      benefit,
      active: true,
      featured: true
    });

    // Também adiciona na Loja e Perfil do Modo Membro em tempo real!
    state.products.unshift({
      id: 'p' + Date.now(),
      title,
      seller: biz.name.split('·')[0].trim(),
      price,
      impactPct: biz.impactRate,
      photo: kind === 'service'
        ? 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80'
        : 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
    });

    e.target.reset();
    closeSheet('sheet-biz-new-item');
    renderProducts();
    renderAllBizViews();
    switchBizTab('biz-catalog');
    showToast(`"${title}" publicado na sua Vitrine e no Marketplace!`);
  });

  // Radar B2B & Indicações Recebidas
  const bizB2bSubBtns = document.querySelectorAll('[data-biz-b2b-tab]');
  bizB2bSubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.dataset.bizB2bTab;
      bizB2bSubBtns.forEach(b => b.classList.toggle('is-active', b.dataset.bizB2bTab === sub));
      document.getElementById('biz-sub-radar').style.display = sub === 'radar' ? 'block' : 'none';
      document.getElementById('biz-sub-referrals').style.display = sub === 'referrals' ? 'block' : 'none';
    });
  });

  function renderBizB2B() {
    const radarEl = document.getElementById('biz-radar-matches-container');
    const needPosts = state.muralPosts.filter(p => p.type === 'need');

    radarEl.innerHTML = needPosts.map(post => `
      <article class="cris-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span class="verified-badge">🎯 96% Match com seu Serviço</span>
          <small style="font-size:11px;color:var(--text-muted);">${post.time}</small>
        </div>
        <h4 style="margin:4px 0;font-size:15px;">${post.title}</h4>
        <p style="font-size:12.5px;color:var(--text-muted);margin:4px 0 10px;">${post.desc}</p>
        <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:10px;">
          Publicado por: <strong>${post.author}</strong> (${post.role})
        </div>
        <button type="button" class="btn-primary btn-full" data-pitch-mural="${post.id}">
          Enviar Proposta Direta para ${post.author.split(' ')[0]}
        </button>
      </article>
    `).join('');

    radarEl.querySelectorAll('[data-pitch-mural]').forEach(btn => {
      btn.addEventListener('click', () => {
        const post = state.muralPosts.find(p => p.id === btn.dataset.pitchMural);
        if (!post) return;
        const newQId = 'bq' + Date.now();
        state.bizQuotes.unshift({
          id: newQId,
          client: `${post.author} (${post.role})`,
          category: post.category,
          title: post.title,
          budget: 1500,
          urgency: 'Lead captado via Radar B2B',
          status: 'new',
          proposalNote: '',
          time: 'Agora'
        });
        document.getElementById('proposal-quote-id').value = newQId;
        document.getElementById('proposal-client').value = `${post.author} — ${post.title}`;
        document.getElementById('proposal-value').value = 1500;
        openSheet('sheet-biz-proposal');
      });
    });

    const refEl = document.getElementById('biz-referrals-received-container');
    refEl.innerHTML = state.connections.map(c => `
      <article class="cris-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span class="mural-badge type-offer">${c.stage === 'closed' ? '✓ NEGÓCIO FECHADO' : c.stage === 'meeting' ? 'REUNIÃO REALIZADA' : 'INDICAÇÃO RECEBIDA'}</span>
          <strong style="font-size:14px;">${formatBRL(c.value)}</strong>
        </div>
        <h4 style="margin:4px 0;font-size:14.5px;">${c.subject}</h4>
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">
          Cliente / Parceiro: <strong>${c.partner}</strong> · Impacto previsto: <strong style="color:var(--emerald-bright);">+${formatBRL(c.impact)}</strong>
        </div>
        <button type="button" class="${c.stage === 'closed' ? 'btn-secondary' : 'btn-primary'} btn-full" data-biz-adv-conn="${c.id}">
          ${c.stage === 'referred' ? 'Marcar Reunião Realizada →' : c.stage === 'meeting' ? 'Confirmar Fechamento de Negócio 🎉' : '✓ Negócio Fechado & Indicador Notificado'}
        </button>
      </article>
    `).join('');

    refEl.querySelectorAll('[data-biz-adv-conn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const conn = state.connections.find(item => item.id === btn.dataset.bizAdvConn);
        if (!conn || conn.stage === 'closed') return;
        conn.stage = conn.stage === 'referred' ? 'meeting' : 'closed';
        if (conn.stage === 'closed') {
          getActiveBiz().revenue += conn.value;
          showToast(`🎉 Negócio fechado! +${formatBRL(conn.value)} somados ao faturamento PJ.`);
        } else {
          showToast('Reunião registrada no CRM!');
        }
        renderConnections();
        renderAllBizViews();
      });
    });
  }

  // Academia & Cursos Publicados pelo Empresário
  function renderBizAcademy() {
    const container = document.getElementById('biz-my-courses-container');
    container.innerHTML = state.courses.map(course => `
      <article class="biz-card">
        <div class="biz-card-banner" style="height:125px;">
          <img src="${course.photo}" alt="${course.title}" loading="lazy">
          <span class="spot-overlay-pill">${course.tag}</span>
          <span class="spot-rating-pill">★ 4.9 · 112 alunos</span>
        </div>
        <div class="biz-card-content">
          <h4 style="font-size:15px;margin:0 0 4px;">${course.title}</h4>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">${course.instructor} · ${course.duration}</div>
          <p style="font-size:12px;color:var(--text-muted);margin:0;">🛠 <strong>Ferramenta:</strong> ${course.keyAction}</p>
        </div>
      </article>
    `).join('');
  }

  ['biz-quick-new-course', 'btn-biz-publish-course'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => openSheet('sheet-biz-new-course'));
  });

  document.getElementById('btn-biz-publish-event')?.addEventListener('click', () => {
    const biz = getActiveBiz();
    state.events.unshift({
      id: 'ev' + Date.now(),
      title: `Workshop Prático: ${biz.name.split('·')[0].trim()}`,
      date: 'Quinta-feira · 19h00 (Presencial & Rede)',
      place: 'Hub Executivo CRIS · Boa Viagem, Recife',
      spots: '20 vagas abertas para membros',
      confirmed: true
    });
    renderCommunity();
    showToast('Workshop empresarial publicado na agenda da Comunidade CRIS!');
  });

  document.getElementById('form-biz-new-course')?.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('new-course-title').value.trim();
    const tag = document.getElementById('new-course-tag').value;
    const duration = document.getElementById('new-course-duration').value.trim();
    const keyAction = document.getElementById('new-course-action').value.trim();
    const biz = getActiveBiz();

    state.courses.unshift({
      id: 'cr' + Date.now(),
      title,
      instructor: biz.name,
      duration,
      progress: 0,
      tag,
      photo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
      summary: 'Mentoria prática publicada diretamente pelo Painel do Empresário CRIS.',
      keyAction
    });

    e.target.reset();
    closeSheet('sheet-biz-new-course');
    renderCourses();
    renderBizAcademy();
    switchBizTab('biz-academy');
    showToast(`Curso "${title}" publicado na Academia CRIS!`);
  });

  // Terminal CRIS Pay / Emitir QR / Validar Venda
  function updatePosPreview() {
    const val = parseFloat(document.getElementById('pos-amount')?.value) || 0;
    const biz = getActiveBiz();
    const don = (val * biz.impactRate) / 100;
    const rateLabel = document.getElementById('pos-rate-label');
    const previewEl = document.getElementById('pos-donation-preview');
    if (rateLabel) rateLabel.textContent = `${biz.impactRate}%`;
    if (previewEl) previewEl.textContent = `${formatBRL(don)} para ${state.projects[state.activeProjectIndex]}`;
  }

  document.getElementById('pos-amount')?.addEventListener('input', updatePosPreview);

  ['fab-open-pos', 'btn-biz-open-pos-top', 'biz-quick-pos', 'btn-biz-add-sale-inline'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      updatePosPreview();
      openSheet('sheet-biz-pos');
    });
  });

  document.getElementById('form-biz-pos')?.addEventListener('submit', e => {
    e.preventDefault();
    const client = document.getElementById('pos-client-name').value.trim();
    const desc = document.getElementById('pos-service-desc').value.trim();
    const amount = parseFloat(document.getElementById('pos-amount').value) || 150;
    const biz = getActiveBiz();
    const donation = +(amount * (biz.impactRate / 100)).toFixed(2);

    biz.revenue += amount;
    biz.salesCount += 1;
    state.walletTotal += donation;
    state.walletWeek += donation;

    state.bizSalesHistory.unshift({
      id: 'sh' + Date.now(),
      client,
      desc: `${desc} (QR Fiscal CRIS)`,
      amount,
      donation,
      date: 'Agora'
    });

    updateWalletUI();
    renderAllBizViews();
    closeSheet('sheet-biz-pos');
    showToast(`Venda de ${formatBRL(amount)} validada! +${formatBRL(donation)} destinados ao projeto social.`);
  });

  function renderAllBizViews() {
    renderBizDashboard();
    renderBizOrdersAndQuotes();
    renderBizCatalog();
    renderBizB2B();
    renderBizAcademy();
    syncProfileHubUI();
  }

  // ==========================================
  // TUTORIAL GUIADO INTERATIVO (6 PASSOS)
  // ==========================================
  const tourSteps = [
    {
      badge: 'PASSO 1 DE 6 · ECOSSISTEMA CRIS',
      icon: '💚',
      title: 'Compra com Propósito & Impacto Social',
      hint: '📍 Aba Início · Carteira de Impacto Social',
      desc: 'Na CRIS, parte de toda compra ou serviço contratado em empresas parceiras vira doação auditada para projetos sociais, sem custar nada a mais para você!',
      action: () => {
        document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
        if (state.appMode !== 'member') setAppMode('member');
        switchMainTab('home');
      }
    },
    {
      badge: 'PASSO 2 DE 6 · SCANNER FISCAL',
      icon: '📷',
      title: 'Scanner de Nota Fiscal (NFC-e / QR)',
      hint: '📍 Botão Central · Leitor de Cupom Fiscal',
      desc: 'Comprou em uma empresa parceira? Aponte a câmera para o QR Code da Nota Fiscal (DANFE NFC-e) e veja o impacto social ser creditado na hora.',
      action: () => {
        document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
        if (state.appMode !== 'member') setAppMode('member');
        openSheet('sheet-scanner');
      }
    },
    {
      badge: 'PASSO 3 DE 6 · ROSTO CRISTÃO & WHATSAPP',
      icon: '✝️',
      title: 'Bio do Fundador Cristão & WhatsApp Direto',
      hint: '📍 Aba Mercado · Perfil da Empresa',
      desc: 'Em cada empresa você conhece a história de fé do fundador cristão por trás da marca e tem um botão para chamar direto no WhatsApp ou canal de atendimento!',
      action: () => {
        document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
        if (state.appMode !== 'member') setAppMode('member');
        switchMainTab('marketplace', 'companies');
        openBusinessProfile('b2');
      }
    },
    {
      badge: 'PASSO 4 DE 6 · MURAL & CONEXÕES B2B',
      icon: '🤝',
      title: 'Mural “Preciso / Ofereço” & Medidor CRM',
      hint: '📍 Aba Mural & Conexões',
      desc: 'Publique o que você precisa ou oferece, gere indicações para irmãos da comunidade e acompanhe cada negócio fechado no Medidor de Conexões.',
      action: () => {
        document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
        if (state.appMode !== 'member') setAppMode('member');
        switchMainTab('mural', 'board');
      }
    },
    {
      badge: 'PASSO 5 DE 6 · FÉ PRÁTICA & CAPACITAÇÃO',
      icon: '📖',
      title: 'Palavra do Dia, Bíblia & Academia CRIS',
      hint: '📍 Abas Palavra & Cursos',
      desc: 'Receba reflexões diárias aplicadas ao trabalho, à liderança e à família, leia a Bíblia no app e faça cursos práticos ministrados por empresários da rede.',
      action: () => {
        document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
        if (state.appMode !== 'member') setAppMode('member');
        switchMainTab('bible', 'devotional');
      }
    },
    {
      badge: 'PASSO 6 DE 6 · CONTA PF ⇄ EMPRESÁRIO PJ',
      icon: '💼',
      title: 'Seu Perfil & Área do Empresário / Prestador',
      hint: '📍 Clique na sua foto no topo do App',
      desc: 'Ao clicar na sua foto no topo, você edita seu perfil pessoal ou troca em 1 toque para a Área do Empresário (PJ) para gerir vendas, orçamentos e sua vitrine!',
      action: () => {
        document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
        openProfileHub('company');
      }
    }
  ];

  let currentTourIdx = 0;
  const tourBackdrop = document.getElementById('guided-tour-backdrop');

  function renderTourStep() {
    const step = tourSteps[currentTourIdx];
    if (!step || !tourBackdrop) return;

    step.action();

    document.getElementById('tour-step-badge').textContent = step.badge;
    document.getElementById('tour-step-icon').textContent = step.icon;
    document.getElementById('tour-step-title').textContent = step.title;
    document.getElementById('tour-step-hint').textContent = step.hint;
    document.getElementById('tour-step-desc').textContent = step.desc;

    const dotsEl = document.getElementById('tour-dots-container');
    dotsEl.innerHTML = tourSteps.map((_, idx) => `<span class="tour-dot ${idx === currentTourIdx ? 'is-active' : ''}"></span>`).join('');

    const prevBtn = document.getElementById('btn-tour-prev');
    const nextBtn = document.getElementById('btn-tour-next');
    prevBtn.style.display = currentTourIdx === 0 ? 'none' : 'inline-flex';
    nextBtn.textContent = currentTourIdx === tourSteps.length - 1 ? 'Concluir Tour e Explorar 🎉' : 'Próximo passo →';
  }

  function startGuidedTour() {
    currentTourIdx = 0;
    if (tourBackdrop) {
      tourBackdrop.style.display = 'flex';
      renderTourStep();
    }
  }

  function closeGuidedTour() {
    if (tourBackdrop) tourBackdrop.style.display = 'none';
    sessionStorage.setItem('cris_tour_seen', '1');
  }

  document.getElementById('btn-start-tour-desktop')?.addEventListener('click', startGuidedTour);
  document.getElementById('btn-start-tour-mobile')?.addEventListener('click', startGuidedTour);
  document.getElementById('btn-tour-close')?.addEventListener('click', closeGuidedTour);

  document.getElementById('btn-tour-prev')?.addEventListener('click', () => {
    if (currentTourIdx > 0) {
      currentTourIdx -= 1;
      renderTourStep();
    }
  });

  document.getElementById('btn-tour-next')?.addEventListener('click', () => {
    if (currentTourIdx < tourSteps.length - 1) {
      currentTourIdx += 1;
      renderTourStep();
    } else {
      closeGuidedTour();
      document.querySelectorAll('.sheet-backdrop.is-open').forEach(s => s.classList.remove('is-open'));
      setAppMode('member');
      showToast('Tour concluído! Fique à vontade para testar tudo.');
    }
  });

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
  renderAllBizViews();

  // Abre o Tour Guiado automaticamente na primeira visita da sessão
  if (!sessionStorage.getItem('cris_tour_seen')) {
    setTimeout(() => {
      startGuidedTour();
    }, 900);
  }
})();

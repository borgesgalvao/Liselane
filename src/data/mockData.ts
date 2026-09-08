import { Project, BlogPost, Testimonial } from '../types';

export const STUDIO_INFO = {
  name: 'Liselane Arquitetura e Design',
  founder: 'Liselane',
  tagline: 'Arquitetura autoral, sensibilidade espacial e conexão humana com o ambiente construído.',
  foundedYear: 2014,
  completedProjects: 148,
  awardsCount: 14,
  cauRegistry: 'CAU/MG nº 52419-3',
  address: {
    street: 'Av. João César de Oliveira, 1400 - 8º Andar',
    neighborhood: 'Eldorado',
    city: 'Contagem',
    state: 'MG',
    zip: '32315-000',
    country: 'Brasil',
    lat: -19.9386,
    lng: -44.0536,
  },
  phone: '(31) 99147-6644',
  whatsapp: '31 99147-6644',
  whatsappRaw: '5531991476644',
  email: 'contato@liselane.com.br',
  hours: 'Segunda a Sexta: 08:30 às 18:30 | Sábados com agendamento prévio',
  social: [
    { name: 'Instagram', handle: '@liselane.arquitetura', url: 'https://instagram.com', icon: 'Instagram' },
    { name: 'Pinterest', handle: 'liselanearquitetura', url: 'https://pinterest.com', icon: 'Pin' },
    { name: 'LinkedIn', handle: 'liselane-arquitetura', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Behance', handle: 'liselanestudio', url: 'https://behance.net', icon: 'Palette' },
    { name: 'YouTube', handle: 'Liselane Arquitetura', url: 'https://youtube.com', icon: 'Youtube' },
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'casa-maritima',
    title: 'Casa Marítima',
    subtitle: 'Residência suspensa integrada à topografia nativa',
    category: 'residencial',
    categoryLabel: 'Residencial',
    year: 2024,
    area: '740 m²',
    location: 'Trancoso, Bahia',
    clientType: 'Privado',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    ],
    description: 'Implantada em suave declive com vista desimpedida, a Casa Marítima traduz o minimalismo contemporâneo em sua expressão máxima. Estruturas esbeltas com grandes beirais ripados proporcionam sombra generosa e ventilação cruzada contínua.',
    concept: 'Harmonia entre o construído e a topografia natural, eliminando a barreira entre interior e exterior com caixilhos embutidos no piso.',
    highlights: [
      'Piscina com borda infinita em pedra hijau vulcânica',
      'Captação de água pluvial e energia fotovoltaica integrada',
      'Piso contínuo em cimento queimado resinado',
      'Paisagismo biofílico nativo exuberante'
    ],
    materials: ['Madeira Cumaru Certificada', 'Concreto Aparente', 'Vidro Low-E duplo', 'Pedra Hijau'],
    leadArchitect: 'Arq. Liselane (CAU/MG)',
    featured: true
  },
  {
    id: 'edificio-terracota',
    title: 'Sede Horizonte Digital',
    subtitle: 'Escritório corporativo biofílico e flexível',
    category: 'corporativo',
    categoryLabel: 'Corporativo',
    year: 2023,
    area: '1.850 m²',
    location: 'Vila da Serra, Nova Lima / BH',
    clientType: 'Empresarial',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    ],
    description: 'Um hub corporativo concebido para estimular colaboração espontânea, bem-estar acústico e alta produtividade sensorial através de jardins internos verticais.',
    concept: 'Modularidade espacial que permite reconfigurações rápidas através de divisórias acústicas pivotantes em carvalho natural.',
    highlights: [
      'Certificação de eficiência energética e conforto térmico',
      'Automação lumínica circadiana com tecnologia tunable white',
      'Arena multiuso para 120 pessoas e cabines acústicas privadas',
      'Átrio central com claraboia zenital'
    ],
    materials: ['Aço Corten', 'Carvalho Natural', 'Painéis Acústicos de Lã Pet', 'Vidro Eletrocrômico'],
    leadArchitect: 'Arq. Liselane (CAU/MG)',
    featured: true
  },
  {
    id: 'loft-jardins',
    title: 'Apartamento Alvorada',
    subtitle: 'Reforma de interiores com curadoria de design contemporâneo',
    category: 'interiores',
    categoryLabel: 'Interiores',
    year: 2024,
    area: '340 m²',
    location: 'Lourdes, Belo Horizonte - MG',
    clientType: 'Privado',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    ],
    description: 'Integração de três cômodos em uma ampla galeria social banhada pela copa das árvores. Diálogo refinado entre móveis de designers brasileiros e marcenaria sob medida.',
    concept: 'Revalorização dos pilares e vigas de concreto em contraste com bancadas em mármore travertino romano bruto.',
    highlights: [
      'Cozinha com ilha monolítica em mármore travertino navona',
      'Sistema de som multiroom embutido em sancas invisíveis',
      'Closet e suíte master com banheira de imersão esculpida',
      'Iluminação indireta quente 2700K'
    ],
    materials: ['Mármore Travertino', 'Madeira Freijó Natural', 'Tecidos de Linho Puro', 'Latonaria Escovada'],
    leadArchitect: 'Arq. Liselane (CAU/MG)',
    featured: true
  },
  {
    id: 'residencia-pedra-branca',
    title: 'Casa Monolito',
    subtitle: 'Arquitetura contemporânea esculpida na rocha natural',
    category: 'residencial',
    categoryLabel: 'Residencial',
    year: 2023,
    area: '920 m²',
    location: 'Condomínio Vale dos Cristais, Nova Lima - MG',
    clientType: 'Privado',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    ],
    description: 'Volumes puros em concreto pigmentado terracota que emergem da colina mineira. Grandes vãos livres abrem a área de convivência diretamente para as montanhas.',
    concept: 'Sensação de abrigo geológico, unindo solidez tectônica com fluidez espacial e transparência nas esquadrias.',
    highlights: [
      'Estrutura em balanço protendido com vão livre integrado',
      'Adega climatizada em rocha natural esculpida',
      'Pátio interno com espelho d’água e vegetação nativa',
      'Esquadrias minimalistas com perfil ultra fino'
    ],
    materials: ['Concreto Pigmentado Terracota', 'Pedra Moledo Rústica', 'Vidro Extra Clear', 'Aço Preto Mate'],
    leadArchitect: 'Arq. Liselane (CAU/MG)',
    featured: false
  },
  {
    id: 'parque-sensorial',
    title: 'Pavilhão do Lago & Paisagismo',
    subtitle: 'Arquitetura integrada e parque botânico privativo',
    category: 'paisagismo',
    categoryLabel: 'Paisagismo',
    year: 2024,
    area: '5.200 m²',
    location: 'Contagem / Grande BH, Minas Gerais',
    clientType: 'Condomínio Residencial',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    ],
    description: 'Projeto paisagístico e arquitetônico que restaurou o ecossistema local, criando um pavilhão comunitário flutuante e trilhas sensoriais aromáticas.',
    concept: 'Regeneração ambiental aliada à arquitetura de baixo impacto ecológico em madeira certificada.',
    highlights: [
      'Biolago balneável com filtragem 100% natural',
      'Pomar de frutas nativas e espécies do Cerrado e Mata Atlântica',
      'Pavilhão em madeira com cobertura verde auto-irrigável',
      'Iluminação solar fotovoltaica dimerizável'
    ],
    materials: ['Madeira Laminada Colada (MLC)', 'Pedras de Rio', 'Deck em Madeira Ecológica', 'Vegetação Nativa'],
    leadArchitect: 'Arq. Liselane e Equipe',
    featured: false
  },
  {
    id: 'cobertura-pinheiros',
    title: 'Penthouse Serra do Curral',
    subtitle: 'Arquitetura de interiores contemporânea com vista panorâmica',
    category: 'interiores',
    categoryLabel: 'Interiores',
    year: 2023,
    area: '480 m²',
    location: 'Belvedere / Nova Lima - MG',
    clientType: 'Privado',
    coverImage: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80',
    ],
    description: 'Reorganização espacial completa para colecionadores de arte, combinando superfícies neutras de alta textura com iluminação cênica de alta fidelidade de cor.',
    concept: 'Um refúgio urbano onde o pôr do sol sobre as serras mineiras desenha sombras esculturais no living.',
    highlights: [
      'Piscina privativa na cobertura com vista desimpedida',
      'Painéis em ripas de nogueira com portas mimetizadas',
      'Lareira ecológica a bioetanol',
      'Marcenaria arquitetônica desenhada sob medida'
    ],
    materials: ['Nogueira Nobre', 'Granito Escovado', 'Couro Natural', 'Vidro Refletivo'],
    leadArchitect: 'Arq. Liselane (CAU/MG)',
    featured: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'design-biofilico-arquitetura-contemporanea',
    title: 'Design Biofílico: Como a natureza integrada redefine residências contemporâneas',
    excerpt: 'Mais do que vasos de plantas: o projeto biofílico estuda ventilação, ritmo circadiano, texturas naturais e microclima para promover serenidade e longevidade aos moradores.',
    category: 'Tendências & Bem-Estar',
    readTime: '6 min de leitura',
    author: {
      name: 'Liselane',
      role: 'Arquiteta Titular & Fundadora',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: '02 de Setembro de 2026',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Biofilia', 'Sustentabilidade', 'Residencial', 'Luz Natural'],
    content: [
      'A relação entre o ser humano e o ambiente construído passou por uma transformação radical nos últimos anos. Não buscamos mais apenas metros quadrados ou acabamentos ostensivos; a verdadeira sofisticação reside na capacidade de uma residência acalmar o sistema nervoso.',
      'O design biofílico baseia-se na afinidade biológica inata do ser humano com a natureza. Na prática projetual do nosso escritório, isso se materializa através de três pilares: a conexão visual contínua com a vegetação, o aproveitamento do fluxo e som da água em espelhos térmicos, e o ritmo circadiano regulado por iluminação indireta e zenital.',
      'Em nossos projetos residenciais recentes em Minas Gerais, a disposição estratégica das aberturas gera ventilação cruzada agradável, mantendo o conforto térmico natural mesmo nos meses mais quentes, aliando ar puro contínuo e redução drástica no consumo de energia.'
    ]
  },
  {
    id: 'post-2',
    slug: 'concreto-madeira-alquimia-materiais',
    title: 'Concreto Aparente e Madeira Nobre: A alquimia tectônica do minimalismo acolhedor',
    excerpt: 'O segredo para equilibrar a monumentalidade sólida do concreto armado com o aconchego orgânico e tátil das madeiras nobres em projetos atemporais.',
    category: 'Materiais & Técnicas',
    readTime: '8 min de leitura',
    author: {
      name: 'Liselane',
      role: 'Arquiteta Titular & Fundadora',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: '18 de Agosto de 2026',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Concreto', 'Madeira', 'Minimalismo', 'Construção'],
    content: [
      'Existe uma poética profunda quando dois materiais opostos se encontram no mesmo plano arquitetônico. O concreto armado carrega a força, o peso gravitacional e a memória das fôrmas; a madeira, por sua vez, introduz calor térmico, aroma, variação de tonalidade e escala humana.',
      'Ao projetar fôrmas de concreto aparente com réguas estreitas escovadas, transferimos os nós e as fibras orgânicas para a pedra artificial líquida. Quando essa parede recebe um forro contínuo em freijó ou cumaru com juntas secas milimétricas, o espaço ganha uma elegância silenciosa que dispensa qualquer revestimento descartável.',
      'Nossos projetos privilegiam sempre madeiras com cadeia de custódia certificada e acabamentos em óleos naturais, permitindo que o material envelheça com nobreza e dignidade ao longo das décadas.'
    ]
  },
  {
    id: 'post-3',
    slug: 'iluminacao-cenica-arquitetura',
    title: 'Luz Cênica e Sombra: Como a iluminação invisível transforma a percepção espacial',
    excerpt: 'Por que luminárias aparentes no teto estão sendo substituídas por rasgos difusos, temperatura de cor morna (2700K) e controle de penumbra que valorizam a arquitetura.',
    category: 'Iluminação & Detalhes',
    readTime: '5 min de leitura',
    author: {
      name: 'Liselane',
      role: 'Arquiteta Titular & Fundadora',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: '29 de Julho de 2026',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    tags: ['Luminotécnica', 'Interiores', 'Design', 'Atmosfera'],
    content: [
      'A boa arquitetura revela-se à luz do dia, mas emociona verdadeiramente ao cair da noite. Um erro recorrente em projetos tradicionais é a iluminação uniforme excessiva, que "achata" texturas e cria desconforto visual.',
      'Na filosofia do escritório Liselane Arquitetura e Design, a fonte de luz deve ser frequentemente invisível; o que se admira é o efeito que ela causa sobre uma textura de rocha, o contorno de uma escultura ou o plano flutuante de um teto.',
      'Trabalhamos predominantemente com temperaturas de cor acolhedoras nos ambientes de descanso e convivência, acompanhadas por sistemas de dimerização que simulam o crepúsculo natural, preparando os moradores para um descanso restaurador.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Roberto & Helena Silveira',
    role: 'Proprietários residenciais',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'A Liselane não apenas desenhou nossa casa; ela entendeu a dinâmica da nossa família inteira com sensibilidade única. O processo de briefing foi meticuloso e a entrega superou tudo o que sonhávamos.',
    projectTitle: 'Casa Marítima',
    projectYear: '2024',
    rating: 5,
    location: 'Trancoso, BA'
  },
  {
    id: 'test-2',
    name: 'Carolina Mendes de Arruda',
    role: 'Diretora de Operações, Horizonte Digital',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    quote: 'Precisávamos de um espaço que inspirasse orgulho na equipe. O projeto corporativo da Liselane Arquitetura aumentou nosso índice de satisfação interna consideravelmente. A acústica e a integração com plantas são impecáveis.',
    projectTitle: 'Sede Horizonte Digital',
    projectYear: '2023',
    rating: 5,
    location: 'Nova Lima, MG'
  },
  {
    id: 'test-3',
    name: 'Felipe & Beatriz Alcantara',
    role: 'Proprietários residenciais',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'O rigor técnico e a pontualidade da Liselane e sua equipe foram impressionantes. O apartamento tem uma fluidez poética. As soluções de iluminação e marcenaria ficaram espetaculares.',
    projectTitle: 'Apartamento Alvorada',
    projectYear: '2024',
    rating: 5,
    location: 'Lourdes, Belo Horizonte - MG'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Como funciona a primeira reunião com o escritório de Liselane?',
    a: 'A primeira consulta é uma conversa investigativa e acolhedora para compreendermos seus anseios, estilo de vida, expectativas de prazo e investimento. Apresentamos nosso método de trabalho e alinhamos a viabilidade inicial sem nenhum custo de compromisso.'
  },
  {
    q: 'Vocês atendem apenas em Contagem ou em outras regiões?',
    a: 'Nosso escritório tem sede em Contagem - MG e atendemos intensamente toda a Região Metropolitana de Belo Horizonte (Contagem, BH, Nova Lima, Betim, Lagoa Santa) e projetos residenciais em todo o Brasil e exterior, por meio de acompanhamento digital e visitas técnicas presenciais programadas.'
  },
  {
    q: 'Qual é o escopo completo de serviços prestados?',
    a: 'Atuamos desde o estudo de viabilidade e escolha do terreno, projeto arquitetônico legal e executivo, compatibilização BIM de projetos complementares (elétrica, hidráulica, estrutura), projeto de interiores detalhado até a consultoria na escolha de fornecedores e acompanhamento técnico da obra.'
  },
  {
    q: 'Quanto tempo dura o desenvolvimento de um projeto arquitetônico?',
    a: 'Para residências e reformas de alto padrão, o ciclo completo de projeto (Estudo Preliminar, Anteprojeto, Aprovação Legal e Projeto Executivo) costuma levar de 2 a 4 meses, respeitando o tempo necessário para maturação de cada detalhe em conjunto com o cliente.'
  }
];

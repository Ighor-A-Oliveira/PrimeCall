const services = [
    {
      title: "Atendimento ao Cliente",
      description:"Campanhas para promover produtos e serviços, gerar leads qualificados e aumentar vendas.",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Telemarketing Outbound",
      description:
        "Suporte personalizado e resolução de problemas para garantir uma experiência positiva",
      backgroundImage: "/assets/images/service10.png",
    },
    {
      title: "Pesquisas de Satisfação",
      description:
        "Coleta e análise de feedback para medir a satisfação dos clientes e identificar áreas de melhoria",
      backgroundImage: "/assets/images/service4.png",
    },
    {
      title: "Geração de Leads",
      description:
        "Identificação e qualificação de potenciais clientes para impulsionar o crescimento de vendas",
      backgroundImage: "/assets/images/service5.png",
    },
    {
      title: "Consultoria em Marketing",
      description:
        "Desenvolvimento de estratégias de marketing para maximizar o impacto das campanhas de telemarketing",
      backgroundImage: "/assets/images/service7.png",
    },
    {
      title: "Gerenciamento de Campanhas",
      description:
        "Planejamento, execução e monitoramento de campanhas de marketing para alcançar objetivos específicos.",
      backgroundImage: "/assets/images/service8.png",
    },
    {
      title: "Treinamento de Equipes",
      description:
        "Treinamento e capacitação de equipes de telemarketing para melhorar a eficiência e a eficácia",
      backgroundImage: "/assets/images/service9.png",
    },
    {
      title: "Análise Avançada de Dados",
      description:"Ferramentas e técnicas para analisar dados complexos, identificar padrões e gerar insights acionáveis",
      backgroundImage: "/assets/images/service3.png",
    },
  ];

  export function getServices() {
    return services;
  }
  /* const premios = [
    {
      title: "The Customer Summit Awards 2024",
      image: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Prêmio Top of Mind 2018/19",
      image: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Prêmio Reclame Aqui 2024",
      image: "/assets/images/customer-journey-management.webp",
    }
  ]; */

  const clientes = [
    {
      title: "TechSolutions",
      description:"A PrimeCall elevou nossa estratégia de telemarketing com soluções inovadoras e resultados visíveis.",
      backgroundImage: "/assets/images/techsolution.PNG",
    },
    {
      title: "FinServe",
      description:"Consultoria e geração de leads da PrimeCall foram essenciais para nosso crescimento",
      backgroundImage: "/assets/images/finserve.PNG",
    },
    {
      title: "HealthPro",
      description: "A PrimeCall nos forneceu insights valiosos e melhorou nossa estratégia de marketing",
      backgroundImage: "/assets/images/healthpro.PNG",
    },
    {
      title: "RetailWorld",
      description:"A parceria com a PrimeCall trouxe um impacto positivo significativo nas nossas campanhas",
      backgroundImage: "/assets/images/retailWorld.PNG",
    },
    {
      title: "GlobalCorp",
      description:"Soluções personalizadas e suporte contínuo da PrimeCall foram fundamentais para nosso sucesso",
      backgroundImage: "/assets/images/globalCorp.PNG",
    }
  ];

  export function getClientes() {
    return clientes;
  }

  const accordionData = [
    {
        value: 1,
        trigger: "Quais serviços de telemarketing a PrimeCall oferece?",
        text: "A PrimeCall oferece uma gama completa de serviços de telemarketing, incluindo prospecção de clientes, gestão de campanhas, suporte ao cliente, e análise avançada de dados. Nossos serviços são personalizados para atender às necessidades específicas de cada cliente."
    },
    {
        value: 2,
        trigger: "Como a PrimeCall garante a qualidade do atendimento ao cliente?",
        text: "Garantimos a qualidade do atendimento ao cliente através de rigorosos processos de treinamento e monitoramento. Nossos agentes são altamente capacitados e utilizamos ferramentas avançadas para garantir que cada interação seja eficiente e satisfatória."
    },
    {
        value: 3,
        trigger: "A PrimeCall oferece suporte para campanhas de marketing digital?",
        text: "Sim, a PrimeCall oferece suporte para campanhas de marketing digital, incluindo gerenciamento de leads e análises de desempenho. Nossos especialistas ajudam a otimizar campanhas para maximizar o retorno sobre o investimento."
    },
    {
        value: 4,
        trigger: "Quais são os requisitos para contratar os serviços da PrimeCall?",
        text: "Para contratar os serviços da PrimeCall, basta entrar em contato com nossa equipe comercial. Avaliaremos suas necessidades e apresentaremos uma proposta personalizada. Não há requisitos específicos além de uma descrição clara de suas necessidades de telemarketing."
    },
    {
        value: 5,
        trigger: "Como posso acompanhar o desempenho das minhas campanhas com a PrimeCall?",
        text: "Oferecemos ferramentas de análise avançada que permitem acompanhar o desempenho das campanhas em tempo real. Você terá acesso a relatórios detalhados e métricas-chave para monitorar o progresso e fazer ajustes conforme necessário."
    },
  ]

  export function getAccordionData() {
    return accordionData;
  }
  

  const footerLinks = [
    {
      title: "Sobre a PrimeCall",
      links: [
        { name: "Quem Somos", url: "/quem-somos" },
        { name: "Nossa Missão", url: "/missao" },
        { name: "Nossa História", url: "/historia" },
        { name: "Valores", url: "/valores" },
        { name: "Carreiras", url: "/carreiras" },
      ]
    },
    {
      title: "Nossos Serviços",
      links: [
        { name: "Consultoria Estratégica", url: "/consultoria-estrategica" },
        { name: "Telemarketing Outbound", url: "/telemarketing-outbound" },
        { name: "Pesquisas de Satisfação", url: "/pesquisas-satisfacao" },
        { name: "Geração de Leads", url: "/geracao-leads" },
        { name: "Consultoria em Marketing", url: "/consultoria-marketing" },
        { name: "Gerenciamento de Campanhas", url: "/gerenciamento-campanhas" },
        { name: "Treinamento de Equipes", url: "/treinamento-equipes" },
        { name: "Análise Avançada de Dados", url: "/analise-avancada-dados" },
      ]
    },
    {
      title: "Fale Conosco",
      links: [
        { name: "Contato Geral", url: "/contato-geral" },
        { name: "Suporte ao Cliente", url: "/suporte-cliente" },
        { name: "Solicitações de Informações", url: "/solicitacoes-informacoes" },
        { name: "Feedback", url: "/feedback" },
        { name: "Endereço", url: "/endereco" },
      ]
    },
    {
      title: "Informações Legais",
      links: [
        { name: "Termos de Serviço", url: "/termos-servico" },
        { name: "Política de Privacidade", url: "/politica-privacidade" },
        { name: "Política de Cookies", url: "/politica-cookies" },
        { name: "Aviso Legal", url: "/aviso-legal" },
        { name: "Direitos Autorais", url: "/direitos-autorais" },
      ]
    }
  ];

  export function getFooterLinks() {
    return footerLinks;
  }
  

const formFields = [
  {
    id:"name",
    name:"name",
    placeholder:"Nome",
    className:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:mr-4",
    id2:"lastName",
    name2:"lastName",
    placeholder2:"Sobrenome",
    className2:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-4 mt-4 md:mt-0"
  },
  {
    id:"email",
    name:"email",
    placeholder:"Email",
    className:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
    single: true
  },
  {
    id:"phone",
    name:"phone",
    placeholder:"Telefone",
    className:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:mr-4",
    id2:"company",
    name2:"company",
    placeholder2:"Empresa",
    className2:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-4 mt-4 md:mt-0"
    
  },
  
  {
    id:"jobTitle",
    name:"jobTitle",
    placeholder:"Titulo da sua função",
    className:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:mr-4",
    id2:"country",
    name2:"country",
    placeholder2:"Pais",
    className2:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-4 mt-4 md:mt-0"
  },
  {
    id:"industry",
    name:"industry",
    placeholder:"Industria",
    className:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:mr-4",
    id2:"foundOut",
    name2:"foundOut",
    placeholder2:"Como soube da gente?",
    className2:"w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-4 mt-4 md:mt-0"
  },
]

export function getFormFields() {
  return formFields;
}
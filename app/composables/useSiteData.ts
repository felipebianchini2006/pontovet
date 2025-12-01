/**
 * useSiteData - Composable para dados centralizados do site PontoVet
 * 
 * Este composable exporta todos os dados estáticos do site,
 * facilitando manutenção e evitando dados "chumbados" nos componentes.
 */

// ═══════════════════════════════════════════════════════════════════════════
// TIPOS (TypeScript-like documentation)
// ═══════════════════════════════════════════════════════════════════════════

export interface NavLink {
  to: string;
  label: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Differential {
  icon: string;
  title: string;
  description: string;
}

export interface MissionItem {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  whatsappLink: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    full: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
  // Coordenadas para Google Maps e Schema.org
  geo: {
    latitude: number;
    longitude: number;
  };
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  description: string;
  slogan: string;
  logo: string;
  foundedYear: number;
  priceRange: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// DADOS DO SITE
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Informações do Negócio
 */
export const businessInfo: BusinessInfo = {
  name: 'PontoVet',
  legalName: 'PontoVet Clínica Veterinária',
  description: 'Clínica veterinária completa oferecendo cirurgias, atendimentos, exames laboratoriais e banho e tosa para seu pet.',
  slogan: 'Cuidando com amor e dedicação do seu melhor amigo.',
  logo: '/logo.png',
  foundedYear: 2020,
  priceRange: '$$'
};

/**
 * Informações de Contato
 */
export const contactInfo: ContactInfo = {
  phone: '5518997359924',
  phoneFormatted: '(18) 99735-9924',
  whatsappLink: 'https://wa.me/5518997359924',
  address: {
    street: 'Rua Exemplo, 123',
    neighborhood: 'Centro',
    city: 'Presidente Prudente',
    state: 'SP',
    cep: '19010-000',
    full: 'Rua Exemplo, 123 - Centro, Presidente Prudente/SP - CEP: 19010-000'
  },
  hours: {
    weekdays: 'Segunda a Sexta: 8h às 18h',
    saturday: 'Sábados: 8h às 12h',
    sunday: 'Domingos e Feriados: Fechado'
  },
  social: {
    instagram: 'https://instagram.com/pontovet',
    facebook: 'https://facebook.com/pontovet'
  },
  // Coordenadas de Presidente Prudente (exemplo)
  geo: {
    latitude: -22.1207,
    longitude: -51.3882
  }
};

/**
 * Links do Menu de Navegação
 */
export const navLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/galeria', label: 'Galeria' }
];

/**
 * Lista de Serviços
 */
export const services: Service[] = [
  {
    id: 'cirurgias',
    icon: 'mdi-hospital-building',
    title: 'Cirurgias',
    description: 'Realizamos diversos tipos de procedimentos cirúrgicos com equipamentos modernos e equipe altamente especializada.',
    features: [
      'Cirurgias de rotina (castração, etc.)',
      'Procedimentos ortopédicos',
      'Cirurgias de tecidos moles',
      'Oncologia veterinária',
      'Anestesia segura e monitorada',
      'Pós-operatório acompanhado'
    ]
  },
  {
    id: 'atendimentos',
    icon: 'mdi-stethoscope',
    title: 'Atendimentos',
    description: 'Consultas veterinárias completas com profissionais qualificados para cuidar da saúde do seu pet.',
    features: [
      'Consultas de rotina',
      'Vacinação completa',
      'Vermifugação',
      'Controle de parasitas',
      'Avaliação clínica geral',
      'Orientação nutricional'
    ]
  },
  {
    id: 'exames',
    icon: 'mdi-microscope',
    title: 'Exames Laboratoriais',
    description: 'Análises clínicas precisas e confiáveis para diagnóstico e acompanhamento da saúde do seu animal.',
    features: [
      'Hemograma completo',
      'Bioquímica sanguínea',
      'Exame de urina',
      'Exame de fezes',
      'Testes hormonais',
      'Exames de imagem'
    ]
  },
  {
    id: 'banho-tosa',
    icon: 'mdi-shower-head',
    title: 'Banho e Tosa',
    description: 'Serviços de estética e higiene para manter seu pet limpo, bonito e saudável.',
    features: [
      'Banho com produtos de qualidade',
      'Tosa higiênica',
      'Tosa completa',
      'Corte de unhas',
      'Limpeza de ouvidos',
      'Hidratação e escovação'
    ]
  }
];

/**
 * Diferenciais da Clínica
 */
export const differentials: Differential[] = [
  {
    icon: 'mdi-account-group',
    title: 'Equipe Especializada',
    description: 'Veterinários experientes e em constante atualização'
  },
  {
    icon: 'mdi-cog',
    title: 'Equipamentos Modernos',
    description: 'Tecnologia de ponta para diagnósticos precisos'
  },
  {
    icon: 'mdi-heart',
    title: 'Atendimento Humanizado',
    description: 'Cuidado e atenção individualizada para cada pet'
  },
  {
    icon: 'mdi-home',
    title: 'Instalações Completas',
    description: 'Ambiente preparado para todos os tipos de atendimento'
  },
  {
    icon: 'mdi-shield-check',
    title: 'Compromisso com o Bem-Estar',
    description: 'Seu pet é tratado como parte da nossa família'
  },
  {
    icon: 'mdi-star',
    title: 'Serviços Completos',
    description: 'Tudo que seu pet precisa em um só lugar'
  }
];

/**
 * Missão, Visão e Valores
 */
export const missionItems: MissionItem[] = [
  {
    icon: 'mdi-target',
    title: 'Nossa Missão',
    description: 'Promover a saúde e o bem-estar dos animais através de atendimento veterinário de qualidade, com respeito, dedicação e amor.'
  },
  {
    icon: 'mdi-eye-outline',
    title: 'Nossa Visão',
    description: 'Ser referência em medicina veterinária, reconhecida pela excelência no atendimento e pelos cuidados humanizados.'
  },
  {
    icon: 'mdi-diamond-stone',
    title: 'Nossos Valores',
    description: 'Amor aos animais, ética profissional, atendimento humanizado, compromisso com a qualidade e respeito aos tutores.'
  }
];

/**
 * Perguntas Frequentes (FAQ)
 */
export const faqs: FAQ[] = [
  {
    question: 'Preciso agendar consulta?',
    answer: 'Recomendamos o agendamento prévio pelo WhatsApp para garantir o melhor atendimento.'
  },
  {
    question: 'Atendem emergências?',
    answer: 'Sim! Entre em contato pelo WhatsApp que verificaremos a disponibilidade.'
  },
  {
    question: 'Quais formas de pagamento?',
    answer: 'Aceitamos dinheiro, cartões de débito e crédito, e PIX.'
  },
  {
    question: 'Fazem atendimento a domicílio?',
    answer: 'Consulte disponibilidade pelo WhatsApp.'
  }
];

/**
 * Ícones para galeria placeholder
 */
export const galleryIcons: string[] = [
  'mdi-dog',
  'mdi-cat',
  'mdi-hospital-building',
  'mdi-stethoscope',
  'mdi-microscope',
  'mdi-shower-head',
  'mdi-needle',
  'mdi-medical-bag',
  'mdi-paw'
];

/**
 * Links do rodapé
 */
export const footerLinks = {
  quickLinks: navLinks.concat([{ to: '/contato', label: 'Contato' }]),
  services: services.map(s => s.title)
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPOSABLE
// ═══════════════════════════════════════════════════════════════════════════

export const useSiteData = () => {
  return {
    // Informações do negócio
    businessInfo,
    contactInfo,
    
    // Navegação
    navLinks,
    footerLinks,
    
    // Conteúdo
    services,
    differentials,
    missionItems,
    faqs,
    galleryIcons
  };
};

export default useSiteData;

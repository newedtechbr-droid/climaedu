/** Formatos de preparação (genéricos; não reproduzem o desenho da Jornada, que é obra conjunta). */
export const formatos = [
  {
    title: "Online, no seu ritmo",
    tag: "Assíncrono",
    text: "Cursos e trilhas por área no ambiente de aprendizagem, para cada pessoa avançar quando a rotina permitir.",
  },
  {
    title: "Ao vivo",
    tag: "Síncrono",
    text: "Encontros online com a equipe da CLIMAEDU para tirar dúvidas, discutir casos e praticar.",
  },
  {
    title: "Presencial",
    tag: "No local",
    text: "Vamos até a organização para trabalhar com as equipes a partir do plano e da realidade de cada área.",
  },
]

export const entregas = [
  {
    title: "Certificados",
    text: "Emitidos a cada conclusão, por pessoa e por trilha.",
  },
  {
    title: "Relatórios",
    text: "Participação e conclusão por área, unidade, função ou turma.",
  },
  {
    title: "Proficiência",
    text: "Resultados das avaliações, para ver o que foi compreendido e onde reforçar.",
  },
  {
    title: "Evidências rastreáveis",
    text: "Registros organizados para prestação de contas e para análise de dados.",
  },
];

export type Ods = { n: number; title: string; text: string };

export const odsPublico: Ods[] = [
  { n: 4, title: "Educação de qualidade", text: "Capacitação continuada e desenvolvimento de competências." },
  { n: 11, title: "Cidades e comunidades sustentáveis", text: "Resiliência urbana, adaptação e preparação institucional." },
  { n: 12, title: "Consumo e produção responsáveis", text: "Compras públicas sustentáveis e consumo institucional." },
  { n: 13, title: "Ação climática", text: "Capacitação para riscos climáticos, adaptação e resposta." },
  { n: 16, title: "Instituições eficazes", text: "Governança, transparência e prestação de contas." },
  { n: 17, title: "Parcerias e meios de implementação", text: "Consórcios, escolas de governo e redes institucionais." },
];

export const odsIndustria: Ods[] = [
  { n: 4, title: "Educação de qualidade", text: "Aprendizagem corporativa e desenvolvimento de competências." },
  { n: 8, title: "Trabalho decente e crescimento econômico", text: "Segurança, qualificação profissional e melhoria de rotinas." },
  { n: 9, title: "Indústria, inovação e infraestrutura", text: "Processos, inovação e transição sustentável." },
  { n: 12, title: "Consumo e produção responsáveis", text: "Resíduos, circularidade e cadeia de valor." },
  { n: 13, title: "Ação climática", text: "Capacitação para riscos climáticos e resposta." },
  { n: 16, title: "Instituições eficazes", text: "Governança, compliance, rastreabilidade e evidências." },
];

export type Referencia = { title: string; source: string; label: string; href: string };

export const referenciasPublico: Referencia[] = [
  { title: "Lei nº 12.608/2012", source: "Planalto", label: "Proteção e Defesa Civil", href: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12608.htm" },
  { title: "Lei nº 14.904/2024", source: "Planalto", label: "Planos de adaptação à mudança do clima", href: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/Lei/L14904.htm" },
  { title: "Lei nº 12.187/2009", source: "Planalto", label: "Política Nacional sobre Mudança do Clima", href: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12187.htm" },
  { title: "Lei nº 14.133/2021", source: "Planalto", label: "Licitações e contratos administrativos", href: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" },
  { title: "Guia Nacional de Contratações Sustentáveis", source: "AGU", label: "Contratações públicas sustentáveis", href: "https://www.gov.br/agu/pt-br/assuntos-1/Publicacoes/cartilhas/guia-nacional-de-contratacoes-sustentaveis-2024.pdf" },
  { title: "AR6 Synthesis Report", source: "IPCC", label: "Ciência climática internacional", href: "https://www.ipcc.ch/report/ar6/syr/" },
];

export const referenciasIndustria: Referencia[] = [
  { title: "ISO 14001", source: "ISO", label: "Gestão ambiental", href: "https://www.iso.org/standard/14001" },
  { title: "ISO 45001", source: "ISO", label: "Saúde e segurança ocupacional", href: "https://www.iso.org/standard/63787.html" },
  { title: "Lei nº 12.305/2010", source: "Planalto", label: "Política Nacional de Resíduos Sólidos", href: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm" },
  { title: "GRI Standards", source: "GRI", label: "Relato de sustentabilidade", href: "https://www.globalreporting.org/standards/" },
  { title: "IFRS S1 e S2", source: "IFRS / ISSB", label: "Divulgações relacionadas à sustentabilidade e ao clima", href: "https://www.ifrs.org/sustainability/knowledge-hub/introduction-to-issb-and-ifrs-sustainability-disclosure-standards/" },
  { title: "Objetivos de Desenvolvimento Sustentável", source: "ONU Brasil", label: "Agenda 2030", href: "https://brasil.un.org/pt-br/sdgs" },
];

export type Faq = { q: string; a: string };

const faqComum: Faq[] = [
  {
    q: "Como a CLIMAEDU prepara as equipes?",
    a: "Partimos do plano que a organização já tem e identificamos o papel de cada área. A preparação combina três formatos: cursos e trilhas online, no ritmo de cada pessoa; encontros ao vivo para tirar dúvidas e praticar; e momentos presenciais no local, com as equipes.",
  },
  {
    q: "Que recursos vocês usam?",
    a: "Um ambiente de aprendizagem próprio, personalizado com a identidade da organização, como uma universidade corporativa ou escola de governo digital. Nele ficam os cursos, vídeos, materiais de apoio, avaliações, certificados e relatórios.",
  },
  {
    q: "Que evidências ficam registradas?",
    a: "Participação, conclusão, resultados das avaliações (proficiência) e certificados, por pessoa, área, função ou turma. São registros rastreáveis, organizados para prestação de contas e para análise de dados. A CLIMAEDU não mede indicadores ambientais nem emite certificação de conformidade.",
  },
  {
    q: "O que acontece quando a equipe muda?",
    a: "Quem entra recebe a trilha da sua área, e o histórico de quem já se preparou continua registrado. Quando o plano é revisado, os conteúdos acompanham a nova versão.",
  },
];

export const faqPublico: Faq[] = [
  {
    q: "Precisamos compartilhar documentos internos para começar?",
    a: "Não. Começamos pelo que já é público, como o Plano de Contingência e a estrutura do município. A equipe valida e complementa só o necessário.",
  },
  {
    q: "A CLIMAEDU elabora ou revisa o Plano de Contingência?",
    a: "Não. O plano continua sendo do município e de quem responde por ele. A CLIMAEDU trabalha na preparação das pessoas que vão executá-lo e não substitui a Defesa Civil nem os responsáveis técnicos.",
  },
  ...faqComum.slice(2),
];

export const faqIndustria: Faq[] = [
  {
    q: "A CLIMAEDU ajuda na preparação para auditorias e certificações?",
    a: "Sim, na parte das pessoas. Preparamos as equipes nos procedimentos e normas cobrados e organizamos os registros de capacitação (participação, conclusão, avaliações e certificados) para a empresa apresentar. A auditoria e a certificação continuam com os organismos responsáveis.",
  },
  {
    q: "A CLIMAEDU substitui o SESMT, consultorias ou auditorias?",
    a: "Não. A CLIMAEDU apoia a preparação das equipes e a organização das evidências de capacitação. Não substitui o SESMT, a brigada, consultorias, auditorias nem sistemas de gestão.",
  },
  {
    q: "Quais áreas da empresa podem usar?",
    a: "Operação, manutenção, SSMA, meio ambiente, qualidade, RH e T&D, ESG, compliance e lideranças, além de terceiros e novos contratados.",
  },
  ...faqComum.slice(2),
];

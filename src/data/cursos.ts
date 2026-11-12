export type Curso = {
  title: string;
  hours: string;
  cover: string;
  category: string;
  description: string;
};

export const cursos: Curso[] = [
  {
    title: "Eventos Extremos e Resiliência",
    hours: "20h",
    cover: "/images/cursos/curso-resiliencia-climatica.png",
    category: "Resiliência climática",
    description:
      "Prevenção, resposta e adaptação a eventos extremos, para Defesa Civil, Meio Ambiente e planejamento urbano.",
  },
  {
    title: "Mudanças Climáticas e ESG",
    hours: "60h",
    cover: "/images/cursos/curso-clima-esg.png",
    category: "Clima e ESG",
    description:
      "Visão integrada para conduzir agendas climáticas e de ESG em instituições públicas e corporativas.",
  },
  {
    title: "Planejamento, Riscos e Conformidade",
    hours: "40h",
    cover: "/images/cursos/curso-planejamento-riscos.png",
    category: "Gestão pública",
    description:
      "Planejamento, gestão de riscos e conformidade nas contratações do setor público.",
  },
  {
    title: "Compras Públicas Sustentáveis",
    hours: "20h",
    cover: "/images/cursos/curso-contratacoes-sustentaveis.png",
    category: "Contratações sustentáveis",
    description:
      "Critérios de sustentabilidade aplicados às contratações públicas, para equipes de licitação e compras.",
  },
];

/** Abordagem geral da CLIMAEDU. Não reproduz a metodologia da Jornada (obra conjunta com parceiras). */
export const metodo = [
  {
    n: "01",
    title: "Partir do plano",
    text: "Começamos pelo que já existe e é público: o plano, as responsabilidades e quem faz o quê. Vocês validam o retrato.",
  },
  {
    n: "02",
    title: "Preparar por área",
    text: "Cada área recebe o que precisa saber e fazer no seu papel, em linguagem de quem executa, com prática e materiais de apoio.",
  },
  {
    n: "03",
    title: "Manter vivo",
    text: "Quando a equipe muda ou o plano é revisado, o preparo acompanha. A gestão enxerga onde avançou e o que ainda falta.",
  },
];

export const limites = [
  "Não elaboramos nem revisamos o plano. Ele continua sendo de vocês.",
  "Não fazemos auditoria nem emitimos certificação de conformidade.",
  "Não substituímos a Defesa Civil nem os responsáveis técnicos.",
  "Não prometemos acesso a recursos ou financiamentos.",
];

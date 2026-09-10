import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import industrialCourseRating from "@/assets/industrial-course-rating.png";
import mockupEmpresa from "@/assets/mockup-plataforma-viposa.png";
import {
  Sparkles,
  Leaf,
  Recycle,
  HardHat,
  FileBarChart,
  ShieldCheck,
  ClipboardCheck,
  Users,
  AlertTriangle,
  FileText,
  ExternalLink,
  CheckCircle2,
  Network,
  Brain,
} from "lucide-react";

const pagePublished = "2026-07-09";
const pageModified = "2026-07-10";

const desafios = [
  {
    icon: AlertTriangle,
    text: "Normas, políticas, procedimentos e compromissos precisam virar aprendizagem clara para diferentes áreas e funções.",
  },
  {
    icon: Users,
    text: "ESG, RH/T&D, compliance, SSMA e operação dependem de uma base comum de aprendizagem.",
  },
  {
    icon: FileText,
    text: "Equipes aprendem melhor quando o conteúdo conversa com decisões e situações do trabalho.",
  },
  {
    icon: Network,
    text: "Dados e registros apoiam gestão, auditorias e melhoria contínua depois da aprendizagem.",
  },
];

const blocos = [
  {
    icon: Sparkles,
    title: "Universidade corporativa",
    text: "Trilhas online para novos colaboradores, terceiros, lideranças e equipes de operação.",
  },
  {
    icon: Leaf,
    title: "ESG e clima",
    text: "Trilhas alinhadas a compromissos, riscos, cultura e metas corporativas.",
  },
  {
    icon: Recycle,
    title: "Resíduos e circularidade",
    text: "PNRS, logística reversa, segregação, destinação e rotina operacional.",
  },
  {
    icon: HardHat,
    title: "SSMA e operação",
    text: "Conteúdo aplicado à segurança, meio ambiente, riscos e continuidade operacional.",
  },
  {
    icon: Brain,
    title: "IA para estruturar conteúdo",
    text: "Materiais, documentos e procedimentos internos transformados em trilhas de aprendizagem com curadoria.",
  },
  {
    icon: FileBarChart,
    title: "Certificados e dados",
    text: "Indicadores, certificados e relatórios por unidade, área, função ou turma.",
  },
];

const aplicacoes = [
  {
    icon: Leaf,
    title: "ESG aplicado",
    text: "Transformar diretrizes e compromissos de sustentabilidade em jornadas de aprendizagem conectadas ao trabalho.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance e gestão de riscos",
    text: "Apoiar equipes na compreensão de temas ambientais, climáticos, regulatórios e operacionais que exigem capacitação contínua.",
  },
  {
    icon: Users,
    title: "RH, T&D e cultura",
    text: "Criar jornadas de aprendizagem para onboarding, reciclagens periódicas e desenvolvimento de competências por função.",
  },
  {
    icon: HardHat,
    title: "Operações e SSMA",
    text: "Levar conhecimento aplicado para áreas operacionais, segurança, saúde, meio ambiente, manutenção e unidades produtivas.",
  },
];

const experienciaOnline = [
  "Trilhas por função, unidade, turma, tema ou ciclo de reciclagem.",
  "Motor de inteligência artificial para transformar documentos e materiais internos em aprendizagem.",
  "Conteúdo em linguagem simples, com vídeos, aulas curtas, quizzes e atividades gamificadas.",
  "Certificados e relatórios para apoiar RH, ESG, SSMA, compliance e auditorias internas.",
  "Dashboards para acompanhar participação, conclusão, engajamento e lacunas de aprendizagem.",
];

const evidencias = [
  {
    title: "Participação",
    text: "Quem acessou, iniciou ou participou das trilhas de capacitação.",
  },
  {
    title: "Conclusão",
    text: "Quais colaboradores, áreas ou unidades concluíram cada jornada.",
  },
  {
    title: "Proficiência",
    text: "Resultados de quizzes, avaliações, checkpoints e atividades aplicadas.",
  },
  {
    title: "Certificados",
    text: "Registros individuais ou por turma para comprovação de capacitação.",
  },
  {
    title: "Relatórios",
    text: "Exportações para gestão, auditorias, comitês internos e prestação de contas.",
  },
  {
    title: "Dashboards",
    text: "Visão por área, unidade, função, turma, tema ou período.",
  },
];

const odsRelacionados = [
  {
    number: "ODS 4",
    title: "Educação de qualidade",
    text: "Aprendizagem corporativa, desenvolvimento de competências e capacitação continuada.",
  },
  {
    number: "ODS 8",
    title: "Trabalho decente e crescimento econômico",
    text: "Cultura organizacional, segurança, qualificação profissional e melhoria de rotinas.",
  },
  {
    number: "ODS 9",
    title: "Indústria, inovação e infraestrutura",
    text: "Capacitação para inovação, gestão, processos e transição sustentável.",
  },
  {
    number: "ODS 12",
    title: "Consumo e produção responsáveis",
    text: "Resíduos, circularidade, compras, cadeia de valor e rotinas de consumo institucional.",
  },
  {
    number: "ODS 13",
    title: "Ação climática",
    text: "Formação de equipes para compreender riscos climáticos, adaptação e resposta corporativa.",
  },
  {
    number: "ODS 16",
    title: "Instituições eficazes",
    text: "Governança, compliance, documentação, rastreabilidade e evidências.",
  },
];

const referenciasCorporativas = [
  {
    title: "GRI Standards",
    source: "GRI",
    label: "Relato de sustentabilidade",
    description:
      "Referência internacional para relato de impactos econômicos, ambientais e sociais.",
    href: "https://www.globalreporting.org/standards/",
  },
  {
    title: "IFRS Sustainability Disclosure Standards",
    source: "IFRS / ISSB",
    label: "Divulgações financeiras relacionadas à sustentabilidade",
    description:
      "Referência internacional para divulgação de riscos e oportunidades relacionados à sustentabilidade e ao clima.",
    href: "https://www.ifrs.org/sustainability/knowledge-hub/introduction-to-issb-and-ifrs-sustainability-disclosure-standards/",
  },
  {
    title: "ISO 14001",
    source: "ISO",
    label: "Gestão ambiental",
    description:
      "Referência internacional para sistemas de gestão ambiental e melhoria de desempenho ambiental.",
    href: "https://www.iso.org/standard/14001",
  },
  {
    title: "ISO 45001",
    source: "ISO",
    label: "Saúde e segurança ocupacional",
    description:
      "Referência internacional para sistemas de gestão de saúde e segurança ocupacional.",
    href: "https://www.iso.org/standard/63787.html",
  },
  {
    title: "Lei nº 12.305/2010",
    source: "Planalto",
    label: "Política Nacional de Resíduos Sólidos",
    description:
      "Referência normativa brasileira para resíduos sólidos, responsabilidade compartilhada, logística reversa e gestão integrada.",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm",
  },
  {
    title: "Objetivos de Desenvolvimento Sustentável",
    source: "ONU Brasil",
    label: "Agenda 2030 e ODS",
    description:
      "Agenda global relacionada a educação, trabalho, produção responsável, clima, instituições e parcerias.",
    href: "https://brasil.un.org/pt-br/sdgs",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CLIMAEDU para empresas",
  url: "https://climaedu.com/empresas",
  datePublished: pagePublished,
  dateModified: pageModified,
  inLanguage: "pt-BR",
  citation: referenciasCorporativas.map((reference) => reference.href),
  description:
    "A CLIMAEDU é um ambiente de aprendizagem online para empresas que transforma ESG, clima, sustentabilidade, compliance ambiental, SSMA e gestão de riscos em aprendizagem aplicada, trilhas, certificados, dashboards, relatórios e evidências de capacitação.",
  about: [
    {
      "@type": "Thing",
      name: "ESG aplicado",
    },
    {
      "@type": "Thing",
      name: "Compliance ambiental",
    },
    {
      "@type": "Thing",
      name: "Gestão de riscos",
    },
    {
      "@type": "Thing",
      name: "RH e treinamento corporativo",
    },
    {
      "@type": "Thing",
      name: "SSMA",
    },
    {
      "@type": "Thing",
      name: "Auditorias",
    },
    {
      "@type": "Thing",
      name: "Sustentabilidade corporativa",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Indústrias reguladas (química, papel e celulose, metalurgia, alimentos, agroindústria, couro), áreas de ESG, RH, treinamento e desenvolvimento, compliance, meio ambiente, SSMA, operações e gestão de riscos",
  },
  isPartOf: {
    "@type": "WebSite",
    name: "CLIMAEDU",
    url: "https://climaedu.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "CLIMAEDU",
    url: "https://climaedu.com/",
    email: "contato@newedtech.com.br",
    telephone: "+55 48 99160-6518",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CLIMAEDU para empresas",
  serviceType:
    "Ambiente de aprendizagem online para ESG, sustentabilidade, compliance e aprendizagem aplicada",
  provider: {
    "@type": "Organization",
    name: "CLIMAEDU",
    url: "https://climaedu.com/",
  },
  areaServed: "BR",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Indústrias reguladas, áreas de ESG, RH/T&D, compliance, SSMA e operações",
  },
  description:
    "Ambiente de aprendizagem online para capacitar equipes corporativas, organizar trilhas por área ou função, emitir certificados, acompanhar participação e gerar evidências de capacitação.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://climaedu.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Empresas",
      item: "https://climaedu.com/empresas",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como a CLIMAEDU apoia empresas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLIMAEDU apoia empresas ao transformar diretrizes de ESG, clima, sustentabilidade, compliance ambiental, SSMA e gestão de riscos em aprendizagem aplicada por área ou função.",
      },
    },
    {
      "@type": "Question",
      name: "A CLIMAEDU substitui auditorias, consultorias ou sistemas de gestão ambiental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A CLIMAEDU não substitui auditorias, consultorias, pareceres técnicos, análise jurídica ou sistemas de gestão ambiental. A plataforma apoia a capacitação de equipes e a geração de evidências de aprendizagem.",
      },
    },
    {
      "@type": "Question",
      name: "Que áreas da empresa podem usar a CLIMAEDU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLIMAEDU pode apoiar áreas de ESG, RH/T&D, compliance, meio ambiente, SSMA, operações, comunicação interna, qualidade, gestão de riscos e cadeia de valor.",
      },
    },
    {
      "@type": "Question",
      name: "Que evidências a CLIMAEDU gera para empresas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLIMAEDU gera evidências de aprendizagem, como participação, engajamento, conclusão, proficiência, certificados, relatórios e dashboards por área, unidade, função, turma ou período.",
      },
    },
  ],
};

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      {
        title: "Indústrias | CLIMAEDU — Aprendizagem ambiental e climática aplicada",
      },
      {
        name: "description",
        content:
          "A CLIMAEDU transforma normas, políticas, compromissos e conhecimentos técnicos da empresa em aprendizagem aplicada para diferentes áreas e funções.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "author",
        content: "CLIMAEDU",
      },
      {
        name: "date",
        content: pageModified,
      },
      {
        name: "datePublished",
        content: pagePublished,
      },
      {
        name: "dateModified",
        content: pageModified,
      },
      {
        property: "article:published_time",
        content: "2026-07-09T00:00:00-03:00",
      },
      {
        property: "article:modified_time",
        content: "2026-07-10T00:00:00-03:00",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "CLIMAEDU",
      },
      {
        property: "og:title",
        content: "CLIMAEDU para indústrias | Aprendizagem ambiental e climática aplicada",
      },
      {
        property: "og:description",
        content:
          "Solução da NewEdTech para transformar conhecimentos ambientais, climáticos e socioambientais em aprendizagem aplicada.",
      },
      {
        property: "og:url",
        content: "https://climaedu.com/empresas",
      },
      {
        property: "og:image",
        content: "https://climaedu.com/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "CLIMAEDU para indústrias | Aprendizagem ambiental e climática aplicada",
      },
      {
        name: "twitter:description",
        content:
          "Ambiente de aprendizagem online para capacitar equipes corporativas e gerar evidências de aprendizagem.",
      },
      {
        name: "twitter:image",
        content: "https://climaedu.com/og-image.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://climaedu.com/empresas",
      },
    ],
  }),
  component: Empresas,
});

function Empresas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Indústrias
              </p>

              <h1 className="mt-4 text-4xl font-medium leading-[1.05] text-primary-dark md:text-6xl">
                Plataforma de aprendizagem para levar conhecimento técnico à operação.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/78 md:text-xl">
                A CLIMAEDU transforma normas, políticas, procedimentos, materiais e conhecimentos
                técnicos da empresa em jornadas online de aprendizagem adequadas a cada área e
                função.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/72">
                Da liderança à operação, um motor de inteligência artificial organiza o conteúdo e
                a curadoria NewEdTech transforma esse material em conteúdo simplificado, atividades
                gamificadas e checkpoints para aplicar no trabalho.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/62">
                A empresa acompanha a aprendizagem e mantém registros úteis para gestão, auditorias,
                programas internos e rotinas de certificação. A CLIMAEDU não substitui
                certificadoras, consultorias, auditorias ou sistemas de gestão ambiental.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.02}>
            <div className="mt-8 max-w-3xl rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Cliente industrial
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                A CLIMAEDU apoia jornadas de aprendizagem em ambiente industrial, com conteúdo
                aplicado à realidade das equipes e lideranças.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <FadeIn delay={0.04}>
              <img
                src={industrialCourseRating}
                alt="Tela da plataforma CLIMAEDU com unidade de curso industrial e avaliação de aprendizagem"
                className="h-full max-h-[360px] w-full rounded-2xl border border-border object-cover shadow-sm"
              />
            </FadeIn>

            <FadeIn delay={0.08}>
              <img
                src={mockupEmpresa}
                alt="Mockup de plataforma corporativa com cursos, trilhas e relatórios"
                className="h-full max-h-[420px] w-full object-contain drop-shadow-[0_24px_42px_rgba(20,30,40,0.25)]"
              />
            </FadeIn>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FadeIn delay={0.04}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Aprendizagem
                </p>
                <p className="mt-3 text-lg font-medium text-primary-dark">
                  Conhecimentos técnicos transformados em jornadas por função.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  RH/T&D
                </p>
                <p className="mt-3 text-lg font-medium text-primary-dark">
                  Jornadas por área, unidade, função, turma ou ciclo de reciclagem.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Acompanhamento
                </p>
                <p className="mt-3 text-lg font-medium text-primary-dark">
                  Dados e registros depois da experiência de aprendizagem.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <SectionTitle
            eyebrow="O desafio"
            title="Conhecimento corporativo precisa chegar à prática."
            subtitle="Compromissos, políticas e documentos internos ganham força quando viram aprendizagem simples, aplicada e compreensível para cada função."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {desafios.map((item, index) => (
              <FadeIn key={item.text} delay={index * 0.04}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-terracotta) 14%, white)",
                      color: "var(--color-terracotta)",
                    }}
                  >
                    <item.icon size={18} />
                  </div>

                  <p className="mt-4 text-[17px] leading-[1.45] text-foreground/88">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionTitle
            eyebrow="O que entregamos"
            title="Uma experiência online para aprendizagem corporativa"
            subtitle="A CLIMAEDU usa inteligência artificial com curadoria para transformar materiais em jornadas digitais aplicadas à realidade corporativa."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blocos.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <item.icon size={20} />
                  </div>

                  <h3 className="mt-4 text-[19px] font-semibold text-primary-dark">{item.title}</h3>

                  <p className="mt-2 text-[16px] leading-[1.55] text-foreground/80">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {experienciaOnline.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-5">
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-primary" aria-hidden />
                <p className="text-base leading-relaxed text-foreground/76">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Aprendizagem aplicada
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Da diretriz corporativa à rotina: onde a capacitação precisa chegar
            </h2>

            <p className="mt-4 text-foreground/75">
              Relatórios, políticas, códigos internos e compromissos de sustentabilidade precisam
              chegar às equipes. A CLIMAEDU apoia essa tradução por meio de inteligência
              artificial, metodologia NewEdTech, trilhas, conteúdos aplicados, certificados,
              dashboards e evidências de capacitação.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {aplicacoes.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-deep">
                    <item.icon size={20} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-primary-dark">{item.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Evidências corporativas
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Capacitação que pode ser acompanhada, registrada e reportada
            </h2>

            <p className="mt-4 text-foreground/75">
              A CLIMAEDU não mede diretamente indicadores ambientais ou de sustentabilidade da
              empresa. Ela mede e evidencia o ambiente de aprendizagem: participação, engajamento,
              conclusão, proficiência, certificados e relatórios de capacitação.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {evidencias.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-primary" />

                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark">{item.title}</h3>

                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Agenda 2030
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Aderência a ODS por cultura, capacitação e evidência
            </h2>

            <p className="mt-4 text-foreground/75">
              A CLIMAEDU dialoga com diferentes Objetivos de Desenvolvimento Sustentável quando
              empresas precisam formar equipes, organizar rotinas, fortalecer cultura, documentar
              capacitação e apoiar compromissos de sustentabilidade.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {odsRelacionados.map((ods) => (
              <article
                key={ods.number}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {ods.number}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-primary-dark">{ods.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{ods.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Referências institucionais
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Base técnica relacionada à atuação corporativa
            </h2>

            <p className="mt-4 text-foreground/75">
              A atuação da CLIMAEDU dialoga com referências relacionadas a relato de
              sustentabilidade, riscos climáticos, gestão ambiental, saúde e segurança, resíduos,
              Agenda 2030 e desenvolvimento de capacidades corporativas.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              Fontes institucionais consultadas: GRI, IFRS/ISSB, ISO, Planalto e ONU Brasil. As
              referências abaixo não substituem análise jurídica, técnica, normativa, auditoria ou
              sistema de gestão da empresa.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {referenciasCorporativas.map((reference) => (
              <a
                key={reference.href}
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Fonte: {reference.source}
                  </p>

                  <ExternalLink
                    size={15}
                    className="text-foreground/40 transition group-hover:text-primary"
                  />
                </div>

                <h3 className="mt-3 text-lg font-semibold text-primary-dark group-hover:text-primary">
                  {reference.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-foreground/70">{reference.label}</p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {reference.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Perguntas frequentes
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Respostas diretas para empresas
            </h2>

            <p className="mt-4 text-foreground/70">
              Informações institucionais para áreas de ESG, RH/T&D, compliance, SSMA, operações e
              gestão de riscos.
            </p>

            <p className="mt-3 text-sm text-foreground/60">
              Publicado em 09/07/2026 · Atualizado em 10/07/2026.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-1 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    Como a CLIMAEDU apoia empresas?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    A CLIMAEDU apoia empresas ao transformar diretrizes de ESG, clima,
                    sustentabilidade, compliance ambiental, SSMA e gestão de riscos em aprendizagem
                    aplicada, trilhas por área ou função, certificados, relatórios e evidências de
                    capacitação.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-1 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    A CLIMAEDU substitui auditorias ou sistemas de gestão?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    Não. A CLIMAEDU não substitui auditorias, consultorias, pareceres técnicos,
                    análise jurídica ou sistemas de gestão ambiental. Ela apoia a capacitação de
                    equipes e a geração de evidências de aprendizagem.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-1 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    Que áreas da empresa podem usar a CLIMAEDU?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    A CLIMAEDU pode apoiar áreas de ESG, RH/T&D, compliance, meio ambiente, SSMA,
                    operações, comunicação interna, qualidade, gestão de riscos e cadeia de valor.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-1 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    Que evidências a CLIMAEDU gera?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    A CLIMAEDU gera evidências de aprendizagem, como participação, engajamento,
                    conclusão, proficiência, certificados, relatórios e dashboards por área,
                    unidade, função, turma ou período.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Levar conhecimento ambiental e climático à operação"
        subtitle="Converse com a NewEdTech sobre como transformar conteúdos técnicos em aprendizagem aplicada para as equipes."
        ctaLabel="Agendar uma conversa"
      />
    </>
  );
}

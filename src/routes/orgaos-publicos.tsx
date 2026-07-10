import { createFileRoute } from "@tanstack/react-router";
import { TrilhasPorAreaSection } from "@/components/sections/TrilhasPorAreaSection";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import mockupRelatorios from "@/assets/mockup-climaedu.png";
import {
  AlertTriangle,
  Users,
  ShoppingCart,
  FileWarning,
  BarChart3,
  FileText,
  Landmark,
  ShieldCheck,
  ClipboardCheck,
  BookOpen,
  Network,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const pagePublished = "2026-07-09";
const pageModified = "2026-07-10";

const problemas = [
  {
    icon: Users,
    text: "Capacitação fragmentada entre secretarias, unidades e equipes.",
  },
  {
    icon: AlertTriangle,
    text: "Papéis, fluxos e rotinas pouco compreendidos diante de riscos climáticos.",
  },
  {
    icon: ShoppingCart,
    text: "Compras, planos, respostas e providências institucionais podem atrasar.",
  },
  {
    icon: FileWarning,
    text: "Faltam evidências consolidadas de preparação, participação e conclusão.",
  },
];

const solucao = [
  {
    icon: Users,
    text: "Trilhas por perfil, função, secretaria, unidade ou grupo de atuação.",
  },
  {
    icon: BarChart3,
    text: "Dashboards de participação, engajamento, conclusão e proficiência.",
  },
  {
    icon: FileText,
    text: "Relatórios exportáveis para gestão, controle preventivo e prestação de contas.",
  },
];

const pilares = [
  {
    icon: Landmark,
    title: "Capacidade institucional",
    text: "Transformar normas, planos, guias e diretrizes em aprendizagem aplicada para equipes públicas.",
  },
  {
    icon: ShieldCheck,
    title: "Gestão de riscos",
    text: "Apoiar a preparação de equipes para compreender riscos, papéis, fluxos e responsabilidades.",
  },
  {
    icon: ClipboardCheck,
    title: "Compras sustentáveis",
    text: "Conectar critérios de sustentabilidade, planejamento, ETP, capacitação e rotinas institucionais.",
  },
  {
    icon: FileText,
    title: "Evidências de capacitação",
    text: "Gerar registros de participação, conclusão, certificados e relatórios para acompanhamento institucional.",
  },
];

const odsRelacionados = [
  {
    number: "ODS 4",
    title: "Educação de qualidade",
    text: "Capacitação continuada, trilhas de aprendizagem e desenvolvimento de competências.",
  },
  {
    number: "ODS 11",
    title: "Cidades e comunidades sustentáveis",
    text: "Resiliência urbana, adaptação, planejamento territorial e preparação institucional.",
  },
  {
    number: "ODS 12",
    title: "Consumo e produção responsáveis",
    text: "Compras públicas sustentáveis, critérios de sustentabilidade e consumo institucional.",
  },
  {
    number: "ODS 13",
    title: "Ação climática",
    text: "Formação de equipes para compreender riscos climáticos, adaptação e resposta.",
  },
  {
    number: "ODS 16",
    title: "Instituições eficazes",
    text: "Governança, transparência, controle preventivo, documentação e prestação de contas.",
  },
  {
    number: "ODS 17",
    title: "Parcerias e implementação",
    text: "Consórcios, escolas de governo, órgãos técnicos, universidades e redes institucionais.",
  },
];

const referenciasInstitucionais = [
  {
    title: "Lei nº 14.133/2021",
    source: "Planalto",
    label: "Licitações e contratos administrativos",
    description:
      "Referência normativa para planejamento, governança, sustentabilidade, gestão de riscos e contratações públicas.",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm",
  },
  {
    title: "Guia Nacional de Contratações Sustentáveis",
    source: "AGU",
    label: "Contratações públicas sustentáveis",
    description:
      "Referência técnica para apoiar gestores públicos na incorporação de critérios de sustentabilidade nas contratações.",
    href: "https://www.gov.br/agu/pt-br/assuntos-1/Publicacoes/cartilhas/guia-nacional-de-contratacoes-sustentaveis-2024.pdf",
  },
  {
    title: "Lei nº 12.187/2009",
    source: "Planalto",
    label: "Política Nacional sobre Mudança do Clima",
    description:
      "Marco nacional relacionado à política climática, adaptação, mitigação e redução de vulnerabilidades.",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12187.htm",
  },
  {
    title: "Lei nº 14.904/2024",
    source: "Planalto",
    label: "Planos de adaptação à mudança do clima",
    description:
      "Referência sobre diretrizes para elaboração de planos de adaptação, agenda diretamente ligada à capacidade institucional.",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/Lei/L14904.htm",
  },
  {
    title: "Lei nº 12.608/2012",
    source: "Planalto",
    label: "Proteção e Defesa Civil",
    description:
      "Referência para prevenção, preparação, resposta, recuperação e gestão de riscos de desastres.",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12608.htm",
  },
  {
    title: "Objetivos de Desenvolvimento Sustentável",
    source: "ONU Brasil",
    label: "Agenda 2030 e ODS",
    description:
      "Agenda global relacionada a educação, instituições eficazes, cidades sustentáveis, clima e meios de implementação.",
    href: "https://brasil.un.org/pt-br/sdgs",
  },
  {
    title: "AR6 Synthesis Report",
    source: "IPCC",
    label: "Ciência climática internacional",
    description:
      "Relatório de síntese sobre mudança climática, impactos, riscos, adaptação e mitigação.",
    href: "https://www.ipcc.ch/report/ar6/syr/",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CLIMAEDU para órgãos públicos",
  url: "https://climaedu.com/orgaos-publicos",
  datePublished: pagePublished,
  dateModified: pageModified,
  inLanguage: "pt-BR",
  citation: referenciasInstitucionais.map((reference) => reference.href),
  description:
    "A CLIMAEDU apoia órgãos públicos a transformar normas, planos, guias e diretrizes em aprendizagem aplicada, trilhas por função, certificados, relatórios e evidências de capacitação.",
  about: [
    {
      "@type": "Thing",
      name: "Capacidade institucional",
    },
    {
      "@type": "Thing",
      name: "Gestão de riscos",
    },
    {
      "@type": "Thing",
      name: "Compras públicas sustentáveis",
    },
    {
      "@type": "Thing",
      name: "Capacitação de agentes públicos",
    },
    {
      "@type": "Thing",
      name: "Objetivos de Desenvolvimento Sustentável",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Órgãos públicos, prefeituras, escolas de governo, consórcios públicos, secretarias e equipes técnicas",
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
  name: "CLIMAEDU para órgãos públicos",
  serviceType:
    "Aprendizagem aplicada e capacitação institucional para o setor público",
  provider: {
    "@type": "Organization",
    name: "CLIMAEDU",
    url: "https://climaedu.com/",
  },
  areaServed: "BR",
  audience: {
    "@type": "GovernmentOrganization",
    name: "Órgãos públicos",
  },
  description:
    "Plataforma de aprendizagem aplicada para capacitar equipes públicas, organizar trilhas por função, emitir certificados, acompanhar participação e gerar evidências de capacitação.",
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
      name: "Órgãos públicos",
      item: "https://climaedu.com/orgaos-publicos",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como a CLIMAEDU apoia órgãos públicos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLIMAEDU apoia órgãos públicos ao transformar normas, planos, guias e diretrizes em aprendizagem aplicada, trilhas por função, certificados, relatórios e evidências de capacitação.",
      },
    },
    {
      "@type": "Question",
      name: "A CLIMAEDU substitui consultorias, pareceres técnicos ou análise jurídica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A CLIMAEDU não substitui consultorias, pareceres técnicos, análise jurídica ou decisão administrativa. A plataforma apoia a capacitação de equipes e a geração de evidências de aprendizagem.",
      },
    },
    {
      "@type": "Question",
      name: "A CLIMAEDU ajuda na implementação de agendas de sustentabilidade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A CLIMAEDU apoia instituições públicas na capacitação de equipes para compreender e aplicar temas relacionados a sustentabilidade, gestão de riscos, compras públicas sustentáveis, adaptação climática e ODS.",
      },
    },
    {
      "@type": "Question",
      name: "Que evidências a CLIMAEDU gera para órgãos públicos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLIMAEDU gera evidências de aprendizagem, como participação, engajamento, conclusão, proficiência, certificados, relatórios e dashboards. Ela não mede diretamente indicadores ambientais ou urbanos.",
      },
    },
  ],
};

export const Route = createFileRoute("/orgaos-publicos")({
  head: () => ({
    meta: [
      {
        title:
          "Órgãos públicos | CLIMAEDU — Capacidade institucional e evidências",
      },
      {
        name: "description",
        content:
          "Aprendizagem aplicada para órgãos públicos: trilhas por função, certificados, dashboards e evidências para apoiar capacidade institucional.",
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
        content:
          "CLIMAEDU para órgãos públicos | Capacidade institucional e evidências",
      },
      {
        property: "og:description",
        content:
          "Transforme conhecimento técnico em trilhas, rotinas, certificados, relatórios e evidências de capacitação para equipes públicas.",
      },
      {
        property: "og:url",
        content: "https://climaedu.com/orgaos-publicos",
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
        content:
          "CLIMAEDU para órgãos públicos | Capacidade institucional e evidências",
      },
      {
        name: "twitter:description",
        content:
          "Aprendizagem aplicada para capacitar equipes públicas e gerar evidências de capacitação.",
      },
      {
        name: "twitter:image",
        content: "https://climaedu.com/og-image.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://climaedu.com/orgaos-publicos",
      },
    ],
  }),
  component: OrgaosPublicos,
});

function OrgaosPublicos() {
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
                Órgãos públicos
              </p>

              <h1 className="mt-4 text-4xl font-medium leading-[1.05] text-primary-dark md:text-6xl">
                Capacidade institucional para transformar normas, planos e guias
                em rotina
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/78 md:text-xl">
                A CLIMAEDU apoia órgãos públicos a transformar conhecimento
                técnico sobre clima, sustentabilidade, gestão de riscos e
                políticas públicas em aprendizagem aplicada, trilhas por função,
                certificados, relatórios e evidências de capacitação.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/62">
                A plataforma não substitui consultorias, pareceres técnicos,
                análise jurídica ou decisão administrativa. Ela fortalece o
                ambiente de aprendizagem institucional para que equipes
                compreendam, apliquem e documentem melhor suas rotinas.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FadeIn delay={0.04}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Aprendizagem
                </p>
                <p className="mt-3 text-lg font-medium text-primary-dark">
                  Trilhas por perfil, função e unidade.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Gestão
                </p>
                <p className="mt-3 text-lg font-medium text-primary-dark">
                  Acompanhamento de participação, conclusão e proficiência.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Evidência
                </p>
                <p className="mt-3 text-lg font-medium text-primary-dark">
                  Certificados, dashboards e relatórios exportáveis.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <SectionTitle
            eyebrow="O problema"
            title="O gargalo não é apenas acessar conteúdo técnico. É transformar diretrizes em prática institucional."
            subtitle="Leis, planos, guias, alertas e metas só geram valor quando chegam às equipes em formato compreensível, aplicável e acompanhado."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {problemas.map((p, i) => (
              <FadeIn key={p.text} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor:
                        "color-mix(in oklab, var(--color-terracotta) 14%, white)",
                      color: "var(--color-terracotta)",
                    }}
                  >
                    <p.icon size={18} />
                  </div>

                  <p className="mt-4 text-[17px] leading-[1.45] text-foreground/88">
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:py-20">
          <FadeIn>
            <SectionTitle
              eyebrow="Na prática"
              title="Da capacitação ao relatório"
              subtitle="O aprendizado deixa rastro: quem participou, o que concluiu, quais competências foram trabalhadas e quais evidências podem apoiar gestão, auditoria, controle e prestação de contas."
            />

            <div className="mt-8 grid gap-3">
              {solucao.map((s, i) => (
                <div
                  key={s.text}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary-deep">
                    <s.icon size={17} />
                  </span>

                  <p className="text-[16.5px] leading-snug text-foreground/85">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative">
              <img
                src={mockupRelatorios}
                alt="Mockup de relatórios, dashboards e evidências da plataforma CLIMAEDU"
                className="w-full object-contain drop-shadow-[0_26px_46px_rgba(20,30,40,0.24)]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Capacidade institucional
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Da exigência institucional à aprendizagem aplicada
            </h2>

            <p className="mt-4 text-foreground/75">
              A legislação, os guias técnicos e as agendas de sustentabilidade
              ampliam a necessidade de planejamento, gestão de riscos,
              capacitação de equipes, documentação e prestação de contas. A
              CLIMAEDU apoia essa agenda pelo caminho da aprendizagem aplicada.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {pilares.map((pilar, index) => (
              <FadeIn key={pilar.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-deep">
                    <pilar.icon size={20} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-primary-dark">
                    {pilar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {pilar.text}
                  </p>
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
              Agenda 2030
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Aderência a ODS por aprendizagem, rotina e evidência
            </h2>

            <p className="mt-4 text-foreground/75">
              A CLIMAEDU dialoga com diferentes Objetivos de Desenvolvimento
              Sustentável, especialmente quando a instituição precisa formar
              equipes, organizar rotinas, documentar capacitação e fortalecer
              sua capacidade de implementação.
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

                <h3 className="mt-3 text-lg font-semibold text-primary-dark">
                  {ods.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {ods.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrilhasPorAreaSection />

      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Referências institucionais
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Base técnica relacionada à atuação pública
            </h2>

            <p className="mt-4 text-foreground/75">
              A atuação da CLIMAEDU dialoga com agendas públicas e referências
              técnicas relacionadas a sustentabilidade, gestão de riscos,
              adaptação climática, defesa civil, educação, compras públicas
              sustentáveis e desenvolvimento de capacidades institucionais.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              Fontes institucionais consultadas: Planalto, Advocacia-Geral da
              União, ONU Brasil e IPCC. As referências abaixo não substituem
              análise jurídica, técnica ou normativa do órgão contratante.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {referenciasInstitucionais.map((reference) => (
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

                <p className="mt-1 text-sm font-medium text-foreground/70">
                  {reference.label}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {reference.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Perguntas frequentes
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Respostas diretas para órgãos públicos
            </h2>

            <p className="mt-4 text-foreground/70">
              Informações institucionais para gestores públicos, equipes
              técnicas, escolas de governo, consórcios públicos e ferramentas de
              busca ou IA.
            </p>

            <p className="mt-3 text-sm text-foreground/60">
              Publicado em 09/07/2026 · Atualizado em 10/07/2026.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-primary"
                />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    Como a CLIMAEDU apoia órgãos públicos?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    A CLIMAEDU apoia órgãos públicos ao transformar normas,
                    planos, guias e diretrizes em aprendizagem aplicada, trilhas
                    por função, certificados, relatórios e evidências de
                    capacitação.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-primary"
                />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    A CLIMAEDU substitui consultorias ou pareceres técnicos?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    Não. A CLIMAEDU não substitui consultorias, pareceres
                    técnicos, análise jurídica ou decisão administrativa. A
                    plataforma apoia a capacitação e a geração de evidências de
                    aprendizagem.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-primary"
                />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    A CLIMAEDU ajuda na implementação de agendas de
                    sustentabilidade?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    Sim. A CLIMAEDU apoia instituições públicas na capacitação
                    de equipes para compreender e aplicar temas relacionados a
                    sustentabilidade, gestão de riscos, compras públicas
                    sustentáveis, adaptação climática e ODS.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-primary"
                />

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    Que evidências a CLIMAEDU gera?
                  </h3>

                  <p className="mt-3 text-foreground/75">
                    A CLIMAEDU gera evidências de aprendizagem, como
                    participação, engajamento, conclusão, proficiência,
                    certificados, relatórios e dashboards. Ela não mede
                    diretamente indicadores ambientais ou urbanos.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Agendar demonstração para órgão público"
        subtitle="Veja exemplos de trilhas, certificados, dashboards e relatórios aplicados ao seu contexto institucional."
      />
    </>
  );
}

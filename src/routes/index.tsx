import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContextSection } from "@/components/sections/ContextSection";
import { JourneyCardsSection } from "@/components/sections/JourneyCardsSection";
import { MethodStepsSection } from "@/components/sections/MethodStepsSection";
import { ClimateImpactStrip } from "@/components/sections/ClimateImpactStrip";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { CTASection } from "@/components/sections/CTASection";

const pagePublished = "2026-07-09";
const pageModified = "2026-07-10";

const institutionalReferences = [
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
    title: "Lei nº 12.608/2012",
    source: "Planalto",
    label: "Política Nacional de Proteção e Defesa Civil",
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
  name: "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
  url: "https://climaedu.com/",
  datePublished: pagePublished,
  dateModified: pageModified,
  inLanguage: "pt-BR",
  citation: institutionalReferences.map((reference) => reference.href),
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
  description:
    "A CLIMAEDU transforma conhecimento técnico sobre clima, sustentabilidade e gestão de riscos em aprendizagem aplicada, competências institucionais, certificados, relatórios e evidências de capacitação.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é a CLIMAEDU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLIMAEDU é uma plataforma GovTech/EdTech de aprendizagem aplicada para clima, sustentabilidade, gestão de riscos e desenvolvimento de competências institucionais.",
      },
    },
    {
      "@type": "Question",
      name: "A CLIMAEDU é apenas uma plataforma de cursos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A CLIMAEDU transforma conhecimento técnico em trilhas, rotinas, certificados, dashboards, relatórios e evidências de capacitação para apoiar a capacidade institucional.",
      },
    },
    {
      "@type": "Question",
      name: "Quem a CLIMAEDU atende?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLIMAEDU atende governos, órgãos públicos, prefeituras, escolas de governo, conselhos profissionais, consórcios públicos, empresas, áreas de ESG, RH, compliance, meio ambiente, operações e gestão de riscos.",
      },
    },
    {
      "@type": "Question",
      name: "A CLIMAEDU mede indicadores ambientais diretamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A CLIMAEDU mede e evidencia o ambiente de aprendizagem, como participação, engajamento, proficiência, conclusão, certificados, relatórios e evidências de capacitação.",
      },
    },
    {
      "@type": "Question",
      name: "Como entrar em contato com a CLIMAEDU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O contato institucional da CLIMAEDU é contato@newedtech.com.br e o telefone é +55 48 99160-6518. A operação está localizada em Florianópolis, SC, Brasil.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
      },
      {
        name: "description",
        content:
          "A CLIMAEDU transforma conhecimento técnico sobre clima, sustentabilidade e gestão de riscos em aprendizagem aplicada, trilhas, certificados e evidências.",
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
          "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
      },
      {
        property: "og:description",
        content:
          "Conhecimento técnico transformado em aprendizagem aplicada, capacidade institucional e evidências de capacitação.",
      },
      {
        property: "og:url",
        content: "https://climaedu.com/",
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
          "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
      },
      {
        name: "twitter:description",
        content:
          "A CLIMAEDU transforma conhecimento técnico em aprendizagem aplicada, competências institucionais e evidências de capacitação.",
      },
      {
        name: "twitter:image",
        content: "https://climaedu.com/og-image.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://climaedu.com/",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <HeroSection />
      <ContextSection />
      <MethodStepsSection />
      <ClimateImpactStrip />
      <JourneyCardsSection />
      <EcosystemSection />

      <section
        aria-label="Perguntas frequentes sobre a CLIMAEDU"
        className="bg-background px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Perguntas frequentes
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Respostas diretas sobre a CLIMAEDU
            </h2>

            <p className="mt-4 text-foreground/70">
              Informações institucionais para gestores públicos, empresas,
              instituições parceiras, buscadores e ferramentas de IA.
            </p>

            <p className="mt-3 text-sm text-foreground/60">
              Publicado em 09/07/2026 · Atualizado em 10/07/2026.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-dark">
                O que é a CLIMAEDU?
              </h3>
              <p className="mt-3 text-foreground/75">
                A CLIMAEDU é uma plataforma GovTech/EdTech de aprendizagem
                aplicada para clima, sustentabilidade, gestão de riscos e
                desenvolvimento de competências institucionais.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-dark">
                A CLIMAEDU é apenas uma plataforma de cursos?
              </h3>
              <p className="mt-3 text-foreground/75">
                Não. A CLIMAEDU transforma conhecimento técnico em trilhas,
                rotinas, certificados, dashboards, relatórios e evidências de
                capacitação para apoiar a capacidade institucional.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-dark">
                Quem a CLIMAEDU atende?
              </h3>
              <p className="mt-3 text-foreground/75">
                A CLIMAEDU atende governos, órgãos públicos, prefeituras,
                escolas de governo, conselhos profissionais, consórcios
                públicos, empresas, áreas de ESG, RH, compliance, meio ambiente,
                operações e gestão de riscos.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-dark">
                A CLIMAEDU mede indicadores ambientais diretamente?
              </h3>
              <p className="mt-3 text-foreground/75">
                Não. A CLIMAEDU mede e evidencia o ambiente de aprendizagem:
                participação, engajamento, proficiência, conclusão,
                certificados, relatórios e evidências de capacitação.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm md:col-span-2">
              <h3 className="text-xl font-semibold text-primary-dark">
                Como entrar em contato com a CLIMAEDU?
              </h3>
              <p className="mt-3 text-foreground/75">
                O contato institucional da CLIMAEDU é{" "}
                <a
                  href="mailto:contato@newedtech.com.br"
                  className="font-medium text-primary-dark hover:text-primary"
                >
                  contato@newedtech.com.br
                </a>{" "}
                e o telefone é{" "}
                <a
                  href="tel:+5548991606518"
                  className="font-medium text-primary-dark hover:text-primary"
                >
                  +55 48 99160-6518
                </a>
                . A operação está localizada em Florianópolis, SC, Brasil.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-label="Referências institucionais e técnicas"
        className="bg-surface px-6 py-18 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Referências institucionais
            </p>

            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Base técnica para aprendizagem aplicada
            </h2>

            <p className="mt-4 text-foreground/75">
              A atuação da CLIMAEDU dialoga com agendas públicas e referências
              técnicas relacionadas a sustentabilidade, gestão de riscos,
              adaptação climática, compras públicas sustentáveis, defesa civil,
              educação e desenvolvimento de capacidades institucionais.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              Fontes institucionais consultadas: Planalto, Advocacia-Geral da
              União, ONU Brasil e IPCC. As referências abaixo não substituem
              análise jurídica, técnica ou normativa do órgão contratante.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {institutionalReferences.map((reference) => (
              <a
                key={reference.href}
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Fonte: {reference.source}
                </p>

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

      <CTASection
        title="Quando todos entendem seu papel, a instituição responde melhor."
        subtitle="Agende uma demonstração e veja a CLIMAEDU aplicada à realidade do seu órgão, empresa ou rede de ensino."
      />
    </>
  );
}

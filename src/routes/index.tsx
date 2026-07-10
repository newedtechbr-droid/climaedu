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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
  url: "https://climaedu.com/",
  datePublished: pagePublished,
  dateModified: pageModified,
  inLanguage: "pt-BR",
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

      <section
        aria-label="Resumo institucional da CLIMAEDU"
        className="bg-background px-6 py-12"
      >
        <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card px-6 py-6 text-foreground/80 shadow-sm">
          <p className="text-base leading-relaxed md:text-lg">
            <strong className="text-primary-dark">A CLIMAEDU</strong> é uma
            plataforma GovTech/EdTech da NEWEDTECH que transforma conhecimento
            técnico sobre clima, sustentabilidade e gestão de riscos em
            aprendizagem aplicada, competências institucionais, certificados,
            relatórios e evidências de capacitação.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-foreground/70">
            Contato institucional:{" "}
            <a
              href="mailto:contato@newedtech.com.br"
              className="font-medium text-primary-dark hover:text-primary"
            >
              contato@newedtech.com.br
            </a>{" "}
            ·{" "}
            <a
              href="tel:+5548991606518"
              className="font-medium text-primary-dark hover:text-primary"
            >
              +55 48 99160-6518
            </a>{" "}
            · Florianópolis, SC, Brasil · Publicado em 09/07/2026 · Atualizado
            em 10/07/2026.
          </p>
        </div>
      </section>

      <section
        aria-label="Perguntas frequentes sobre a CLIMAEDU"
        className="bg-background px-6 pb-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-medium text-primary-dark md:text-4xl">
              Perguntas frequentes sobre a CLIMAEDU
            </h2>
            <p className="mt-4 text-foreground/70">
              Respostas diretas para mecanismos de busca, ferramentas de IA,
              gestores públicos, empresas e instituições interessadas na
              plataforma.
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

      <ContextSection />
      <MethodStepsSection />
      <ClimateImpactStrip />
      <JourneyCardsSection />
      <EcosystemSection />

      <CTASection
        title="Quando todos entendem seu papel, a instituição responde melhor."
        subtitle="Agende uma demonstração e veja a CLIMAEDU aplicada à realidade do seu órgão, empresa ou rede de ensino."
      />
    </>
  );
}

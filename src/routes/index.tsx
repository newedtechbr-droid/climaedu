import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContextSection } from "@/components/sections/ContextSection";
import { JourneyCardsSection } from "@/components/sections/JourneyCardsSection";
import { MethodStepsSection } from "@/components/sections/MethodStepsSection";
import { ClimateImpactStrip } from "@/components/sections/ClimateImpactStrip";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { CTASection } from "@/components/sections/CTASection";

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
          "A CLIMAEDU transforma conhecimento tecnico sobre clima, sustentabilidade e gestao de riscos em aprendizagem aplicada, competencias institucionais, certificados, relatorios e evidencias de capacitacao.",
      },
      {
        name: "robots",
        content: "index, follow",
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
          "Conhecimento tecnico transformado em aprendizagem aplicada, capacidade institucional e evidencias de capacitacao.",
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
          "A CLIMAEDU transforma conhecimento tecnico em aprendizagem aplicada, competencias institucionais e evidencias de capacitacao.",
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
      <HeroSection />
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

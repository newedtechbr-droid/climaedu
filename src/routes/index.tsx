import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContextSection } from "@/components/sections/ContextSection";
import { JourneyCardsSection } from "@/components/sections/JourneyCardsSection";
import { MethodStepsSection } from "@/components/sections/MethodStepsSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "CLIMAEDU | Da reação à prevenção — capacitação climática institucional",
      },
      {
        name: "description",
        content:
          "Plataforma de capacitação climática para órgãos públicos, empresas e redes de ensino. Trilhas por perfil, certificados, dashboards e evidências auditáveis.",
      },
      {
        property: "og:title",
        content: "CLIMAEDU | Da reação à prevenção",
      },
      {
        property: "og:description",
        content:
          "Capacitação climática para colocar toda a instituição na mesma página: rotinas, equipes preparadas e evidências.",
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
      <JourneyCardsSection />
      <EcosystemSection />

      <CTASection
        title="Quando todos entendem seu papel, a instituição responde melhor."
        subtitle="Agende uma demonstração e veja a CLIMAEDU aplicada à realidade do seu órgão, empresa ou rede de ensino."
      />
    </>
  );
}

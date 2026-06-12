import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { PlatformFeaturesSection } from "@/components/sections/PlatformFeaturesSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { DemoShowcaseSection } from "@/components/sections/DemoShowcaseSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { AISection } from "@/components/sections/AISection";
import { TracksSection } from "@/components/sections/TracksSection";
import { ClimateImpactStrip } from "@/components/sections/ClimateImpactStrip";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { SDGSection } from "@/components/sections/SDGSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLIMAEDU | Plataforma de aprendizagem online para capacitação climática" },
      {
        name: "description",
        content:
          "Ambiente de aprendizagem online white-label para capacitação climática, com trilhas, cursos, certificados, dashboards e relatórios para órgãos públicos e empresas.",
      },
      { property: "og:title", content: "CLIMAEDU | Plataforma de aprendizagem online para capacitação climática" },
      {
        property: "og:description",
        content:
          "LMS white-label com trilhas, certificados e dashboards para capacitar equipes públicas e corporativas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PlatformFeaturesSection />
      <TracksSection />
      <ClimateImpactStrip />
      <AudienceSection />
      <DemoShowcaseSection />
      <DifferentialsSection />
      <AISection />
      <EcosystemSection />
      <SDGSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { PlatformFeaturesSection } from "@/components/sections/PlatformFeaturesSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { DemoShowcaseSection } from "@/components/sections/DemoShowcaseSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { AISection } from "@/components/sections/AISection";
import { ClassroomSection } from "@/components/sections/ClassroomSection";
import { TracksSection } from "@/components/sections/TracksSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { SDGSection } from "@/components/sections/SDGSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

type CSSVars = CSSProperties & Record<`--${string}`, string>;

const climaeduTheme: CSSVars = {
  "--background": "42 38% 96%",
  "--foreground": "200 22% 16%",
  "--card": "42 36% 98%",
  "--muted": "42 24% 90%",

  "--color-background": "#F7F1E7",
  "--color-surface": "#EFE4D5",
  "--color-card": "#FFFCF7",
  "--color-border": "#D8CBBB",

  "--color-primary-dark": "#1F2A2E",
  "--color-primary-deep": "#253126",

  "--color-olive": "#849A74",
  "--color-terracotta": "#9A4B42",

  "--color-slate-blue": "#849A74",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "CLIMAEDU | Plataforma de aprendizagem online para capacitação climática",
      },
      {
        name: "description",
        content:
          "Ambiente de aprendizagem online white-label para capacitação climática, com trilhas, cursos, certificados, dashboards e relatórios para órgãos públicos e empresas.",
      },
      {
        property: "og:title",
        content:
          "CLIMAEDU | Plataforma de aprendizagem online para capacitação climática",
      },
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
    <main
      style={climaeduTheme}
      className="min-h-screen bg-background text-foreground"
    >
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
    </main>
  );
}

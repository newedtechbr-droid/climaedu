import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClimaEdu — Capacitação climática aplicada à gestão pública" },
      {
        name: "description",
        content:
          "Trilhas curtas por função, checklists com evidência e dashboards auditáveis para prefeituras, secretarias e empresas com obrigações ambientais.",
      },
      { property: "og:title", content: "ClimaEdu — Capacitação climática aplicada à gestão pública" },
      {
        property: "og:description",
        content:
          "Da norma à evidência. Plataforma SaaS para órgãos públicos e empresas que precisam comprovar resultado.",
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
      <AudienceSection />
      <CoursesSection />
      <DifferentialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

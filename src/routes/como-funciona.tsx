import { createFileRoute } from "@tanstack/react-router";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona — ClimaEdu" },
      {
        name: "description",
        content:
          "Aprender, implementar e comprovar. Trilhas por função, checklists com evidência e dashboards prontos para auditoria.",
      },
      { property: "og:title", content: "Como funciona a ClimaEdu" },
      {
        property: "og:description",
        content: "Da norma à evidência em três etapas integradas.",
      },
    ],
  }),
  component: () => (
    <>
      <SolutionSection />
      <DifferentialsSection />
      <ContactSection />
    </>
  ),
});

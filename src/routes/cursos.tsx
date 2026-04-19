import { createFileRoute } from "@tanstack/react-router";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { AISection } from "@/components/sections/AISection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos e trilhas — ClimaEdu" },
      {
        name: "description",
        content:
          "Eventos extremos, ESG, PNRS, ISO 14001, AIA e recursos hídricos. Conteúdo técnico aplicável à rotina institucional.",
      },
      { property: "og:title", content: "Cursos ClimaEdu" },
      {
        property: "og:description",
        content:
          "Trilhas técnicas em gestão climática para equipes públicas e privadas.",
      },
    ],
  }),
  component: () => (
    <>
      <CoursesSection />
      <AISection />
      <ContactSection />
    </>
  ),
});

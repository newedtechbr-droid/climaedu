import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a ClimaEdu — Especialistas em gestão climática pública" },
      {
        name: "description",
        content:
          "Equipe com atuação em engenharia ambiental, direito ambiental e gestão pública. Mestrados, doutorados e mais de 170 trabalhos técnicos publicados.",
      },
      { property: "og:title", content: "Sobre a ClimaEdu" },
      {
        property: "og:description",
        content:
          "Especialistas que entendem a gestão pública por dentro — processos, evidências e resultados verificáveis.",
      },
    ],
  }),
  component: () => (
    <>
      <AboutSection />
      <ContactSection />
    </>
  ),
});

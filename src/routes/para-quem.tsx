import { createFileRoute } from "@tanstack/react-router";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/para-quem")({
  head: () => ({
    meta: [
      { title: "Para quem — ClimaEdu" },
      {
        name: "description",
        content:
          "Prefeituras, secretarias estaduais e empresas com obrigações ESG, ISO 14001 ou conformidade ambiental.",
      },
      { property: "og:title", content: "Para quem é a ClimaEdu" },
      {
        property: "og:description",
        content:
          "Desenvolvida para quem carrega a responsabilidade institucional pela agenda climática.",
      },
    ],
  }),
  component: () => (
    <>
      <AudienceSection />
      <ContactSection />
    </>
  ),
});

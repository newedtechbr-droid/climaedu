import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — ClimaEdu" },
      {
        name: "description",
        content:
          "Solicite uma demonstração. Em 48 horas, uma especialista entra em contato para entender o contexto do seu órgão ou empresa.",
      },
      { property: "og:title", content: "Fale com a ClimaEdu" },
      {
        property: "og:description",
        content: "Solicite demonstração e proposta institucional.",
      },
    ],
  }),
  component: () => <ContactSection />,
});

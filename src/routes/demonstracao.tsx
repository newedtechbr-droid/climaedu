import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { DemoFormSection } from "@/components/sections/DemoFormSection";

export const Route = createFileRoute("/demonstracao")({
  head: () => ({
    meta: [
      { title: "Demonstração | CLIMAEDU — Veja aplicada à sua instituição" },
      {
        name: "description",
        content:
          "Agende uma demonstração de 20 minutos e veja exemplos de trilhas, certificados, dashboards e relatórios para o seu contexto.",
      },
      { property: "og:title", content: "Agendar demonstração CLIMAEDU" },
      {
        property: "og:description",
        content:
          "Em até 48 horas úteis, retornamos com uma sugestão inicial de trilha, formato de implantação e próximos passos.",
      },
    ],
  }),
  component: Demonstracao,
});

function Demonstracao() {
  return (
    <>
      <PageHero
        eyebrow="Demonstração"
        title="Veja a CLIMAEDU aplicada à realidade da sua instituição"
        subtitle="Agende uma demonstração de 20 minutos e veja exemplos de trilhas, certificados, dashboards e relatórios para o seu contexto."
      />
      <DemoFormSection />
    </>
  );
}

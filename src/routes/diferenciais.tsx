import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/diferenciais")({
  head: () => ({
    meta: [
      { title: "Diferenciais | CLIMAEDU — Conteúdo, plataforma e evidência" },
      {
        name: "description",
        content:
          "Comparativo entre CLIMAEDU, cursos avulsos, LMS genéricos e consultorias tradicionais.",
      },
      { property: "og:title", content: "Diferenciais da CLIMAEDU" },
      {
        property: "og:description",
        content:
          "O mercado entrega partes. A CLIMAEDU estrutura a jornada climática completa.",
      },
    ],
  }),
  component: Diferenciais,
});

function Diferenciais() {
  return (
    <>
      <PageHero
        eyebrow="Diferenciais"
        title="O mercado entrega partes. A CLIMAEDU estrutura a jornada."
        subtitle="Cursos avulsos entregam conteúdo. LMS genéricos entregam plataforma. Consultorias entregam apoio técnico. A CLIMAEDU integra conteúdo climático aplicado, plataforma white-label, metodologia, certificados, dashboards e evidências para apoiar a gestão institucional."
      />

      <ComparisonTableSection />

      <CTASection
        title="Entender os diferenciais em uma demonstração"
        subtitle="20 minutos para ver, na prática, como a CLIMAEDU se diferencia para o seu contexto."
      />
    </>
  );
}

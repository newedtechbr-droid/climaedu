import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { CTASection } from "@/components/sections/CTASection";
import mockupCursos from "@/assets/mockup-plataforma-cursos.png";
import mockupRelatorios from "@/assets/mockup-climaedu.png";

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
        content: "O mercado entrega partes. A CLIMAEDU estrutura a jornada climática completa.",
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
        title="Conteúdo, plataforma e evidência no mesmo fluxo"
        subtitle="Menos peças soltas. Mais clareza para formar equipes, acompanhar progresso e comprovar execução."
      >
        <div className="grid items-center gap-6 md:grid-cols-2">
          <img
            src={mockupCursos}
            alt="Mockup de cursos e trilhas da plataforma"
            className="h-full max-h-[420px] w-full object-contain drop-shadow-[0_24px_42px_rgba(20,30,40,0.22)]"
          />
          <img
            src={mockupRelatorios}
            alt="Mockup de relatórios e evidências da plataforma"
            className="h-full max-h-[420px] w-full object-contain drop-shadow-[0_24px_42px_rgba(20,30,40,0.22)]"
          />
        </div>
      </PageHero>

      <ComparisonTableSection />

      <CTASection
        title="Entender os diferenciais em uma demonstração"
        subtitle="20 minutos para ver, na prática, como a CLIMAEDU se diferencia para o seu contexto."
      />
    </>
  );
}

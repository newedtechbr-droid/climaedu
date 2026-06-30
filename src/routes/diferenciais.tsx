import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { CTASection } from "@/components/sections/CTASection";
import platformHome from "@/assets/platform-home-real.png";
import dashboardReal from "@/assets/dashboard-real.png";

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
        title="Conteúdo, plataforma e evidência no mesmo fluxo"
        subtitle="Menos peças soltas. Mais clareza para formar equipes, acompanhar progresso e comprovar execução."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <img
            src={platformHome}
            alt="Tela inicial da plataforma CLIMAEDU"
            className="aspect-[16/10] w-full rounded-2xl border border-border object-cover shadow-sm"
          />

          <img
            src={dashboardReal}
            alt="Dashboard da plataforma CLIMAEDU"
            className="aspect-[16/10] w-full rounded-2xl border border-border object-cover shadow-sm"
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

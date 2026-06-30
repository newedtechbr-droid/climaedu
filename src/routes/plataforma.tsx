import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PlatformFeaturesSection } from "@/components/sections/PlatformFeaturesSection";
import { DemoShowcaseSection } from "@/components/sections/DemoShowcaseSection";
import { AISection } from "@/components/sections/AISection";
import { CTASection } from "@/components/sections/CTASection";
import screenHome from "@/assets/screen-home.jpg";
import screenTrack from "@/assets/screen-track.jpg";
import screenDashboard from "@/assets/screen-dashboard.jpg";

export const Route = createFileRoute("/plataforma")({
  head: () => ({
    meta: [
      { title: "Plataforma | CLIMAEDU — Ambiente de aprendizagem white-label" },
      {
        name: "description",
        content:
          "Ambiente white-label com trilhas aplicadas, certificados, dashboards, relatórios e IA com revisão técnica humana.",
      },
      { property: "og:title", content: "Como funciona a plataforma CLIMAEDU" },
      {
        property: "og:description",
        content:
          "White-label, trilhas por perfil, certificados, dashboards e relatórios auditáveis.",
      },
    ],
  }),
  component: Plataforma,
});

function Plataforma() {
  return (
    <>
      <PageHero
        eyebrow="Plataforma"
        title="Como funciona a plataforma CLIMAEDU"
        subtitle="Uma operação simples para organizar capacitação, acompanhar progresso e gerar evidências."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: screenHome, label: "Entrada white-label" },
            { src: screenTrack, label: "Trilhas e módulos" },
            { src: screenDashboard, label: "Evidências e relatórios" },
          ].map((item) => (
            <figure key={item.label} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <img src={item.src} alt={item.label} className="aspect-[16/10] w-full object-cover" />
              <figcaption className="px-4 py-3 text-[14px] font-semibold text-primary-dark">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </PageHero>

      <PlatformFeaturesSection />
      <DemoShowcaseSection />
      <AISection />

      <CTASection
        title="Ver a plataforma em funcionamento"
        subtitle="Demonstração de 20 minutos com exemplos aplicados ao seu contexto."
      />
    </>
  );
}

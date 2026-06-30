import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PlatformFeaturesSection } from "@/components/sections/PlatformFeaturesSection";
import { AISection } from "@/components/sections/AISection";
import { CTASection } from "@/components/sections/CTASection";
import ecoTechBrain from "@/assets/eco-tech-brain.png";

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
        title="Tecnologia para aprender, aplicar e evidenciar"
      >
        <div className="relative left-1/2 mt-12 h-[420px] w-screen -translate-x-1/2 overflow-hidden md:h-[520px]">
          <img
            src={ecoTechBrain}
            alt="Cérebro verde conectado a circuitos digitais"
            className="h-full w-full object-cover"
          />

          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,18,18,0.55) 0%, rgba(13,18,18,0.05) 42%, rgba(13,18,18,0.12) 100%)",
            }}
          />
        </div>
      </PageHero>

      <PlatformFeaturesSection />
      <AISection />

      <CTASection
        title="Ver a plataforma em funcionamento"
        subtitle="Demonstração de 20 minutos com exemplos aplicados ao seu contexto."
      />
    </>
  );
}

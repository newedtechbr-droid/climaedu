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
        <img
          src={ecoTechBrain}
          alt="Cérebro verde conectado a circuitos digitais"
          className="max-h-[420px] w-full rounded-2xl border border-border object-cover shadow-[0_24px_70px_-32px_rgba(20,30,40,0.55)]"
        />
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

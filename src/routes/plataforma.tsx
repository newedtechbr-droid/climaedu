import { createFileRoute } from "@tanstack/react-router";
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
      <section className="relative isolate overflow-hidden bg-primary-dark text-white">
        <div className="relative min-h-[620px]">
          <img
            src={ecoTechBrain}
            alt="Cérebro verde conectado a circuitos digitais"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,12,12,0.9) 0%, rgba(8,12,12,0.78) 30%, rgba(8,12,12,0.18) 66%, rgba(8,12,12,0.34) 100%)",
            }}
          />
          <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-24">
            <div className="max-w-2xl">
              <p
                className="mb-6 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12px] font-bold uppercase"
                style={{
                  backgroundColor: "rgba(154, 75, 66, 0.94)",
                  color: "#FFFFFF",
                  letterSpacing: "0.08em",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Plataforma
              </p>
              <h1
                className="text-white"
                style={{
                  fontSize: "clamp(42px, 6vw, 76px)",
                  lineHeight: 1.02,
                  fontWeight: 600,
                }}
              >
                Tecnologia para aprender, aplicar e evidenciar
              </h1>
            </div>
          </div>
        </div>
      </section>

      <PlatformFeaturesSection />
      <AISection />

      <CTASection
        title="Ver a plataforma em funcionamento"
        subtitle="Demonstração de 20 minutos com exemplos aplicados ao seu contexto."
      />
    </>
  );
}

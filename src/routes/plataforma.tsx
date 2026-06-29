import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PlatformFeaturesSection } from "@/components/sections/PlatformFeaturesSection";
import { DemoShowcaseSection } from "@/components/sections/DemoShowcaseSection";
import { AISection } from "@/components/sections/AISection";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Palette, Users, Route as RouteIcon, Award, BarChart3, FileText } from "lucide-react";

const recursos = [
  { icon: Palette, title: "Ambiente white-label", text: "Logo, cores, domínio e identidade da instituição." },
  { icon: Users, title: "Gestão de usuários e perfis", text: "Administradores, gestores, tutores e aprendizes." },
  { icon: RouteIcon, title: "Trilhas por perfil", text: "Conteúdos organizados por secretaria, área, função, risco ou público." },
  { icon: Award, title: "Certificados", text: "Emissão automática e registro institucional." },
  { icon: BarChart3, title: "Dashboards", text: "Adesão, conclusão, proficiência e aplicação prática." },
  { icon: FileText, title: "Relatórios", text: "Exportação para gestão, controle interno, prestação de contas e auditoria." },
];

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
        subtitle="Um ambiente de aprendizagem online com identidade institucional, trilhas aplicadas, certificados, dashboards e relatórios."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionTitle eyebrow="Recursos" title="Tudo no mesmo lugar" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recursos.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border bg-background p-6">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <r.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-[18px] font-semibold text-primary-dark">{r.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground/75">{r.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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

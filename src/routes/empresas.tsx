import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import teamMeeting from "@/assets/team-meeting.jpg";
import mockupEmpresa from "@/assets/mockup-plataforma-viposa.png";
import {
  Sparkles,
  Leaf,
  Recycle,
  HardHat,
  FileBarChart,
} from "lucide-react";

const blocos = [
  { icon: Sparkles, title: "Onboarding ambiental", text: "Base comum para novos colaboradores." },
  { icon: Leaf, title: "ESG e clima", text: "Trilhas alinhadas a metas e compromissos." },
  { icon: Recycle, title: "Resíduos", text: "PNRS, logística reversa e rotina operacional." },
  { icon: HardHat, title: "SSMA", text: "Conteúdo aplicado à segurança e operação." },
  { icon: FileBarChart, title: "Evidências", text: "Relatórios por unidade, área ou função." },
];

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: "Empresas | CLIMAEDU — Academia ambiental corporativa" },
      {
        name: "description",
        content:
          "Trilhas ambientais com certificados, relatórios por área e evidências para apoiar metas ESG, auditorias e cultura de sustentabilidade.",
      },
      { property: "og:title", content: "CLIMAEDU para empresas" },
      {
        property: "og:description",
        content:
          "Capacitação ambiental aplicada a ESG, SSMA, RH e operações — com evidências para metas e auditorias.",
      },
    ],
  }),
  component: Empresas,
});

function Empresas() {
  return (
    <>
      <PageHero
        eyebrow="Solução para empresas"
        title="Capacitação ambiental que vira evidência"
        subtitle="Trilhas para ESG, RH e SSMA com acompanhamento por área, unidade e função."
      >
        <div className="grid items-center gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src={teamMeeting}
            alt="Equipe analisando mapas e indicadores ambientais"
            className="h-full max-h-[360px] w-full rounded-2xl border border-border object-cover shadow-sm"
          />
          <img
            src={mockupEmpresa}
            alt="Mockup de plataforma corporativa com cursos e relatórios"
            className="h-full max-h-[420px] w-full object-contain drop-shadow-[0_24px_42px_rgba(20,30,40,0.25)]"
          />
        </div>
      </PageHero>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionTitle
            eyebrow="O que entregamos"
            title="O essencial por área"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {blocos.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <b.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-[19px] font-semibold text-primary-dark">{b.title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.55] text-foreground/80">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Agendar demonstração para empresa"
        subtitle="Veja exemplos de trilhas, certificados e relatórios por unidade aplicados ao seu negócio."
      />
    </>
  );
}

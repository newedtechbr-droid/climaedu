import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import {
  Sparkles,
  RefreshCw,
  Leaf,
  Recycle,
  HardHat,
  FileBarChart,
  Award,
} from "lucide-react";

const blocos = [
  { icon: Sparkles, title: "Onboarding ambiental", text: "Base comum para novos colaboradores em meio ambiente, riscos e ESG." },
  { icon: RefreshCw, title: "Reciclagens periódicas", text: "Atualizações recorrentes por área, unidade ou função." },
  { icon: Leaf, title: "ESG e mudanças climáticas", text: "Trilhas alinhadas a metas, relatórios e compromissos públicos." },
  { icon: Recycle, title: "Gestão de resíduos", text: "PNRS, logística reversa e práticas operacionais." },
  { icon: HardHat, title: "Saúde, segurança e meio ambiente", text: "Conteúdo SSMA aplicado às rotinas e protocolos da operação." },
  { icon: FileBarChart, title: "Relatórios por área e unidade", text: "Acompanhamento por unidade, BU ou planta industrial." },
  { icon: Award, title: "Certificados e dashboards", text: "Comprovação automática para auditorias internas e externas." },
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
        title="Academia ambiental corporativa para ESG, RH e SSMA"
        subtitle="Trilhas ambientais com certificados, relatórios por área e evidências para apoiar metas, auditorias e cultura de sustentabilidade."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <p className="text-[18px] leading-[1.7] text-foreground/80">
            Empresas precisam comprovar capacitação ambiental, engajar colaboradores e reduzir
            riscos operacionais. A CLIMAEDU organiza trilhas por área, função, unidade ou risco,
            com acompanhamento e evidências.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="O que entregamos"
            title="Trilhas, evidências e dashboards por área"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blocos.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border bg-card p-6">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <b.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-[18px] font-semibold text-primary-dark">{b.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground/75">{b.text}</p>
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

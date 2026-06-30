import { createFileRoute } from "@tanstack/react-router";
import { TrilhasPorAreaSection } from "@/components/sections/TrilhasPorAreaSection";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import dashboardImage from "@/assets/screen-dashboard.jpg";
import {
  AlertTriangle,
  Users,
  ShoppingCart,
  FileWarning,
  BarChart3,
  FileText,
} from "lucide-react";

const problemas = [
  { icon: Users, text: "Áreas trabalham separadas." },
  { icon: AlertTriangle, text: "Papéis ficam pouco claros." },
  { icon: ShoppingCart, text: "Compras e respostas atrasam." },
  { icon: FileWarning, text: "Faltam evidências de prevenção." },
];

const solucao = [
  { icon: Users, text: "Cada secretaria entende seu papel." },
  { icon: BarChart3, text: "Gestores acompanham adesão e conclusão." },
  { icon: FileText, text: "Relatórios exportáveis para gestão e auditoria." },
];

export const Route = createFileRoute("/orgaos-publicos")({
  head: () => ({
    meta: [
      { title: "Órgãos públicos | CLIMAEDU — Governança climática institucional" },
      {
        name: "description",
        content:
          "Capacitação aplicada para alinhar secretarias, preparar equipes, orientar a população e gerar evidências para gestão, auditoria e prestação de contas.",
      },
      { property: "og:title", content: "CLIMAEDU para órgãos públicos" },
      {
        property: "og:description",
        content:
          "Identifique gargalos por secretaria e transforme conhecimento climático em rotinas executáveis.",
      },
    ],
  }),
  component: OrgaosPublicos,
});

function OrgaosPublicos() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionTitle
            eyebrow="O problema"
            title="Quando só uma área sabe agir, a resposta inteira perde força."
            subtitle="A ação climática exige coordenação entre secretarias, equipes técnicas, compras, comunicação, educação e controle."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {problemas.map((p, i) => (
              <FadeIn key={p.text} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border bg-card p-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-terracotta) 14%, white)",
                      color: "var(--color-terracotta)",
                    }}
                  >
                    <p.icon size={18} />
                  </div>

                  <p className="mt-4 text-[16px] leading-[1.45] text-foreground/85">
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <FadeIn>
            <SectionTitle
              eyebrow="Na prática"
              title="Da capacitação ao relatório"
              subtitle="O aprendizado deixa rastro: quem participou, o que concluiu e quais evidências podem apoiar gestão, auditoria e controle."
            />

            <div className="mt-8 grid gap-3">
              {solucao.map((s) => (
                <div key={s.text} className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary-deep">
                    <s.icon size={17} />
                  </span>

                  <p className="text-[15.5px] leading-snug text-foreground/85">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(20,30,40,0.45)]">
            <img
              src={dashboardImage}
              alt="Dashboard de evidências da plataforma"
              className="aspect-[16/11] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <TrilhasPorAreaSection />

      <CTASection
        title="Agendar demonstração para órgão público"
        subtitle="Veja exemplos de trilhas, certificados, dashboards e relatórios aplicados ao seu contexto."
      />
    </>
  );
}

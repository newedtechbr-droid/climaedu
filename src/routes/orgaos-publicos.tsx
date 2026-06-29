import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TrilhasPorAreaSection } from "@/components/sections/TrilhasPorAreaSection";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import {
  AlertTriangle,
  Users,
  ShoppingCart,
  FileWarning,
  HeartPulse,
  Gavel,
  Palette,
  Route as RouteIcon,
  BookOpen,
  ClipboardCheck,
  Award,
  BarChart3,
  FileText,
} from "lucide-react";

const problemas = [
  { icon: Users, text: "Equipes atuando de forma fragmentada." },
  { icon: AlertTriangle, text: "Servidores sem base comum de conhecimento." },
  { icon: ShoppingCart, text: "Compras públicas lentas ou inseguras em contexto de emergência." },
  { icon: FileWarning, text: "Dificuldade de comprovar ações preventivas." },
  { icon: HeartPulse, text: "População pouco preparada para prevenir e reagir." },
  { icon: Gavel, text: "Pressão de órgãos de controle, auditorias e sociedade." },
];

const solucao = [
  { icon: Palette, text: "Plataforma com identidade do órgão." },
  { icon: RouteIcon, text: "Trilhas por secretaria, função ou risco." },
  { icon: BookOpen, text: "Cursos aplicados ao contexto público." },
  { icon: ClipboardCheck, text: "Checklists, atividades práticas e materiais de apoio." },
  { icon: Award, text: "Certificados automáticos." },
  { icon: BarChart3, text: "Dashboards de adesão, conclusão e proficiência." },
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
      <PageHero
        eyebrow="Solução para órgãos públicos"
        title="Governança climática para órgãos públicos preparados"
        subtitle="Capacitação aplicada para alinhar secretarias, preparar equipes, orientar a população e gerar evidências para gestão, auditoria e prestação de contas."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="max-w-3xl text-[18px] leading-[1.7] text-foreground/80">
            A emergência climática exige mais do que resposta operacional. Exige que toda a
            instituição esteja preparada. A CLIMAEDU ajuda órgãos públicos a identificar gargalos
            de capacitação em cada área e transformar conhecimento climático em rotinas
            executáveis.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="O problema"
            title="A Defesa Civil sabe responder. E as demais áreas?"
            subtitle="Quando uma equipe sabe agir, mas as outras não conhecem seus papéis, a instituição inteira responde mal."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {problemas.map((p, i) => (
              <FadeIn key={p.text} delay={i * 0.04}>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-terracotta) 14%, white)",
                      color: "var(--color-terracotta)",
                    }}
                  >
                    <p.icon size={18} />
                  </div>
                  <p className="text-[16px] leading-[1.55] text-foreground/85">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="A solução CLIMAEDU"
            title="Uma plataforma. Toda a instituição na mesma página."
            subtitle="Da norma à evidência: trilhas por área, checklists com comprovação e dashboards prontos para auditoria."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solucao.map((s, i) => (
              <FadeIn key={s.text} delay={i * 0.04}>
                <div className="flex gap-4 rounded-xl border border-border bg-background p-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <s.icon size={18} />
                  </div>
                  <p className="text-[15.5px] leading-[1.55] text-foreground/85">{s.text}</p>
                </div>
              </FadeIn>
            ))}
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

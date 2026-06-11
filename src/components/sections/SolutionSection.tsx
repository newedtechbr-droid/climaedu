import { GraduationCap, Wrench, BarChart3, FileCheck2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    icon: GraduationCap,
    label: "Aprender",
    title: "Cursos aplicados ao contexto",
    text: "Conteúdo técnico organizado por perfil, com avaliações e materiais práticos.",
  },
  {
    icon: Wrench,
    label: "Aplicar",
    title: "Da teoria à rotina institucional",
    text: "Checklists, atividades e referências que conectam o conteúdo ao dia a dia das equipes.",
  },
  {
    icon: BarChart3,
    label: "Medir",
    title: "Adesão, conclusão e proficiência",
    text: "Dashboards acompanham o avanço por unidade, perfil ou turma em tempo real.",
  },
  {
    icon: FileCheck2,
    label: "Evidenciar",
    title: "Registros para gestão e auditoria",
    text: "Certificados e relatórios exportáveis para prestação de contas e controle interno.",
  },
];

export function SolutionSection() {
  return (
    <section id="como-funciona" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Como funciona"
            title="Da capacitação à evidência"
            subtitle="Aprender → Aplicar → Medir → Evidenciar. A CLIMAEDU transforma conteúdo climático em aprendizagem aplicada, acompanhamento e registros úteis para a gestão."
            align="center"
          />
        </FadeIn>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <li
                className="relative h-full rounded-2xl border bg-card p-6 shadow-sm"
                style={{ borderColor: "color-mix(in oklab, var(--color-olive) 28%, var(--color-border))" }}
              >
                <span
                  className="absolute -top-3 right-5 inline-flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white"
                  style={{ backgroundColor: i === 3 ? "var(--color-terracotta)" : "var(--color-olive)" }}
                >
                  {i + 1}
                </span>
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor:
                      i === 3
                        ? "color-mix(in oklab, var(--color-terracotta) 16%, transparent)"
                        : "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                    color: i === 3 ? "var(--color-terracotta)" : "var(--color-primary-deep)",
                  }}
                >
                  <s.icon size={24} aria-hidden />
                </span>
                <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground/55">
                  {s.label}
                </p>
                <h3 className="mt-1 text-[18px] font-bold leading-snug text-primary-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{s.text}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { Layers, GraduationCap, Award, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    icon: Layers,
    label: "Organizar",
    title: "Trilhas por perfil, secretaria, área ou risco",
    text: "Estruture o conteúdo conforme a realidade da instituição: cargo, contexto de risco ou área de atuação.",
  },
  {
    icon: GraduationCap,
    label: "Capacitar",
    title: "Cursos, quizzes, atividades e checklists",
    text: "Equipes aprendem com material aplicado, com avaliações e tarefas que conectam teoria à rotina.",
  },
  {
    icon: Award,
    label: "Certificar",
    title: "Certificados automáticos e registro de entregas",
    text: "Cada conclusão gera certificado nominal e fica registrada para consulta futura.",
  },
  {
    icon: BarChart3,
    label: "Acompanhar",
    title: "Adesão, conclusão, proficiência e evidências",
    text: "Dashboards mostram quem fez, quem aplicou e o que foi entregue, por unidade ou perfil.",
  },
];

export function SolutionSection() {
  return (
    <section id="como-funciona" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Como funciona"
            title="Da capacitação isolada à aprendizagem aplicada"
            subtitle="Quatro etapas para transformar conteúdo climático em rotina e em registros úteis para gestão."
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

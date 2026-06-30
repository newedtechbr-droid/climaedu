import { BookOpen, Wrench, BarChart3, FileCheck2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    icon: BookOpen,
    label: "Aprender",
    description: "Trilhas aplicadas por perfil, função e risco institucional.",
  },
  {
    icon: Wrench,
    label: "Aplicar",
    description: "Checklists, rotinas e atividades práticas no dia a dia das equipes.",
  },
  {
    icon: BarChart3,
    label: "Medir",
    description: "Dashboards de adesão, conclusão e proficiência por área.",
  },
  {
    icon: FileCheck2,
    label: "Evidenciar",
    description: "Certificados e relatórios auditáveis para gestão e controle.",
  },
];

export function MethodStepsSection() {
  return (
    <section className="bg-surface" id="metodo">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <div className="mx-auto max-w-5xl text-center">
            <p
              className="mb-5 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12px] font-bold uppercase"
              style={{
                backgroundColor: "color-mix(in oklab, var(--color-terracotta) 90%, transparent)",
                color: "#FFFFFF",
                letterSpacing: "0.08em",
              }}
            >
              Método CLIMAEDU
            </p>

            <h2
              className="text-primary-dark"
              style={{
                fontSize: "clamp(34px, 5vw, 66px)",
                lineHeight: 1.02,
                fontWeight: 600,
              }}
            >
              <span className="block whitespace-nowrap">
                Aprender → Aplicar → Medir → Evidenciar
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-[1.6] text-foreground/75">
              Conhecimento climático vira rotina, acompanhamento e comprovação.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.07}>
              <div className="relative h-full rounded-xl border border-border bg-card p-6">
                <span
                  className="absolute -top-3 left-6 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-primary-foreground"
                  style={{ backgroundColor: "var(--color-primary-deep)" }}
                >
                  {i + 1}
                </span>

                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <s.icon size={20} />
                </div>

                <h3 className="mt-4 text-[19px] font-semibold text-primary-dark">
                  {s.label}
                </h3>

                <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground/75">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Wrench, BarChart3, FileCheck2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

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
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionTitle
          eyebrow="Método CLIMAEDU"
          title="Aprender → Aplicar → Medir → Evidenciar"
          subtitle="Transformamos conhecimento climático em prática institucional, acompanhamento contínuo e comprovação."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
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
                <h3 className="mt-4 text-[19px] font-semibold text-primary-dark">{s.label}</h3>
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

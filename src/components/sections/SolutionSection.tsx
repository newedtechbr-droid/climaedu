import { BookOpen, Lightbulb, Wrench, Gauge, FileCheck2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const journey = [
  { icon: BookOpen, label: "Aprender", accent: "olive" as const },
  { icon: Lightbulb, label: "Compreender", accent: "olive" as const },
  { icon: Wrench, label: "Aplicar", accent: "terra" as const },
  { icon: Gauge, label: "Medir", accent: "terra" as const },
  { icon: FileCheck2, label: "Evidenciar", accent: "terra" as const },
];

export function SolutionSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Jornada"
            title="Da aprendizagem à evidência"
            subtitle="A ClimaEdu ajuda gestores a transformar conhecimento climático em rotina, acompanhamento e registros verificáveis."
            align="center"
          />
        </FadeIn>

        {/* Timeline horizontal (desktop) / vertical (mobile) */}
        <div className="relative mt-14">
          {/* linha conectora desktop */}
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-9 hidden h-[3px] md:block"
            style={{
              background:
                "linear-gradient(90deg, var(--color-olive) 0%, var(--color-olive) 40%, var(--color-terracotta) 60%, var(--color-terracotta) 100%)",
              opacity: 0.55,
            }}
          />

          <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
            {journey.map((step, i) => {
              const color = step.accent === "terra" ? "var(--color-terracotta)" : "var(--color-olive)";
              return (
                <FadeIn key={step.label} delay={i * 0.08}>
                  <li className="flex flex-row items-center gap-4 md:flex-col md:text-center">
                    <div
                      className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-background ring-8"
                      style={{
                        boxShadow: `inset 0 0 0 3px ${color}`,
                        color,
                        ["--tw-ring-color" as never]: "var(--color-background)",
                      }}
                    >
                      <step.icon size={28} strokeWidth={1.8} />
                      <span
                        className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold shadow"
                        style={{ backgroundColor: color, color: "#F3F1EC" }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-[18px] font-bold text-primary-dark md:mt-4"
                        style={{ letterSpacing: "-0.005em" }}
                      >
                        {step.label}
                      </p>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ol>
        </div>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[17px] leading-relaxed text-foreground/80">
            Não é só concluir um curso. É construir uma trilha verificável entre{" "}
            <strong className="font-semibold text-foreground">preparação</strong>,{" "}
            <strong className="font-semibold text-foreground">aplicação</strong> e{" "}
            <strong className="font-semibold" style={{ color: "var(--color-terracotta)" }}>
              evidências institucionais
            </strong>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

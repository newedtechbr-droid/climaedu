import { FileText, GraduationCap, BarChart3, TrendingUp, Users, Award, ClipboardCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    n: "01",
    icon: FileText,
    tag: "Transformar",
    title: "Normas viram trilhas de aprendizagem",
    text: "Normas, planos e documentos viram trilhas de aprendizagem.",
  },
  {
    n: "02",
    icon: GraduationCap,
    tag: "Capacitar",
    title: "Equipes aprendem aplicando",
    text: "Equipes aprendem com conteúdos contextualizados, quizzes, checklists e atividades práticas.",
  },
  {
    n: "03",
    icon: BarChart3,
    tag: "Acompanhar",
    title: "Gestores visualizam evidências",
    text: "Gestores visualizam adesão, conclusão, proficiência e evidências em dashboards.",
  },
];

const indicators = [
  { icon: Users, label: "Adesão", value: "82%", accent: "var(--color-olive)" },
  { icon: ClipboardCheck, label: "Conclusão", value: "67%", accent: "var(--color-slate-blue)" },
  { icon: Award, label: "Proficiência média", value: "78%", accent: "var(--color-olive)" },
  { icon: TrendingUp, label: "Evidências enviadas", value: "124", accent: "var(--color-terracotta)" },
];

export function SolutionSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Solução"
            title="Da norma à aprendizagem rastreável em três etapas"
            align="center"
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* linha conectora desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-[2px] md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--color-olive) 15%, var(--color-olive) 85%, transparent 100%)",
              opacity: 0.35,
            }}
          />
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1}>
                <article className="relative flex flex-col items-center text-center">
                  <div
                    className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-accent text-primary-deep ring-8"
                    style={{ "--tw-ring-color": "var(--color-background)" } as React.CSSProperties}
                  >
                    <s.icon size={40} strokeWidth={1.6} />
                    <span
                      className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold shadow-lg"
                      style={{ backgroundColor: "var(--color-olive)", color: "#F3F1EC" }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {s.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-primary-dark">{s.title}</h3>
                  <p className="mt-3 max-w-xs text-[17px] leading-relaxed text-foreground/75">{s.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mini-dashboard */}
        <FadeIn delay={0.25}>
          <div
            className="mt-20 overflow-hidden rounded-3xl border bg-surface p-8 shadow-sm md:p-10"
            style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 25%, transparent)" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Painel de acompanhamento
                </p>
                <h3 className="mt-2 text-2xl font-bold text-primary-dark md:text-3xl">
                  Aprendizagem aplicada com evidência auditável
                </h3>
              </div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--color-olive) 22%, transparent)",
                  color: "var(--color-primary-deep)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-olive)" }} />
                Exemplo ilustrativo
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {indicators.map((ind) => (
                <div
                  key={ind.label}
                  className="rounded-2xl border bg-background p-5"
                  style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 18%, transparent)" }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `color-mix(in oklab, ${ind.accent} 18%, transparent)`,
                        color: ind.accent,
                      }}
                    >
                      <ind.icon size={18} aria-hidden />
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {ind.label}
                    </span>
                  </div>
                  <p
                    className="mt-4 font-display text-4xl font-semibold"
                    style={{ color: "var(--color-primary-dark)" }}
                  >
                    {ind.value}
                  </p>
                  {/* mini barra */}
                  {ind.value.endsWith("%") && (
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: ind.value,
                          backgroundColor: ind.accent,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

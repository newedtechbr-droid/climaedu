import { Route as RouteIcon, ClipboardCheck, FileCheck2, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const cards = [
  {
    icon: RouteIcon,
    title: "Trilhas por perfil",
    text: "Cursos e módulos organizados por função, secretaria, unidade ou risco.",
    accent: "olive" as const,
  },
  {
    icon: ClipboardCheck,
    title: "Atividades e checklists",
    text: "Instrumentos para transformar conteúdo em rotina e aplicação declarada.",
    accent: "olive" as const,
  },
  {
    icon: FileCheck2,
    title: "Evidências registradas",
    text: "Arquivos, respostas, entregas e certificados organizados por turma ou usuário.",
    accent: "terra" as const,
  },
  {
    icon: BarChart3,
    title: "Relatórios para gestão",
    text: "Dados exportáveis para auditorias, prestação de contas e tomada de decisão.",
    accent: "terra" as const,
  },
];

export function OutcomesSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Aplicação na prática"
            title="Como a CLIMAEDU apoia a aplicação prática"
            subtitle="A plataforma organiza a jornada de capacitação e oferece instrumentos para que o gestor acompanhe registros, entregas e evidências."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const isTerra = c.accent === "terra";
            const color = isTerra ? "var(--color-terracotta)" : "var(--color-olive)";
            return (
              <FadeIn key={c.title} delay={i * 0.06}>
                <article className="relative h-full overflow-hidden rounded-xl border border-border bg-background p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <span
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ backgroundColor: color }}
                    aria-hidden
                  />
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `color-mix(in oklab, ${color} 16%, transparent)`,
                      color,
                    }}
                  >
                    <c.icon size={20} aria-hidden />
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold text-primary-dark">{c.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/75">{c.text}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Bloco "O que chamamos de rastreabilidade" */}
        <FadeIn delay={0.3}>
          <div
            className="mt-10 rounded-2xl border bg-background p-6 md:p-7"
            style={{
              borderColor: "color-mix(in oklab, var(--color-terracotta) 35%, var(--color-border))",
            }}
          >
            <div className="flex flex-wrap items-start gap-4 md:gap-6">
              <span
                className="inline-flex shrink-0 items-center gap-2 rounded-md px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.14em]"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--color-terracotta) 16%, transparent)",
                  color: "var(--color-terracotta)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-terracotta)" }} />
                O que chamamos de rastreabilidade
              </span>
              <div className="flex-1 min-w-[260px]">
                <p className="text-[17px] leading-relaxed text-foreground/85">
                  Rastreabilidade é organizar{" "}
                  <strong className="font-semibold text-foreground">registros verificáveis</strong>{" "}
                  da jornada de capacitação: participação, conclusão, aproveitamento, atividades e
                  evidências registradas pela instituição.
                </p>
                <p className="mt-2 text-[15px] text-foreground/70">
                  A plataforma oferece os instrumentos; a validação da aplicação prática permanece
                  sob governança do gestor.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

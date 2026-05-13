import { GraduationCap, ListChecks, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    n: "01",
    icon: GraduationCap,
    tag: "Aprender",
    title: "Trilhas curtas por função",
    text: "Módulos práticos com certificado.",
  },
  {
    n: "02",
    icon: ListChecks,
    tag: "Implementar",
    title: "Checklists com evidência",
    text: "Tarefas com prazo e comprovação.",
  },
  {
    n: "03",
    icon: BarChart3,
    tag: "Comprovar",
    title: "Dashboards auditáveis",
    text: "Relatórios prontos para auditoria.",
  },
];

export function SolutionSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <SectionTitle
            eyebrow="Solução"
            title="Da norma à evidência em três etapas"
            align="center"
          />
        </FadeIn>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.1}>
              <article className="flex flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-accent text-primary-dark">
                  <s.icon size={44} strokeWidth={1.6} />
                  <span className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-lg">
                    {s.n}
                  </span>
                </div>
                <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {s.tag}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-primary-dark">{s.title}</h3>
                <p className="mt-3 max-w-xs text-base text-foreground/75">{s.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

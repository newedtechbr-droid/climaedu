import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    n: "01",
    tag: "APRENDER",
    title: "Trilhas curtas por função",
    text: "Módulos baseados em problemas reais, com quiz de checagem e certificado ao concluir. Acesso por perfil: técnico, gestor, secretário.",
  },
  {
    n: "02",
    tag: "IMPLEMENTAR",
    title: "Checklists com evidência",
    text: "Tarefas práticas com responsável, prazo e comprovação (upload de foto, link ou documento). A capacitação vira rotina.",
  },
  {
    n: "03",
    tag: "COMPROVAR",
    title: "Dashboards auditáveis",
    text: "Acompanhe adesão, conclusão e proficiência por unidade ou secretaria. Relatórios exportáveis prontos para prestação de contas.",
  },
];

const badges = [
  "White-label completo",
  "Compatível com SCORM",
  "API disponível",
  "LGPD e WCAG 2.1",
];

export function SolutionSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Solução"
            title="Da norma à evidência — em três etapas integradas"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <article className="h-full rounded-xl border border-border border-t-4 border-t-primary bg-background p-6">
                <p className="text-3xl font-medium text-primary">{s.n}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.tag}</p>
                <h3 className="mt-2 text-lg">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground/80"
              >
                {b}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

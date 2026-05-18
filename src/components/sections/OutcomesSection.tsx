import { UserPlus, Lightbulb, Wrench, LineChart, Gauge } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const stages = [
  {
    n: "01",
    icon: UserPlus,
    title: "Adesão",
    text: "A equipe entra na jornada e acessa trilhas relevantes para sua função.",
  },
  {
    n: "02",
    icon: Lightbulb,
    title: "Consciência",
    text: "O conhecimento climático é assimilado com conteúdo claro, contextualizado e aplicável.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Aplicação",
    text: "O aprendizado se conecta a rotinas, protocolos e desafios reais da instituição.",
  },
  {
    n: "04",
    icon: LineChart,
    title: "Evidência",
    text: "A gestão acompanha participação, conclusão e proficiência com dados rastreáveis.",
  },
  {
    n: "05",
    icon: Gauge,
    title: "Eficiência",
    text: "Mais preparo técnico, menos retrabalho e maior segurança na tomada de decisão.",
  },
];

export function OutcomesSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <SectionTitle
            eyebrow="Resultados esperados"
            title="Da adesão à eficiência: o que a capacitação gera na instituição"
            align="center"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.06}>
              <article className="relative h-full rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <span
                  className="absolute left-6 top-6 h-[2px] w-8"
                  style={{ backgroundColor: "var(--color-terracotta)" }}
                  aria-hidden
                />
                <p
                  className="pt-5 text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: "var(--color-terracotta)" }}
                >
                  {s.n}
                </p>
                <span className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary-dark">
                  <s.icon size={20} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{s.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

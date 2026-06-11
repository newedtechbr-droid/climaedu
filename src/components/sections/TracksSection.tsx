import { Clock, Users, Target, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const courses = [
  {
    title: "Compras Públicas Sustentáveis",
    hours: "20h",
    audience: "Equipes de licitação, compras e suprimentos do setor público.",
    outcome: "Capacidade de inserir critérios de sustentabilidade em contratações públicas.",
  },
  {
    title: "Planejamento, Riscos e Conformidade nas Contratações Públicas",
    hours: "40h",
    audience: "Gestores públicos, controle interno e áreas de contratação.",
    outcome: "Domínio do ciclo de planejamento, riscos e conformidade nas compras.",
  },
  {
    title: "Mudanças Climáticas e ESG",
    hours: "60h",
    audience: "Lideranças públicas e corporativas, áreas de sustentabilidade e ESG.",
    outcome: "Visão integrada para conduzir agendas climáticas e de ESG nas instituições.",
  },
  {
    title: "Eventos Extremos e Resiliência Climática",
    hours: "20h",
    audience: "Defesa Civil, Meio Ambiente, planejamento urbano e gestão de riscos.",
    outcome: "Preparação para prevenir, responder e adaptar-se a eventos extremos.",
  },
  {
    title: "Governança em Tempos de Emergência Climática",
    hours: "20h",
    audience: "Alta liderança pública e gestores intersetoriais.",
    outcome: "Modelos de governança e coordenação para enfrentar emergências climáticas.",
    badge: "Lançamento 2026",
  },
];

export function TracksSection() {
  return (
    <section id="trilhas" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Cursos"
            title="Cursos disponíveis"
            subtitle="Cinco cursos autoinstrucionais para preparar equipes públicas em gestão climática, compras, riscos, ESG, eventos extremos e governança em emergência climática."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <article
                className="group relative flex h-full flex-col rounded-2xl border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                style={{
                  borderColor: c.badge
                    ? "color-mix(in oklab, var(--color-terracotta) 45%, var(--color-border))"
                    : "color-mix(in oklab, var(--color-olive) 35%, var(--color-border))",
                }}
              >
                {c.badge && (
                  <span
                    className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: "var(--color-terracotta)", letterSpacing: "0.06em" }}
                  >
                    <Sparkles size={11} /> {c.badge}
                  </span>
                )}
                <div
                  className="inline-flex items-center gap-1.5 self-start rounded-md px-2.5 py-1 text-[12px] font-bold"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <Clock size={13} /> {c.hours}
                </div>
                <h3 className="mt-3 text-[17px] font-bold leading-snug text-primary-dark">
                  {c.title}
                </h3>
                <div className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-foreground/75">
                  <p className="flex gap-2">
                    <Users size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-olive)" }} />
                    <span><span className="font-semibold text-foreground/90">Para quem: </span>{c.audience}</span>
                  </p>
                  <p className="flex gap-2">
                    <Target size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-olive)" }} />
                    <span><span className="font-semibold text-foreground/90">Resultado: </span>{c.outcome}</span>
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

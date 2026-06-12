import { Clock, Users, Target, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import comprasCover from "@/assets/courses/compras-publicas.png.asset.json";
import planejamentoCover from "@/assets/courses/planejamento-riscos.png.asset.json";
import esgCover from "@/assets/courses/mudancas-esg.png.asset.json";
import eventosCover from "@/assets/courses/eventos-extremos.png.asset.json";

const courses = [
  {
    title: "Compras Públicas Sustentáveis",
    hours: "20h",
    cover: comprasCover.url,
    category: "Contratações sustentáveis",
    audience: "Equipes de licitação, compras e suprimentos do setor público.",
    outcome: "Capacidade de inserir critérios de sustentabilidade em contratações públicas.",
  },
  {
    title: "Planejamento, Riscos e Conformidade nas Contratações Públicas",
    hours: "40h",
    cover: planejamentoCover.url,
    category: "Gestão pública",
    audience: "Gestores públicos, controle interno e áreas de contratação.",
    outcome: "Domínio do ciclo de planejamento, riscos e conformidade nas compras.",
  },
  {
    title: "Mudanças Climáticas e ESG",
    hours: "60h",
    cover: esgCover.url,
    category: "Clima e ESG",
    audience: "Lideranças públicas e corporativas, áreas de sustentabilidade e ESG.",
    outcome: "Visão integrada para conduzir agendas climáticas e de ESG nas instituições.",
  },
  {
    title: "Eventos Extremos e Resiliência Climática",
    hours: "20h",
    cover: eventosCover.url,
    category: "Resiliência climática",
    audience: "Defesa Civil, Meio Ambiente, planejamento urbano e gestão de riscos.",
    outcome: "Preparação para prevenir, responder e adaptar-se a eventos extremos.",
  },
  {
    title: "Governança em Tempos de Emergência Climática",
    hours: "20h",
    category: "Governança climática",
    audience: "Alta liderança pública e gestores intersetoriais.",
    outcome: "Modelos de governança e coordenação para enfrentar emergências climáticas.",
    badge: "Lançamento 2026",
  },
] as const;

export function TracksSection() {
  return (
    <section id="trilhas" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Cursos"
            title="Alguns dos nossos cursos"
            subtitle="Cinco cursos autoinstrucionais para preparar equipes públicas em gestão climática, compras, riscos, ESG, eventos extremos e governança em emergência climática."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderColor: c.badge
                    ? "color-mix(in oklab, var(--color-terracotta) 45%, var(--color-border))"
                    : "color-mix(in oklab, var(--color-olive) 28%, var(--color-border))",
                }}
              >
                {/* Capa */}
                <div
                  className="relative aspect-[3/4] overflow-hidden"
                  style={{
                    backgroundColor: c.cover
                      ? "transparent"
                      : "color-mix(in oklab, var(--color-olive) 18%, var(--color-surface))",
                  }}
                >
                  {c.cover ? (
                    <img
                      src={c.cover}
                      alt={`Capa do curso ${c.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-8 text-center">
                      <span className="text-[20px] font-bold leading-tight text-primary-dark/80">
                        {c.title}
                      </span>
                    </div>
                  )}
                  {c.badge && (
                    <span
                      className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white shadow"
                      style={{ backgroundColor: "var(--color-terracotta)", letterSpacing: "0.06em" }}
                    >
                      <Sparkles size={10} /> {c.badge}
                    </span>
                  )}
                  <span
                    className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-bold backdrop-blur"
                    style={{
                      backgroundColor: "color-mix(in oklab, white 78%, transparent)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <Clock size={11} /> {c.hours}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col p-5">
                  <p
                    className="text-[11.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--color-terracotta)" }}
                  >
                    {c.category}
                  </p>
                  <h3 className="mt-1.5 text-[16px] font-bold leading-snug text-primary-dark">
                    {c.title}
                  </h3>
                  <div className="mt-3 space-y-2 text-[13.5px] leading-relaxed text-foreground/75">
                    <p className="flex gap-2">
                      <Users size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-olive)" }} />
                      <span><span className="font-semibold text-foreground/90">Para quem: </span>{c.audience}</span>
                    </p>
                    <p className="flex gap-2">
                      <Target size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-olive)" }} />
                      <span><span className="font-semibold text-foreground/90">Resultado: </span>{c.outcome}</span>
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

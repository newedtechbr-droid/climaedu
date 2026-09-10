import { Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

type Course = {
  title: string;
  hours: string;
  cover: string;
  category: string;
  description: string;
};

const courses: Course[] = [
  {
    title: "Compras Públicas Sustentáveis",
    hours: "20h",
    cover: "/images/cursos/curso-contratacoes-sustentaveis.png",
    category: "Contratações sustentáveis",
    description:
      "Critérios de sustentabilidade aplicados às contratações públicas, para equipes de licitação e compras.",
  },
  {
    title: "Planejamento, Riscos e Conformidade",
    hours: "40h",
    cover: "/images/cursos/curso-planejamento-riscos.png",
    category: "Gestão pública",
    description:
      "Ciclo completo de planejamento, gestão de riscos e conformidade nas contratações do setor público.",
  },
  {
    title: "Mudanças Climáticas e ESG",
    hours: "60h",
    cover: "/images/cursos/curso-clima-esg.png",
    category: "Clima e ESG",
    description:
      "Visão integrada para conduzir agendas climáticas e de ESG em instituições públicas e corporativas.",
  },
  {
    title: "Eventos Extremos e Resiliência",
    hours: "20h",
    cover: "/images/cursos/curso-resiliencia-climatica.png",
    category: "Resiliência climática",
    description:
      "Prevenção, resposta e adaptação a eventos extremos, para Defesa Civil, Meio Ambiente e planejamento urbano.",
  },
];

export function TracksSection() {
  return (
    <section id="trilhas" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-16 md:pt-10 md:pb-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Cursos"
            title="Alguns dos nossos cursos"
            subtitle="Trilhas autoinstrucionais para preparar equipes públicas em clima, contratações, riscos e resiliência."
            align="center"
          />
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {courses.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderColor: "color-mix(in oklab, var(--color-olive) 22%, var(--color-border))",
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.cover}
                    alt={`Capa do curso ${c.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <span
                    className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10.5px] font-bold backdrop-blur"
                    style={{
                      backgroundColor: "color-mix(in oklab, white 82%, transparent)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <Clock size={10} /> {c.hours}
                  </span>

                  <div
                    className="pointer-events-none absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 30%, color-mix(in oklab, var(--color-primary-dark) 88%, transparent))",
                    }}
                  >
                    <p className="text-[12.5px] leading-relaxed text-white/95">{c.description}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--color-terracotta)" }}
                  >
                    {c.category}
                  </p>

                  <h3 className="mt-2 text-[15.5px] font-bold leading-snug text-primary-dark">
                    {c.title}
                  </h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

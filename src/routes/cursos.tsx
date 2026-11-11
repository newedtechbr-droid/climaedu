import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { cursos } from "@/data/cursos";
import { ACREDITAMOS, Fechamento, PageHeader } from "@/components/brand";

const title = "Cursos | CLIMAEDU";
const description =
  "Cursos sobre clima, eventos extremos, riscos e contratações públicas: materiais de apoio para preparar cada área que executa o plano.";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://climaedu.com/cursos" },
    ],
    links: [{ rel: "canonical", href: "https://climaedu.com/cursos" }],
  }),
  component: Cursos,
});

function Cursos() {
  return (
    <>
      <PageHeader
        eyebrow="Materiais de apoio"
        title="Cursos para quem executa o plano"
        lead={ACREDITAMOS}
      />

      <section className="bg-surface py-14 md:py-16">
        <div className="container-brand">
          <p className="max-w-[62ch] text-[19px] text-foreground/80">
            O clima atravessa todas as áreas. Por isso os cursos apoiam a preparação de cada
            secretaria e equipe, online e com certificado de conclusão.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {cursos.map((c) => (
              <article
                key={c.title}
                className="grid grid-cols-[110px_minmax(0,1fr)] overflow-hidden rounded-xl bg-background shadow-sm sm:grid-cols-[140px_minmax(0,1fr)]"
              >
                <img
                  src={c.cover}
                  alt={`Capa do curso ${c.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-terracotta">
                    {c.category}
                  </p>
                  <h2 className="mt-1 text-[20px] font-bold leading-snug text-primary-dark">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-[16px] leading-relaxed text-foreground/75">
                    {c.description}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-bold text-primary-deep">
                    <Clock size={14} aria-hidden /> {c.hours}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Fechamento
        title="Quer os cursos para a sua equipe?"
        text="Conte quem precisa ser preparado e indicamos os cursos e o formato de turma."
      />
    </>
  );
}

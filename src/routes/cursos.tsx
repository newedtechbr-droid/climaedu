import { createFileRoute } from "@tanstack/react-router";
import { CapasEmLeque, CursosStrip, Fechamento, PageHeader } from "@/components/brand";

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
        lead="O conhecimento para enfrentar os desafios do clima já existe. Os cursos levam esse conhecimento a cada secretaria e equipe, na linguagem de quem executa."
        media={<CapasEmLeque />}
      />

      <section className="bg-surface py-14 md:py-16">
        <div className="container-brand">
          <p className="max-w-[62ch] text-[19px] text-foreground/80">
            O clima atravessa todas as áreas. Por isso os cursos apoiam a preparação de cada
            secretaria e equipe, online e com certificado de conclusão.
          </p>
          <CursosStrip />
        </div>
      </section>

      <Fechamento
        title="Quer os cursos para a sua equipe?"
        text="Conte quem precisa ser preparado e indicamos os cursos e o formato de turma."
      />
    </>
  );
}

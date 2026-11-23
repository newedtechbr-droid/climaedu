import { createFileRoute } from "@tanstack/react-router";
import { CapasEmLeque, CursosStrip, FaqList, Fechamento, PageHeader } from "@/components/brand";
import { cursos } from "@/data/cursos";

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

const totalHoras = cursos.reduce((sum, c) => sum + Number.parseInt(c.hours, 10), 0);

const listaCursos = cursos.map((c) => `${c.title} (${c.hours})`);

const lead = `A CLIMAEDU oferece ${cursos.length} cursos online sobre clima, riscos e contratações públicas, com ${totalHoras} horas de conteúdo no total: ${listaCursos.slice(0, -1).join(", ")} e ${listaCursos[listaCursos.length - 1]}. Todos têm certificado de conclusão e podem ser combinados em trilhas para cada secretaria ou equipe.`;

const linkClass = "underline decoration-primary/40 underline-offset-4 hover:decoration-primary";

const faqCursos = [
  {
    q: "Quantos cursos a CLIMAEDU oferece?",
    a: `São ${cursos.length} cursos, com ${totalHoras} horas de conteúdo no total: ${listaCursos.join("; ")}.`,
  },
  {
    q: "Os cursos têm certificado?",
    a: "Sim. Cada pessoa recebe um certificado de conclusão ao terminar o curso, e a gestão acompanha a participação e a conclusão por área ou turma.",
  },
  {
    q: "Como os cursos são feitos?",
    a: "Online, no ambiente de aprendizagem da CLIMAEDU, no computador, no tablet ou no celular. Os cursos podem ser combinados com encontros ao vivo e atividades presenciais com as equipes.",
  },
  {
    q: "Os cursos podem ser adaptados ao plano da organização?",
    a: "Sim. Temos plataforma de ensino própria e usamos inteligência artificial para produzir cursos sob medida a partir do plano de cada organização.",
  },
];

function Cursos() {
  return (
    <>
      <PageHeader
        eyebrow="Materiais de apoio"
        title="Cursos para quem executa o plano"
        lead={lead}
        media={<CapasEmLeque />}
      />

      <section className="bg-surface py-14 md:py-16">
        <div className="container-brand">
          <p className="max-w-[62ch] text-[19px] text-foreground/80">
            O clima atravessa todas as áreas. Por isso os cursos apoiam a preparação de cada
            secretaria e equipe, online e com certificado de conclusão.
          </p>
          <CursosStrip />
          <p className="mt-8 max-w-[70ch] text-[16px] text-foreground/75">
            Segundo a{" "}
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Lei nº 14.133/2021
            </a>
            , incentivar o desenvolvimento nacional sustentável é um dos objetivos das contratações
            públicas. Os temas dos cursos também se relacionam com a{" "}
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12608.htm" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Lei nº 12.608/2012
            </a>{" "}
            (Proteção e Defesa Civil) e com a{" "}
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12187.htm" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Lei nº 12.187/2009
            </a>{" "}
            (Política Nacional sobre Mudança do Clima).
          </p>
        </div>
      </section>

      <FaqList items={faqCursos} />

      <Fechamento
        title="Quer os cursos para a sua equipe?"
        text="Conte quem precisa ser preparado e indicamos os cursos e o formato de turma."
      />
    </>
  );
}

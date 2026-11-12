import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import viposaLogo from "@/assets/partners/viposa.png";
import viposaMockup from "@/assets/mockup-plataforma-viposa.png";
import telaIndustria from "@/assets/industrial-course-rating.png";
import {
  BaseTecnica,
  Colunas,
  MetodologiaResumo,
  Notebook,
  Fechamento,
  FaqList,
  PageHeader,
  ui,
} from "@/components/brand";
import { faqIndustria, odsIndustria, referenciasIndustria } from "@/data/conteudo";

const title = "Indústria | CLIMAEDU";
const description =
  "A CLIMAEDU leva o conhecimento técnico da empresa a cada função, em atividades que exigem mais cuidado.";

const desafios = [
  {
    title: "Do escritório ao turno",
    text: "Procedimentos, normas e protocolos ambientais precisam chegar à liderança, à operação e aos terceiros, em todos os turnos.",
  },
  {
    title: "Na hora da auditoria",
    text: "Auditorias e certificações, como ISO 14001 e ISO 45001, pedem evidência de capacitação das pessoas, e não só lista de presença.",
  },
  {
    title: "O custo de não saber",
    text: "Um procedimento mal compreendido pode virar acidente, autuação ou parada da operação.",
  },
];

const limitesIndustria = [
  "Não elaboramos nem revisamos os procedimentos da empresa.",
  "Não fazemos auditoria nem emitimos certificação de conformidade.",
  "Não substituímos o SESMT, a brigada nem os responsáveis técnicos.",
  "Não substituímos consultorias nem sistemas de gestão.",
];

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://climaedu.com/empresas" },
    ],
    links: [{ rel: "canonical", href: "https://climaedu.com/empresas" }],
  }),
  component: Empresas,
});

function Empresas() {
  return (
    <>
      <PageHeader
        eyebrow="Indústria"
        title="Conhecimento técnico que chega a cada função"
        lead="Em atividades que exigem mais cuidado, cada pessoa precisa saber como agir. A CLIMAEDU leva o conhecimento técnico da empresa a cada função, da liderança ao chão de fábrica."
        media={
          <Notebook
            src={telaIndustria}
            alt="Curso para equipes industriais no ambiente de aprendizagem, com avaliação da aula"
          />
        }
      >
        <Link to="/demonstracao" className={ui.btn}>
          Conversar com a CLIMAEDU <ArrowRight size={18} />
        </Link>
      </PageHeader>

      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>O desafio</p>
          <h2 className={ui.h2}>O conhecimento existe. Ele precisa chegar a quem age</h2>
          <Colunas items={desafios} />
        </div>
      </section>

      <MetodologiaResumo
        title="Preparação para auditorias e certificações"
        intro="A mesma metodologia que usamos no poder público, aplicada aos procedimentos da empresa: cada função sabe o que fazer, e a capacitação fica registrada para apresentar quando for preciso."
        limitesItems={limitesIndustria}
      />

      <section className={ui.section}>
        <div className="container-brand grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center">
          <div>
            <img src={viposaLogo} alt="VIPOSA" className="h-14 w-auto" loading="lazy" />
            <p className={`${ui.eyebrow} mt-6`}>Universidade corporativa · projeto piloto</p>
            <h2 className={ui.h2}>Um ambiente com a identidade da empresa</h2>
            <p className={ui.intro}>
              A tecnologia é o meio. Com a VIPOSA, montamos uma universidade corporativa própria,
              com trilhas por função e materiais de apoio, para levar temas climáticos e
              socioambientais às equipes e lideranças, no computador, no tablet e no celular.
            </p>
          </div>
          <img
            src={viposaMockup}
            alt="Ambiente de aprendizagem da VIPOSA em notebook e tablet"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>



      <FaqList items={faqIndustria} surface />

      <BaseTecnica
        ods={odsIndustria}
        refs={referenciasIndustria}
        note="Fontes: ISO, Planalto, GRI, IFRS e ONU Brasil. As referências não substituem análise jurídica, técnica ou de conformidade."
        surface={false}
      />

      <Fechamento
        title="Que conhecimento precisa chegar à sua operação?"
        text="Conte o seu contexto e mostramos como seria o caminho até as equipes."
      />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import viposaLogo from "@/assets/partners/viposa.png";
import viposaMockup from "@/assets/mockup-plataforma-viposa.png";
import {
  BaseTecnica,
  Colunas,
  Entregas,
  Fechamento,
  FaqList,
  Formatos,
  INTEGRADORES,
  Limites,
  Metodo,
  PageHeader,
  ui,
} from "@/components/brand";
import { faqIndustria, odsIndustria, referenciasIndustria } from "@/data/conteudo";

const title = "Indústria | CLIMAEDU";
const description =
  "A CLIMAEDU leva o conhecimento técnico da empresa a cada função, para que a operação esteja pronta para agir em atividades que exigem mais cuidado.";

const desafios = [
  {
    title: "Do escritório ao turno",
    text: "Procedimentos, normas e protocolos ambientais precisam chegar à liderança, à operação e aos terceiros, em todos os turnos.",
  },
  {
    title: "Gente que entra e sai",
    text: "Rotatividade, novos contratados e prestadores. O conhecimento não pode ir embora com quem saiu.",
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
        title="Conhecimento que deixa a operação pronta para agir"
        lead="Em atividades que exigem mais cuidado, cada pessoa precisa saber como agir. A CLIMAEDU leva o conhecimento técnico da empresa a cada função, da liderança ao chão de fábrica."
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

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Como trabalhamos</p>
          <h2 className={ui.h2}>Partimos do que a empresa já tem</h2>
          <Metodo />
          <Formatos />
          <p className="mt-10 max-w-[60ch] font-display text-[22px] font-bold text-primary">
            {INTEGRADORES}
          </p>
          <div className="mt-10">
            <Limites items={limitesIndustria} />
          </div>
        </div>
      </section>

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


      <Entregas surface />


      <FaqList items={faqIndustria} />

      <BaseTecnica
        ods={odsIndustria}
        refs={referenciasIndustria}
        note="Fontes: ISO, Planalto, GRI, IFRS e ONU Brasil. As referências não substituem análise jurídica, técnica ou de conformidade."
      />

      <Fechamento
        title="Que conhecimento precisa chegar à sua operação?"
        text="Conte o seu contexto e mostramos como seria o caminho até as equipes."
      />
    </>
  );
}

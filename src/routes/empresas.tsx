import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import viposaLogo from "@/assets/partners/viposa.png";
import viposaMockup from "@/assets/mockup-plataforma-viposa.png";
import { Colunas, Fechamento, Limites, Metodo, PageHeader, PONTE, ui } from "@/components/brand";

const title = "Indústria | CLIMAEDU";
const description =
  "A CLIMAEDU ajuda indústrias a levar planos de emergência, protocolos ambientais e o tema do clima até quem está na operação.";

const desafios = [
  {
    title: "Do escritório ao turno",
    text: "Planos de emergência e procedimentos ambientais precisam chegar à liderança, à operação e aos terceiros, em todos os turnos.",
  },
  {
    title: "Gente que entra e sai",
    text: "Rotatividade, novos contratados e prestadores. O preparo precisa recomeçar a cada entrada, sem depender de quem já saiu.",
  },
  {
    title: "Clima no dia a dia",
    text: "Eventos extremos afetam a operação, a logística e as pessoas. O tema precisa sair do relatório e chegar à rotina.",
  },
];

const limitesIndustria = [
  "Não elaboramos nem revisamos o plano de emergência da empresa.",
  "Não fazemos auditoria nem emitimos certificação de conformidade.",
  "Não substituímos o SESMT, a brigada nem os responsáveis técnicos.",
  "Não substituímos consultorias nem sistemas de gestão ambiental.",
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
        title="Planos de emergência que chegam à operação"
        lead={`${PONTE} A CLIMAEDU leva os planos e protocolos da empresa a cada função, da liderança ao chão de fábrica.`}
      >
        <Link to="/demonstracao" className={ui.btn}>
          Conversar com a CLIMAEDU <ArrowRight size={18} />
        </Link>
      </PageHeader>

      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>O desafio</p>
          <h2 className={ui.h2}>O procedimento existe. A pergunta é se ele chega a quem age</h2>
          <Colunas items={desafios} />
        </div>
      </section>

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Como trabalhamos</p>
          <h2 className={ui.h2}>Partimos dos planos que a empresa já tem</h2>
          <Metodo />
        </div>
      </section>

      <section className={ui.section}>
        <div className="container-brand grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center">
          <div>
            <img src={viposaLogo} alt="VIPOSA" className="h-14 w-auto" loading="lazy" />
            <p className={`${ui.eyebrow} mt-6`}>Projeto piloto</p>
            <h2 className={ui.h2}>Universidade corporativa com a VIPOSA</h2>
            <p className={ui.intro}>
              Um ambiente de aprendizagem com a identidade da empresa, para levar temas climáticos
              e socioambientais às equipes e lideranças.
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

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <Limites items={limitesIndustria} />
          <Link
            to="/cursos"
            className="mt-8 inline-flex items-center gap-2 text-[18px] font-bold text-terracotta"
          >
            Ver os cursos de apoio <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Fechamento
        title="Quais planos precisam chegar à sua operação?"
        text="Conte o seu contexto e mostramos como seria o caminho do plano até as equipes."
      />
    </>
  );
}

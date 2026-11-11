import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Colunas, Fechamento, Limites, Metodo, PageHeader, PONTE, ui } from "@/components/brand";

const title = "Poder público | CLIMAEDU";
const description =
  "A CLIMAEDU ajuda prefeituras a levar o PLANCON a todas as áreas que precisam executá-lo, com preparo por área e continuidade quando a equipe ou o plano mudam.";

const desafios = [
  {
    title: "O plano é de muitas áreas",
    text: "Saúde, Assistência Social, Educação, Obras, Comunicação: cada uma tem um papel no PLANCON e precisa reconhecê-lo antes do alerta.",
  },
  {
    title: "As pessoas mudam",
    text: "Troca de gestão, de servidores e de comissionados. O preparo não pode ir embora com quem saiu.",
  },
  {
    title: "O plano é revisado",
    text: "Cada atualização e cada simulado trazem mudanças que precisam chegar a quem executa.",
  },
];

const publico = [
  { title: "Quem decide", text: "Prefeitos, secretários e chefes de gabinete." },
  {
    title: "Quem executa o plano",
    text: "A Defesa Civil e as secretarias com papel no PLANCON.",
  },
  {
    title: "Quem contrata e controla",
    text: "Agentes de contratação, compras, procuradoria e controle interno.",
  },
  {
    title: "Quem forma as equipes",
    text: "Escolas de governo, gestão de pessoas e associações de municípios.",
  },
];

export const Route = createFileRoute("/orgaos-publicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://climaedu.com/orgaos-publicos" },
    ],
    links: [{ rel: "canonical", href: "https://climaedu.com/orgaos-publicos" }],
  }),
  component: OrgaosPublicos,
});

function OrgaosPublicos() {
  return (
    <>
      <PageHeader
        eyebrow="Poder público"
        title="O PLANCON nas mãos de toda a prefeitura"
        lead={`${PONTE} A CLIMAEDU ajuda cada área a conhecer o seu papel no plano de contingência e a se preparar para ele.`}
      >
        <Link to="/demonstracao" className={ui.btn}>
          Conversar com a CLIMAEDU <ArrowRight size={18} />
        </Link>
      </PageHeader>

      <div className="bg-primary-dark text-white">
        <div className="container-brand flex flex-wrap items-baseline gap-x-10 gap-y-3 py-6">
          <p className="text-[19px] text-white">
            <b className="font-display text-[28px] text-[#e3aca4]">211</b> dos 295 municípios de SC
            têm PLANCON
          </p>
          <p className="text-[19px] text-white">
            <b className="font-display text-[28px] text-[#e3aca4]">150</b> informaram capacitações
          </p>
          <p className="text-[14px] text-white/60">Fonte: TCE/SC, levantamento de junho de 2026</p>
        </div>
      </div>

      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>O desafio</p>
          <h2 className={ui.h2}>Ter o plano é o começo</h2>
          <p className={ui.intro}>
            Os planos foram feitos por quem entende do assunto. O desafio é levar esse
            conhecimento a todas as pessoas que vão colocá-lo em prática, e manter isso ao longo do
            tempo.
          </p>
          <Colunas items={desafios} />
        </div>
      </section>

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Como trabalhamos</p>
          <h2 className={ui.h2}>Partimos do PLANCON que vocês já têm</h2>
          <Metodo />
        </div>
      </section>

      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Para quem</p>
          <h2 className={ui.h2}>Para toda a prefeitura, não só a Defesa Civil</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {publico.map((p) => (
              <div key={p.title}>
                <h3 className="text-[21px] font-bold text-primary">{p.title}</h3>
                <p className="mt-1.5 text-[17px] text-foreground/75">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Limites />
          </div>
          <Link
            to="/cursos"
            className="mt-8 inline-flex items-center gap-2 text-[18px] font-bold text-terracotta"
          >
            Ver os cursos de apoio <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Fechamento
        title="Vamos levar o seu PLANCON a todas as áreas que vão executá-lo?"
        text="Conte o seu contexto. Começamos pelo que já é público, sem pedir documentos internos."
      />
    </>
  );
}

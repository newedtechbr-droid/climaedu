import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import reuniaoImage from "@/assets/team-meeting.jpg";
import {
  Lente,
  Ambiente,
  ComoTrabalhamos,
  Entregas,
  NossaEntrega,
  BaseTecnica,
  Fechamento,
  FaqList,
  Limites,
  PageHeader,
  ui,
} from "@/components/brand";
import { faqPublico, odsPublico, referenciasPublico } from "@/data/conteudo";

const title = "Poder público | CLIMAEDU";
const description =
  "Ter o Plano de Contingência não basta. A CLIMAEDU ajuda cada área da prefeitura a saber o que fazer, estar preparada e conseguir demonstrar essa preparação.";

const publico = [
  { title: "Quem decide", text: "Prefeitos, vice-prefeitos, secretários e chefes de gabinete." },
  {
    title: "Quem executa o plano",
    text: "Defesa Civil e as áreas com papel no Plano de Contingência: Administração, Assistência Social, Saúde, Educação, Obras, Agricultura e Meio Ambiente.",
  },
  {
    title: "Quem contrata e controla",
    text: "Agentes de contratação, compras, procuradoria e controle interno.",
  },
  {
    title: "Quem articula e forma",
    text: "Associações de municípios, consórcios e escolas de governo.",
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
        title="Do plano no papel à prefeitura preparada"
        lead="Ter o Plano de Contingência não basta. Cada área da prefeitura precisa saber o que fazer, estar preparada e conseguir demonstrar essa preparação."
        media={
          <Lente
            src={reuniaoImage}
            alt="Gestores públicos reunidos em torno de mapas e documentos de planejamento"
          />
        }
      >
        <Link to="/demonstracao" className={ui.btn}>
          Conversar com a CLIMAEDU <ArrowRight size={18} />
        </Link>
      </PageHeader>

      <ComoTrabalhamos />

      <NossaEntrega />

      <Ambiente
        title="Uma escola de governo digital, com a identidade do município"
        text="A tecnologia é o meio. O município ganha um ambiente de aprendizagem próprio, com cursos por secretaria, materiais de apoio e acompanhamento."
      />

      <Entregas />

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Para quem</p>
          <h2 className={ui.h2}>Para toda a prefeitura, não só a Defesa Civil</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {publico.map((p) => (
              <div key={p.title}>
                <h3 className="text-[21px] font-bold text-primary-dark">{p.title}</h3>
                <p className="mt-1.5 text-[17px] text-foreground/75">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Limites />
          </div>
        </div>
      </section>


      <FaqList items={faqPublico} />

      <BaseTecnica
        ods={odsPublico}
        refs={referenciasPublico}
        note="Fontes: Planalto, AGU e IPCC. As referências não substituem a análise jurídica ou técnica do órgão."
      />

      <Fechamento
        title="Vamos preparar toda a prefeitura para o que está no plano?"
        text="Conte o seu contexto. Começamos pelo que já é público, sem pedir documentos internos."
      />
    </>
  );
}

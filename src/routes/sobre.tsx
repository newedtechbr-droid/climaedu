import { createFileRoute } from "@tanstack/react-router";
import campoImage from "@/assets/formadora-em-sala.jpg";
import reuniaoImage from "@/assets/cidade-verde.jpg";
import {
  Acreditamos,
  Colunas,
  FaqList,
  Fechamento,
  INTEGRADORES,
  Lente,
  NewEdTechMarca,
  PageHeader,
  ui,
} from "@/components/brand";

const title = "Sobre | CLIMAEDU";
const description =
  "A CLIMAEDU é a marca da NewEdTech, de Florianópolis, para resiliência climática: ajuda prefeituras e organizações a levar seus planos até quem vai executá-los.";

const principios = [
  {
    title: "Respeitar quem fez o plano",
    text: "Os planos existem e foram feitos por quem entende do assunto. Nosso trabalho começa a partir deles, não contra eles.",
  },
  {
    title: "Partir do que já existe",
    text: "Começamos pelo que é público e pelo que a organização já tem. Pedimos só o necessário, quando agrega.",
  },
  {
    title: "Prometer só o que entregamos",
    text: "Não fazemos auditoria, não certificamos conformidade e não substituímos a Defesa Civil nem os responsáveis técnicos.",
  },
];

const faqSobre = [
  {
    q: "O que é a CLIMAEDU?",
    a: "A CLIMAEDU é a marca da NewEdTech (New Tecnologia e Inovação Educacional Ltda, CNPJ 50.443.417/0001-05) para capacitação em resiliência climática. Atendemos prefeituras e indústrias a partir dos planos que cada organização já tem.",
  },
  {
    q: "Onde a CLIMAEDU fica?",
    a: "Em Florianópolis, Santa Catarina, na Rua Munique, 51, Córrego Grande. A capacitação combina cursos online, encontros ao vivo e atividades presenciais com as equipes.",
  },
  {
    q: "O que a CLIMAEDU não faz?",
    a: "Não elabora nem revisa planos, não faz auditoria, não emite certificação de conformidade e não substitui a Defesa Civil nem os responsáveis técnicos. O plano continua sendo da organização.",
  },
];

/* Logos recortados de /ecossistema-logos.png (um arquivo por marca). */
const ecossistema = [
  {
    grupo: "Programas de inovação e aceleração",
    logos: [
      { src: "/ecossistema/05.png", alt: "SebraeHub" },
      { src: "/ecossistema/07.png", alt: "Sebrae Startups" },
      { src: "/ecossistema/06.png", alt: "Rede Midihub" },
      { src: "/ecossistema/04.png", alt: "TXM Methods" },
      { src: "/ecossistema/00.png", alt: "Global Impact Bootcamp" },
      { src: "/ecossistema/03.png", alt: "Impact Hub" },
      { src: "/ecossistema/09.png", alt: "uGlobally" },
      { src: "/ecossistema/10.png", alt: "UK Government" },
    ],
  },
  {
    grupo: "Instituições, fomento e redes de Santa Catarina",
    logos: [
      { src: "/ecossistema/01.png", alt: "Governo de Santa Catarina" },
      { src: "/ecossistema/02.png", alt: "FAPESC" },
      { src: "/ecossistema/08.png", alt: "ACATE" },
      { src: "/ecossistema/14.png", alt: "Rede Catarinense de Centros de Inovação" },
      { src: "/ecossistema/12.png", alt: "Inova Contestado" },
      { src: "/ecossistema/13.png", alt: "I2EC, Instituto de Inovação e Empreendedorismo de Caçador" },
      { src: "/ecossistema/15.png", alt: "Prefeitura de Caçador" },
      { src: "/ecossistema/11.png", alt: "VIPOSA" },
    ],
  },
];

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://climaedu.com/sobre" },
    ],
    links: [{ rel: "canonical", href: "https://climaedu.com/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Resiliência climática começa pelas pessoas"
        lead="A CLIMAEDU ajuda prefeituras e organizações a levar seus planos até as equipes que vão executar cada etapa. Temos plataforma de ensino própria e usamos inteligência artificial para produzir cursos sob medida a partir do plano de cada organização. Somos de Florianópolis, Santa Catarina."
        media={<Lente src={campoImage} alt="Formadora conduzindo uma aula presencial" />}
      >
        <NewEdTechMarca />
      </PageHeader>

      <Acreditamos
        foto={reuniaoImage}
        alt="Vista aérea de avenida com passarelas verdes suspensas"
      />

      <section className={ui.section}>
        <div className="container-brand grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <p className={ui.eyebrow}>De onde viemos</p>
            <h2 className={ui.h2}>O que vimos na gestão pública</h2>
          </div>
          <div>
            <p className="text-[19px] text-foreground/80">
              Em conversas com gestores públicos, o mesmo padrão se repetia: áreas que não se
              conectam, insegurança na hora de agir e distância entre o que está no plano e o que
              acontece na prática. A CLIMAEDU trabalha nessa distância.
            </p>
            <p className="mt-4 text-[17px] text-foreground/75">
              De acordo com a{" "}
              <a
                href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12608.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                Lei nº 12.608/2012
              </a>
              , reduzir os riscos de desastre é dever da União, dos estados e dos municípios. Por
              isso cada área da prefeitura precisa saber o seu papel no plano.
            </p>
            <p className="mt-8 max-w-[30ch] font-display text-[clamp(26px,2.8vw,34px)] font-bold leading-tight text-primary">{INTEGRADORES}</p>
          </div>
        </div>
        <div className="container-brand">
          <Colunas items={principios} />
        </div>
      </section>

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Ecossistema</p>
          <h2 className={ui.h2}>Onde a CLIMAEDU está conectada</h2>
          {ecossistema.map((g) => (
            <div key={g.grupo} className="mt-10">
              <h3 className="text-[18px] font-bold text-primary-dark">{g.grupo}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {g.logos.map((l) => (
                  <li
                    key={l.src}
                    className="flex h-28 items-center justify-center rounded-xl border border-border bg-white p-5"
                  >
                    <img
                      src={l.src}
                      alt={l.alt}
                      className="max-h-16 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-10 max-w-[60ch] text-[16px] text-foreground/70">
            A CLIMAEDU é uma marca da New Tecnologia e Inovação Educacional Ltda (NewEdTech), CNPJ
            50.443.417/0001-05.
          </p>
        </div>
      </section>

      <FaqList items={faqSobre} />

      <Fechamento
        title="Vamos conversar?"
        text="Conte o seu contexto e os planos da sua organização. Retornamos para combinar uma conversa."
      />
    </>
  );
}

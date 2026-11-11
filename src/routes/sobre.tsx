import { createFileRoute } from "@tanstack/react-router";
import { ACREDITAMOS, Colunas, Fechamento, PageHeader, PONTE, ui } from "@/components/brand";

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
    text: "Não fazemos auditoria, não certificamos e não substituímos a Defesa Civil nem os responsáveis técnicos.",
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
        title="Uma marca da NewEdTech para resiliência climática"
        lead="A CLIMAEDU ajuda prefeituras e organizações a levar seus planos até as equipes que vão executar cada etapa. Somos de Florianópolis, Santa Catarina."
      />

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Acreditamos</p>
          <p className="mt-4 max-w-[26ch] font-display text-[clamp(30px,4vw,46px)] font-bold leading-[1.06] tracking-[-0.5px] text-primary-dark">
            {ACREDITAMOS}
          </p>
          <p className="mt-6 max-w-[60ch] text-[19px] text-foreground/80">
            {PONTE} Em conversas com a gestão pública, vimos o mesmo padrão se repetir: áreas que
            não se conectam, insegurança na hora de agir e distância entre o que está no plano e o
            que acontece na prática. A CLIMAEDU trabalha nessa distância.
          </p>
        </div>
      </section>

      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>O que nos orienta</p>
          <h2 className={ui.h2}>Três princípios</h2>
          <Colunas items={principios} />
        </div>
      </section>

      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Ecossistema</p>
          <h2 className={ui.h2}>Programas e redes de inovação de que participamos</h2>
          <img
            src="/ecossistema-logos.png?v=20260710"
            alt="Logos de programas e redes de inovação do ecossistema da CLIMAEDU"
            className="mt-10 h-auto w-full max-w-5xl object-contain"
            loading="lazy"
          />
          <p className="mt-8 max-w-[60ch] text-[17px] text-foreground/75">
            A CLIMAEDU é uma marca da New Tecnologia e Inovação Educacional Ltda (NewEdTech), CNPJ
            50.443.417/0001-05.
          </p>
        </div>
      </section>

      <Fechamento
        title="Vamos conversar?"
        text="Conte o seu contexto e os planos da sua organização. Retornamos para combinar uma conversa."
      />
    </>
  );
}

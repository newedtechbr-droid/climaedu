import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-field.jpg";
import viposaLogo from "@/assets/partners/viposa.png";
import { metodo } from "@/data/cursos";
import {
  ACREDITAMOS,
  Ambiente,
  CursosStrip,
  Entregas,
  Fechamento,
  INTEGRADORES,
  Metodo,
  NewEdTechMarca,
  PONTE,
  ui,
} from "@/components/brand";

const pageModified = "2026-11-11";
const title = "CLIMAEDU | Do plano à preparação";
const description =
  "A CLIMAEDU ajuda prefeituras e organizações a transformar planos de contingência e protocolos climáticos em equipes preparadas para agir.";

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


const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  url: "https://climaedu.com/",
  dateModified: pageModified,
  inLanguage: "pt-BR",
  isPartOf: { "@type": "WebSite", name: "CLIMAEDU", url: "https://climaedu.com/" },
  publisher: { "@type": "Organization", name: "NewEdTech", url: "https://climaedu.com/" },
  description,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { name: "dateModified", content: pageModified },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CLIMAEDU" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://climaedu.com/" },
      { property: "og:image", content: "https://climaedu.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://climaedu.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://climaedu.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-background">
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 hidden w-[40%] rounded-l-[999px] border-l-[14px] border-primary-dark bg-cover bg-center md:block"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container-brand relative py-14 md:py-20">
          <div className="md:max-w-[56%]">
            <p className={ui.eyebrow}>Resiliência climática na prática</p>
            <h1 className="mt-4 text-[clamp(50px,7.5vw,92px)] font-bold leading-[0.92] tracking-[-1.5px] text-primary">
              Do plano à preparação
            </h1>
            <p className={ui.lead}>
              A CLIMAEDU ajuda prefeituras e organizações a transformar planos de contingência e
              protocolos climáticos em equipes preparadas para agir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/demonstracao" className={ui.btn}>
                Conversar com a CLIMAEDU <ArrowRight size={18} />
              </Link>
              <a href="#como-trabalhamos" className={ui.btnGhost}>
                Como trabalhamos
              </a>
            </div>
            <NewEdTechMarca className="mt-10" />
          </div>
        </div>
        <div
          aria-hidden
          className="mx-4 mb-8 h-52 rounded-tl-[160px] border-l-[12px] border-primary-dark bg-cover bg-center md:hidden"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </header>

      {/* Faixa da abordagem */}
      <div className="bg-primary-dark text-white">
        <div className="container-brand flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
          {metodo.map((m, i) => (
            <span key={m.n} className="flex items-center gap-3 text-[18px]">
              <b className="font-display text-[#e3aca4]">{m.n}</b>
              <span>{m.title}</span>
              {i < metodo.length - 1 && (
                <ArrowRight size={18} className="hidden text-white/50 md:inline" aria-hidden />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Acreditamos + desafio */}
      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Acreditamos</p>
          <p className="mt-4 max-w-[26ch] font-display text-[clamp(30px,4vw,48px)] font-bold leading-[1.06] tracking-[-0.5px] text-primary-dark">
            {ACREDITAMOS}
          </p>
          <p className="mt-6 max-w-[56ch] text-[20px] text-foreground/80">
            {PONTE} É nessa passagem, do documento para quem executa, que a CLIMAEDU trabalha.
          </p>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section id="como-trabalhamos" className={`${ui.section} scroll-mt-24 bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Como trabalhamos</p>
          <h2 className={ui.h2}>Partimos do plano que vocês já têm</h2>
          <Metodo />
          <p className="mt-8 max-w-[60ch] font-display text-[22px] font-bold text-primary">
            {INTEGRADORES}
          </p>
          <p className="mt-3 text-[17px] text-foreground/75">
            O plano continua sendo de vocês: não elaboramos, não fazemos auditoria e não
            substituímos a Defesa Civil nem os responsáveis técnicos.
          </p>
        </div>
      </section>

      <Ambiente
        surface={false}
        title="A tecnologia é o meio"
        text="Cada organização ganha um ambiente de aprendizagem próprio, com a sua identidade: uma universidade corporativa ou uma escola de governo digital, com cursos, materiais de apoio e acompanhamento."
      />

      <Entregas surface />

      {/* Para quem */}
      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Para quem</p>
          <h2 className={ui.h2}>Para toda a prefeitura, não só a Defesa Civil</h2>
          <p className={ui.intro}>
            Ter o Plano de Contingência não basta. Cada área da prefeitura precisa saber o que
            fazer, estar preparada e conseguir demonstrar essa preparação.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {publico.map((p) => (
              <div key={p.title}>
                <h3 className="text-[21px] font-bold text-primary">{p.title}</h3>
                <p className="mt-1.5 text-[17px] text-foreground/75">{p.text}</p>
              </div>
            ))}
          </div>
          <Link
            to="/orgaos-publicos"
            className="mt-8 inline-flex items-center gap-2 text-[18px] font-bold text-terracotta"
          >
            CLIMAEDU para o poder público <ArrowRight size={17} />
          </Link>

          <Link
            to="/empresas"
            className="group mt-12 grid gap-6 rounded-2xl bg-surface p-7 no-underline md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-9"
          >
            <div>
              <p className={ui.eyebrow}>Também para a indústria</p>
              <h3 className="mt-2 text-[26px] font-bold leading-tight text-primary-dark">
                Conhecimento que deixa a operação pronta para agir
              </h3>
              <p className="mt-2 max-w-[60ch] text-[17px] text-foreground/75">
                Em atividades que exigem mais cuidado, cada pessoa precisa saber como agir.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={viposaLogo} alt="VIPOSA" className="h-10 w-auto" loading="lazy" />
              <span className="text-[15px] text-foreground/70">Projeto piloto</span>
              <ArrowRight size={20} className="text-terracotta transition group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* Materiais de apoio */}
      <section className={`${ui.section} bg-surface`}>
        <div className="container-brand">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className={ui.eyebrow}>Materiais de apoio</p>
              <h2 className={ui.h2}>Cursos para cada área que o clima atravessa</h2>
              <p className={ui.intro}>
                O preparo não fica só com quem escreveu o plano. Os cursos levam os temas do clima
                a cada secretaria e equipe, na linguagem de quem executa.
              </p>
            </div>
            <Link to="/cursos" className={ui.btnGhost}>
              Ver cursos
            </Link>
          </div>
          <CursosStrip />
        </div>
      </section>

      <Fechamento
        title="Vamos conversar sobre os planos da sua organização?"
        text="Conte o seu contexto. Mostramos como seria o caminho do plano até as equipes, sem pedir documentos internos para começar."
      />
    </>
  );
}

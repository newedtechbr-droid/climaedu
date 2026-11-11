import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-field.jpg";
import viposaLogo from "@/assets/partners/viposa.png";
import { metodo } from "@/data/cursos";
import { ACREDITAMOS, Colunas, CursosStrip, Fechamento, Metodo, PONTE, ui } from "@/components/brand";

const pageModified = "2026-11-11";
const title = "CLIMAEDU | Do plano à preparação";
const description =
  "A CLIMAEDU ajuda prefeituras e organizações a transformar o PLANCON e outros planos de contingência em equipes preparadas para agir.";

const desafios = [
  {
    title: "Conexão",
    text: "O plano envolve várias áreas, e cada uma enxerga só a sua parte. O preparo começa quando elas se reconhecem no mesmo plano.",
  },
  {
    title: "Preparo",
    text: "Quem executa precisa saber o próprio papel antes do alerta, na linguagem de quem trabalha.",
  },
  {
    title: "Continuidade",
    text: "Equipes e gestões mudam, e o plano é revisado. O preparo precisa acompanhar, sem depender de quem já saiu.",
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
              A CLIMAEDU ajuda prefeituras e organizações a transformar o PLANCON e outros planos
              de contingência em equipes preparadas para agir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/demonstracao" className={ui.btn}>
                Conversar com a CLIMAEDU <ArrowRight size={18} />
              </Link>
              <a href="#como-trabalhamos" className={ui.btnGhost}>
                Como trabalhamos
              </a>
            </div>
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
          <Colunas items={desafios} />
        </div>
      </section>

      {/* Como trabalhamos */}
      <section id="como-trabalhamos" className={`${ui.section} scroll-mt-24 bg-surface`}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Como trabalhamos</p>
          <h2 className={ui.h2}>Partimos do plano que vocês já têm</h2>
          <Metodo />
          <p className="mt-6 text-[17px] text-foreground/75">
            O plano continua sendo de vocês: não elaboramos, não auditamos e não substituímos a
            Defesa Civil nem os responsáveis técnicos.
          </p>
        </div>
      </section>

      {/* Para quem */}
      <section className={ui.section}>
        <div className="container-brand">
          <p className={ui.eyebrow}>Para quem</p>
          <h2 className={ui.h2}>Onde há um plano para executar</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <Link
              to="/orgaos-publicos"
              className="group rounded-2xl bg-primary p-7 text-white no-underline md:p-9"
            >
              <p className="text-[15px] font-bold uppercase tracking-[0.12em] text-white/75">
                Poder público
              </p>
              <h3 className="mt-3 text-[30px] font-bold leading-tight text-white">
                O PLANCON nas mãos de toda a prefeitura
              </h3>
              <p className="mt-3 text-[18px] text-white/85">
                Não só a Defesa Civil: as secretarias que executam o plano, quem decide, quem
                contrata e quem forma as equipes.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[17px] font-bold">
                CLIMAEDU para o poder público{" "}
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link to="/empresas" className="group rounded-2xl bg-surface p-7 no-underline md:p-9">
              <p className={ui.eyebrow}>Indústria</p>
              <h3 className="mt-3 text-[26px] font-bold leading-tight text-primary-dark">
                Planos de emergência que chegam à operação
              </h3>
              <div className="mt-5 flex items-center gap-4">
                <img src={viposaLogo} alt="VIPOSA" className="h-10 w-auto" loading="lazy" />
                <p className="text-[16px] text-foreground/75">Projeto piloto com a VIPOSA</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-[17px] font-bold text-terracotta">
                CLIMAEDU para a indústria{" "}
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
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

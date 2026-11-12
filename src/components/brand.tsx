import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BarChart3, Clock, FileCheck2, Laptop, MapPin, MonitorSmartphone, Target, Video } from "lucide-react";
import { cursos, limites, metodo } from "@/data/cursos";
import { entregas, formatos, type Faq, type Ods, type Referencia } from "@/data/conteudo";
import newedtechLogo from "@/assets/newedtech-logo.png";
import tabletImg from "@/assets/mockup-climaedu.png";
import devicesImg from "@/assets/climaedu-platform-devices.png";

/* Linguagem visual herdada da landing page "Municípios Preparados". */
export const ui = {
  eyebrow: "text-[15px] font-bold uppercase tracking-[0.12em] text-primary",
  h1: "mt-4 text-[clamp(42px,5.6vw,72px)] font-bold leading-[0.96] tracking-[-1px] text-primary-dark",
  h2: "mt-3 text-[clamp(30px,3.8vw,46px)] font-bold leading-[1.04] tracking-[-0.5px] text-primary-dark",
  lead: "mt-6 max-w-[38ch] text-[clamp(19px,1.9vw,24px)] leading-snug text-primary-dark",
  intro: "mt-5 max-w-[60ch] text-[19px] text-foreground/80",
  btn: "inline-flex items-center gap-2 rounded-full border-2 border-terracotta bg-terracotta px-7 py-3.5 text-[17px] font-bold text-white no-underline transition hover:border-[#7c2e26] hover:bg-[#7c2e26]",
  btnGhost:
    "inline-flex items-center gap-2 rounded-full border-2 border-terracotta bg-transparent px-7 py-3.5 text-[17px] font-bold text-terracotta no-underline transition hover:bg-surface",
  section: "py-16 md:py-20",
};

export const ACREDITAMOS =
  "O conhecimento para enfrentar os desafios do clima já existe. A CLIMAEDU é a ponte que leva esse conhecimento a cada pessoa que precisa agir.";
export const PONTE = "Um plano ganha força quando cada pessoa sabe o seu papel antes de precisar dele.";
export const COMPROMISSO =
  "Partir do plano de vocês, capacitar cada setor para o seu papel e deixar o conhecimento registrado na instituição.";
export const INTEGRADORES = "Somos integradores: conectamos documentos, setores, pessoas e dados.";

/* ---------- Mídia ---------- */

/** Foto recortada em "lente", como a capa da landing page. */
export function Lente({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`aspect-[4/5] w-full rounded-tl-[50%] rounded-bl-[50%] border-l-[12px] border-primary-dark bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

/** Moldura de notebook para telas reais da plataforma. Nenhuma tela aparece sem moldura. */
export function Notebook({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-t-[18px] bg-[#1d2327] p-[2.2%] pb-[2.6%] shadow-[0_30px_60px_-30px_rgba(20,30,40,0.6)]">
        <div className="mx-auto mb-[1.4%] h-1.5 w-1.5 rounded-full bg-white/25" />
        <img src={src} alt={alt} className="block w-full rounded-[3px]" loading="lazy" />
      </div>
      <div className="relative mx-[-6%] h-4 rounded-b-[14px] bg-gradient-to-b from-[#cfd3d6] to-[#9aa1a6]">
        <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-md bg-[#8a9095]" />
      </div>
    </div>
  );
}

/* ---------- Cabeçalho de página ---------- */

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
  media,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
  media?: ReactNode;
}) {
  return (
    <header className="overflow-hidden bg-background">
      <div
        className={`container-brand grid items-center gap-10 py-12 md:py-16 ${
          media ? "md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]" : ""
        }`}
      >
        <div>
          <p className={ui.eyebrow}>{eyebrow}</p>
          <h1 className={`${ui.h1} max-w-[16ch]`}>{title}</h1>
          <p className={ui.lead}>{lead}</p>
          {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
        </div>
        {media && <div className="mx-auto w-full max-w-[460px] md:max-w-none">{media}</div>}
      </div>
    </header>
  );
}

/* ---------- Acreditamos + promessa ---------- */

export function Acreditamos({ foto, alt }: { foto: string; alt: string }) {
  return (
    <section className="overflow-hidden bg-primary text-white">
      <div className="container-brand grid items-center gap-10 py-16 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:py-20">
        <div>
          <p className="text-[15px] font-bold uppercase tracking-[0.12em] text-white/75">
            Acreditamos
          </p>
          <p className="mt-4 font-display text-[clamp(30px,3.8vw,48px)] font-bold leading-[1.08] tracking-[-0.5px] text-white">
            {ACREDITAMOS}
          </p>
          <p className="mt-6 max-w-[54ch] text-[19px] text-white/85">{PONTE}</p>
          <div className="mt-8 border-l-4 border-[#e3aca4] pl-5">
            <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#f0cbc5]">
              Nosso compromisso
            </p>
            <p className="mt-1 font-display text-[clamp(21px,2.2vw,27px)] font-bold leading-snug text-white">
              {COMPROMISSO}
            </p>
          </div>
        </div>
        <div
          role="img"
          aria-label={alt}
          className="mx-auto aspect-square w-full max-w-[420px] rounded-full border-[10px] border-white/15 bg-cover bg-center"
          style={{ backgroundImage: `url(${foto})` }}
        />
      </div>
    </section>
  );
}

/* ---------- Blocos de conteúdo ---------- */

export function Colunas({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-3">
      {items.map((d) => (
        <div key={d.title} className="border-t-[3px] border-primary pt-4">
          <h3 className="text-[24px] font-bold text-primary-dark">{d.title}</h3>
          <p className="mt-2 text-[17px] text-foreground/75">{d.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Metodo({ steps = metodo }: { steps?: { n: string; title: string; text: string }[] }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {steps.map((m) => (
        <div key={m.n} className="rounded-xl bg-background p-6">
          <span className="font-display text-[30px] font-bold text-terracotta">{m.n}</span>
          <h3 className="mt-1 text-[22px] font-bold text-primary-dark">{m.title}</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-foreground/75">{m.text}</p>
        </div>
      ))}
    </div>
  );
}

const iconesFormatos = [Laptop, Video, MapPin];

export function Formatos() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {formatos.map((f, i) => {
        const Icon = iconesFormatos[i];
        return (
          <div key={f.title} className="rounded-xl border-t-[3px] border-primary bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <Icon size={28} className="text-primary" aria-hidden />
              <span className="rounded-full bg-[#e6ecdf] px-3 py-1 text-[13px] font-bold uppercase tracking-[0.08em] text-primary-deep">
                {f.tag}
              </span>
            </div>
            <h3 className="mt-4 text-[22px] font-bold text-primary-dark">{f.title}</h3>
            <p className="mt-2 text-[16px] text-foreground/75">{f.text}</p>
          </div>
        );
      })}
    </div>
  );
}

/** "Nossa entrega": os três formatos de preparação. */
export function NossaEntrega({ surface = false }: { surface?: boolean }) {
  return (
    <section className={`${ui.section} ${surface ? "bg-surface" : ""}`}>
      <div className="container-brand">
        <p className={ui.eyebrow}>Nossa entrega</p>
        <h2 className={ui.h2}>Três formas de preparar as equipes</h2>
        <p className={ui.intro}>
          Combinamos os formatos conforme o plano, as áreas envolvidas e a rotina de cada equipe.
        </p>
        <Formatos />
      </div>
    </section>
  );
}

/** Resumo da metodologia para as páginas internas (a versão completa fica na home). */
export function MetodologiaResumo({
  limitesItems,
  title = "Partimos de um plano existente",
  intro,
  linkTo = "/orgaos-publicos",
}: {
  limitesItems?: string[];
  title?: string;
  intro?: string;
  linkTo?: "/orgaos-publicos" | "/";
}) {
  const colunas = [
    { titulo: "Etapas", itens: metodo.map((m) => `${m.n} · ${m.title}`) },
    { titulo: "Formatos", itens: formatos.map((f) => `${f.title} (${f.tag.toLowerCase()})`) },
    { titulo: "O que fica registrado", itens: entregas.map((e) => e.title) },
  ];
  return (
    <section id="metodologia" className={`${ui.section} scroll-mt-24 overflow-hidden bg-surface`}>
      <div className="container-brand grid items-center gap-10 md:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
        <div>
          <p className={ui.eyebrow}>Metodologia CLIMAEDU</p>
          <h2 className={ui.h2}>{title}</h2>
          {intro && <p className={ui.intro}>{intro}</p>}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {colunas.map((c) => (
              <div key={c.titulo} className="rounded-xl border-t-[3px] border-primary bg-background p-5">
                <h3 className="text-[15px] font-bold uppercase tracking-[0.1em] text-terracotta">
                  {c.titulo}
                </h3>
                <ul className="mt-3 grid gap-2">
                  {c.itens.map((i) => (
                    <li key={i} className="text-[17px] font-bold leading-snug text-primary-dark">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 font-display text-[20px] font-bold text-primary">{INTEGRADORES}</p>
          <Link
            to={linkTo}
            hash="como-trabalhamos"
            className="mt-4 inline-flex items-center gap-2 text-[17px] font-bold text-terracotta"
          >
            Ver a metodologia completa <ArrowRight size={17} />
          </Link>
        </div>
        <img
          src={tabletImg}
          alt="Ambiente de aprendizagem da CLIMAEDU no tablet e no celular"
          className="mx-auto w-full max-w-[380px]"
          loading="lazy"
        />
      </div>
      {limitesItems && (
        <div className="container-brand mt-12">
          <Limites items={limitesItems} />
        </div>
      )}
    </section>
  );
}

/** Seção completa "Como trabalhamos" (home). */
export function ComoTrabalhamos({ limitesItems }: { limitesItems?: string[] }) {
  return (
    <section id="como-trabalhamos" className={`${ui.section} scroll-mt-24 bg-surface`}>
      <div className="container-brand">
        <p className={ui.eyebrow}>Como trabalhamos · Metodologia CLIMAEDU</p>
        <h2 className={ui.h2}>Partimos de um plano existente</h2>
        <Metodo />
        <p className="mt-10 max-w-[60ch] font-display text-[22px] font-bold text-primary">
          {INTEGRADORES}
        </p>
        {limitesItems && (
          <div className="mt-10">
            <Limites items={limitesItems} />
          </div>
        )}
      </div>
    </section>
  );
}

export function Limites({ items = limites }: { items?: string[] }) {
  return (
    <div className="rounded-2xl bg-[#e6ecdf] p-6 md:p-8">
      <p className={ui.eyebrow}>O plano continua seu</p>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((l) => (
          <li key={l} className="border-l-[3px] border-primary pl-4 text-[17px] text-primary-dark">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

const recursosAmbiente = [
  { icon: Target, text: "Trilhas por área e por função" },
  { icon: MonitorSmartphone, text: "No computador, no tablet e no celular" },
  { icon: Award, text: "Certificados emitidos a cada conclusão" },
  { icon: BarChart3, text: "Relatórios para a gestão acompanhar" },
];

/** Ambiente de aprendizagem próprio: a tecnologia como meio. Só telas dentro de mockup. */
export function Ambiente({
  title,
  text,
  surface = true,
}: {
  title: string;
  text: string;
  surface?: boolean;
}) {
  return (
    <section className={`${ui.section} overflow-hidden ${surface ? "bg-surface" : ""}`}>
      <div className="container-brand grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <p className={ui.eyebrow}>Ambiente de aprendizagem</p>
          <h2 className={ui.h2}>{title}</h2>
          <p className={ui.intro}>{text}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {recursosAmbiente.map(({ icon: Icon, text: t }) => (
              <li key={t} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon size={20} aria-hidden />
                </span>
                <span className="pt-1.5 text-[17px] text-primary-dark">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={devicesImg}
          alt="Ambiente de aprendizagem da CLIMAEDU em notebook, tablet e celular"
          className="w-full md:scale-110"
          loading="lazy"
        />
      </div>
    </section>
  );
}

const iconesEntregas = [Award, BarChart3, Target, FileCheck2];

export function Entregas({ surface = false }: { surface?: boolean }) {
  return (
    <section className={`${ui.section} ${surface ? "bg-surface" : ""}`}>
      <div className="container-brand">
        <p className={ui.eyebrow}>O que fica registrado</p>
        <h2 className={ui.h2}>Preparo que a gestão consegue acompanhar</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {entregas.map((e, i) => {
            const Icon = iconesEntregas[i % iconesEntregas.length];
            return (
              <div key={e.title} className="rounded-xl border-t-[3px] border-primary bg-background p-6 shadow-sm">
                <Icon size={26} className="text-terracotta" aria-hidden />
                <h3 className="mt-4 text-[21px] font-bold text-primary-dark">{e.title}</h3>
                <p className="mt-2 text-[16px] text-foreground/75">{e.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CursoCard({ c }: { c: (typeof cursos)[number] }) {
  return (
    <article className="grid h-full grid-cols-[110px_minmax(0,1fr)] overflow-hidden rounded-xl bg-background shadow-sm sm:grid-cols-[140px_minmax(0,1fr)]">
      <img src={c.cover} alt={`Capa do curso ${c.title}`} className="h-full w-full object-cover" loading="lazy" />
      <div className="p-5">
        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-terracotta">{c.category}</p>
        <h3 className="mt-1 text-[20px] font-bold leading-snug text-primary-dark">{c.title}</h3>
        <p className="mt-2 text-[16px] leading-relaxed text-foreground/75">{c.description}</p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-bold text-primary-deep">
          <Clock size={14} aria-hidden /> {c.hours}
        </p>
      </div>
    </article>
  );
}

export function CursosStrip() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {cursos.map((c) => (
        <CursoCard key={c.title} c={c} />
      ))}
    </div>
  );
}

/** Capas de curso em leque, para cabeçalhos. */
export function CapasEmLeque() {
  const capas = cursos.slice(0, 3);
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[460px]">
      {capas.map((c, i) => (
        <img
          key={c.title}
          src={c.cover}
          alt={`Capa do curso ${c.title}`}
          className="absolute top-[6%] w-[46%] rounded-xl shadow-[0_24px_40px_-20px_rgba(20,30,40,0.55)]"
          style={{
            left: `${i * 27}%`,
            transform: `rotate(${(i - 1) * 7}deg) translateY(${i === 1 ? -4 : 6}%)`,
            zIndex: i === 1 ? 3 : 1,
          }}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export function OdsGrid({ items }: { items: Ods[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((o) => (
        <div key={o.n} className="flex gap-4 rounded-xl bg-background p-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary font-display text-[20px] font-bold text-white">
            {o.n}
          </span>
          <div>
            <h3 className="text-[17px] font-bold leading-tight text-primary-dark">{o.title}</h3>
            <p className="mt-1 text-[15px] leading-snug text-foreground/75">{o.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Referencias({ items, note }: { items: Referencia[]; note: string }) {
  return (
    <>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <li key={r.href}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-xl border border-border bg-background p-4 no-underline transition hover:border-primary"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-terracotta">
                {r.source}
              </p>
              <p className="mt-1 text-[17px] font-bold text-primary-dark">{r.title}</p>
              <p className="text-[15px] text-foreground/75">{r.label}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[14px] text-foreground/65">{note}</p>
    </>
  );
}

/** ODS + referências numa só seção, para não alongar a página. */
export function BaseTecnica({
  ods,
  refs,
  note,
  surface = true,
}: {
  ods: Ods[];
  refs: Referencia[];
  note: string;
  surface?: boolean;
}) {
  return (
    <section className={`${ui.section} ${surface ? "bg-surface" : ""}`}>
      <div className="container-brand">
        <p className={ui.eyebrow}>Agenda 2030</p>
        <h2 className={ui.h2}>Objetivos de Desenvolvimento Sustentável</h2>
        <OdsGrid items={ods} />
        <p className={`${ui.eyebrow} mt-14`}>Base técnica</p>
        <h2 className={ui.h2}>Referências com que trabalhamos</h2>
        <Referencias items={refs} note={note} />
      </div>
    </section>
  );
}

export function FaqList({ items, surface = false }: { items: Faq[]; surface?: boolean }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className={`${ui.section} ${surface ? "bg-surface" : ""}`}>
      <div className="container-brand grid gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
        <div>
          <p className={ui.eyebrow}>Perguntas frequentes</p>
          <h2 className={ui.h2}>Respostas diretas</h2>
          <p className="mt-4 text-[17px] text-foreground/75">
            Não encontrou o que procurava?{" "}
            <Link to="/demonstracao" className="font-bold text-terracotta">
              Fale com a gente
            </Link>
            .
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {items.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-bold text-primary-dark">
                {f.q}
                <span className="text-[26px] leading-none text-terracotta transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[17px] text-foreground/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewEdTechMarca({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-foreground/70">
        Uma solução
      </p>
      <img src={newedtechLogo} alt="NewEdTech" className="h-8 w-auto" loading="lazy" />
    </div>
  );
}

export function Fechamento({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-[#151a1d] py-16 text-white md:py-20">
      <div className="container-brand grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <h2 className="max-w-[22ch] text-[clamp(30px,4vw,46px)] font-bold leading-[1.02] text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-[56ch] text-[19px] text-white/80">{text}</p>
        </div>
        <Link to="/demonstracao" className={ui.btn}>
          Agendar uma conversa <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

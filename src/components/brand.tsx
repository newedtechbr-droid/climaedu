import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { cursos, limites, metodo } from "@/data/cursos";

/* Linguagem visual herdada da landing page "Municípios Preparados". */
export const ui = {
  eyebrow: "text-[15px] font-bold uppercase tracking-[0.12em] text-primary",
  h1: "mt-4 text-[clamp(44px,6.5vw,80px)] font-bold leading-[0.95] tracking-[-1px] text-primary",
  h2: "mt-3 text-[clamp(32px,4.2vw,48px)] font-bold leading-[1.02] tracking-[-0.5px] text-primary-dark",
  lead: "mt-6 max-w-[40ch] text-[clamp(20px,2.2vw,26px)] leading-snug text-primary-dark",
  intro: "mt-5 max-w-[60ch] text-[19px] text-foreground/80",
  btn: "inline-flex items-center gap-2 rounded-full border-2 border-terracotta bg-terracotta px-7 py-3.5 text-[17px] font-bold text-white no-underline transition hover:border-[#7c2e26] hover:bg-[#7c2e26]",
  btnGhost:
    "inline-flex items-center gap-2 rounded-full border-2 border-terracotta bg-transparent px-7 py-3.5 text-[17px] font-bold text-terracotta no-underline transition hover:bg-surface",
  section: "py-16 md:py-20",
};

export const ACREDITAMOS =
  "O conhecimento para enfrentar os desafios do clima já existe. O que falta é ele chegar a cada pessoa que precisa agir.";
export const PONTE = "Um plano ganha força quando cada pessoa sabe o seu papel antes de precisar dele.";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="bg-background">
      <div className="container-brand py-12 md:py-16">
        <p className={ui.eyebrow}>{eyebrow}</p>
        <h1 className={`${ui.h1} max-w-[18ch]`}>{title}</h1>
        <p className={ui.lead}>{lead}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}

/** Três colunas com filete verde, como o "Por que participar" da landing page. */
export function Colunas({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-3">
      {items.map((d) => (
        <div key={d.title} className="border-t-[3px] border-primary pt-4">
          <h3 className="text-[24px] font-bold text-primary">{d.title}</h3>
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
        <div key={m.n} className="rounded-xl bg-background p-5">
          <span className="font-display text-[26px] font-bold text-terracotta">{m.n}</span>
          <h3 className="mt-1 text-[21px] font-bold text-primary-dark">{m.title}</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-foreground/75">{m.text}</p>
        </div>
      ))}
    </div>
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

export function CursosStrip() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cursos.map((c) => (
        <article key={c.title} className="flex flex-col overflow-hidden rounded-xl bg-background shadow-sm">
          <div className="relative aspect-[4/3]">
            <img
              src={c.cover}
              alt={`Capa do curso ${c.title}`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-md bg-white/85 px-2 py-0.5 text-[13px] font-bold text-primary-deep">
              <Clock size={11} aria-hidden /> {c.hours}
            </span>
          </div>
          <div className="p-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-terracotta">
              {c.category}
            </p>
            <h3 className="mt-1 text-[16px] font-bold leading-snug text-primary-dark">{c.title}</h3>
          </div>
        </article>
      ))}
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

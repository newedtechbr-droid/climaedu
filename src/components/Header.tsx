import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

const solucoes = [
  { to: "/orgaos-publicos", label: "Órgãos públicos", helper: "Prefeituras, secretarias e Defesa Civil" },
  { to: "/empresas", label: "Empresas", helper: "ESG, RH, SSMA e compliance" },
  { to: "/escolas", label: "Escolas e redes de ensino", helper: "Educação climática aplicada" },
] as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/plataforma", label: "Como funciona" },
  { to: "/escolas", label: "Na Sala de Aula" },
  { to: "/cursos", label: "Cursos" },
  { to: "/diferenciais", label: "Diferenciais" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSol, setOpenSol] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!solutionsRef.current?.contains(event.target as Node)) {
        setOpenSol(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent transition-all ${
        scrolled
          ? "border-border/70 bg-background/95 shadow-[0_1px_8px_rgba(0,0,0,0.06)] backdrop-blur"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center" aria-label="CLIMAEDU - página inicial">
          <img src="/logo.png" alt="CLIMAEDU" className="h-11 md:h-14" />
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Navegação principal">
          {nav.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex h-11 items-center rounded-md px-1 text-[15px] font-semibold text-foreground/85 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}

          <div
            ref={solutionsRef}
            className="relative"
            onMouseEnter={() => setOpenSol(true)}
            onMouseLeave={() => setOpenSol(false)}
          >
            <button
              type="button"
              className="inline-flex h-11 items-center gap-1.5 rounded-md px-1 text-[15px] font-semibold text-foreground/85 transition-colors hover:text-primary"
              aria-haspopup="menu"
              aria-expanded={openSol}
              onClick={() => setOpenSol((v) => !v)}
            >
              Para quem{" "}
              <ChevronDown
                size={15}
                className={`transition-transform ${openSol ? "rotate-180" : ""}`}
              />
            </button>

            {openSol && (
              <div className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3">
                <div
                  role="menu"
                  className="rounded-xl border border-border bg-card p-2 shadow-[0_18px_48px_-18px_rgba(20,30,40,0.35)]"
                >
                  {solucoes.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      role="menuitem"
                      onClick={() => setOpenSol(false)}
                      className="block rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground/90 transition-colors hover:bg-surface hover:text-primary"
                      activeProps={{ className: "text-primary" }}
                    >
                      <span className="block">{s.label}</span>
                      <span className="mt-0.5 block text-[13px] font-normal leading-snug text-foreground/60">
                        {s.helper}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {nav.slice(2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex h-11 items-center rounded-md px-1 text-[15px] font-semibold text-foreground/85 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/demonstracao"
          className="hidden rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground shadow-[0_8px_22px_-8px_rgba(95,122,79,0.6)] ring-1 ring-primary/30 transition-all hover:bg-primary-deep hover:shadow-[0_12px_28px_-8px_rgba(61,81,50,0.7)] md:inline-flex"
        >
          Agendar demonstração
        </Link>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Navegação móvel">
            {nav.slice(0, 2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-[16px] font-semibold text-foreground/85 hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}

            <p className="px-2 pt-2 pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/55">
              Para quem
            </p>

            {solucoes.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-[16px] font-semibold text-foreground/85 hover:bg-surface"
              >
                {s.label}
              </Link>
            ))}

            <p className="mt-3 px-2 pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/55">
              Explorar
            </p>

            {nav.slice(2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-[16px] font-semibold text-foreground/85 hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/demonstracao"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-[0_6px_18px_-6px_rgba(132,154,116,0.55)]"
            >
              Agendar demonstração
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

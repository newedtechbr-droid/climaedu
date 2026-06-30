import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/plataforma", label: "Como funciona" },
  { to: "/orgaos-publicos", label: "Órgãos públicos" },
  { to: "/empresas", label: "Empresas" },
  { to: "/cursos", label: "Cursos" },
  { to: "/diferenciais", label: "Diferenciais" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

        <nav className="hidden items-center gap-4 md:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex h-11 items-center rounded-md px-1 text-[14px] font-semibold text-foreground/85 transition-colors hover:text-primary"
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
            {nav.map((item) => (
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

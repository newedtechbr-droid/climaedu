import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/orgaos-publicos", label: "Poder público" },
  { to: "/empresas", label: "Indústria" },
  { to: "/cursos", label: "Cursos" },
  { to: "/sobre", label: "Sobre" },
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
      <div className="container-brand flex items-center justify-between py-5">
        <Link to="/" className="flex items-center" aria-label="CLIMAEDU - página inicial">
          <img src="/logo.png" alt="CLIMAEDU" className="h-11 md:h-14" />
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex h-11 items-center rounded-md px-1 text-[16px] font-semibold text-foreground/88 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/demonstracao"
          className="hidden rounded-full bg-terracotta px-6 py-3 text-[16px] font-bold text-white transition-colors hover:bg-[#7c2e26] md:inline-flex"
        >
          Agendar conversa
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
          <nav
            className="container-brand flex flex-col gap-1 py-4"
            aria-label="Navegação móvel"
          >
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
              className="mt-3 rounded-full bg-terracotta px-4 py-3 text-center text-sm font-bold text-white"
            >
              Agendar conversa
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

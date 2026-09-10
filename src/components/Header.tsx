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
          className="hidden

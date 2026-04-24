import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background" style={{ fontSize: "15px", color: "#3A3A38" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <img src="/logo.png" alt="ClimaEdu" className="h-8" />
          <p className="mt-4 max-w-xs" style={{ fontSize: "15px", color: "#3A3A38", lineHeight: 1.6 }}>
            Capacitação climática que vira rotina e evidência.
          </p>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-primary-dark">Navegar</h3>
          <ul className="mt-4 space-y-2.5" style={{ fontSize: "15px" }}>
            <li><Link to="/sobre" className="hover:text-primary-dark">Sobre</Link></li>
            <li><Link to="/cursos" className="hover:text-primary-dark">Cursos</Link></li>
            <li><Link to="/para-quem" className="hover:text-primary-dark">Para quem</Link></li>
            <li><Link to="/" hash="inteligencia-artificial" className="hover:text-primary-dark">Inteligência Artificial</Link></li>
            <li><Link to="/contato" className="hover:text-primary-dark">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-primary-dark">Conecte-se</h3>
          <div className="mt-4 flex gap-3">
            <a href="https://www.linkedin.com/company/new-edtech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary-dark" style={{ color: "#3A3A38" }}>
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/new.edtech" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary-dark" style={{ color: "#3A3A38" }}>
              <Instagram size={18} />
            </a>
          </div>
          <p className="mt-5" style={{ fontSize: "14px", color: "#3A3A38" }}>
            contato@newedtech.com.br
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-5" style={{ fontSize: "14px", color: "#3A3A38" }}>
          © 2025 ClimaEdu — New EdTech · Florianópolis, SC
        </p>
      </div>
    </footer>
  );
}

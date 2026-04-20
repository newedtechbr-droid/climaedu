import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/climaedu-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background" style={{ fontSize: "15px", color: "#444441" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="ClimaEdu" className="h-11 w-auto" />
          <p className="mt-3" style={{ fontSize: "15px", color: "#444441", lineHeight: 1.6 }}>
            Capacitação climática que vira rotina e evidência.
          </p>
        </div>

        <div>
          <h3 className="uppercase tracking-wider" style={{ fontSize: "14px", color: "#444441" }}>Produto</h3>
          <ul className="mt-3 space-y-2" style={{ fontSize: "15px" }}>
            <li><Link to="/como-funciona" className="hover:text-primary-dark">Como funciona</Link></li>
            <li><Link to="/cursos" className="hover:text-primary-dark">Cursos</Link></li>
            <li><Link to="/para-quem" className="hover:text-primary-dark">Para quem</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-wider" style={{ fontSize: "14px", color: "#444441" }}>Empresa</h3>
          <ul className="mt-3 space-y-2" style={{ fontSize: "15px" }}>
            <li><Link to="/sobre" className="hover:text-primary-dark">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-primary-dark">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-wider" style={{ fontSize: "14px", color: "#444441" }}>Legal</h3>
          <ul className="mt-3 space-y-2" style={{ fontSize: "15px" }}>
            <li><a href="#" className="hover:text-primary-dark">Privacidade</a></li>
            <li><a href="#" className="hover:text-primary-dark">LGPD</a></li>
            <li><a href="#" className="hover:text-primary-dark">Termos de uso</a></li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="hover:text-primary-dark" style={{ color: "#444441" }}>
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary-dark" style={{ color: "#444441" }}>
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-5" style={{ fontSize: "14px", color: "#444441" }}>
          © 2025 ClimaEdu — New EdTech · Florianópolis, SC
        </p>
      </div>
    </footer>
  );
}

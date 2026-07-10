import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-background text-foreground/80"
      style={{ fontSize: "15px" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/logo.png" alt="CLIMAEDU" className="h-10" />
          <p
            className="mt-4 max-w-xs text-foreground/70"
            style={{ fontSize: "15px", lineHeight: 1.6 }}
          >
            Aprendizagem aplicada para transformar conhecimento técnico em
            capacidade institucional, rotinas e evidências de capacitação.
          </p>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Soluções
          </h3>
          <ul className="mt-4 space-y-2.5" style={{ fontSize: "15px" }}>
            <li>
              <Link to="/orgaos-publicos" className="hover:text-primary-dark">
                Órgãos públicos
              </Link>
            </li>
            <li>
              <Link to="/empresas" className="hover:text-primary-dark">
                Empresas
              </Link>
            </li>
            <li>
              <Link to="/escolas" className="hover:text-primary-dark">
                Escolas e redes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Institucional
          </h3>
          <ul className="mt-4 space-y-2.5" style={{ fontSize: "15px" }}>
            <li>
              <Link to="/plataforma" className="hover:text-primary-dark">
                Plataforma
              </Link>
            </li>
            <li>
              <Link to="/cursos" className="hover:text-primary-dark">
                Cursos e trilhas
              </Link>
            </li>
            <li>
              <Link to="/diferenciais" className="hover:text-primary-dark">
                Diferenciais
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-primary-dark">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/demonstracao" className="hover:text-primary-dark">
                Demonstração
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Contato
          </h3>

          <ul className="mt-4 space-y-3" style={{ fontSize: "15px" }}>
            <li>
              <a
                href="mailto:contato@newedtech.com.br"
                className="flex items-center gap-2 text-foreground/75 hover:text-primary-dark"
              >
                <Mail size={17} />
                contato@newedtech.com.br
              </a>
            </li>

            <li>
              <a
                href="tel:+5548991606518"
                className="flex items-center gap-2 text-foreground/75 hover:text-primary-dark"
              >
                <Phone size={17} />
                +55 48 99160-6518
              </a>
            </li>

            <li className="flex items-center gap-2 text-foreground/75">
              <MapPin size={17} />
              Florianópolis, SC, Brasil
            </li>
          </ul>

          <h3 className="mt-7 text-[13px] font-semibold uppercase tracking-[0.16em] text-primary-dark">
            Conecte-se
          </h3>

          <div className="mt-4 flex gap-3">
            <a
              href="https://www.linkedin.com/company/clima-edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da CLIMAEDU"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/75 hover:border-primary hover:text-primary"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/climaeduplataforma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da CLIMAEDU"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/75 hover:border-primary hover:text-primary"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p
          className="mx-auto max-w-6xl px-6 py-5 text-foreground/70"
          style={{ fontSize: "14px" }}
        >
          © 2026 CLIMAEDU — produto NewEdTech · Florianópolis, SC, Brasil
        </p>
        <a
  href="/politica-de-privacidade"
  className="text-sm text-foreground/60 transition hover:text-primary"
>
  Política de Privacidade
</a>
      </div>
    </footer>
  );
}

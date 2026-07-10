const navigationLinks = [
  {
    title: "Para quem",
    links: [
      { label: "Órgãos públicos", href: "/orgaos-publicos" },
      { label: "Empresas", href: "/empresas" },
      { label: "Escolas e redes", href: "/escolas" },
    ],
  },
  {
    title: "Plataforma",
    links: [
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Cursos e trilhas", href: "/cursos" },
      { label: "Diferenciais", href: "/diferenciais" },
      { label: "Plataforma", href: "/plataforma" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
      { label: "Demonstração", href: "/demonstracao" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/clima-edu/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/climaeduplataforma/",
  },
  {
    label: "Avalie a CLIMAEDU no Google",
    href: "https://g.page/r/Cfg9US4Q3LU4EAI/review",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1.8fr]">
          <div>
            <a href="/" aria-label="Página inicial da CLIMAEDU">
              <img
                src="/logo.png"
                alt="CLIMAEDU"
                className="h-12 w-auto brightness-0 invert"
              />
            </a>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/72">
              A CLIMAEDU é um ambiente de aprendizagem online para clima,
              sustentabilidade, ESG, gestão de riscos e evidências de
              capacitação.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/72">
              <p>
                <strong className="font-semibold text-white">E-mail:</strong>{" "}
                <a
                  href="mailto:contato@newedtech.com.br"
                  className="transition hover:text-white"
                >
                  contato@newedtech.com.br
                </a>
              </p>

              <p>
                <strong className="font-semibold text-white">Telefone:</strong>{" "}
                <a
                  href="tel:+5548991606518"
                  className="transition hover:text-white"
                >
                  +55 48 99160-6518
                </a>
              </p>

              <p>
                <strong className="font-semibold text-white">Localização:</strong>{" "}
                Florianópolis, SC, Brasil
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {navigationLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  {group.title}
                </h2>

                <nav className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-white/68 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/60">
              © 2026 CLIMAEDU — produto NewEdTech · Florianópolis, SC, Brasil
            </p>

            <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-5">
              <a
                href="/politica-de-privacidade"
                className="text-white/60 transition hover:text-white"
              >
                Política de Privacidade
              </a>

              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

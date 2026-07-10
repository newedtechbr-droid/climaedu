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
    label: "Avalie no Google",
    href: "https://g.page/r/Cfg9US4Q3LU4EAI/review",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1.75fr]">
          <div>
            <a href="/" aria-label="Página inicial da CLIMAEDU">
              <img
                src="/logo.png"
                alt="CLIMAEDU"
                className="h-12 w-auto brightness-0 invert"
              />
            </a>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/78">
              A CLIMAEDU é um ambiente de aprendizagem online para clima,
              sustentabilidade, ESG, gestão de riscos e evidências de
              capacitação.
            </p>

            <div className="mt-6 rounded-2xl border border-white/12 bg-white/[0.04] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                Contato
              </h2>

              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                    E-mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:contato@newedtech.com.br"
                      className="text-base font-medium text-white transition hover:text-white/80"
                    >
                      contato@newedtech.com.br
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                    Telefone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+5548991606518"
                      className="text-base font-medium text-white transition hover:text-white/80"
                    >
                      +55 48 99160-6518
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                    Localização
                  </dt>
                  <dd className="mt-1 text-base font-medium text-white">
                    Florianópolis, SC, Brasil
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                Redes e reputação
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-primary-dark"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
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
                      className="text-sm text-white/72 transition hover:text-white"
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/62">
              © 2026 CLIMAEDU — produto NewEdTech · Florianópolis, SC, Brasil
            </p>

            <a
              href="/politica-de-privacidade"
              className="text-sm font-medium text-white/72 transition hover:text-white"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

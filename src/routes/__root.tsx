import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-medium text-primary-dark">404</h1>
          <h2 className="mt-4 text-xl">Página não encontrada</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A página que você procura não existe ou foi movida.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ClimaEdu — Capacitação climática para o setor público" },
      {
        name: "description",
        content:
          "Plataforma SaaS de capacitação climática para órgãos públicos e empresas. Trilhas, evidências e dashboards auditáveis.",
      },
      { name: "author", content: "ClimaEdu" },
      { property: "og:title", content: "ClimaEdu — Capacitação climática para o setor público" },
      {
        property: "og:description",
        content:
          "Da norma à evidência: trilhas por função, checklists com comprovação e dashboards prontos para auditoria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />

      {/* Sticky CTA mobile */}
      <Link
        to="/"
        hash="contato"
        className="fixed bottom-3 left-3 right-3 z-40 inline-flex h-12 items-center justify-center rounded-lg bg-primary text-base font-semibold text-primary-foreground shadow-[0_10px_28px_-8px_rgba(132,154,116,0.7)] ring-1 ring-primary/40 md:hidden"
      >
        Agendar demonstração
      </Link>
    </div>
  );
}

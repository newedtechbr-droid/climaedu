import type { CSSProperties } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

type CSSVars = CSSProperties & Record<`--${string}`, string>;

const climaeduTheme: CSSVars = {
  "--background": "42 38% 96%",
  "--foreground": "200 22% 12%",
  "--card": "42 36% 98%",
  "--muted": "42 24% 90%",

  "--color-background": "#F7F1E7",
  "--color-surface": "#EFE4D5",
  "--color-card": "#FFFCF7",
  "--color-border": "#D8CBBB",

  "--color-primary": "#5F7A4F",
  "--color-primary-dark": "#1A1E20",
  "--color-primary-deep": "#3D5132",
  "--color-primary-foreground": "#F5F2EA",
  "--color-ring": "#5F7A4F",

  "--color-olive": "#5F7A4F",
  "--color-terracotta": "#9A4B42",

  "--color-slate-blue": "#5F7A4F",
};

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
      { title: "CLIMAEDU — Capacitação climática para órgãos públicos, empresas e escolas" },
      {
        name: "description",
        content:
          "Plataforma de capacitação climática aplicada. Trilhas por perfil, certificados, dashboards e evidências auditáveis para preparar instituições inteiras.",
      },
      { name: "author", content: "CLIMAEDU" },
      { property: "og:title", content: "CLIMAEDU — Da reação à prevenção" },
      {
        property: "og:description",
        content:
          "Capacitação climática para colocar toda a instituição na mesma página: rotinas executáveis, equipes preparadas e evidências auditáveis.",
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
    <div
      style={climaeduTheme}
      className="flex min-h-screen flex-col bg-background text-foreground"
    >
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />

      {/* Sticky CTA mobile */}
      <Link
        to="/demonstracao"
        className="fixed bottom-3 left-3 right-3 z-40 inline-flex h-12 items-center justify-center rounded-lg bg-primary text-base font-semibold text-primary-foreground shadow-[0_10px_28px_-8px_rgba(132,154,116,0.7)] ring-1 ring-primary/40 md:hidden"
      >
        Agendar demonstração
      </Link>
    </div>
  );
}

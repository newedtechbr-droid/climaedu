import type { CSSProperties } from "react";
import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

type CSSVars = CSSProperties & Record<`--${string}`, string>;

const climaeduTheme: CSSVars = {
  "--background": "#F3F1EC",
  "--foreground": "#1A1E20",
  "--card": "#FFFFFF",
  "--muted": "#ECE8DF",

  "--color-background": "#F3F1EC",
  "--color-surface": "#E8ECEC",
  "--color-card": "#FFFFFF",
  "--color-border": "#CFD6D6",

  "--color-primary": "#5F7A4F",
  "--color-primary-dark": "#1A1E20",
  "--color-primary-deep": "#3D5132",
  "--color-primary-foreground": "#F5F2EA",
  "--color-ring": "#5F7A4F",

  "--color-olive": "#5F7A4F",
  "--color-terracotta": "#8A5148",

  "--color-slate-blue": "#485C68",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CLIMAEDU",
  alternateName: "ClimaEdu",
  url: "https://climaedu.com/",
  sameAs: [
    "https://www.linkedin.com/company/clima-edu/",
    "https://www.instagram.com/climaeduplataforma/",
  ],
  logo: "https://climaedu.com/favicon.png",
  description:
    "A CLIMAEDU e uma plataforma GovTech/EdTech de aprendizagem aplicada para clima, sustentabilidade, gestao de riscos e desenvolvimento de competencias institucionais.",
  parentOrganization: {
    "@type": "Organization",
    name: "NEWEDTECH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Atendimento institucional",
      email: "contato@newedtech.com.br",
      availableLanguage: ["Portuguese", "pt-BR"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CLIMAEDU",
  url: "https://climaedu.com/",
  description:
    "Aprendizagem aplicada para clima, sustentabilidade, gestao de riscos e capacidade institucional.",
  publisher: {
    "@type": "Organization",
    name: "CLIMAEDU",
  },
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

      {
        title:
          "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
      },

      {
        name: "description",
        content:
          "A CLIMAEDU transforma conhecimento tecnico sobre clima, sustentabilidade e gestao de riscos em aprendizagem aplicada, competencias institucionais, certificados, relatorios e evidencias de capacitacao.",
      },

      { name: "robots", content: "index, follow" },
      { name: "author", content: "CLIMAEDU" },

      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "CLIMAEDU",
      },
      {
        property: "og:title",
        content:
          "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
      },
      {
        property: "og:description",
        content:
          "Conhecimento tecnico transformado em aprendizagem aplicada, capacidade institucional e evidencias de capacitacao.",
      },
      {
        property: "og:url",
        content: "https://climaedu.com/",
      },
      {
        property: "og:image",
        content: "https://climaedu.com/og-image.png",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "CLIMAEDU | Aprendizagem aplicada para capacidade institucional",
      },
      {
        name: "twitter:description",
        content:
          "A CLIMAEDU transforma conhecimento tecnico em aprendizagem aplicada, competencias institucionais e evidencias de capacitacao.",
      },
      {
        name: "twitter:image",
        content: "https://climaedu.com/og-image.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },

      {
        rel: "canonical",
        href: "https://climaedu.com/",
      },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
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

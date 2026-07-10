import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CTASection } from "@/components/sections/CTASection";
import {
  ShieldCheck,
  UserCheck,
  FileText,
  Lock,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";

const pagePublished = "2026-07-10";
const pageModified = "2026-07-10";

const dadosTratados = [
  {
    title: "Dados de contato",
    text: "Nome, e-mail, telefone, instituição, cargo ou área de atuação, quando informados voluntariamente em formulários, mensagens ou solicitações comerciais.",
  },
  {
    title: "Dados de navegação",
    text: "Informações técnicas de acesso, como páginas visitadas, data, horário, navegador, dispositivo e registros necessários para segurança e funcionamento do site.",
  },
  {
    title: "Dados institucionais",
    text: "Informações relacionadas à organização interessada, como tipo de instituição, área de atuação, necessidade de capacitação e contexto do pedido.",
  },
];

const finalidades = [
  "Responder solicitações de contato, demonstração, proposta ou atendimento.",
  "Apresentar informações sobre a CLIMAEDU, seus produtos, trilhas, recursos e formas de contratação.",
  "Melhorar a comunicação institucional, a experiência de navegação e a segurança do site.",
  "Cumprir obrigações legais, regulatórias, fiscais ou solicitações de autoridades competentes.",
  "Registrar histórico de relacionamento comercial ou institucional, quando aplicável.",
];

const direitos = [
  "Confirmar a existência de tratamento de dados pessoais.",
  "Solicitar acesso, correção, atualização ou eliminação de dados pessoais.",
  "Solicitar informações sobre compartilhamento de dados, quando aplicável.",
  "Revogar consentimentos concedidos, quando o tratamento depender de consentimento.",
  "Solicitar a portabilidade ou revisão de decisões automatizadas, quando aplicável.",
];

const seguranca = [
  {
    icon: Lock,
    title: "Segurança",
    text: "A CLIMAEDU adota medidas razoáveis de segurança técnica e organizacional para proteger dados pessoais contra acesso não autorizado, perda, alteração ou uso indevido.",
  },
  {
    icon: Clock,
    title: "Retenção",
    text: "Os dados pessoais são mantidos pelo tempo necessário para cumprir as finalidades informadas, obrigações legais, defesa de direitos ou relacionamento institucional.",
  },
  {
    icon: Mail,
    title: "Contato",
    text: "Solicitações relacionadas a dados pessoais podem ser enviadas para contato@newedtech.com.br.",
  },
];

const privacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Política de Privacidade | CLIMAEDU",
  url: "https://climaedu.com/politica-de-privacidade",
  datePublished: pagePublished,
  dateModified: pageModified,
  inLanguage: "pt-BR",
  description:
    "Política de Privacidade da CLIMAEDU, produto da NewEdTech, com informações sobre tratamento de dados pessoais, finalidades, direitos dos titulares e contato para LGPD.",
  about: [
    {
      "@type": "Thing",
      name: "Política de privacidade",
    },
    {
      "@type": "Thing",
      name: "LGPD",
    },
    {
      "@type": "Thing",
      name: "Tratamento de dados pessoais",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "CLIMAEDU",
    url: "https://climaedu.com/",
    email: "contato@newedtech.com.br",
    telephone: "+55 48 99160-6518",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://climaedu.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Política de Privacidade",
      item: "https://climaedu.com/politica-de-privacidade",
    },
  ],
};

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      {
        title: "Política de Privacidade | CLIMAEDU",
      },
      {
        name: "description",
        content:
          "Política de Privacidade da CLIMAEDU sobre tratamento de dados pessoais, LGPD, finalidades, direitos dos titulares e contato.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "author",
        content: "CLIMAEDU",
      },
      {
        name: "date",
        content: pageModified,
      },
      {
        name: "datePublished",
        content: pagePublished,
      },
      {
        name: "dateModified",
        content: pageModified,
      },
      {
        property: "article:published_time",
        content: "2026-07-10T00:00:00-03:00",
      },
      {
        property: "article:modified_time",
        content: "2026-07-10T00:00:00-03:00",
      },
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
        content: "Política de Privacidade | CLIMAEDU",
      },
      {
        property: "og:description",
        content:
          "Informações sobre tratamento de dados pessoais, LGPD, finalidades, direitos dos titulares e contato.",
      },
      {
        property: "og:url",
        content: "https://climaedu.com/politica-de-privacidade",
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
        content: "Política de Privacidade | CLIMAEDU",
      },
      {
        name: "twitter:description",
        content:
          "Política de Privacidade da CLIMAEDU sobre dados pessoais, LGPD e contato.",
      },
      {
        name: "twitter:image",
        content: "https://climaedu.com/og-image.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://climaedu.com/politica-de-privacidade",
      },
    ],
  }),
  component: PoliticaDePrivacidade,
});

function PoliticaDePrivacidade() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Política de Privacidade
            </p>

            <h1 className="mt-4 text-4xl font-medium leading-[1.05] text-primary-dark md:text-6xl">
              Política de Privacidade da CLIMAEDU
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/78 md:text-xl">
              Esta Política de Privacidade explica como a CLIMAEDU, produto da
              NewEdTech, trata dados pessoais em seu site, canais de contato,
              solicitações comerciais, demonstrações e interações institucionais.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/70">
              A CLIMAEDU respeita a privacidade dos titulares de dados e busca
              tratar informações pessoais de forma transparente, segura e
              compatível com a Lei Geral de Proteção de Dados Pessoais — LGPD.
            </p>

            <p className="mt-4 text-sm text-foreground/60">
              Publicado em 10/07/2026 · Atualizado em 10/07/2026.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Responsável"
            title="Quem é responsável pelo tratamento dos dados?"
            subtitle="A CLIMAEDU é uma plataforma de aprendizagem online da NewEdTech voltada à capacitação aplicada em clima, sustentabilidade, ESG, gestão de riscos e evidências de aprendizagem."
          />

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-deep">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-dark">
                  Controlador e canal de contato
                </h2>

                <p className="mt-3 text-foreground/75">
                  Para fins desta Política de Privacidade, a NewEdTech, por meio
                  da CLIMAEDU, é responsável pelo tratamento de dados pessoais
                  coletados em seus canais digitais e institucionais.
                </p>

                <p className="mt-3 text-foreground/75">
                  Canal para solicitações relacionadas à privacidade, proteção de
                  dados e LGPD:
                </p>

                <a
                  href="mailto:contato@newedtech.com.br"
                  className="mt-3 inline-flex font-semibold text-primary hover:text-primary-dark"
                >
                  contato@newedtech.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Dados pessoais"
            title="Quais dados podem ser tratados?"
            subtitle="A CLIMAEDU trata principalmente dados fornecidos voluntariamente pelo usuário e dados técnicos necessários ao funcionamento seguro do site."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {dadosTratados.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-deep">
                    <FileText size={20} />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-primary-dark">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {item.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Finalidades"
            title="Para que os dados são utilizados?"
            subtitle="Os dados pessoais são utilizados para comunicação, atendimento, segurança, relacionamento institucional e cumprimento de obrigações aplicáveis."
          />

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <ul className="space-y-4">
              {finalidades.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-primary"
                  />

                  <span className="text-foreground/76">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Compartilhamento"
            title="Com quem os dados podem ser compartilhados?"
            subtitle="A CLIMAEDU não vende dados pessoais. O compartilhamento pode ocorrer apenas quando necessário para operação, atendimento, segurança, cumprimento legal ou execução de serviços relacionados."
          />

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="leading-relaxed text-foreground/75">
              Dados pessoais podem ser compartilhados com fornecedores de
              tecnologia, hospedagem, segurança, comunicação, atendimento,
              ferramentas administrativas ou parceiros operacionais estritamente
              necessários para as finalidades informadas. Também poderá haver
              compartilhamento para cumprimento de obrigação legal, regulatória,
              ordem de autoridade competente ou defesa de direitos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Direitos do titular"
            title="Quais são os direitos dos titulares?"
            subtitle="Nos termos da LGPD, titulares de dados pessoais podem solicitar informações e providências relacionadas ao tratamento de seus dados."
          />

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <ul className="space-y-4">
              {direitos.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <UserCheck
                    size={20}
                    className="mt-1 shrink-0 text-primary"
                  />

                  <span className="text-foreground/76">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-foreground/65">
              As solicitações serão avaliadas conforme a legislação aplicável e
              poderão exigir confirmação de identidade do solicitante para
              proteção do próprio titular.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Segurança e retenção"
            title="Como os dados são protegidos?"
            subtitle="A proteção de dados depende de medidas técnicas, organizacionais e de governança compatíveis com o tipo de tratamento realizado."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {seguranca.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-deep">
                    <item.icon size={20} />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-primary-dark">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {item.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Cookies"
            title="Cookies e tecnologias semelhantes"
            subtitle="Esta página informa a política geral de privacidade. A gestão específica de cookies e consentimento poderá ser implementada em etapa própria, conforme as ferramentas de rastreamento e análise utilizadas no site."
          />

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="leading-relaxed text-foreground/75">
              O site da CLIMAEDU pode utilizar cookies técnicos necessários ao
              funcionamento, segurança e melhoria da navegação. Caso sejam
              utilizados cookies analíticos, publicitários ou tecnologias de
              rastreamento não essenciais, a CLIMAEDU poderá adotar mecanismos
              específicos de aviso, consentimento ou preferência, conforme a
              legislação aplicável.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Falar com a CLIMAEDU"
        subtitle="Para solicitações sobre privacidade, dados pessoais ou LGPD, entre em contato pelo canal oficial da NewEdTech."
      />
    </>
  );
}

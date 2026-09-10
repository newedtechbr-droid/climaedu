import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Gamepad2,
  Landmark,
  LineChart,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import platformDevices from "@/assets/climaedu-platform-devices.png";
import newedtechLogo from "@/assets/newedtech-logo.png";
import viposaLogo from "@/assets/partners/viposa.png";

const pagePublished = "2026-07-09";
const pageModified = "2026-09-09";

const steps = [
  {
    icon: Brain,
    title: "Transformar",
    text: "Materiais e documentos viram jornadas online com apoio de inteligência artificial e curadoria.",
  },
  {
    icon: BookOpen,
    title: "Aprender",
    text: "Conteúdos em linguagem clara, com vídeos, quizzes, desafios e atividades gamificadas.",
  },
  {
    icon: PlayCircle,
    title: "Aplicar",
    text: "Situações práticas conectam o conteúdo institucional à rotina de cada público.",
  },
  {
    icon: LineChart,
    title: "Acompanhar",
    text: "Dados e registros mostram avanços, conclusão e lacunas de aprendizagem.",
  },
];

const deliverables = [
  "Plataforma de aprendizagem online com trilhas por perfil e função",
  "Motor de inteligência artificial para transformar materiais em experiências de aprendizagem",
  "Conteúdos simplificados em vídeos, aulas, quizzes e atividades gamificadas",
  "Processo de aprendizagem mais leve, guiado e aplicável à rotina",
  "Acompanhamento da aprendizagem por dados",
];

const platformHighlights = [
  {
    icon: Brain,
    title: "IA que transforma conteúdo",
    text: "Documentos, normas, protocolos e materiais institucionais ganham estrutura de aprendizagem com curadoria NewEdTech.",
  },
  {
    icon: BookOpen,
    title: "Aprendizagem online",
    text: "Uma plataforma para organizar conteúdos, turmas, trilhas e certificados em um só ambiente.",
  },
  {
    icon: Gamepad2,
    title: "Conteúdo gamificado",
    text: "Quizzes, desafios e atividades aplicadas ajudam a transformar temas técnicos em prática.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CLIMAEDU | Conhecimento técnico em aprendizagem aplicada",
  url: "https://climaedu.com/",
  datePublished: pagePublished,
  dateModified: pageModified,
  inLanguage: "pt-BR",
  isPartOf: {
    "@type": "WebSite",
    name: "CLIMAEDU",
    url: "https://climaedu.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "NewEdTech",
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
  description:
    "A CLIMAEDU, solução da NewEdTech, transforma conhecimentos climáticos e socioambientais em aprendizagem aplicada para órgãos públicos e indústrias.",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "CLIMAEDU | Conhecimento técnico em aprendizagem aplicada",
      },
      {
        name: "description",
        content:
          "A CLIMAEDU, solução da NewEdTech, transforma conhecimentos climáticos e socioambientais em aprendizagem aplicada para órgãos públicos e indústrias.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "NewEdTech" },
      { name: "date", content: pageModified },
      { name: "datePublished", content: pagePublished },
      { name: "dateModified", content: pageModified },
      { property: "article:published_time", content: "2026-07-09T00:00:00-03:00" },
      { property: "article:modified_time", content: "2026-09-09T00:00:00-03:00" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CLIMAEDU" },
      {
        property: "og:title",
        content: "CLIMAEDU | Conhecimento técnico em aprendizagem aplicada",
      },
      {
        property: "og:description",
        content:
          "Do conhecimento à ação: aprendizagem aplicada para temas climáticos e socioambientais.",
      },
      { property: "og:url", content: "https://climaedu.com/" },
      { property: "og:image", content: "https://climaedu.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "CLIMAEDU | Conhecimento técnico em aprendizagem aplicada",
      },
      {
        name: "twitter:description",
        content:
          "A CLIMAEDU transforma conhecimentos climáticos e socioambientais em aprendizagem aplicada.",
      },
      { name: "twitter:image", content: "https://climaedu.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://climaedu.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <FadeIn>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                UMA SOLUÇÃO NEWEDTECH
              </p>

              <h1 className="mt-5 max-w-3xl text-primary-dark">
                Plataforma de aprendizagem online para transformar conhecimento técnico em ação.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-foreground/80">
                A CLIMAEDU usa inteligência artificial com curadoria para transformar materiais,
                documentos e conteúdos institucionais em trilhas, aulas, experiências gamificadas,
                certificados e dashboards.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/72">
                Para órgãos públicos e indústrias que precisam levar conhecimentos climáticos e
                socioambientais até as pessoas responsáveis por aplicá-los.
              </p>

              <p className="mt-6 text-base font-semibold text-primary-deep">
                Do conhecimento à ação.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#como-funciona"
                  className="inline-flex min-h-14 items-center gap-2 rounded-lg bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_rgba(95,122,79,0.7)] ring-1 ring-primary/30 transition hover:bg-primary-deep"
                >
                  Conhecer a CLIMAEDU <ArrowRight size={18} />
                </a>

                <Link
                  to="/demonstracao"
                  className="inline-flex min-h-14 items-center rounded-lg border-2 border-primary bg-background px-7 py-3 text-base font-semibold text-primary-dark transition hover:bg-accent"
                >
                  Agendar uma conversa
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="climaedu-floating-mockup relative mx-auto -my-6 w-full max-w-[620px] md:-mr-10 md:scale-110">
              <img
                src={platformDevices}
                alt="Plataforma CLIMAEDU apresentada em notebook, tablet e celular"
                width={1890}
                height={1890}
                className="block aspect-square w-full object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className="bg-surface px-6 py-14 md:py-16"
        aria-label="Relação entre NewEdTech e CLIMAEDU"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <div className="shrink-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/54">
                Uma solução
              </p>
              <img
                src={newedtechLogo}
                alt="New EdTech"
                width={723}
                height={233}
                className="mt-3 h-auto w-[132px] max-w-full"
                loading="lazy"
              />
            </div>

            <p className="max-w-3xl text-lg leading-relaxed text-primary-dark md:text-xl">
              A CLIMAEDU é uma solução especializada da NewEdTech para transformar conhecimento
              técnico em aprendizagem online aplicada.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              A solução
            </p>
            <h2 className="mt-4 text-primary-dark">
              Uma jornada digital para aprender, praticar e acompanhar.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {platformHighlights.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary-deep">
                    <item.icon size={20} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary-dark">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/72">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">O problema</p>
            <h2 className="mt-4 text-primary-dark">
              O conhecimento existe. O desafio é fazê-lo chegar a quem precisa agir.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/78">
              Planos, normas, pesquisas e conhecimentos técnicos costumam estar em documentos,
              apresentações, guias ou concentrados em especialistas. A CLIMAEDU extrai e organiza
              esse conteúdo por meio de um motor de inteligência artificial, com curadoria humana,
              para criar experiências de aprendizagem adequadas a diferentes funções e realidades.
            </p>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Como funciona
              </p>
              <h2 className="mt-4 text-primary-dark">Do conhecimento à ação</h2>
            </div>
            <p className="text-base font-semibold text-primary-deep">
              Transformar → Aprender → Aplicar → Acompanhar
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary-deep">
                    <step.icon size={20} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary-dark">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/72">{step.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Para quem</p>
            <h2 className="mt-4 text-primary-dark">Conhecimento aplicado a diferentes contextos</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary-deep">
                <Landmark size={22} aria-hidden />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-primary-dark">Órgãos públicos</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                Transforme planos, normas, protocolos e materiais institucionais já existentes em
                jornadas de aprendizagem para diferentes áreas e equipes.
              </p>
              <Link
                to="/orgaos-publicos"
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary-deep hover:text-primary"
              >
                CLIMAEDU para órgãos públicos <ArrowRight size={17} />
              </Link>
            </article>

            <article className="rounded-lg border border-border bg-card p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary-deep">
                <Factory size={22} aria-hidden />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-primary-dark">Indústrias</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                Transforme documentos, políticas e conhecimentos ambientais em aprendizagem
                aplicada às funções e à realidade da operação.
              </p>
              <Link
                to="/empresas"
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary-deep hover:text-primary"
              >
                CLIMAEDU para indústrias <ArrowRight size={17} />
              </Link>
            </article>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-foreground/68">
            Também desenvolvemos projetos com universidades, consultorias, organizações e redes de
            conhecimento.
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              O que a CLIMAEDU entrega
            </p>
            <h2 className="mt-4 text-primary-dark">
              Aprendizagem estruturada para diferentes perfis e responsabilidades.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-5">
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-primary" aria-hidden />
                <p className="text-base leading-relaxed text-foreground/78">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-foreground/68">
            Certificados, dashboards e relatórios ajudam a organização a acompanhar e comprovar a
            aprendizagem, sem substituir certificadoras ou auditorias técnicas.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <FadeIn>
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Case industrial
              </p>
              <h2 className="mt-4 text-primary-dark">Case UC Viposa</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/78">
                Universidade corporativa levando conhecimento climático e socioambiental para mais
                perto das equipes e do chão de fábrica.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <img
                  src={viposaLogo}
                  alt="Logo VIPOSA"
                  className="h-16 w-auto object-contain md:h-20"
                  loading="lazy"
                />
                <div>
                  <p className="text-base font-semibold text-primary-dark">
                    Do conteúdo técnico à rotina da operação.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/68">
                    Trilhas digitais organizam a aprendizagem para lideranças e equipes, sem
                    depender de linguagem excessivamente técnica.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary-dark px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Sparkles size={28} className="mx-auto text-white/75" aria-hidden />
          <h2 className="mt-5 text-white">
            Que conhecimento precisa chegar à prática na sua organização?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/76">
            Converse com a NewEdTech e conheça como a CLIMAEDU pode transformar conteúdos técnicos
            em uma jornada de aprendizagem aplicada.
          </p>
          <Link
            to="/demonstracao"
            className="mt-9 inline-flex min-h-14 items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition hover:bg-white hover:text-primary-dark"
          >
            Agendar uma conversa <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

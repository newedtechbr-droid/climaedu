import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BarChart3, Brain, CheckCircle2, Gamepad2, Palette } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CTASection } from "@/components/sections/CTASection";
import platformImage from "@/assets/platform-home-real.png";

const flow = [
  "A organização compartilha seus conteúdos, documentos ou necessidade de capacitação.",
  "A NewEdTech estrutura a jornada de aprendizagem.",
  "A CLIMAEDU entrega o conteúdo em formatos adequados ao público.",
  "As pessoas aprendem e realizam atividades aplicadas.",
  "A organização acompanha a evolução da aprendizagem.",
];

const technology = [
  {
    icon: Palette,
    title: "White-label",
    text: "Ambiente com identidade institucional para aproximar a aprendizagem da organização.",
  },
  {
    icon: Brain,
    title: "Inteligência artificial com curadoria",
    text: "Apoio à estruturação de conteúdos, sempre com revisão humana e aderência técnica.",
  },
  {
    icon: Award,
    title: "Certificados",
    text: "Registros individuais ajudam a comprovar participação e conclusão das jornadas, sem posicionar a CLIMAEDU como certificadora técnica.",
  },
  {
    icon: Gamepad2,
    title: "Gamificação",
    text: "Quizzes, desafios, checkpoints e atividades aplicadas tornam a aprendizagem mais simples e envolvente.",
  },
  {
    icon: BarChart3,
    title: "Dashboards e relatórios",
    text: "Dados apoiam acompanhamento de avanço, lacunas e evidências de aprendizagem.",
  },
];

export const Route = createFileRoute("/plataforma")({
  head: () => ({
    meta: [
      { title: "Plataforma | CLIMAEDU — Aprendizagem online aplicada" },
      {
        name: "description",
        content:
          "Conheça a plataforma de aprendizagem online da CLIMAEDU: trilhas, conteúdo gamificado, certificados, dashboards e relatórios.",
      },
      { property: "og:title", content: "Plataforma CLIMAEDU" },
      {
        property: "og:description",
        content:
          "Metodologia, conteúdo aplicado e tecnologia para acompanhar a evolução da aprendizagem.",
      },
    ],
  }),
  component: Plataforma,
});

function Plataforma() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1fr_0.95fr] md:py-24">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Plataforma
              </p>
              <h1 className="mt-4 text-primary-dark">
                Aprendizagem online para temas técnicos que precisam chegar à prática.
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-foreground/78">
                A CLIMAEDU reúne trilhas, aulas, vídeos, quizzes, atividades gamificadas,
                certificados, dashboards e relatórios para simplificar o processo de aprendizagem
                em temas climáticos, ambientais e socioambientais.
              </p>
              <Link
                to="/demonstracao"
                className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-lg bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-deep"
              >
                Agendar uma conversa <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <img
              src={platformImage}
              alt="Tela da plataforma CLIMAEDU com jornadas e conteúdos de aprendizagem"
              className="w-full rounded-lg border border-border bg-card object-cover shadow-[0_26px_56px_-28px_rgba(20,30,40,0.45)]"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Fluxo de trabalho"
            title="Da necessidade de capacitação à evolução acompanhada."
            subtitle="A jornada é desenhada para que conteúdos técnicos cheguem às pessoas certas em uma linguagem útil para a prática."
          />

          <div className="mt-10 grid gap-4">
            {flow.map((item, index) => (
              <FadeIn key={item} delay={index * 0.04}>
                <div className="grid gap-4 rounded-lg border border-border bg-card p-5 shadow-sm md:grid-cols-[72px_1fr] md:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-xl font-semibold text-primary-deep">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/78">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Tecnologia que sustenta a experiência"
            title="Recursos digitais a serviço da aprendizagem."
            subtitle="White-label, inteligência artificial, gamificação, certificados, dashboards e relatórios aparecem como suporte para entregar, acompanhar e comprovar a jornada."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {technology.map((item, index) => (
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
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Diferenciais incorporados
            </p>
            <h2 className="mt-4 text-primary-dark">
              Menos ferramenta isolada, mais jornada orientada.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Estruturação pedagógica feita pela NewEdTech antes da configuração tecnológica.",
              "Conteúdos adaptados por perfil, função e contexto de aplicação.",
              "Acompanhamento por dados sem transformar a experiência em controle burocrático.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-5">
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-primary" aria-hidden />
                <p className="text-base leading-relaxed text-foreground/76">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ver a CLIMAEDU em funcionamento"
        subtitle="Converse com a NewEdTech sobre o conhecimento que precisa chegar à prática na sua organização."
        ctaLabel="Agendar uma conversa"
      />
    </>
  );
}

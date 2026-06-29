import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ClassroomSection } from "@/components/sections/ClassroomSection";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import {
  Lightbulb,
  Gamepad2,
  Sparkles,
  Map,
  Users,
  Droplets,
} from "lucide-react";

const blocos = [
  { icon: Lightbulb, title: "Aprendizagem baseada em projetos", text: "Conteúdo aplicado a problemas reais do território da escola." },
  { icon: Gamepad2, title: "Gamificação", text: "Engajamento de estudantes com desafios, conquistas e progresso visível." },
  { icon: Sparkles, title: "Ambientes imersivos", text: "Experiências digitais para vivenciar climas, ecossistemas e riscos." },
  { icon: Map, title: "Trilhas por competência", text: "Conteúdo organizado por ano, ciclo e habilidade da BNCC." },
  { icon: Users, title: "Formação continuada de professores", text: "Apoio pedagógico, materiais editáveis e atualização constante." },
  { icon: Droplets, title: "Clima, água, resíduos, biodiversidade, território e eventos extremos", text: "Temas estruturantes da educação climática aplicada." },
];

export const Route = createFileRoute("/escolas")({
  head: () => ({
    meta: [
      { title: "Escolas e redes de ensino | CLIMAEDU — Educação climática aplicada" },
      {
        name: "description",
        content:
          "Experiências, metodologias e recursos digitais para transformar educação climática em vivência prática, com o professor no centro.",
      },
      { property: "og:title", content: "CLIMAEDU para escolas e redes de ensino" },
      {
        property: "og:description",
        content:
          "PBL, gamificação, imersivos e formação continuada — clima, água, biodiversidade e território na sala de aula.",
      },
    ],
  }),
  component: Escolas,
});

function Escolas() {
  return (
    <>
      <PageHero
        eyebrow="Solução para escolas e redes"
        title="Educação climática aplicada à sala de aula"
        subtitle="Experiências, metodologias e recursos digitais para transformar educação climática em vivência prática, com o professor no centro."
      />

      <ClassroomSection />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="O que entregamos"
            title="Pedagogia climática: do território à comunidade"
            subtitle="A tecnologia não substitui o professor, o livro ou a experiência presencial. Ela amplia."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blocos.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border bg-card p-6">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <b.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-[18px] font-semibold text-primary-dark">{b.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground/75">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Levar a CLIMAEDU para minha escola ou rede"
        subtitle="Conversamos sobre formação de professores, trilhas por ano/ciclo e implantação na rede."
        ctaLabel="Falar com a equipe"
      />
    </>
  );
}

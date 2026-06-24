import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HeartHandshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import classroomHero from "@/assets/classroom-hero.png.asset.json";

const cards = [
  {
    icon: MapPin,
    title: "Sala de aula como campo de experiência",
    text: "Ambientes imersivos, desafios práticos e atividades sobre clima, água, resíduos e eventos extremos — mediados pelo professor e conectados à realidade local.",
  },
  {
    icon: BookOpen,
    title: "O físico e o digital, cada um no seu lugar",
    text: "Os livros e materiais impressos ampliam em casa o que foi vivido na escola. A leitura ganha mais sentido quando nasce de uma experiência concreta.",
  },
  {
    icon: HeartHandshake,
    title: "Apoio real para quem ensina",
    text: "A CLIMAEDU oferece recursos, conteúdos e metodologias para ajudar professores a transformar temas complexos em experiências pedagógicas acessíveis, participativas e conectadas ao território.",
  },
];

const methods = [
  "Sala de aula invertida",
  "Aprendizagem baseada em projetos",
  "Ambientes imersivos",
  "Trilhas por competência",
  "Formação continuada de professores",
];

export function ClassroomSection() {
  return (
    <section id="sala-de-aula" className="relative overflow-hidden bg-surface scroll-mt-24">
      {/* Decorative top and bottom light washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 8% 12%, color-mix(in oklab, var(--color-olive) 12%, transparent) 0, transparent 35%), radial-gradient(circle at 92% 88%, color-mix(in oklab, var(--color-terracotta) 10%, transparent) 0, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <FadeIn>
          <SectionTitle
            eyebrow="Educação"
            title="CLIMAEDU na Sala de Aula"
            subtitle={
              <>
                <span className="block text-foreground/90" style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2, fontWeight: 600 }}>
                  A experiência climática começa na escola.
                </span>
                <span className="mt-4 block text-[17px] md:text-[19px] leading-[1.65] text-foreground/80">
                  Metodologias imersivas, conteúdos aplicados e ação real — pensados para acontecer dentro da sala de aula, com o professor no centro.
                </span>
              </>
            }
            align="center"
          />
        </FadeIn>

        {/* Hero image + supporting statement */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-2xl border shadow-lg" style={{ borderColor: "color-mix(in oklab, var(--color-olive) 22%, transparent)" }}>
              <img
                src={classroomHero.url}
                alt="Professora e estudantes do ensino fundamental em atividade coletiva sobre clima, água e natureza"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                width={1344}
                height={768}
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--color-primary-dark) 28%, transparent) 100%)",
                }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-5">
            <blockquote className="relative rounded-2xl border-l-4 bg-background p-7 shadow-sm md:p-8" style={{ borderColor: "var(--color-terracotta)" }}>
              <p className="text-[18px] leading-[1.7] text-foreground/85 md:text-[19px]">
                A CLIMAEDU <strong className="text-primary-dark">inverte a lógica tradicional</strong>: a tecnologia não é apenas dever de casa. Ela apoia momentos de <strong className="text-primary-dark">imersão coletiva</strong>, em que os alunos vivenciam a questão climática com os colegas, com o professor e com o território onde vivem.
              </p>
              <p className="mt-4 text-[18px] leading-[1.7] text-foreground/85 md:text-[19px]">
                O que vai para casa é o livro, o registro, a curiosidade e a vontade de continuar aprendendo.
              </p>
            </blockquote>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <article
                className="group relative h-full rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "color-mix(in oklab, var(--color-olive) 22%, transparent)" }}
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:brightness-105"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <c.icon size={24} aria-hidden />
                </span>
                <h3 className="mt-5 text-[19px] font-bold leading-snug text-primary-dark">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-foreground/80">
                  {c.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Methodology strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {methods.map((m, i) => (
            <motion.span
              key={m}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="inline-flex items-center rounded-full px-4 py-2 text-[13px] font-semibold"
              style={{
                backgroundColor: "color-mix(in oklab, var(--color-terracotta) 14%, transparent)",
                color: "var(--color-terracotta)",
                border: "1px solid color-mix(in oklab, var(--color-terracotta) 30%, transparent)",
              }}
            >
              {m}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-2xl border p-8 text-center md:p-10" style={{ borderColor: "color-mix(in oklab, var(--color-olive) 25%, transparent)", backgroundColor: "color-mix(in oklab, var(--color-olive) 8%, var(--color-background))" }}>
            <p className="text-[19px] font-semibold text-primary-dark md:text-[21px]">
              Quer levar a educação climática para sua rede?
            </p>
            <div className="mt-5 flex justify-center">
              <Button asChild size="lg" className="rounded-full px-8 text-[15px] font-semibold shadow-md">
                <Link to="/" hash="contato" className="inline-flex items-center gap-2">
                  Agendar conversa <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

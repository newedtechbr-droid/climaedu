import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  Compass,
  Droplets,
  GraduationCap,
  Leaf,
  MapPin,
  Sparkles,
  Sprout,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import classroomHero from "@/assets/classroom-hero-v2.jpg.asset.json";

const cards = [
  {
    icon: Compass,
    title: "Experiências imersivas em sala de aula",
    text: "Ambientes interativos, desafios práticos e recursos tecnológicos ajudam os estudantes a vivenciar temas como clima, água, resíduos, biodiversidade e eventos extremos de forma concreta e participativa.",
    accent: "var(--color-terracotta)",
  },
  {
    icon: GraduationCap,
    title: "Tecnologia como apoio ao professor",
    text: "A CLIMAEDU apoia o trabalho docente com conteúdos, recursos e metodologias que tornam temas complexos mais acessíveis, envolventes e aplicáveis à realidade escolar.",
    accent: "var(--color-olive)",
  },
  {
    icon: MapPin,
    title: "Educação climática conectada ao território",
    text: "A aprendizagem parte da realidade dos estudantes e das escolas, especialmente em contextos de maior vulnerabilidade, onde educação climática, prevenção e cuidado fazem diferença real.",
    accent: "var(--color-primary-deep)",
  },
];

const methods = [
  { label: "Aprendizagem baseada em projetos", icon: Sparkles },
  { label: "Ambientes imersivos", icon: Compass },
  { label: "Gamificação", icon: Sparkles },
  { label: "Trilhas por competência", icon: GraduationCap },
  { label: "Formação continuada de professores", icon: GraduationCap },
  { label: "Sala de aula invertida", icon: Sprout },
];

const floatingTags = [
  { icon: Cloud, label: "Clima", top: "8%", left: "-3%", delay: 0 },
  { icon: Droplets, label: "Água", top: "62%", left: "-5%", delay: 0.4 },
  { icon: Leaf, label: "Biodiversidade", top: "6%", right: "-4%", delay: 0.2 },
  { icon: Waves, label: "Território", top: "70%", right: "-3%", delay: 0.6 },
];

export function ClassroomSection() {
  return (
    <section id="sala-de-aula" className="relative overflow-hidden scroll-mt-24">
      {/* Layered background: warm sand → soft olive wash */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--color-olive) 10%, var(--color-background)) 0%, var(--color-surface) 55%, color-mix(in oklab, var(--color-terracotta) 8%, var(--color-background)) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 10% 8%, color-mix(in oklab, var(--color-olive) 22%, transparent) 0, transparent 38%), radial-gradient(circle at 90% 92%, color-mix(in oklab, var(--color-terracotta) 18%, transparent) 0, transparent 42%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Eyebrow chip */}
        <FadeIn>
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.22em]"
              style={{
                borderColor: "color-mix(in oklab, var(--color-terracotta) 35%, transparent)",
                backgroundColor: "color-mix(in oklab, var(--color-terracotta) 10%, var(--color-background))",
                color: "var(--color-terracotta)",
              }}
            >
              <Sparkles size={14} aria-hidden />
              Educação climática · Escolas
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-6">
            <SectionTitle
              title="CLIMAEDU na Sala de Aula"
              subtitle={
                <>
                  <span
                    className="block text-foreground/90"
                    style={{ fontSize: "clamp(24px, 3.2vw, 34px)", lineHeight: 1.2, fontWeight: 700 }}
                  >
                    A experiência climática começa na escola.
                  </span>
                  <span className="mt-5 block text-[17px] md:text-[19px] leading-[1.7] text-foreground/80">
                    Tecnologia, metodologias imersivas e conteúdos aplicados para transformar a
                    educação climática em uma <strong className="text-primary-dark">vivência real</strong> —
                    com o <strong className="text-primary-dark">professor no centro</strong>.
                  </span>
                </>
              }
              align="center"
            />
          </div>
        </FadeIn>

        {/* Hero image with floating climate tags + supporting text */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div className="relative">
              {/* Floating climate context tags */}
              {floatingTags.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: t.delay }}
                  className="absolute z-10 hidden md:flex items-center gap-2 rounded-full bg-background/95 px-3.5 py-2 text-[12px] font-semibold shadow-lg backdrop-blur ring-1 ring-black/5"
                  style={{
                    top: t.top,
                    left: (t as any).left,
                    right: (t as any).right,
                    color: i % 2 === 0 ? "var(--color-primary-deep)" : "var(--color-terracotta)",
                    animation: `float 6s ease-in-out ${t.delay}s infinite`,
                  }}
                >
                  <t.icon size={14} aria-hidden />
                  {t.label}
                </motion.div>
              ))}

              {/* Image frame */}
              <div
                className="group relative overflow-hidden rounded-3xl border-2 shadow-2xl"
                style={{ borderColor: "color-mix(in oklab, var(--color-olive) 28%, transparent)" }}
              >
                <img
                  src={classroomHero.url}
                  alt="Professora mediando atividade imersiva de educação climática com estudantes do ensino fundamental usando VR, tablets, mapas e livros"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
                {/* Gradient veil for readability */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--color-primary-dark) 38%, transparent) 100%)",
                  }}
                />
                {/* Corner badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-[12px] font-semibold text-primary-dark shadow-md backdrop-blur">
                  <Sprout size={14} aria-hidden style={{ color: "var(--color-olive)" }} />
                  Ensino Fundamental · Redes de Ensino
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-5">
            <div
              className="relative rounded-3xl border-l-[5px] bg-background p-8 shadow-md md:p-9"
              style={{ borderColor: "var(--color-terracotta)" }}
            >
              <p className="text-[18px] leading-[1.75] text-foreground/85 md:text-[19px]">
                A CLIMAEDU transforma a sala de aula em <strong className="text-primary-dark">espaço de descoberta, experimentação e ação</strong>. A tecnologia apoia momentos de <strong className="text-primary-dark">imersão coletiva</strong>, em que os alunos exploram questões climáticas e ambientais de forma prática, colaborativa e conectada ao território.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-foreground/80 md:text-[18px]">
                O livro e os materiais físicos ampliam essa experiência para além da escola, fortalecendo a aprendizagem e o vínculo com a família.
              </p>

              {/* Mini stat row */}
              <div className="mt-7 grid grid-cols-3 gap-3 border-t pt-6" style={{ borderColor: "color-mix(in oklab, var(--color-olive) 20%, transparent)" }}>
                {[
                  { k: "Imersão", v: "VR · Tablets" },
                  { k: "Apoio", v: "Professor" },
                  { k: "Conexão", v: "Território" },
                ].map((s) => (
                  <div key={s.k} className="text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/55">{s.k}</p>
                    <p className="mt-1 text-[13px] font-bold text-primary-dark">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ borderColor: "color-mix(in oklab, var(--color-olive) 22%, transparent)" }}
              >
                {/* Accent strip */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: c.accent }}
                />
                <span
                  className="inline-flex h-13 w-13 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: 52,
                    height: 52,
                    backgroundColor: `color-mix(in oklab, ${c.accent} 16%, transparent)`,
                    color: c.accent,
                  }}
                >
                  <c.icon size={26} aria-hidden />
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
        <FadeIn delay={0.1}>
          <div className="mt-20">
            <p className="text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/60">
              Metodologias aplicadas
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {methods.map((m, i) => (
                <motion.span
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--color-background)",
                    color: "var(--color-primary-deep)",
                    border: "1px solid color-mix(in oklab, var(--color-olive) 35%, transparent)",
                  }}
                >
                  <m.icon size={14} aria-hidden style={{ color: "var(--color-terracotta)" }} />
                  {m.label}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div
            className="mt-20 relative overflow-hidden rounded-3xl p-10 text-center md:p-12"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--color-olive) 18%, var(--color-background)) 0%, color-mix(in oklab, var(--color-terracotta) 14%, var(--color-background)) 100%)",
              border: "1px solid color-mix(in oklab, var(--color-olive) 28%, transparent)",
            }}
          >
            {/* Decorative leaves */}
            <Leaf
              aria-hidden
              size={120}
              className="absolute -top-6 -left-6 opacity-10 -rotate-12"
              style={{ color: "var(--color-olive)" }}
            />
            <Cloud
              aria-hidden
              size={110}
              className="absolute -bottom-6 -right-4 opacity-10"
              style={{ color: "var(--color-terracotta)" }}
            />
            <p className="relative text-[20px] font-bold leading-snug text-primary-dark md:text-[24px]">
              Quer levar a educação climática para sua escola ou rede?
            </p>
            <p className="relative mt-3 text-[15px] text-foreground/75 md:text-[16px]">
              Conheça a CLIMAEDU para gestores educacionais, escolas públicas e professores.
            </p>
            <div className="relative mt-7 flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-9 py-6 text-[15px] font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to="/demonstracao" className="inline-flex items-center gap-2">
                  Agendar conversa <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}

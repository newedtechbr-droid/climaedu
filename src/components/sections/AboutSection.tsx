import { FadeIn } from "@/components/FadeIn";
import teamImage from "@/assets/team-meeting.jpg";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-2xl border shadow-[0_24px_60px_-24px_rgba(20,30,40,0.35)]"
            style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 22%, var(--color-border))" }}
          >
            <img
              src={teamImage}
              alt="Equipe CLIMAEDU em contexto de trabalho institucional"
              className="block aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              loading="lazy"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--color-primary-dark) 35%, transparent))",
              }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="mb-5 font-semibold uppercase tracking-[0.22em] text-primary"
            style={{ fontSize: "13px" }}
          >
            Quem somos
          </p>
          <h2 className="text-primary-dark">
            Tecnologia, educação e clima em um só produto
          </h2>
          <p className="mt-7 text-[18px] leading-[1.7] text-foreground/80">
            A CLIMAEDU é um produto da{" "}
            <strong className="font-semibold text-primary-dark">NewEdTech</strong>, criado para
            fortalecer capacidades institucionais para <strong className="font-semibold text-primary-dark">ação climática</strong>. Combinamos educação,
            tecnologia, IA e conhecimento ambiental para apoiar governos e organizações na
            transformação de diretrizes em rotinas executáveis.
          </p>
        </FadeIn>
      </div>

    </section>
  );
}

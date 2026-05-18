import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import heroImg from "@/assets/hero-field.jpg";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('${heroImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32 text-center">
        <FadeIn>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium tracking-wide text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Plataforma GovTech de educação climática
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-5xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]" style={{ fontSize: "clamp(40px, 5.6vw, 70px)" }}>
            Transforme normas, planos e diretrizes em <span className="text-primary">capacitação executável</span> no setor público
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed">
            Capacitação climática online com IA, curadoria técnica e dados para acompanhar a aprendizagem das equipes.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_rgba(154,75,66,0.45)] transition-all hover:bg-primary-dark hover:scale-[1.02]"
            >
              Vamos conversar? <ArrowRight size={18} />
            </Link>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Conhecer os cursos
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

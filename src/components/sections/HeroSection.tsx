import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const HERO_IMG =
  "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=2000&q=80&auto=format&fit=crop";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMG}
          alt="Equipe pública atuando em campo após evento climático"
          className="h-full w-full object-cover"
          width={2000}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-32 text-center md:py-40">
        <FadeIn>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium tracking-wide text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Capacitação climática para o setor público
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-4xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]">
            Da norma climática à evidência auditável.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Trilhas práticas, checklists com evidência e dashboards prontos para auditoria.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_rgba(29,158,117,0.7)] transition-all hover:bg-primary-dark hover:scale-[1.02]"
            >
              Solicitar demonstração <ArrowRight size={18} />
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

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center gap-2 text-[12px] uppercase tracking-[0.2em]">
          <span>Role</span>
          <span className="h-10 w-px animate-pulse bg-white/50" />
        </div>
      </div>
    </section>
  );
}

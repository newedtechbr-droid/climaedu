import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import cityImage from "@/assets/hero-city.jpg";

export function ClimateImpactStrip() {
  return (
    <section
      aria-label="Contexto climático"
      className="relative isolate overflow-hidden"
    >
      <img
        src={cityImage}
        alt="Vista aérea de cidade impactada por eventos climáticos extremos"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--color-primary-dark) 78%, transparent) 0%, color-mix(in oklab, var(--color-primary-dark) 60%, transparent) 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 py-28 md:py-36 text-center">
        <FadeIn>
          <p
            className="mb-4 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
            style={{ backgroundColor: "color-mix(in oklab, var(--color-terracotta) 90%, transparent)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Emergência climática
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.01em" }}
          >
            Eventos extremos exigem instituições preparadas.
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/85">
            Capacitação aplicada, rotinas claras e evidências de aprendizagem para que governos e
            organizações respondam com agilidade — antes, durante e depois das crises climáticas.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              hash="contato"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-[15px] font-semibold text-primary-dark shadow-lg transition-transform hover:scale-[1.02]"
            >
              Falar com a CLIMAEDU <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

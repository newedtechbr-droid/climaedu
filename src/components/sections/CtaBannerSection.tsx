import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function CtaBannerSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-2xl px-8 py-10 md:px-14 md:py-14 text-white shadow-[0_20px_60px_-20px_rgba(15,110,86,0.45)]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, color-mix(in oklab, var(--color-primary) 70%, white) 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "white" }}
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Aplicação na prática
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">
                  Veja a ClimaEdu aplicada ao seu contexto institucional
                </h3>
                <p className="mt-3 text-base text-white/85 md:text-lg">
                  Uma demonstração orientada à realidade do seu órgão ou empresa, com exemplos
                  reais de trilhas, evidências e dashboards.
                </p>
              </div>
              <Link
                to="/"
                hash="contato"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary-dark transition-transform hover:scale-[1.02]"
              >
                Solicitar demonstração <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

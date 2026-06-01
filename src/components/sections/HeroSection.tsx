import { Link } from "@tanstack/react-router";
import { ArrowRight, Route as RouteIcon, FileCheck2, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import heroImg from "@/assets/hero-field.jpg";

const microProofs = [
  { icon: RouteIcon, label: "Trilhas por perfil e secretaria" },
  { icon: FileCheck2, label: "Registros verificáveis para auditoria" },
  { icon: BarChart3, label: "Dashboards de adesão e proficiência" },
];

export function HeroSection() {
  return (
    <>
      <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('${heroImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95deg, rgba(24,28,31,0.90) 0%, rgba(32,36,39,0.78) 32%, rgba(72,92,104,0.42) 62%, rgba(72,92,104,0.12) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-4 py-1.5 text-[13px] font-medium tracking-wide text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-terracotta)" }} />
                Plataforma GovTech de educação climática
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
                style={{ fontSize: "clamp(36px, 4.6vw, 62px)", lineHeight: 1.06, letterSpacing: "-0.015em" }}
              >
                Transforme normas climáticas em{" "}
                <span className="text-primary">ação pública rastreável</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p
                className="mt-6 max-w-xl text-white/95"
                style={{ fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.55 }}
              >
                A CLIMAEDU capacita equipes, organiza trilhas por perfil e entrega dashboards com
                evidências para gestão, auditoria e prestação de contas.
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/"
                  hash="contato"
                  className="inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_14px_38px_-10px_rgba(132,154,116,0.75)] ring-1 ring-primary/40 transition-all hover:bg-primary-deep hover:scale-[1.03]"
                >
                  Solicitar demonstração <ArrowRight size={18} />
                </Link>
                <Link
                  to="/como-funciona"
                  className="inline-flex h-14 items-center gap-2 rounded-lg border-2 border-white bg-white/95 px-8 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
                >
                  Ver como funciona
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p
                className="mt-5 inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-[12.5px] font-semibold uppercase tracking-[0.18em]"
                style={{
                  color: "#F3F1EC",
                  backgroundColor: "color-mix(in oklab, var(--color-terracotta) 70%, transparent)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Agenda de demonstrações limitada
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Faixa de microprovas */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-3">
          {microProofs.map((p, i) => (
            <div
              key={p.label}
              className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3"
              style={{
                borderColor: i === 1 ? "color-mix(in oklab, var(--color-terracotta) 35%, var(--color-border))" : "var(--color-border)",
              }}
            >
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: i === 1 ? "color-mix(in oklab, var(--color-terracotta) 16%, transparent)" : "color-mix(in oklab, var(--color-olive) 16%, transparent)",
                  color: i === 1 ? "var(--color-terracotta)" : "var(--color-olive)",
                }}
              >
                <p.icon size={18} aria-hidden />
              </span>
              <span className="text-[15px] font-medium text-foreground">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

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
      <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('${heroImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.08) saturate(0.95)",
          }}
        >
          {/* Forte gradiente lateral à esquerda para leitura imediata */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(98deg, rgba(20,24,27,0.94) 0%, rgba(28,34,38,0.86) 28%, rgba(58,78,90,0.50) 58%, rgba(72,92,104,0.10) 100%)",
            }}
          />
          {/* Veladura inferior sutil para apoiar CTAs */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <FadeIn>
              <p
                className="mb-6 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12.5px] font-semibold uppercase"
                style={{
                  backgroundColor: "#9A4B42",
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Demonstrações institucionais abertas
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1
                className="text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.55)]"
                style={{ fontSize: "clamp(36px, 4.6vw, 62px)", lineHeight: 1.06, letterSpacing: "-0.015em" }}
              >
                Transformando a ação climática
                <br />
                em{" "}
                <span
                  style={{
                    color: "#849A74",
                    fontWeight: 700,
                    textShadow: "0 1px 0 rgba(0,0,0,0.45), 0 0 18px rgba(132,154,116,0.35)",
                  }}
                >
                  rotinas executáveis
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p
                className="mt-6 max-w-xl text-white"
                style={{ fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.55, opacity: 1, fontWeight: 500 }}
              >
                A ClimaEdu capacita equipes, organiza trilhas por perfil e entrega dashboards com
                evidências para gestão, auditoria e prestação de contas.
              </p>
            </FadeIn>


            <FadeIn delay={0.28}>
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
          </div>
        </div>
      </section>

      {/* Faixa de microprovas */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-3">
          {microProofs.map((p, i) => (
            <div
              key={p.label}
              className="flex items-center gap-3 rounded-lg border bg-card px-5 py-5 shadow-sm"
              style={{
                borderColor: i === 1 ? "color-mix(in oklab, var(--color-terracotta) 45%, var(--color-border))" : "var(--color-border)",
              }}
            >
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: i === 1 ? "color-mix(in oklab, var(--color-terracotta) 18%, transparent)" : "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                  color: i === 1 ? "var(--color-terracotta)" : "var(--color-olive)",
                }}
              >
                <p.icon size={22} aria-hidden />
              </span>
              <span className="text-[17px] font-semibold leading-snug text-foreground">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

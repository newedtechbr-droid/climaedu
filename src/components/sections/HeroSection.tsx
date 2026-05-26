import { Link } from "@tanstack/react-router";
import { ArrowRight, Route as RouteIcon, FileCheck2, RefreshCcw } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import heroImg from "@/assets/hero-field.jpg";

const microProofs = [
  { icon: RouteIcon, label: "Trilhas por perfil e secretaria" },
  { icon: FileCheck2, label: "Relatórios auditáveis" },
  { icon: RefreshCcw, label: "Conteúdo climático atualizado" },
];

export function HeroSection() {
  return (
    <>
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('${heroImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay controlado: forte à esquerda (leitura), suave à direita */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95deg, rgba(24,28,31,0.88) 0%, rgba(32,36,39,0.78) 30%, rgba(72,92,104,0.45) 60%, rgba(72,92,104,0.15) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-4 py-1.5 text-[13px] font-medium tracking-wide text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Plataforma GovTech de educação climática
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
                style={{ fontSize: "clamp(38px, 4.6vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}
              >
                <span className="whitespace-nowrap">Transforme normas climáticas</span>
                <br />
                em <span className="text-primary">rotinas executáveis</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p
                className="mt-4 text-white/90"
                style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "0.01em" }}
              >
                Capacitação rastreável para gestão pública climática
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p
                className="mt-5 max-w-xl text-white/95"
                style={{ fontSize: "clamp(18px, 1.6vw, 21px)", lineHeight: 1.55 }}
              >
                Capacitação online com IA, trilhas por perfil e dashboards para acompanhar adesão,
                conclusão, proficiência e aplicação prática.
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contato"
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

      {/* Faixa de microprovas — fundo Calcário, ícones oliva */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-3">
          {microProofs.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 rounded-lg border border-border/70 bg-card px-4 py-3"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
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

import { Link } from "@tanstack/react-router";
import { ArrowRight, Route as RouteIcon, FileCheck2, RefreshCcw } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import heroImg from "@/assets/hero-field.jpg";

const microProofs = [
  { icon: RouteIcon, label: "Trilhas por secretaria e função" },
  { icon: FileCheck2, label: "Relatórios auditáveis" },
  { icon: RefreshCcw, label: "Conteúdo climático atualizado" },
];

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
        {/* Overlay mais equilibrado: ardósia translúcida no lado esquerdo, suave à direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(32,36,39,0.78) 0%, rgba(72,92,104,0.55) 45%, rgba(72,92,104,0.25) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-4 py-1.5 text-[13px] font-medium tracking-wide text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Plataforma GovTech de educação climática
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]"
              style={{ fontSize: "clamp(40px, 5.6vw, 72px)", lineHeight: 1.05 }}
            >
              Transforme normas climáticas em{" "}
              <span className="text-primary">rotinas executáveis</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-5 text-base font-medium uppercase tracking-[0.18em] text-white/80">
              Capacitação rastreável no setor público
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95 md:text-2xl">
              Capacitação online com IA, trilhas por perfil e dashboards para acompanhar adesão,
              conclusão, proficiência e aplicação prática.
            </p>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_14px_38px_-10px_rgba(132,154,116,0.75)] ring-1 ring-primary/40 transition-all hover:bg-primary-deep hover:scale-[1.03]"
              >
                Solicitar demonstração <ArrowRight size={18} />
              </Link>
              <Link
                to="/como-funciona"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white/95 px-8 py-4 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
              >
                Ver como funciona
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.42}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {microProofs.map((p) => (
                <li
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[14px] font-medium text-white backdrop-blur"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/90 text-primary-foreground">
                    <p.icon size={13} aria-hidden />
                  </span>
                  {p.label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, Route as RouteIcon, Award, BarChart3, Palette, Sparkles } from "lucide-react";
import heroPlatform from "@/assets/hero-platform.jpg";
import { FadeIn } from "@/components/FadeIn";

const badges = [
  { icon: RouteIcon, label: "Trilhas por perfil" },
  { icon: Award, label: "Certificados" },
  { icon: BarChart3, label: "Dashboards e relatórios" },
  { icon: Palette, label: "White-label institucional" },
  { icon: Sparkles, label: "IA com curadoria humana" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* fundo suave institucional */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, color-mix(in oklab, var(--color-olive) 16%, transparent) 0%, transparent 70%), radial-gradient(45% 40% at 95% 90%, color-mix(in oklab, var(--color-terracotta) 12%, transparent) 0%, transparent 75%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-12 md:gap-12 md:py-32">
        {/* Coluna texto */}
        <div className="md:col-span-7">
          <FadeIn>
            <p
              className="mb-7 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12.5px] font-semibold uppercase"
              style={{ backgroundColor: "#9A4B42", color: "#FFFFFF", letterSpacing: "0.04em" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Ambiente de aprendizagem online para ação climática
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1
              className="text-primary-dark"
              style={{
                fontSize: "clamp(38px, 5.6vw, 72px)",
                lineHeight: 1.06,
                letterSpacing: "-0.018em",
                fontWeight: 600,
              }}
            >
              Da reação à prevenção:{" "}
              <span style={{ color: "#3D5132", fontWeight: 800 }}>
                capacitação climática para colocar toda a instituição na mesma página
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p
              className="mt-8 max-w-xl text-foreground/80"
              style={{ fontSize: "clamp(17px, 1.35vw, 21px)", lineHeight: 1.65 }}
            >
              Ter planos, normas e especialistas não garante que as pessoas saibam como agir. A
              CLIMAEDU transforma esse conhecimento técnico em{" "}
              <strong className="font-semibold text-primary-dark">aprendizagem aplicada</strong>,
              preparando equipes de órgãos públicos e indústrias reguladas para agir — com a
              organização acompanhando essa aprendizagem.
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/demonstracao"
                className="inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_14px_38px_-10px_rgba(132,154,116,0.65)] ring-1 ring-primary/30 transition-all hover:bg-primary-deep hover:scale-[1.02]"
              >
                Agendar demonstração <ArrowRight size={18} />
              </Link>
              
                href="#solucoes"
                className="inline-flex h-14 items-center gap-2 rounded-lg border-2 border-primary bg-background px-7 text-base font-semibold text-primary-dark transition-colors hover:bg-accent"
              >
                Conhecer soluções
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.34}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <li
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-2 text-[13px] font-semibold text-foreground/85"
                  style={{
                    borderColor: "color-mix(in oklab, var(--color-olive) 35%, var(--color-border))",
                  }}
                >
                  <b.icon size={15} style={{ color: "var(--color-olive)" }} aria-hidden />
                  {b.label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Coluna mockup */}
        <FadeIn delay={0.2} className="md:col-span-5">
          <PlatformMockup />
        </FadeIn>
      </div>
    </section>
  );
}

function PlatformMockup() {
  return (
    <div className="relative">
      {/* halo suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--color-olive) 22%, transparent), transparent 70%)",
        }}
      />

      {/* Mockup principal — sugerido, não literal */}
      <div
        className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl border bg-card shadow-[0_30px_70px_-22px_rgba(20,30,40,0.4)] animate-fade-in"
        style={{
          borderColor: "color-mix(in oklab, var(--color-slate-blue) 25%, var(--color-border))",
        }}
      >
        {/* barra superior estilo navegador */}
        <div
          className="flex items-center gap-1.5 border-b px-4 py-2.5"
          style={{
            borderColor: "color-mix(in oklab, var(--color-slate-blue) 12%, var(--color-border))",
            backgroundColor: "color-mix(in oklab, var(--color-surface) 60%, white)",
          }}
        >
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#E2B7B3" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#E7D9A8" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#B9CDB0" }} />
          <span
            className="ml-3 rounded px-2 py-0.5 text-[10px] font-semibold"
            style={{
              backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
              color: "var(--color-primary-deep)",
            }}
          >
            plataforma.instituicao.gov.br
          </span>
        </div>

        <div className="relative">
          <img
            src={heroPlatform}
            alt="Plataforma ClimaEdu — ambiente white-label de capacitação climática"
            width={1280}
            height={896}
            className="block h-auto w-full"
          />
          {/* Véu leve para reduzir 'spoiler' da plataforma */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 72%, color-mix(in oklab, var(--color-background) 18%, transparent))",
            }}
          />
        </div>
      </div>

      {/* Chip flutuante — trilha por perfil */}
      <div
        className="absolute -left-3 top-6 hidden rounded-full border bg-white px-3 py-1.5 text-[11px] font-semibold shadow-xl sm:flex items-center gap-1.5 animate-fade-in"
        style={{
          borderColor: "color-mix(in oklab, var(--color-olive) 35%, var(--color-border))",
          color: "var(--color-primary-deep)",
          animation: "fade-in 0.6s ease-out 0.3s both, float 6s ease-in-out 1s infinite",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--color-olive)" }}
        />
        Trilha por perfil
      </div>

      {/* Card flutuante — certificado */}
      <div
        className="absolute -bottom-5 -left-5 hidden w-[195px] rotate-[-3deg] rounded-lg border bg-white p-3 shadow-xl sm:block"
        style={{
          borderColor: "color-mix(in oklab, var(--color-terracotta) 45%, var(--color-border))",
          animation: "fade-in 0.6s ease-out 0.5s both, float 7s ease-in-out infinite",
        }}
      >
        <p
          className="text-[10px] font-bold uppercase tracking-wider"
          style={{ color: "var(--color-terracotta)" }}
        >
          Certificado emitido
        </p>
        <p className="mt-1 text-[12px] font-semibold leading-snug text-primary-dark">
          Trilha de Resíduos Sólidos
        </p>
        <p className="mt-0.5 text-[10px] text-foreground/60">320 servidores · 18h</p>
      </div>

      {/* Card flutuante — dashboard de adesão */}
      <div
        className="absolute -right-4 -top-4 hidden w-[180px] rotate-[2deg] rounded-lg border bg-white p-3 shadow-xl md:block"
        style={{
          borderColor: "color-mix(in oklab, var(--color-olive) 45%, var(--color-border))",
          animation: "fade-in 0.6s ease-out 0.7s both, float 8s ease-in-out 0.5s infinite",
        }}
      >
        <p
          className="text-[10px] font-bold uppercase tracking-wider"
          style={{ color: "var(--color-olive)" }}
        >
          Adesão por secretaria
        </p>
        <div className="mt-2 space-y-1.5">
          {[
            { l: "Meio Ambiente", v: 92 },
            { l: "Defesa Civil", v: 78 },
            { l: "Planejamento", v: 64 },
          ].map((r) => (
            <div key={r.l}>
              <div className="flex justify-between text-[9.5px] text-foreground/65">
                <span>{r.l}</span>
                <span className="font-semibold text-primary-dark">{r.v}%</span>
              </div>
              <div className="mt-0.5 h-1 rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${r.v}%`,
                    backgroundColor: "var(--color-olive)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chip flutuante — white-label */}
      <div
        className="absolute -bottom-2 right-2 hidden rounded-full border bg-white px-3 py-1.5 text-[11px] font-semibold shadow-xl md:flex items-center gap-1.5"
        style={{
          borderColor: "color-mix(in oklab, var(--color-terracotta) 45%, var(--color-border))",
          color: "var(--color-primary-deep)",
          animation: "fade-in 0.6s ease-out 0.9s both, float 6.5s ease-in-out 1.5s infinite",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--color-terracotta)" }}
        />
        Identidade institucional
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-6px) rotate(var(--r, 0deg)); }
        }
      `}</style>
    </div>
  );
}

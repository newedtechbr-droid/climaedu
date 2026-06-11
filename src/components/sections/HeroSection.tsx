import { Link } from "@tanstack/react-router";
import { ArrowRight, Route as RouteIcon, Award, BarChart3, Palette, Sparkles } from "lucide-react";
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

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-24">
        {/* Coluna texto */}
        <div className="md:col-span-7">
          <FadeIn>
            <p
              className="mb-5 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12.5px] font-semibold uppercase"
              style={{ backgroundColor: "#9A4B42", color: "#FFFFFF", letterSpacing: "0.02em" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Ambiente de aprendizagem white-label
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1
              className="text-primary-dark"
              style={{ fontSize: "clamp(32px, 4.2vw, 54px)", lineHeight: 1.08, letterSpacing: "-0.015em" }}
            >
              Transformando a{" "}
              <span style={{ color: "var(--color-olive)", fontWeight: 700 }}>ação climática</span>
              <br />
              em rotinas executáveis
            </h1>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p
              className="mt-6 max-w-xl text-foreground/80"
              style={{ fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.55 }}
            >
              A CLIMAEDU ajuda instituições públicas e organizações a preparar equipes,
              padronizar rotinas e gerar evidências de capacitação para gestão, auditoria
              e prestação de contas.
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/"
                hash="contato"
                className="inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_14px_38px_-10px_rgba(132,154,116,0.65)] ring-1 ring-primary/30 transition-all hover:bg-primary-deep hover:scale-[1.02]"
              >
                Agendar demonstração <ArrowRight size={18} />
              </Link>
              <Link
                to="/como-funciona"
                className="inline-flex h-14 items-center gap-2 rounded-lg border-2 border-primary bg-background px-7 text-base font-semibold text-primary-dark transition-colors hover:bg-accent"
              >
                Ver como funciona a plataforma
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.34}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <li
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-2 text-[13px] font-semibold text-foreground/85"
                  style={{ borderColor: "color-mix(in oklab, var(--color-olive) 35%, var(--color-border))" }}
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
      {/* Notebook */}
      <div
        className="relative mx-auto w-full max-w-[520px] rounded-[18px] border bg-[#0f1518] p-2 shadow-[0_30px_60px_-20px_rgba(20,30,40,0.35)]"
        style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 25%, var(--color-border))" }}
      >
        <div className="overflow-hidden rounded-[12px] bg-[#F6F4EF]">
          {/* Topbar */}
          <div className="flex items-center gap-2 border-b border-black/5 bg-white/70 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E08977]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8C679]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#A9C397]" />
            <div className="ml-3 flex h-5 flex-1 items-center rounded-md bg-black/5 px-2 text-[10px] text-foreground/50">
              instituicao.climaedu.app/trilhas
            </div>
          </div>

          {/* Conteúdo plataforma */}
          <div className="grid grid-cols-[88px_1fr] gap-0">
            {/* Sidebar */}
            <aside className="space-y-1.5 border-r border-black/5 bg-white/40 p-2.5">
              <div className="h-5 rounded bg-primary/20" />
              <div className="h-3 rounded bg-black/5" />
              <div className="h-3 rounded bg-black/5" />
              <div className="h-3 rounded bg-black/5" />
              <div className="h-3 rounded bg-black/5" />
              <div className="mt-3 h-3 rounded bg-black/5" />
              <div className="h-3 rounded bg-black/5" />
            </aside>

            {/* Main */}
            <div className="p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary-deep">
                Trilha · Defesa Civil
              </p>
              <p className="mt-0.5 text-[13px] font-bold text-primary-dark">
                Enchentes e alagamentos
              </p>

              {/* Progresso */}
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-black/5">
                <div className="h-full w-[68%] rounded-full bg-primary" />
              </div>
              <p className="mt-1 text-[9px] text-foreground/60">68% concluído · 12 de 18 módulos</p>

              {/* Cards módulos */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Módulo 1", "Módulo 2", "Módulo 3"].map((m, i) => (
                  <div
                    key={m}
                    className="rounded-md border border-black/5 bg-white p-2"
                  >
                    <div
                      className="h-1 w-6 rounded-full"
                      style={{
                        backgroundColor: i === 2 ? "var(--color-terracotta)" : "var(--color-olive)",
                      }}
                    />
                    <p className="mt-1.5 text-[9px] font-semibold text-foreground/80">{m}</p>
                    <p className="mt-0.5 text-[8px] text-foreground/55">5 aulas · quiz</p>
                  </div>
                ))}
              </div>

              {/* Mini-dashboard */}
              <div className="mt-3 rounded-md border border-black/5 bg-white p-2">
                <div className="flex items-end justify-between">
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-foreground/55">
                    Adesão por secretaria
                  </p>
                  <p className="text-[9px] font-bold text-primary-deep">+24%</p>
                </div>
                <div className="mt-1.5 flex items-end gap-1.5">
                  {[60, 80, 45, 95, 70, 55, 88].map((h, i) => (
                    <div
                      key={i}
                      className="w-2.5 rounded-t"
                      style={{
                        height: `${h * 0.32}px`,
                        backgroundColor:
                          i === 3 ? "var(--color-terracotta)" : "color-mix(in oklab, var(--color-olive) 75%, transparent)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Base do notebook */}
        <div className="mx-auto mt-2 h-1.5 w-1/2 rounded-full bg-[#1a2024]" />
      </div>

      {/* Card flutuante certificado */}
      <div
        className="absolute -bottom-4 -left-4 hidden w-[180px] rotate-[-3deg] rounded-lg border bg-card p-3 shadow-lg sm:block"
        style={{ borderColor: "color-mix(in oklab, var(--color-terracotta) 45%, var(--color-border))" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--color-terracotta)" }}>
          Certificado emitido
        </p>
        <p className="mt-1 text-[12px] font-semibold leading-snug text-primary-dark">
          Trilha de Resíduos Sólidos
        </p>
        <p className="mt-0.5 text-[10px] text-foreground/60">320 servidores · 18h</p>
      </div>
    </div>
  );
}

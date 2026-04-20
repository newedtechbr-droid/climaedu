import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FadeIn } from "@/components/FadeIn";
import heroCity from "@/assets/hero-city.jpg";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-dark text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroCity}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-55"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/60 via-transparent to-surface-dark" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <FadeIn>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Plataforma SaaS · Capacitação climática institucional
          </p>
          <h1 className="text-3xl leading-[1.1] text-white md:text-5xl lg:text-[3.4rem]">
            Capacitação climática <span className="text-primary">aplicada à rotina</span> do setor público
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
            A ClimaEdu transforma normas e políticas ambientais em aprendizado prático,
            mensurável e auditável — para equipes que precisam entregar resultados, não só
            concluir cursos.
          </p>
          <p className="mt-5 max-w-xl text-[15px] italic text-white/60">
            Desenvolvida por quem conhece a pressão de entregar resultado com equipe enxuta,
            orçamento apertado e cobranças reais de auditoria.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-6px_rgba(29,158,117,0.6)] transition-colors hover:bg-primary-dark"
            >
              Solicitar demonstração <ArrowRight size={16} />
            </Link>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Conhecer os cursos
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <DashboardMockup />
        </FadeIn>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Floating badge */}
      <div className="absolute -left-3 -top-3 z-10 flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg">
        <ShieldCheck size={14} /> Pronto para auditoria
      </div>

      <div className="rounded-2xl border border-white/10 bg-background p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
        {/* Window chrome */}
        <div className="mb-4 flex items-center gap-1.5 border-b border-border pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-surface" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface" />
          <p className="ml-3 text-xs text-muted-foreground">app.climaedu.com.br · Painel institucional</p>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Engajamento</p>
            <p className="text-sm font-medium text-primary-dark">Por secretaria · Trim. 3</p>
          </div>
          <span className="rounded-md bg-accent px-2 py-1 text-xs text-primary-dark">Ao vivo</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Stat icon={<CheckCircle2 size={16} />} label="Conclusão" value="87%" trend="+12" />
          <Stat icon={<TrendingUp size={16} />} label="Adesão" value="92%" trend="+8" />
          <Stat icon={<BarChart3 size={16} />} label="Proficiência" value="78%" trend="+5" />
        </div>

        <div className="mt-5 space-y-3">
          {[
            { name: "Sec. Meio Ambiente", v: 92 },
            { name: "Sec. Planejamento", v: 76 },
            { name: "Defesa Civil", v: 84 },
            { name: "Sec. Obras", v: 61 },
          ].map((s) => (
            <div key={s.name}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-foreground/80">{s.name}</span>
                <span className="text-muted-foreground">{s.v}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-dark to-primary"
                  style={{ width: `${s.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-lg bg-surface p-3">
          <div>
            <p className="text-xs text-muted-foreground">Evidências enviadas</p>
            <p className="text-base font-medium text-primary-dark">1.284 comprovações</p>
          </div>
          <span className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary-dark">+ 18% mês</span>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  trend,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-3">
      <div className="flex items-center justify-between">
        <span className="text-primary">{icon}</span>
        <span className="text-[10px] text-primary">↑ {trend}</span>
      </div>
      <p className="mt-2 text-lg font-medium text-primary-dark">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

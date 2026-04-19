import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CheckCircle2, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <p className="mb-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary-dark">
            Plataforma SaaS · B2G e B2B
          </p>
          <h1 className="text-3xl leading-[1.15] md:text-4xl lg:text-5xl">
            Capacitação climática aplicada à rotina do setor público
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            A ClimaEdu transforma normas e políticas ambientais em aprendizado prático,
            mensurável e auditável — para equipes que precisam entregar resultados, não só
            concluir cursos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Solicitar demonstração <ArrowRight size={16} />
            </Link>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm text-primary-dark transition-colors hover:bg-surface"
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
    <div className="rounded-xl border border-border bg-background p-5 shadow-[0_8px_30px_rgba(15,110,86,0.08)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Painel institucional</p>
          <p className="text-sm font-medium text-primary-dark">Engajamento por secretaria</p>
        </div>
        <span className="rounded-md bg-accent px-2 py-1 text-xs text-primary-dark">Trim. 3</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Stat icon={<CheckCircle2 size={16} />} label="Conclusão" value="87%" />
        <Stat icon={<TrendingUp size={16} />} label="Adesão" value="92%" />
        <Stat icon={<BarChart3 size={16} />} label="Proficiência" value="78%" />
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
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
              <div className="h-full rounded-full bg-primary" style={{ width: `${s.v}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <div className="flex items-center gap-1.5 text-primary">{icon}</div>
      <p className="mt-2 text-lg font-medium text-primary-dark">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

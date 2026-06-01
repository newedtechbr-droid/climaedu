import { Palette, Route as RouteIcon, Sparkles, BarChart3, History, Accessibility, Shield, Download } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const items = [
  { icon: Palette, title: "White-label", text: "Sua marca, sua identidade institucional.", accent: "olive" as const },
  { icon: RouteIcon, title: "Trilhas por perfil", text: "Conteúdo direcionado por função e contexto.", accent: "olive" as const },
  { icon: Sparkles, title: "IA com curadoria humana", text: "Velocidade da IA, validação técnica especializada.", accent: "olive" as const },
  { icon: BarChart3, title: "Dashboards e relatórios", text: "Adesão, conclusão, proficiência e evidências.", accent: "terra" as const },
  { icon: History, title: "Conteúdo versionado", text: "Atualizações rastreáveis e histórico auditável.", accent: "terra" as const },
  { icon: Accessibility, title: "Acessibilidade", text: "Padrões inclusivos para todas as equipes.", accent: "olive" as const },
  { icon: Shield, title: "LGPD", text: "Tratamento de dados em conformidade.", accent: "terra" as const },
  { icon: Download, title: "Exportação de dados", text: "Relatórios prontos para auditoria e prestação de contas.", accent: "terra" as const },
];

export function RecognitionSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary" style={{ fontSize: "13px" }}>
              Atributos
            </p>
            <h2 className="text-primary-dark" style={{ fontSize: "clamp(26px, 3vw, 36px)", lineHeight: 1.1 }}>
              Pronta para gestão pública e instituições
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const isTerra = it.accent === "terra";
            const color = isTerra ? "var(--color-terracotta)" : "var(--color-olive)";
            return (
              <FadeIn key={it.title} delay={i * 0.04}>
                <div className="relative h-full overflow-hidden rounded-xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm">
                  <span className="absolute inset-x-0 top-0 h-[2px]" style={{ backgroundColor: color }} aria-hidden />
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `color-mix(in oklab, ${color} 16%, transparent)`, color }}
                  >
                    <it.icon size={18} aria-hidden />
                  </span>
                  <h3 className="mt-2.5 text-[15px] font-bold text-primary-dark">{it.title}</h3>
                  <p className="mt-1 text-[14px] leading-snug text-foreground/70">{it.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

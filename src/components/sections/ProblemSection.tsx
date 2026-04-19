import { CloudLightning, FileSearch, UserX, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    icon: CloudLightning,
    title: "Eventos climáticos extremos",
    text: "Enchentes e queimadas exigem protocolos atualizados e equipes preparadas para agir.",
  },
  {
    icon: FileSearch,
    title: "Auditorias e prestação de contas",
    text: "TCE e TCU cobram execução documentada. Evidências inexistentes geram glosas e sanções.",
  },
  {
    icon: UserX,
    title: "Rotatividade pós-eleição",
    text: "Equipes novas precisam de padronização rápida sem depender de consultoria externa.",
  },
  {
    icon: BookOpen,
    title: "Capacitação desconectada da rotina",
    text: "Cursos pontuais não mudam prática. PNRS, compras sustentáveis e licenciamentos continuam travados.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Contexto"
            title="O problema que a gestão pública enfrenta hoje"
            subtitle="Eventos extremos, auditorias mais rigorosas e equipes em constante renovação tornam a capacitação técnica um requisito institucional — não um benefício opcional."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.05}>
              <article className="h-full rounded-xl border border-border bg-background p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-primary-dark">
                  <it.icon size={18} aria-hidden />
                </span>
                <h3 className="mt-4 text-base">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

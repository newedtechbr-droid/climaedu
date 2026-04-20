import { CloudLightning, FileSearch, UserX, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    icon: CloudLightning,
    title: "Eventos climáticos extremos",
    text: "Enchentes e queimadas exigem protocolos atualizados.",
  },
  {
    icon: FileSearch,
    title: "Auditorias e prestação de contas",
    text: "TCE e TCU cobram execução documentada e evidências.",
  },
  {
    icon: UserX,
    title: "Rotatividade pós-eleição",
    text: "Equipes novas precisam de padronização rápida.",
  },
  {
    icon: BookOpen,
    title: "Capacitação desconectada da rotina",
    text: "Cursos pontuais não mudam prática institucional.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/[0.88]" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-24">
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
              <article className="h-full rounded-xl border border-border bg-background/80 p-6 backdrop-blur-sm">
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

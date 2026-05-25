import { CloudLightning, FileSearch, UserX, BookOpen, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    icon: CloudLightning,
    title: "Eventos extremos",
    highlight: "agir rápido",
    text: "Equipes precisam agir rápido diante de enchentes, queimadas e ondas de calor.",
  },
  {
    icon: FileSearch,
    title: "Controles e auditorias",
    highlight: "comprovar capacitação",
    text: "Gestores precisam comprovar capacitação, execução e evidências.",
  },
  {
    icon: UserX,
    title: "Equipes em rotação",
    highlight: "onboarding ambiental",
    text: "A troca de pessoas exige onboarding ambiental contínuo e padronizado.",
  },
  {
    icon: BookOpen,
    title: "Cursos sem aplicação",
    highlight: "transformar conhecimento em rotina",
    text: "O desafio não é só aprender, é transformar conhecimento em rotina.",
  },
];

function HighlightedText({ text, highlight }: { text: string; highlight: string }) {
  const idx = text.indexOf(highlight);
  if (idx < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="font-semibold" style={{ color: "var(--color-olive)" }}>
        {highlight}
      </span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export function ProblemSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <FadeIn>
          <SectionTitle
            eyebrow="Contexto"
            title="O que pressiona a gestão pública hoje"
            align="center"
            subtitle="Quatro pressões reais que a ClimaEdu ajuda a transformar em rotina técnica."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 22%, transparent)" }}
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <it.icon size={24} aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-bold text-primary-dark">{it.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-foreground/80">
                  <HighlightedText text={it.text} highlight={it.highlight} />
                </p>
                <ArrowUpRight
                  size={18}
                  className="absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-60"
                  style={{ color: "var(--color-slate-blue)" }}
                  aria-hidden
                />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

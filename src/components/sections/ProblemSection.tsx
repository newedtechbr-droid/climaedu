import { CloudLightning, FileSearch, UserX, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    icon: CloudLightning,
    title: "Eventos extremos",
    text: "Enchentes, queimadas e ondas de calor exigem equipes preparadas e respostas padronizadas.",
  },
  {
    icon: FileSearch,
    title: "Pressão de auditorias",
    text: "Órgãos de controle e auditorias internas exigem comprovação de capacitação e execução.",
  },
  {
    icon: UserX,
    title: "Rotatividade de equipes",
    text: "A troca constante de pessoas exige onboarding ambiental contínuo e replicável.",
  },
  {
    icon: BookOpen,
    title: "Cursos sem aplicação prática",
    text: "Conteúdo solto não vira rotina. É preciso conectar aprendizagem a checklists e entregas.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Contexto"
            title="A emergência climática mudou a régua da gestão pública"
            align="center"
            subtitle="Antes, bastava responder à crise. Agora, instituições precisam demonstrar preparação contínua — com pessoas capacitadas, rotinas padronizadas e evidências organizadas."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.07}>
              <article
                className="h-full rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 20%, transparent)" }}
              >
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <it.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 text-[18px] font-bold text-primary-dark">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{it.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

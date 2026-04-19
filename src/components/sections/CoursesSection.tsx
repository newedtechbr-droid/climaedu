import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const courses = [
  {
    hours: "30h",
    topics: ["Prevenção", "Protocolos e recuperação", "Educação comunitária"],
    available: true,
  },
  {
    hours: "60h",
    topics: ["Fundamentos", "Governança climática e mitigação", "Ferramentas de SbN"],
    available: true,
  },
  {
    hours: "20h",
    topics: ["Segregação", "PGRS", "Metas e indicadores"],
    available: true,
  },
  {
    hours: "20h",
    topics: ["Ciclo PDCA", "Requisitos da norma", "Auditoria interna"],
    available: true,
  },
  {
    hours: "20h",
    topics: ["AIA", "PRAD", "Medidas de controle"],
    available: true,
  },
  {
    hours: "Em breve",
    topics: ["Bacias transfronteiriças", "Qualidade da água", "Uso sustentável"],
    available: false,
  },
];

export function CoursesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Cursos e trilhas"
            title="Conteúdo técnico pronto para aplicar"
            subtitle="Cursos desenvolvidos por especialistas em gestão ambiental pública, com linguagem acessível e aplicação imediata na rotina institucional."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(15,110,86,0.06)]">
                <p className="text-sm text-muted-foreground">{c.hours}</p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-foreground/80">
                  {c.topics.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
                <span
                  className={`mt-5 inline-flex w-fit rounded-full px-2.5 py-1 text-xs ${
                    c.available
                      ? "bg-accent text-primary-dark"
                      : "bg-surface text-muted-foreground"
                  }`}
                >
                  {c.available ? "Disponível" : "Em breve"}
                </span>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Conteúdo versionado, reutilizável e customizável para a identidade visual do seu órgão.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

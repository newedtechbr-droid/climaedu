import { CloudLightning, FileSearch, UserX, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  { icon: CloudLightning, title: "Eventos extremos", text: "Protocolos atualizados, urgentes." },
  { icon: FileSearch, title: "Auditorias rigorosas", text: "TCE e TCU exigem evidências." },
  { icon: UserX, title: "Equipes em rotação", text: "Padronização rápida pós-eleição." },
  { icon: BookOpen, title: "Cursos sem aplicação", text: "Conteúdo solto não muda prática." },
];

export function ProblemSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1574482620881-90805ec5cdba?w=2000&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <SectionTitle
            eyebrow="Contexto"
            title="O que pressiona a gestão pública hoje"
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-border bg-background p-7 shadow-sm transition-shadow hover:shadow-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary-dark">
                  <it.icon size={24} aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-base text-foreground/75">{it.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

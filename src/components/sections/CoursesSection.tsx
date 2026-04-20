import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import {
  CloudRain,
  Leaf,
  Recycle,
  ClipboardCheck,
  TreePine,
  Droplets,
  Building2,
  ShieldAlert,
} from "lucide-react";

const areas = [
  { icon: CloudRain, label: "Eventos climáticos extremos" },
  { icon: Leaf, label: "ESG e governança climática" },
  { icon: Recycle, label: "Resíduos sólidos (PNRS)" },
  { icon: ClipboardCheck, label: "ISO 14001 e auditoria" },
  { icon: TreePine, label: "Avaliação de impacto ambiental" },
  { icon: Droplets, label: "Recursos hídricos" },
  { icon: Building2, label: "Infraestrutura sustentável" },
  { icon: ShieldAlert, label: "Defesa civil e adaptação" },
];

export function CoursesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <SectionTitle
            eyebrow="Trilhas e áreas"
            title="Conhecimento técnico organizado por área de atuação"
            subtitle="Trilhas curtas, modulares e auditáveis — desenvolvidas com especialistas em gestão ambiental e adaptáveis à realidade de cada órgão."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <FadeIn key={a.label} delay={i * 0.04}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(15,110,86,0.08)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary-dark">
                  <a.icon size={20} />
                </span>
                <h3 className="mt-4 text-base text-foreground">{a.label}</h3>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 flex flex-col items-center gap-5">
            <p className="max-w-2xl text-center text-sm text-muted-foreground">
              Converse com nossa equipe para conhecer o catálogo completo e entender quais trilhas
              se aplicam ao seu contexto.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-lg border-[1.5px] border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Solicitar catálogo completo
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

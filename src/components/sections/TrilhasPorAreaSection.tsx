import { ShieldAlert, ShoppingCart, Trees, GraduationCap, Megaphone, ClipboardCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import heroField from "@/assets/hero-field.jpg";

const areas = [
  {
    icon: ShieldAlert,
    title: "Defesa Civil",
    description: "Prevenção, preparação, resposta e recuperação.",
  },
  {
    icon: ShoppingCart,
    title: "Compras públicas",
    description: "Contratações sustentáveis, emergenciais e seguras.",
  },
  {
    icon: Trees,
    title: "Meio ambiente",
    description: "Licenciamento, resíduos, recursos hídricos e adaptação.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Formação de professores, estudantes e comunidades escolares.",
  },
  {
    icon: Megaphone,
    title: "Comunicação",
    description:
      "Orientação da população antes, durante e depois dos eventos extremos.",
  },
  {
    icon: ClipboardCheck,
    title: "Controle interno e gestão",
    description: "Evidências, relatórios, indicadores e prestação de contas.",
  },
];

export function TrilhasPorAreaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <SectionTitle
              eyebrow="Trilhas por área"
              title="Cada secretaria entende seu papel antes, durante e depois da crise."
              subtitle="A CLIMAEDU organiza capacitação por função, área e responsabilidade, conectando aprendizagem, rotina e evidências para gestão pública."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-[0_24px_60px_-32px_rgba(20,30,40,0.45)]">
              <img
                src={heroField}
                alt="Equipe técnica em ação climática no território"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.04}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <a.icon size={20} />
                </div>
                <h3 className="mt-4 text-[19px] font-semibold text-primary-dark">{a.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.55] text-foreground/80">
                  {a.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

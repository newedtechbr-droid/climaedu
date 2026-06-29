import { ShieldAlert, ShoppingCart, Trees, GraduationCap, Megaphone, ClipboardCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

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
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionTitle
          eyebrow="Trilhas por área"
          title="Cada secretaria tem um papel. Cada equipe tem um gargalo."
          subtitle="A CLIMAEDU estrutura trilhas aplicadas para preencher os gargalos específicos de cada área."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.04}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 14%, white)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <a.icon size={20} />
                </div>
                <h3 className="mt-4 text-[18px] font-semibold text-primary-dark">{a.title}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground/75">
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

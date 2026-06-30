import {
  ShieldAlert,
  ShoppingCart,
  Trees,
  GraduationCap,
  Megaphone,
  ClipboardCheck,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import teamMeeting from "@/assets/team-meeting.jpg";

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
    description: "Orientação da população antes, durante e depois dos eventos extremos.",
  },
  {
    icon: ClipboardCheck,
    title: "Controle interno e gestão",
    description: "Evidências, relatórios, indicadores e prestação de contas.",
  },
];

export function TrilhasPorAreaSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary-dark)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_28px_70px_-34px_rgba(0,0,0,0.75)]">
            <img
              src={teamMeeting}
              alt="Equipe institucional analisando mapas, dados e prioridades territoriais"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="text-white">
            <SectionTitle
              eyebrow="Trilhas por área"
              title="Cada secretaria entende seu papel."
              subtitle="A CLIMAEDU organiza capacitação por função, área e responsabilidade institucional, conectando aprendizagem, rotina e evidência."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {areas.map((a, i) => (
                <FadeIn key={a.title} delay={i * 0.04}>
                  <div className="h-full rounded-xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur">
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--color-olive) 28%, transparent)",
                        color: "#FFFFFF",
                      }}
                    >
                      <a.icon size={19} />
                    </div>

                    <h3 className="mt-4 text-[18px] font-semibold text-white">
                      {a.title}
                    </h3>

                    <p className="mt-1.5 text-[15px] leading-[1.55] text-white/72">
                      {a.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

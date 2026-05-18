import { CloudRain, Waves, Building2, Droplets, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const themes = [
  {
    icon: CloudRain,
    title: "Eventos extremos e defesa civil",
    text: "Preparo para chuvas intensas, alagamentos, ondas de calor e protocolos de resposta.",
  },
  {
    icon: Waves,
    title: "Adaptação e resiliência climática",
    text: "Estratégias territoriais para reduzir vulnerabilidades e fortalecer a infraestrutura pública.",
  },
  {
    icon: Building2,
    title: "Gestão ambiental pública",
    text: "Planos, instrumentos e rotinas técnicas de secretarias e órgãos ambientais.",
  },
  {
    icon: Droplets,
    title: "Resíduos, recursos hídricos e licenciamento",
    text: "Conteúdos especializados nos principais instrumentos da política ambiental brasileira.",
  },
  {
    icon: ShieldCheck,
    title: "ESG, riscos e conformidade ambiental",
    text: "Capacitação para times técnicos que respondem por governança e relatórios de conformidade.",
  },
];

export function ClimateFocusSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <SectionTitle
            eyebrow="Especialização climática"
            title="Educação voltada aos desafios climáticos reais"
            subtitle="Não somos uma EdTech generalista. Cada trilha é desenhada para os temas que mais pressionam a gestão pública e as áreas técnicas das instituições."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.06}>
              <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary-dark">
                    <t.icon size={20} aria-hidden />
                  </span>
                  <span
                    className="h-[2px] flex-1"
                    style={{ backgroundColor: "var(--color-terracotta)", opacity: 0.4 }}
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary-dark">{t.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{t.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

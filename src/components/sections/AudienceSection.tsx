import { Building2, Factory, Network } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const audiences = [
  {
    icon: Building2,
    title: "Órgãos públicos",
    text: "Prefeituras, secretarias, Defesa Civil, escolas de governo e consórcios que precisam preparar equipes e comprovar ações.",
  },
  {
    icon: Factory,
    title: "Empresas",
    text: "Áreas de ESG, sustentabilidade, RH/T&D e SSMA que precisam capacitar colaboradores e gerar evidências por área ou unidade.",
  },
  {
    icon: Network,
    title: "Parceiros institucionais",
    text: "Consultorias, universidades, OSCs e redes que querem operar trilhas climáticas em modelo white-label.",
  },
];

export function AudienceSection() {
  return (
    <section id="para-quem" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Para quem"
            title="Feito para quem precisa capacitar equipes e gerar evidências"
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08}>
              <article
                className="h-full rounded-2xl border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 22%, transparent)" }}
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <a.icon size={24} aria-hidden />
                </span>
                <h3 className="mt-5 text-[20px] font-bold text-primary-dark">{a.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-foreground/80">{a.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import screenHome from "@/assets/screen-home.jpg";
import screenTrack from "@/assets/screen-track.jpg";
import screenDashboard from "@/assets/screen-dashboard.jpg";

const screens = [
  {
    image: screenHome,
    alt: "Tela inicial da plataforma ClimaEdu white-label",
    title: "Tela inicial da plataforma",
    text: "Ambiente white-label com identidade da instituição e visão personalizada por perfil.",
  },
  {
    image: screenTrack,
    alt: "Trilha de aprendizagem com módulos e progresso",
    title: "Trilha de aprendizagem",
    text: "Estrutura modular com progresso, atividades e certificados ao final.",
  },
  {
    image: screenDashboard,
    alt: "Dashboard de evidências com indicadores de adesão e conclusão",
    title: "Dashboard de evidências",
    text: "Acompanhamento de adesão, conclusão e proficiência, exportável para gestão e auditoria.",
  },
];

export function DemoShowcaseSection() {
  return (
    <section id="demonstracao" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Demonstração"
            title="Veja a plataforma em funcionamento"
            subtitle="Veja, em uma demonstração aplicada, como sua instituição pode organizar capacitação, acompanhar resultados e gerar evidências."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {screens.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article
                className="group h-full overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 20%, var(--color-border))" }}
              >
                <div
                  className="aspect-[16/10] overflow-hidden border-b"
                  style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 15%, var(--color-border))" }}
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-[16px] font-bold text-primary-dark">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/70">{s.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/"
              hash="contato"
              className="inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_14px_38px_-10px_rgba(132,154,116,0.65)] ring-1 ring-primary/30 transition-all hover:bg-primary-deep hover:scale-[1.02]"
            >
              Agendar demonstração <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

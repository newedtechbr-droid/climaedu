import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import platformHome from "@/assets/platform-home-real.png";
import platformCourse from "@/assets/platform-course-real.png";
import screenDashboard from "@/assets/dashboard-real.png";

const screens = [
  {
    image: platformHome,
    alt: "Tela inicial real da plataforma CLIMAEDU",
    title: "Tela inicial da plataforma",
    text: "Ambiente white-label com identidade da instituição, busca de cursos, trilhas e podcasts.",
  },
  {
    image: platformCourse,
    alt: "Tela real de curso da plataforma CLIMAEDU com lista de módulos",
    title: "Curso e módulos",
    text: "Aulas em vídeo, questões, fórum e desafios PBL com progresso por unidade.",
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
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <FadeIn>
          <SectionTitle
            eyebrow="Demonstração"
            title="Veja a plataforma em funcionamento"
            subtitle="Veja, em uma demonstração aplicada, como sua instituição pode organizar capacitação, acompanhar resultados e gerar evidências."
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {screens.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article
                className="group h-full overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-md"
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

                <div className="p-6">
                  <h3 className="text-[17px] font-bold text-primary-dark">{s.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.7] text-foreground/75">{s.text}</p>
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

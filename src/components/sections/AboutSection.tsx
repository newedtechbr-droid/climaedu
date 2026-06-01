import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import teamImg from "@/assets/team-meeting.jpg";

const bullets = [
  "Nativos de meio ambiente",
  "Especialistas em aprendizagem aplicada",
  "Tecnologia white-label com dados e relatórios",
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn>
            <img
              src={teamImg}
              alt="Equipe técnica em reunião institucional"
              className="h-[300px] w-full rounded-2xl object-cover shadow-xl md:h-[380px]"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
              Quem somos
            </p>
            <h2 className="text-primary-dark" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1 }}>
              Conhecimento técnico a serviço da gestão climática
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-foreground/80">
              A CLIMAEDU é um produto da NewEdTech voltado à formação de capacidades institucionais
              para ação climática. Combinamos educação, tecnologia, IA e conhecimento ambiental
              para apoiar governos e organizações na transformação de diretrizes em rotinas
              executáveis.
            </p>

            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] text-foreground/85">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, transparent)", color: "var(--color-olive)" }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <Link
              to="/sobre"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-primary-dark transition-colors hover:text-primary"
            >
              Conheça a solução <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

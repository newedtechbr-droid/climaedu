import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000&q=80&auto=format&fit=crop"
            alt="Equipe ClimaEdu em reunião"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl md:h-[520px]"
          />
        </FadeIn>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <FadeIn delay={0.1}>
            <SectionTitle eyebrow="Quem somos" title="Construída de dentro para fora" align="center" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl leading-relaxed text-foreground/85">
              Nascemos da experiência de quem atuou em secretarias, procuradorias e conselhos
              ambientais. Sabemos o que é transformar norma em ação com equipe enxuta e prazo
              apertado.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

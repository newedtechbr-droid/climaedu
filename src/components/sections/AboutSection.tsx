import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-[55fr_45fr]">
          <div>
            <FadeIn>
              <SectionTitle
                eyebrow="Quem somos"
                title="Construída de dentro para fora"
              />
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="mt-6 space-y-5 text-base text-muted-foreground">
                <p>
                  A ClimaEdu não nasceu de um laboratório de inovação. Nasceu da experiência de quem
                  atuou em secretarias de estado, procuradorias e conselhos ambientais — e sabe o
                  que significa transformar uma norma em ação com equipe limitada e prazo apertado.
                </p>
                <p>
                  Nossa equipe tem mestrados e doutorados no Brasil e Europa, mais de 170 publicações
                  técnicas e, principalmente, entende que capacitação sem aplicação prática não muda
                  nada.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Equipe em reunião colaborativa"
              className="h-full max-h-[480px] w-full rounded-xl object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

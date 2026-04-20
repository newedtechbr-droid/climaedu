import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
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
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24 text-center">
        <FadeIn>
          <SectionTitle eyebrow="Quem somos" title="Tecnologia, educação e clima em um só produto" align="center" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-[17px] leading-relaxed text-foreground/80">
            A CLIMAEDU é um produto da{" "}
            <strong className="font-semibold text-primary-dark">NewEdTech</strong>, criado para
            fortalecer capacidades institucionais para ação climática. Combinamos educação,
            tecnologia, IA e conhecimento ambiental para apoiar governos e organizações na
            transformação de diretrizes em rotinas executáveis.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

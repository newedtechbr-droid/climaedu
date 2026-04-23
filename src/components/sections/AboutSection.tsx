import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=2000&q=80&auto=format&fit=crop"
            alt="Paisagem natural com montanhas e floresta representando sustentabilidade e educação climática"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl md:h-[520px]"
          />
        </FadeIn>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <FadeIn delay={0.1}>
            <SectionTitle eyebrow="Quem somos" title="Conhecimento técnico a serviço da gestão climática" align="center" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl leading-relaxed text-foreground/85">
              A ClimaEdu nasceu da vivência prática em secretarias de meio ambiente, conselhos
              ambientais e instituições públicas. Reunimos especialistas em engenharia ambiental,
              direito ambiental e gestão pública — com mestrados, doutorados e mais de 170 trabalhos
              técnicos publicados — para transformar normas complexas em capacitação aplicável,
              com equipes enxutas e prazos reais.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

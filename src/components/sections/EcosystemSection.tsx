import { FadeIn } from "@/components/FadeIn";
import sebraeMidi from "@/assets/partners/sebrae-midi.png";
import inovaContestado from "@/assets/partners/inova-contestado.png";
import i2ec from "@/assets/partners/i2ec.png";
import redeInovacao from "@/assets/partners/rede-inovacao.png";
import viposa from "@/assets/partners/viposa.png";
import cacador from "@/assets/partners/cacador.png";
import fapescSc from "@/assets/partners/fapesc-sc.png";

type Logo = { src?: string; name: string; weight?: "sm" | "md" | "lg" };

const groups: { title: string; logos: Logo[] }[] = [
  {
    title: "Incubação e Ecossistema de Inovação",
    logos: [{ src: sebraeMidi, name: "SebraeHub, Rede Midihub, ACATE e Sebrae Startups", weight: "lg" }],
  },
  {
    title: "Pré-aceleração e Inovação Regional",
    logos: [
      { name: "TXM Methods", weight: "md" },
      { src: inovaContestado, name: "Inova Contestado Lab 3.0", weight: "md" },
      { src: i2ec, name: "I2EC", weight: "md" },
      { src: redeInovacao, name: "Rede Catarinense de Centros de Inovação", weight: "md" },
      { src: viposa, name: "VIPOSA", weight: "sm" },
      { src: cacador, name: "Prefeitura de Caçador", weight: "sm" },
    ],
  },
  {
    title: "Fomento à Inovação",
    logos: [{ src: fapescSc, name: "FAPESC e Governo de Santa Catarina", weight: "lg" }],
  },
];

const sizeClass: Record<NonNullable<Logo["weight"]>, string> = {
  sm: "h-20 md:h-24 max-w-[200px]",
  md: "h-28 md:h-32 max-w-[260px]",
  lg: "h-32 md:h-40 lg:h-44 max-w-[560px]",
};

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary" style={{ fontSize: "13px" }}>
              Ecossistema
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              Conectada ao ecossistema de inovação
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground/70">
              A ClimaEdu participa de iniciativas de incubação, pré-aceleração e desenvolvimento
              tecnológico voltadas à inovação e à ação climática no setor público.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 md:mt-14 space-y-10 md:space-y-12">
          {groups.map((group, gi) => (
            <FadeIn key={group.title} delay={gi * 0.06}>
              <div>
                <div className="flex items-center justify-center gap-4">
                  <span className="hidden sm:block h-px w-10 bg-border" />
                  <h3 className="text-center text-base md:text-lg font-semibold tracking-tight text-foreground/85">
                    {group.title}
                  </h3>
                  <span className="hidden sm:block h-px w-10 bg-border" />
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-14">
                  {group.logos.map((logo) => {
                    const cls = sizeClass[logo.weight ?? "md"];
                    return logo.src ? (
                      <img
                        key={logo.name}
                        src={logo.src}
                        alt={logo.name}
                        className={`${cls} w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100`}
                        loading="lazy"
                      />
                    ) : (
                      <span
                        key={logo.name}
                        className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {logo.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.18}>
          <p className="mx-auto mt-14 md:mt-16 max-w-xl text-center text-base md:text-lg italic text-foreground/65">
            Desenvolvendo soluções para fortalecer a capacidade institucional e acelerar a ação
            climática no setor público.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

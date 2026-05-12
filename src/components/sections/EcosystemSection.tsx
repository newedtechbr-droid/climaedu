import { FadeIn } from "@/components/FadeIn";
import sebraeMidi from "@/assets/partners/sebrae-midi.png";
import inovaContestado from "@/assets/partners/inova-contestado.png";
import i2ec from "@/assets/partners/i2ec.png";
import redeInovacao from "@/assets/partners/rede-inovacao.png";
import viposa from "@/assets/partners/viposa.png";
import cacador from "@/assets/partners/cacador.png";
import fapescSc from "@/assets/partners/fapesc-sc.png";

type Logo = { src?: string; name: string };

const groups: { title: string; logos: Logo[] }[] = [
  {
    title: "Incubação e Ecossistema de Inovação",
    logos: [{ src: sebraeMidi, name: "SebraeHub, Rede Midihub, ACATE e Sebrae Startups" }],
  },
  {
    title: "Pré-aceleração e Inovação Regional",
    logos: [
      { name: "TXM Methods" },
      { src: inovaContestado, name: "Inova Contestado Lab 3.0" },
      { src: i2ec, name: "I2EC" },
      { src: redeInovacao, name: "Rede Catarinense de Centros de Inovação" },
      { src: viposa, name: "VIPOSA" },
      { src: cacador, name: "Prefeitura de Caçador" },
    ],
  },
  {
    title: "Fomento à Inovação",
    logos: [{ src: fapescSc, name: "FAPESC e Governo de Santa Catarina" }],
  },
];

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-primary" style={{ fontSize: "13px" }}>
              Ecossistema
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Conectada ao ecossistema de inovação
            </h2>
            <p className="mt-6 text-lg md:text-xl text-foreground/75">
              A ClimaEdu participa de iniciativas de incubação, pré-aceleração e desenvolvimento
              tecnológico voltadas à inovação e ao fortalecimento da ação climática no setor público.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 space-y-20">
          {groups.map((group, gi) => (
            <FadeIn key={group.title} delay={gi * 0.08}>
              <div>
                <h3 className="text-center text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
                <div className="mx-auto mt-3 h-px w-16 bg-primary/40" />
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-12 md:gap-x-20">
                  {group.logos.map((logo) =>
                    logo.src ? (
                      <img
                        key={logo.name}
                        src={logo.src}
                        alt={logo.name}
                        className="h-24 md:h-28 lg:h-32 w-auto max-w-[280px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <span
                        key={logo.name}
                        className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {logo.name}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-24 max-w-2xl text-center text-lg italic text-foreground/70">
            Desenvolvendo soluções para fortalecer a capacidade institucional e acelerar a ação
            climática no setor público.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

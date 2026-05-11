import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import sebraeMidi from "@/assets/partners/sebrae-midi.png";
import inovaContestado from "@/assets/partners/inova-contestado.png";
import i2ec from "@/assets/partners/i2ec.png";
import redeInovacao from "@/assets/partners/rede-inovacao.png";
import viposa from "@/assets/partners/viposa.png";
import cacador from "@/assets/partners/cacador.png";
import fapescSc from "@/assets/partners/fapesc-sc.png";

type Logo = { src?: string; name: string; height?: string };

const groups: { title: string; logos: Logo[] }[] = [
  {
    title: "Incubação e Ecossistema de Inovação",
    logos: [{ src: sebraeMidi, name: "SebraeHub, Rede Midihub, ACATE e Sebrae Startups", height: "h-20 md:h-24" }],
  },
  {
    title: "Pré-aceleração e Inovação Regional",
    logos: [
      { name: "TXM Methods" },
      { src: inovaContestado, name: "Inova Contestado Lab 3.0", height: "h-16 md:h-20" },
      { src: i2ec, name: "I2EC", height: "h-14 md:h-16" },
      { src: redeInovacao, name: "Rede Catarinense de Centros de Inovação", height: "h-14 md:h-16" },
      { src: viposa, name: "VIPOSA", height: "h-10 md:h-12" },
      { src: cacador, name: "Prefeitura de Caçador", height: "h-14 md:h-16" },
    ],
  },
  {
    title: "Fomento à Inovação",
    logos: [{ src: fapescSc, name: "FAPESC e Governo de Santa Catarina", height: "h-16 md:h-20" }],
  },
];

export function EcosystemSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <SectionTitle
            eyebrow="Ecossistema"
            title="Conectada ao ecossistema de inovação"
            subtitle="A ClimaEdu participa de iniciativas de incubação, pré-aceleração e desenvolvimento tecnológico voltadas à inovação e ao fortalecimento da ação climática no setor público."
            align="center"
          />
        </FadeIn>

        <div className="mt-16 space-y-14">
          {groups.map((group, gi) => (
            <FadeIn key={group.title} delay={gi * 0.08}>
              <div>
                <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  {group.title}
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
                  {group.logos.map((logo) =>
                    logo.src ? (
                      <img
                        key={logo.name}
                        src={logo.src}
                        alt={logo.name}
                        className={`${logo.height ?? "h-14"} w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100`}
                        loading="lazy"
                      />
                    ) : (
                      <span
                        key={logo.name}
                        className="text-lg font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground"
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
          <p className="mx-auto mt-20 max-w-2xl text-center text-base italic text-foreground/70">
            Desenvolvendo soluções para fortalecer a capacidade institucional e acelerar a ação
            climática no setor público.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

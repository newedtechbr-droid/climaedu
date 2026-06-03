import { FadeIn } from "@/components/FadeIn";
import sebraeMidi from "@/assets/partners/sebrae-midi.png";
import inovaContestado from "@/assets/partners/inova-contestado.png";
import i2ec from "@/assets/partners/i2ec.png";
import redeInovacao from "@/assets/partners/rede-inovacao.png";
import viposa from "@/assets/partners/viposa.png";
import cacador from "@/assets/partners/cacador.png";
import fapescSc from "@/assets/partners/fapesc-sc.png";

type Logo = { src?: string; name: string };

const logos: Logo[] = [
  { src: sebraeMidi, name: "SebraeHub / Rede Midihub" },
  { src: inovaContestado, name: "Inova Contestado" },
  { src: i2ec, name: "I2EC" },
  { src: redeInovacao, name: "Rede Catarinense de Centros de Inovação" },
  { src: fapescSc, name: "FAPESC / Governo SC" },
  { src: viposa, name: "VIPOSA" },
  { src: cacador, name: "Prefeitura de Caçador" },
  { name: "TXM Methods" },
];

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="mb-3 inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em]"
              style={{
                backgroundColor: "color-mix(in oklab, var(--color-terracotta) 14%, transparent)",
                color: "var(--color-terracotta)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-terracotta)" }} />
              Ecossistema ativo
            </span>
            <h2 className="text-primary-dark" style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.1 }}>
              Um ecossistema para acelerar a ação climática
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-foreground/75">
              A CLIMAEDU conecta educação, tecnologia, gestão pública e sustentabilidade para
              fortalecer capacidades institucionais.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-4">
            {logos.map((logo) =>
              logo.src ? (
                <div key={logo.name} className="flex h-24 items-center justify-center md:h-28">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-20 w-auto max-w-[240px] object-contain opacity-95 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-[84px]"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div key={logo.name} className="flex h-24 items-center justify-center md:h-28">
                  <span className="text-[20px] font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground">
                    {logo.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] text-foreground/70">
            Desenvolvemos soluções com parceiros para fortalecer instituições e acelerar a resposta
            climática nos territórios.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/FadeIn";
import ecossistemaLogos from "@/assets/partners/ecossistema-logos.png.asset.json";

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
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
          <div className="mt-12">
            <img
              src={ecossistemaLogos.url}
              alt="Parceiros do ecossistema CLIMAEDU: Global Impact Bootcamp, Governo de Santa Catarina, FAPESC, Impact Hub, TXM Methods, SebraeHub, Rede Midihub, Sebrae Startups, ACATE, uGlobally, UK Government, VIPOSA, Rede Catarinense de Centros de Inovação, Prefeitura de Caçador, Inova Contestado e I2EC."
              className="mx-auto h-auto w-full max-w-5xl object-contain"
              loading="lazy"
            />
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

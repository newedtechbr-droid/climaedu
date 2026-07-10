import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import ecossistemaLogosAsset from "@/assets/partners/ecossistema-logos.png.asset.json";

type AssetWithUrl = {
  url?: string;
  src?: string;
  href?: string;
  default?: string;
};

const ecossistemaLogos = ecossistemaLogosAsset as AssetWithUrl;

const ecossistemaLogosUrl =
  ecossistemaLogos.url ??
  ecossistemaLogos.src ??
  ecossistemaLogos.href ??
  ecossistemaLogos.default ??
  "";

const parceiros = [
  "Global Impact Bootcamp",
  "Governo de Santa Catarina",
  "FAPESC",
  "Impact Hub",
  "TXM Methods",
  "SebraeHub",
  "Rede Midihub",
  "Sebrae Startups",
  "ACATE",
  "uGlobally",
  "UK Government",
  "VIPOSA",
  "Rede Catarinense de Centros de Inovação",
  "Prefeitura de Caçador",
  "Inova Contestado",
  "I2EC",
];

export function EcosystemSection() {
  const [logosFailed, setLogosFailed] = useState(!ecossistemaLogosUrl);

  return (
    <section id="ecossistema" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="mb-3 inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em]"
              style={{
                backgroundColor:
                  "color-mix(in oklab, var(--color-terracotta) 14%, transparent)",
                color: "var(--color-terracotta)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-terracotta)" }}
              />
              Ecossistema ativo
            </span>

            <h2
              className="text-primary-dark"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.1 }}
            >
              Um ecossistema para acelerar a ação climática
            </h2>

            <p className="mt-3 text-[16px] leading-relaxed text-foreground/75">
              A CLIMAEDU conecta educação, tecnologia, gestão pública e
              sustentabilidade para fortalecer capacidades institucionais.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12">
            {!logosFailed ? (
              <img
                src={ecossistemaLogosUrl}
                alt="Logos de parceiros do ecossistema CLIMAEDU"
                className="mx-auto h-auto w-full max-w-5xl object-contain"
                loading="lazy"
                onError={() => setLogosFailed(true)}
              />
            ) : (
              <div
                aria-label="Parceiros do ecossistema CLIMAEDU"
                className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 md:grid-cols-4"
              >
                {parceiros.map((parceiro) => (
                  <div
                    key={parceiro}
                    className="flex min-h-[64px] items-center justify-center rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-medium text-foreground/75 shadow-sm"
                  >
                    {parceiro}
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] text-foreground/70">
            Desenvolvemos soluções com parceiros para fortalecer instituições e
            acelerar a resposta climática nos territórios.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

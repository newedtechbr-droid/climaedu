import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { SDGSection } from "@/components/sections/SDGSection";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | CLIMAEDU — Tecnologia, educação e clima em um só produto" },
      {
        name: "description",
        content:
          "Produto da NewEdTech, a CLIMAEDU une educação, tecnologia, IA e conhecimento ambiental para apoiar governos, empresas e redes de ensino.",
      },
      { property: "og:title", content: "Sobre a CLIMAEDU" },
      {
        property: "og:description",
        content:
          "Fortalecer capacidades institucionais para a ação climática — com autoridade técnica e visão de impacto.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a CLIMAEDU"
        title="Tecnologia, educação e clima em um só produto"
        subtitle="A CLIMAEDU é um produto da NewEdTech, criado para fortalecer capacidades institucionais para a ação climática. Combinamos educação, tecnologia, inteligência artificial e conhecimento ambiental para apoiar governos, empresas e redes de ensino na transformação de diretrizes climáticas em rotinas executáveis."
      />

      <AboutSection />
      <EcosystemSection />
      <SDGSection />

      <CTASection
        title="Falar com a CLIMAEDU"
        subtitle="Conte seu contexto. Em 48 horas úteis, retornamos com uma proposta inicial."
        ctaLabel="Falar com a equipe"
      />
    </>
  );
}

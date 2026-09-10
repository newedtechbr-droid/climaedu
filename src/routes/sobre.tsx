import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { SDGSection } from "@/components/sections/SDGSection";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | CLIMAEDU — Educação climática aplicada" },
      {
        name: "description",
        content:
          "A CLIMAEDU é a solução da Newedtech especializada em conhecimentos climáticos e socioambientais. A Newedtech transforma conhecimentos técnicos e complexos em experiências de aprendizagem aplicadas para governos, empresas e redes de ensino.",
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
        title="Educação climática aplicada para instituições que precisam agir"
        subtitle="A CLIMAEDU ajuda governos, empresas de setores regulados e redes de ensino a transformar conhecimento climático em formação, rotinas, registros e evidências de execução."
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

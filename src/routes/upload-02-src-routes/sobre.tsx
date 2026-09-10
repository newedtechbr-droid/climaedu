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
          "NewEdTech é a empresa de tecnologia e inovação educacional responsável pela CLIMAEDU, solução especializada em aprendizagem aplicada para temas climáticos e socioambientais.",
      },
      { property: "og:title", content: "Sobre a CLIMAEDU" },
      {
        property: "og:description",
        content:
          "Conheça a arquitetura NewEdTech e CLIMAEDU: tecnologia educacional aplicada a conhecimentos climáticos e socioambientais.",
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
        title="NewEdTech e CLIMAEDU: tecnologia educacional para conhecimento aplicado"
        subtitle="NewEdTech é a empresa de tecnologia e inovação educacional responsável pela CLIMAEDU. A CLIMAEDU é sua primeira solução especializada, voltada à aprendizagem aplicada em temas climáticos e socioambientais."
      />

      <AboutSection />
      <EcosystemSection />
      <SDGSection />

      <CTASection
        title="Falar com a NewEdTech"
        subtitle="Conte seu contexto. Em 48 horas úteis, retornamos com uma proposta inicial."
        ctaLabel="Agendar uma conversa"
      />
    </>
  );
}

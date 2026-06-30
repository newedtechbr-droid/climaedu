import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TracksSection } from "@/components/sections/TracksSection";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const categorias = [
  "Emergência climática e resiliência",
  "Compras públicas sustentáveis",
  "Mudanças climáticas e ESG",
  "Gestão de resíduos sólidos",
  "Licenciamento ambiental",
  "Recursos hídricos",
  "Saúde e clima",
  "Educação climática",
  "Comunicação de risco",
  "Prevenção e resposta comunitária",
];

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos e trilhas | CLIMAEDU — Capacitação climática aplicada" },
      {
        name: "description",
        content:
          "Cursos, atividades práticas, checklists e certificados organizados por risco, função e necessidade institucional.",
      },
      { property: "og:title", content: "Trilhas climáticas CLIMAEDU" },
      {
        property: "og:description",
        content:
          "10 categorias de trilhas aplicadas para preparar equipes, comunidades e gestão.",
      },
    ],
  }),
  component: Cursos,
});

function Cursos() {
  return (
    <>
      <PageHero
        eyebrow="Cursos e trilhas"
        title="Trilhas climáticas aplicadas para preparar equipes e comunidades"
        subtitle="Cursos, atividades práticas, checklists e certificados organizados por risco, função e necessidade institucional."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-8 md:pt-16 md:pb-10">
          <SectionTitle
            eyebrow="Categorias"
            title="10 áreas estruturantes de capacitação climática"
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c, i) => (
              <FadeIn key={c} delay={i * 0.03}>
                <div
                  className="flex h-full items-center gap-3 rounded-lg border bg-background px-4 py-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 16%, white)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[15.5px] font-medium text-foreground/90">
                    {c}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TracksSection />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <SectionTitle
            eyebrow="Cada curso entrega"
            title="Estrutura padrão de cada trilha"
          />

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Nome do curso",
              "Carga horária",
              "Público indicado",
              "Aplicação prática",
              "Evidência gerada",
              "Certificado",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-card px-4 py-3 text-[15.5px] font-medium text-foreground/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Solicitar catálogo de trilhas"
        subtitle="Enviamos o catálogo completo com cursos, cargas horárias e públicos indicados."
        ctaLabel="Solicitar catálogo"
      />
    </>
  );
}

import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const tracks = [
  "Enchentes e alagamentos",
  "Queimadas",
  "Resíduos sólidos",
  "Licenciamento ambiental",
  "ESG e conformidade",
  "Defesa Civil",
  "Compras públicas sustentáveis",
  "Adaptação e resiliência climática",
];

export function TracksSection() {
  return (
    <section id="trilhas" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Trilhas"
            title="Exemplos de trilhas disponíveis"
            subtitle="Conteúdo técnico organizado por tema, perfil e contexto institucional. Customizável conforme a realidade do seu órgão ou empresa."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {tracks.map((t, i) => (
              <li
                key={t}
                className="rounded-full border bg-background px-5 py-2.5 text-[15px] font-semibold text-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-sm"
                style={{
                  borderColor:
                    i % 4 === 3
                      ? "color-mix(in oklab, var(--color-terracotta) 50%, var(--color-border))"
                      : "color-mix(in oklab, var(--color-olive) 40%, var(--color-border))",
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

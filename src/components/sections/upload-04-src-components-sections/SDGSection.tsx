import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const sdgs = [
  {
    number: 4,
    name: "Educação de Qualidade",
    color: "#C5192D",
    icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg",
    desc: "Aprendizagem aplicada à prática institucional.",
  },
  {
    number: 10,
    name: "Redução das Desigualdades",
    color: "#DD1367",
    icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg",
    desc: "Capacitação acessível a municípios pequenos.",
  },
  {
    number: 12,
    name: "Consumo Responsável",
    color: "#BF8B2E",
    icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg",
    desc: "PNRS, ISO 14001 e compras sustentáveis.",
  },
  {
    number: 13,
    name: "Ação Climática",
    color: "#3F7E44",
    icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg",
    desc: "Núcleo da ClimaEdu: resiliência climática.",
  },
  {
    number: 16,
    name: "Instituições Eficazes",
    color: "#00689D",
    icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg",
    desc: "Auditoria, evidências e transparência.",
  },
  {
    number: 17,
    name: "Parcerias",
    color: "#19486A",
    icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg",
    desc: "White-label e API para gestão em rede.",
  },
];

export function SDGSection() {
  return (
    <section className="border-t border-border" style={{ backgroundColor: "#F5F3EE" }}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <SectionTitle
            eyebrow="Agenda 2030"
            title="Contribuição rastreável aos ODS"
            subtitle="Alinhada aos Objetivos de Desenvolvimento Sustentável da Agenda 2030."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sdgs.map((sdg, i) => (
            <FadeIn key={sdg.number} delay={i * 0.06}>
              <article className="flex h-full items-center gap-4 rounded-xl border border-[#E0DDD8] bg-white p-5 transition-shadow hover:shadow-md">
                <img
                  src={sdg.icon}
                  alt={`ODS ${sdg.number}`}
                  width={72}
                  height={72}
                  className="h-18 w-18 shrink-0 rounded-lg object-cover"
                  style={{ width: 72, height: 72 }}
                />
                <div>
                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: sdg.color }}
                  >
                    ODS {sdg.number}
                  </p>
                  <h3 className="mt-0.5 text-base font-bold leading-tight text-foreground">
                    {sdg.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">{sdg.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

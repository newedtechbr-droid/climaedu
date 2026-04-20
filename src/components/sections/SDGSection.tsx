import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const sdgs = [
  {
    number: 4,
    name: "Educação de Qualidade",
    color: "#C5192D",
    icon: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_PRINT-04.jpg",
    meta: "Meta 4.7",
    metaDesc: "Garantir educação para o desenvolvimento sustentável e cidadania global",
    contribution:
      "Trilhas técnicas aplicadas que transformam conteúdo em prática institucional — aprendizagem orientada a resultados reais, não só certificados",
    badge: null,
  },
  {
    number: 10,
    name: "Redução das Desigualdades",
    color: "#DD1367",
    icon: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_PRINT-10.jpg",
    meta: "Meta 10.2",
    metaDesc: "Promover inclusão social, econômica e política para todos",
    contribution:
      "Capacitação estruturada e acessível para municípios de pequeno e médio porte — democratiza o preparo técnico que antes só grandes capitais tinham acesso",
    badge: null,
  },
  {
    number: 12,
    name: "Consumo e Produção Responsáveis",
    color: "#BF8B2E",
    icon: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_PRINT-12.jpg",
    meta: "Meta 12.6",
    metaDesc:
      "Incentivar empresas a adotar práticas sustentáveis e integrar informações de sustentabilidade",
    contribution:
      "Trilhas de PNRS, compras sustentáveis e ISO 14001 que capacitam equipes a estruturar processos auditáveis e conformes",
    badge: null,
  },
  {
    number: 13,
    name: "Ação Climática",
    color: "#3F7E44",
    icon: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_PRINT-13.jpg",
    meta: "Meta 13.3",
    metaDesc: "Melhorar a capacitação e a conscientização sobre mudanças climáticas",
    contribution:
      "Núcleo da oferta: capacitação técnica aplicada em resiliência climática, eventos extremos e governança ambiental — com evidências rastreáveis para prestação de contas",
    badge: "ODS central da ClimaEdu",
  },
  {
    number: 16,
    name: "Paz, Justiça e Instituições Eficazes",
    color: "#00689D",
    icon: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_PRINT-16.jpg",
    meta: "Meta 16.6",
    metaDesc: "Desenvolver instituições eficazes, responsáveis e transparentes em todos os níveis",
    contribution:
      "Dashboards de auditoria, checklists com evidência e relatórios exportáveis que fortalecem a governança institucional e a transparência na gestão pública",
    badge: null,
  },
  {
    number: 17,
    name: "Parcerias e Meios de Implementação",
    color: "#19486A",
    icon: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_PRINT-17.jpg",
    meta: "Meta 17.17",
    metaDesc: "Estimular parcerias multissetoriais para o desenvolvimento sustentável",
    contribution:
      "Modelo white-label e API aberta permitem que órgãos, empresas e consórcios compartilhem trilhas, dados e evidências — fortalecendo a gestão climática em rede",
    badge: null,
  },
];

export function SDGSection() {
  return (
    <section
      className="border-t"
      style={{
        backgroundColor: "#F5F3EE",
        borderTopColor: "#E0DDD8",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="Agenda 2030 · Objetivos de Desenvolvimento Sustentável"
            title="Cada trilha, uma contribuição rastreável para a Agenda 2030"
            subtitle="A ClimaEdu não apenas capacita equipes — estrutura o preparo institucional necessário para que órgãos e empresas cumpram metas globais com evidências verificáveis."
            align="center"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sdgs.map((sdg, i) => (
            <FadeIn key={sdg.number} delay={i * 0.06}>
              <article className="relative flex h-full flex-col rounded-xl border border-[#E0DDD8] bg-white p-6 transition-shadow hover:shadow-md">
                {sdg.badge && (
                  <span
                    className="absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-medium text-white"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.badge}
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <img
                    src={sdg.icon}
                    alt={`Ícone oficial ODS ${sdg.number}`}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      ODS {sdg.number}
                    </p>
                    <h3 className="text-sm font-medium leading-snug text-foreground">
                      {sdg.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 rounded-md px-3 py-2.5" style={{ backgroundColor: `${sdg.color}12` }}>
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.14em]"
                    style={{ color: sdg.color }}
                  >
                    {sdg.meta}
                  </p>
                  <p className="mt-0.5 text-xs text-foreground/75">{sdg.metaDesc}</p>
                </div>

                <p className="mt-4 flex-1 text-sm text-muted-foreground">{sdg.contribution}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div
            className="mt-14 overflow-hidden rounded-2xl px-8 py-10 text-center md:px-14 md:py-12"
            style={{ backgroundColor: "#0F6E56" }}
          >
            <blockquote
              className="mx-auto max-w-3xl text-lg italic leading-relaxed text-white md:text-xl"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              "A ClimaEdu foi concebida para que cada capacitação gere uma evidência — e cada
              evidência sustente uma decisão pública mais segura, mais rastreável e mais justa."
            </blockquote>
            <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.70)" }}>
              Alinhada às metas da Agenda 2030, ao Acordo de Paris e às diretrizes do Plano
              Nacional de Adaptação Climática (PNA)
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground">
            Os Objetivos de Desenvolvimento Sustentável (ODS) fazem parte da Agenda 2030 da ONU,
            adotada pelo Brasil em 2015. A ClimaEdu contribui ativamente para o cumprimento dessas
            metas no âmbito municipal e empresarial.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

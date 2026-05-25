import { Building2, Factory, Network, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const audiences = [
  {
    icon: Building2,
    tag: "B2G · Foco principal",
    title: "Instituições Públicas",
    description:
      "Para secretarias de meio ambiente, defesa civil, planejamento, educação ambiental e prefeituras.",
    buyer: "Secretarias e prefeituras",
    user: "Equipes técnicas e operacionais",
    useCase:
      "Cumprir PNRS, estruturar plano climático, capacitar equipe antes de auditoria e responder ao MP/TCE.",
  },
  {
    icon: Factory,
    tag: "B2B · Setor privado",
    title: "Empresas",
    description:
      "Para áreas de ESG, sustentabilidade, RH/T&D, saúde, segurança e meio ambiente.",
    buyer: "Diretorias de ESG, RH e SSMA",
    user: "Times técnicos e operacionais",
    useCase:
      "Onboarding ambiental, evidências para auditoria ISO 14001 e capacitação contínua sem depender de consultoria.",
  },
  {
    icon: Network,
    tag: "Canais e Agregadores",
    title: "Parcerias institucionais",
    description:
      "Para consórcios intermunicipais, universidades, escolas de governo, consultorias e OSCs.",
    buyer: "Consórcios, universidades, OSCs",
    user: "Equipes parceiras e municípios atendidos",
    useCase:
      "Distribuir trilhas climáticas em rede, ampliar capilaridade e operar como braço de capacitação dos associados.",
  },
];

export function AudienceSection() {
  return (
    <section id="para-quem" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <FadeIn>
          <SectionTitle
            eyebrow="Para quem"
            title="Três segmentos, uma mesma capacidade institucional"
            subtitle="A ClimaEdu atende quem precisa preparar equipes, comprovar resultados e responder a obrigações ambientais."
            align="center"
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08}>
              <article
                className="group relative flex h-full flex-col rounded-2xl border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 22%, transparent)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--color-olive) 20%, transparent)",
                      color: "var(--color-primary-deep)",
                    }}
                  >
                    <a.icon size={22} aria-hidden />
                  </span>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {a.tag}
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-primary-dark">{a.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-foreground/80">{a.description}</p>

                <dl className="mt-6 space-y-3 border-t pt-5"
                    style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 18%, transparent)" }}>
                  <div>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Quem compra
                    </dt>
                    <dd className="mt-1 text-[15px] text-foreground/85">{a.buyer}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Quem usa
                    </dt>
                    <dd className="mt-1 text-[15px] text-foreground/85">{a.user}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Caso de uso
                    </dt>
                    <dd className="mt-1 text-[15px] text-foreground/85">{a.useCase}</dd>
                  </div>
                </dl>

                <Link
                  to="/para-quem"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep transition-colors hover:text-primary"
                >
                  Ver aplicação <ArrowRight size={14} />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

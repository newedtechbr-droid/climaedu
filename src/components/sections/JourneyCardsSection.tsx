import { Link } from "@tanstack/react-router";
import { Building2, Briefcase, Handshake, ArrowRight, GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

type Journey = {
  icon: typeof Building2;
  title: string;
  description: string;
  to: "/orgaos-publicos" | "/empresas" | "/escolas" | "/sobre";
  cta: string;
};

const journeys: Journey[] = [
  {
    icon: Building2,
    title: "Órgãos públicos",
    description: "Prefeituras, secretarias, Defesa Civil, escolas de governo e consórcios.",
    to: "/orgaos-publicos",
    cta: "Ver solução para órgão público",
  },
  {
    icon: Briefcase,
    title: "Indústria regulada",
    description:
      "Química, papel e celulose, metalurgia, alimentos, agroindústria e couro. ESG, SSMA e compliance ambiental — com um piloto em andamento com a Viposa.",
    to: "/empresas",
    cta: "Ver solução para empresa",
  },
  {
    icon: Handshake,
    title: "Parceiros institucionais",
    description: "Consultorias, universidades, OSCs e redes que desejam operar trilhas climáticas.",
    to: "/sobre",
    cta: "Conhecer ecossistema",
  },
];

export function JourneyCardsSection() {
  return (
    <section id="solucoes" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionTitle
          eyebrow="Soluções por jornada"
          title="Para qual instituição você quer preparar?"
          subtitle="Cada contexto tem gargalos próprios de capacitação, rotina e evidência. A CLIMAEDU se adapta ao seu."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {journeys.map((j, i) => (
            <FadeIn key={j.to} delay={i * 0.05}>
              <Link
                to={j.to}
                className="group flex h-full flex-col rounded-xl border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_18px_40px_-20px_rgba(95,122,79,0.45)] md:p-8"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, white)",
                    color: "var(--color-primary-deep)",
                  }}
                >
                  <j.icon size={22} />
                </div>
                <h3 className="mt-5 text-[24px] font-semibold leading-tight text-primary-dark">
                  {j.title}
                </h3>
                <p className="mt-3 text-[18px] leading-[1.55] text-foreground/82">
                  {j.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-bold text-primary-deep transition-all group-hover:gap-2.5">
                  {j.cta} <ArrowRight size={15} />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-[15px] text-foreground/65">
          <GraduationCap size={16} className="shrink-0 text-foreground/50" />
          Também atendemos escolas e redes de ensino.{" "}
          <Link to="/escolas" className="font-semibold text-primary-deep hover:underline">
            Saiba mais
          </Link>
        </p>
      </div>
    </section>
  );
}

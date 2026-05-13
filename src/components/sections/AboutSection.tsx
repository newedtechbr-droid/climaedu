import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import teamImg from "@/assets/team-meeting.jpg";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <img
            src={teamImg}
            alt="Equipe de especialistas em reunião discutindo políticas ambientais"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl md:h-[520px]"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </FadeIn>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <FadeIn delay={0.1}>
            <SectionTitle eyebrow="Quem somos" title="Conhecimento técnico a serviço da gestão climática" align="center" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl leading-relaxed text-foreground/85">
              Nosso time nasce da prática. Reunimos especialistas com experiência em gestão pública,
              secretarias de meio ambiente, conselhos ambientais e implementação de políticas públicas,
              aliados a profissionais com forte atuação em educação digital e metodologias de ensino online.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

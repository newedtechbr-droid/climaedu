import { FadeIn } from "@/components/FadeIn";

export function ContextSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <FadeIn>
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.22em] text-primary">
            Contexto institucional
          </p>
          <h2
            className="text-primary-dark"
            style={{
              fontSize: "clamp(28px, 3.4vw, 44px)",
              lineHeight: 1.12,
              letterSpacing: "-0.012em",
              fontWeight: 600,
            }}
          >
            Ter planos, normas e especialistas não garante que as pessoas saibam como agir.
          </h2>
          <p className="mt-7 max-w-3xl text-[18px] leading-[1.7] text-foreground/80">
            Isso vale para uma indústria com normas e certificações, ou para um órgão público com
            planos de contingência e uma equipe técnica: o conhecimento existe, mas nem sempre
            chega, em formato aplicável, a quem precisa agir — Defesa Civil, meio ambiente, obras,
            compras, assistência social, educação, comunicação, saúde, controle interno e gestão. A
            CLIMAEDU transforma esse conhecimento técnico em aprendizagem aplicada, para que cada
            pessoa saiba o que fazer e a organização acompanhe essa aprendizagem.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

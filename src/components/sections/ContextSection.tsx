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
            style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.012em", fontWeight: 600 }}
          >
            A emergência climática não é responsabilidade de uma área só.
          </h2>
          <p className="mt-7 max-w-3xl text-[18px] leading-[1.7] text-foreground/80">
            Quando um evento extremo acontece, a resposta depende de muitas áreas ao mesmo tempo:
            Defesa Civil, meio ambiente, obras, compras, assistência social, educação, comunicação,
            saúde, controle interno e gestão. O desafio é garantir que todos compreendam seus papéis,
            saibam agir com segurança e consigam registrar evidências do que foi feito.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

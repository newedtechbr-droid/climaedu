import { Link } from "@tanstack/react-router";
import { ArrowRight, Monitor, BookOpen, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const screens = [
  { icon: Monitor, title: "Tela inicial da plataforma", text: "Ambiente white-label com identidade da instituição e visão personalizada por perfil." },
  { icon: BookOpen, title: "Trilha de aprendizagem", text: "Estrutura modular com progresso, atividades e certificados ao final." },
  { icon: BarChart3, title: "Dashboard de evidências", text: "Acompanhamento de adesão, conclusão e proficiência, exportável para gestão e auditoria." },
];

export function DemoShowcaseSection() {
  return (
    <section id="demonstracao" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Demonstração"
            title="Veja a plataforma em funcionamento"
            subtitle="Veja, em uma demonstração aplicada, como sua instituição pode organizar capacitação, acompanhar resultados e gerar evidências."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {screens.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article
                className="group h-full overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 20%, var(--color-border))" }}
              >
                {/* Mockup placeholder */}
                <div
                  className="relative flex aspect-[16/10] items-center justify-center border-b"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--color-olive) 12%, var(--color-surface)) 0%, color-mix(in oklab, var(--color-slate-blue) 8%, var(--color-surface)) 100%)",
                    borderColor: "color-mix(in oklab, var(--color-slate-blue) 15%, var(--color-border))",
                  }}
                >
                  <div className="absolute inset-3 rounded-lg border border-black/5 bg-white/60 shadow-inner">
                    <div className="flex items-center gap-1.5 border-b border-black/5 px-2.5 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E08977]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E8C679]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9C397]" />
                    </div>
                    <div className="space-y-1.5 p-3">
                      <div className="h-2 w-2/3 rounded bg-black/10" />
                      <div className="h-2 w-5/6 rounded bg-black/5" />
                      <div className="mt-3 grid grid-cols-3 gap-1.5">
                        <div className="h-6 rounded bg-primary/20" />
                        <div className="h-6 rounded bg-black/5" />
                        <div className="h-6 rounded bg-black/5" />
                      </div>
                    </div>
                  </div>
                  <span
                    className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md"
                    style={{ color: "var(--color-primary-deep)" }}
                  >
                    <s.icon size={26} aria-hidden />
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-[16px] font-bold text-primary-dark">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/70">{s.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/"
              hash="contato"
              className="inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_14px_38px_-10px_rgba(132,154,116,0.65)] ring-1 ring-primary/30 transition-all hover:bg-primary-deep hover:scale-[1.02]"
            >
              Agendar demonstração <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

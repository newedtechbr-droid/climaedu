import { Mail, Phone } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <FadeIn>
              <SectionTitle
                eyebrow="Quem somos"
                title="Construída de dentro para fora"
              />
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="mt-6 space-y-5 text-base text-muted-foreground">
                <p>
                  A ClimaEdu não nasceu de um laboratório de inovação. Nasceu da experiência de quem
                  atuou em secretarias de estado, procuradorias e conselhos ambientais — e sabe o
                  que significa transformar uma norma em ação com equipe limitada e prazo apertado.
                </p>
                <p>
                  Nossa equipe tem mestrados e doutorados no Brasil e Europa, mais de 170 publicações
                  técnicas e, principalmente, entende que capacitação sem aplicação prática não muda
                  nada.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-surface p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Contato direto</p>
              <div className="mt-4 flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
                  style={{ backgroundColor: "#1D9E75" }}
                  aria-hidden="true"
                >
                  PF
                </div>
                <div>
                  <p className="text-lg text-primary-dark">Paola Francesca</p>
                  <p className="text-sm text-muted-foreground">Fundadora · ClimaEdu</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href="mailto:contato@newedtech.com.br"
                  className="flex items-center gap-2 text-foreground/90 hover:text-primary-dark"
                >
                  <Mail size={16} className="text-primary" />
                  contato@newedtech.com.br
                </a>
                <a
                  href="tel:+5548991606518"
                  className="flex items-center gap-2 text-foreground/90 hover:text-primary-dark"
                >
                  <Phone size={16} className="text-primary" />
                  (48) 99160-6518
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

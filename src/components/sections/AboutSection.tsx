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
                title="Especialistas que entendem a gestão pública por dentro"
              />
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="mt-6 space-y-5 text-base text-muted-foreground">
                <p>
                  A ClimaEdu nasceu da experiência prática de uma equipe com atuação em engenharia
                  ambiental, direito ambiental e gestão pública — com mestrados e doutorados no
                  Brasil e Europa, e mais de 170 trabalhos técnicos publicados.
                </p>
                <p>
                  Nossa missão é fortalecer a capacidade institucional de órgãos públicos e empresas
                  para enfrentar os desafios climáticos — não apenas com conhecimento, mas com
                  processos, evidências e resultados verificáveis.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-surface p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Contato direto</p>
              <p className="mt-3 text-lg text-primary-dark">Paola Francesca</p>
              <p className="text-sm text-muted-foreground">Fundadora · ClimaEdu</p>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href="mailto:contato@paolafrancesca.com.br"
                  className="flex items-center gap-2 text-foreground/90 hover:text-primary-dark"
                >
                  <Mail size={16} className="text-primary" />
                  contato@paolafrancesca.com.br
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

import { Building2, Factory, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AudienceSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Para quem"
            title="Desenvolvida para quem carrega a responsabilidade institucional"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-xl border border-border bg-background p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary-dark">
                  <Building2 size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">B2G · Foco principal</p>
                  <h3 className="text-lg">Órgãos Públicos</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                <li>• Secretarias de Meio Ambiente</li>
                <li>• Secretarias de Planejamento e Defesa Civil</li>
                <li>• Prefeituras de pequeno, médio e grande porte</li>
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                <strong className="font-medium text-foreground">Caso de uso:</strong> cumprir PNRS,
                estruturar plano climático municipal, capacitar equipe antes de auditoria, responder
                a exigências do MP ou TCE.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong className="font-medium text-foreground">Contratação:</strong> por dispensa
                de licitação (projetos piloto), pregão eletrônico ou ata de registro de preços
                (Lei nº 14.133/2021).
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs text-primary-dark">
                <ShieldCheck size={14} aria-hidden /> Compatível com licitação pública
              </span>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="h-full rounded-xl border border-border bg-background p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary-dark">
                  <Factory size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-institutional">B2B</p>
                  <h3 className="text-lg">Empresas</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                <li>• Times de SSMA, Sustentabilidade, RH e T&D</li>
                <li>• Empresas com obrigações ESG, ISO 14001 ou relatórios de conformidade ambiental</li>
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                <strong className="font-medium text-foreground">Caso de uso:</strong> onboarding
                ambiental estruturado, evidências para auditorias externas, capacitação contínua sem
                depender de consultoria.
              </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

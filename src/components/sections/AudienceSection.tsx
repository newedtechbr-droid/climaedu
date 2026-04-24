import { Building2, Factory, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AudienceSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <SectionTitle
            eyebrow="Para quem"
            title="Desenvolvida para quem carrega a responsabilidade institucional"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="relative isolate h-full overflow-hidden rounded-xl border border-border p-7 text-white">
              <div className="absolute inset-0 -z-10">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(29, 158, 117, 0.95)" }}
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white">
                  <Building2 size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/95">
                    B2G · Foco principal
                  </p>
                  <h3 className="text-xl font-bold text-white">Instituições Públicas</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-white/90">
                <li>• Secretarias de Meio Ambiente</li>
                <li>• Secretarias de Planejamento e Defesa Civil</li>
                <li>• Prefeituras de pequeno, médio e grande porte</li>
              </ul>
              <p className="mt-5 text-[15px] leading-relaxed text-white/85">
                <strong className="font-semibold text-white">Caso de uso:</strong> cumprir PNRS,
                estruturar plano climático municipal, capacitar equipe antes de auditoria, responder
                a exigências do MP ou TCE.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                <strong className="font-semibold text-white">Contratação:</strong> por dispensa
                de licitação (projetos piloto), pregão eletrônico ou ata de registro de preços
                (Lei nº 14.133/2021).
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                <ShieldCheck size={14} aria-hidden /> Compatível com licitação pública
              </span>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="h-full rounded-xl border-2 border-border bg-background p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary-dark">
                  <Factory size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-institutional text-slate-800">B2B · Empresas</p>
                  <h3 className="text-xl font-bold">Setor Privado</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-foreground/80">
                <li>• Times de SSMA, Sustentabilidade, RH e T&D</li>
                <li>• Empresas com obrigações ESG, ISO 14001 ou relatórios de conformidade ambiental</li>
              </ul>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">Caso de uso:</strong> onboarding
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

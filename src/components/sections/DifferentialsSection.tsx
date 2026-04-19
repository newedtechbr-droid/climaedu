import { Check, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const rows = [
  "Trilhas por perfil funcional",
  "Dashboard de evidências para auditoria",
  "White-label com identidade do órgão",
  "Integração à rotina (não só conteúdo)",
  "IA para produção de conteúdo customizado",
  "Suporte comercial e implantação",
];

export function DifferentialsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <SectionTitle
            eyebrow="Diferenciais"
            title="O que diferencia a ClimaEdu das alternativas existentes"
            subtitle="Plataformas gratuitas do governo entregam conteúdo. A ClimaEdu entrega capacidade institucional — com execução, evidência e continuidade."
          />
        </FadeIn>

        <FadeIn>
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background text-left">
                  <th className="px-5 py-4 font-medium text-foreground">Recurso</th>
                  <th className="px-5 py-4 text-center font-medium text-primary-dark">ClimaEdu</th>
                  <th className="px-5 py-4 text-center font-medium text-muted-foreground">
                    Plataformas gratuitas
                    <span className="block text-xs font-normal">(Educamb / EV.G)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r} className={i !== rows.length - 1 ? "border-b border-border" : ""}>
                    <td className="px-5 py-4 text-foreground/90">{r}</td>
                    <td className="px-5 py-4 text-center">
                      <Check size={18} className="mx-auto text-primary" aria-label="Sim" />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <X size={18} className="mx-auto text-muted-foreground" aria-label="Não" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
            A ClimaEdu não compete com plataformas gratuitas em preço — compete no resultado. Cada
            real investido se justifica na redução de retrabalho, na aprovação de projetos e na
            segurança em processos de auditoria.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

import { Check, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const rows = [
  "Trilhas por perfil funcional",
  "Dashboard de evidências para auditoria",
  "White-label com identidade do órgão",
  "Integração à rotina (não só conteúdo)",
  "IA para conteúdo customizado",
  "Suporte e implantação dedicados",
];

export function DifferentialsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <SectionTitle
            eyebrow="Diferenciais"
            title="ClimaEdu vs. alternativas"
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="px-6 py-5 text-base font-semibold md:text-lg">Recurso</th>
                  <th className="px-6 py-5 text-center text-base font-semibold md:text-lg">ClimaEdu</th>
                  <th className="px-6 py-5 text-center text-base font-semibold text-white/80 md:text-lg">
                    Outras
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r} className={i % 2 === 0 ? "bg-background" : "bg-surface/60"}>
                    <td className="px-6 py-5 text-base font-medium text-foreground md:text-lg">{r}</td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                        <Check size={22} className="text-primary" aria-label="Sim" />
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                        <X size={22} className="text-muted-foreground" aria-label="Não" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

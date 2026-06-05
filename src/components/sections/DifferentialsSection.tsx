import { Check, Minus } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

type Mark = "yes" | "partial" | "no";

const columns = ["CLIMAEDU", "Cursos avulsos", "LMS genéricos"] as const;

const rows: { label: string; values: [Mark, Mark, Mark] }[] = [
  { label: "Conteúdo climático especializado", values: ["yes", "partial", "no"] },
  { label: "Trilhas por perfil e contexto", values: ["yes", "no", "partial"] },
  { label: "Certificados e relatórios", values: ["yes", "partial", "yes"] },
  { label: "Dashboards de evidências", values: ["yes", "no", "partial"] },
  { label: "White-label institucional", values: ["yes", "no", "partial"] },
  { label: "IA com curadoria humana", values: ["yes", "no", "no"] },
  { label: "Aplicação prática com checklists e atividades", values: ["yes", "no", "no"] },
];

function MarkIcon({ m }: { m: Mark }) {
  if (m === "yes")
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full"
        style={{ backgroundColor: "color-mix(in oklab, var(--color-olive) 22%, transparent)", color: "var(--color-primary-deep)" }}
        aria-label="Sim"
      >
        <Check size={16} strokeWidth={3} />
      </span>
    );
  if (m === "partial")
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full"
        style={{ backgroundColor: "color-mix(in oklab, var(--color-terracotta) 18%, transparent)", color: "var(--color-terracotta)" }}
        aria-label="Parcial"
      >
        <Minus size={16} strokeWidth={3} />
      </span>
    );
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-foreground/40"
      aria-label="Não"
    >
      —
    </span>
  );
}

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <FadeIn>
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que CLIMAEDU em vez de cursos avulsos ou LMS genéricos"
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 overflow-x-auto">
            <table
              className="w-full min-w-[680px] overflow-hidden rounded-xl border bg-background text-left"
              style={{ borderColor: "var(--color-border)" }}
            >
              <thead>
                <tr style={{ backgroundColor: "color-mix(in oklab, var(--color-olive) 12%, transparent)" }}>
                  <th className="px-5 py-4 text-[14px] font-bold text-primary-dark">Recursos</th>
                  {columns.map((c, i) => (
                    <th
                      key={c}
                      className="px-5 py-4 text-center text-[14px] font-bold"
                      style={{ color: i === 0 ? "var(--color-primary-deep)" : "var(--color-foreground)" }}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? "bg-background" : "bg-surface/50"}>
                    <td className="px-5 py-4 text-[15px] font-medium text-foreground/85">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-5 py-4 text-center">
                        <MarkIcon m={v} />
                      </td>
                    ))}
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

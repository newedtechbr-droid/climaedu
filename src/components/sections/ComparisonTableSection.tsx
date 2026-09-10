import { Check, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

type Row = { feature: string; values: [boolean, boolean, boolean, boolean] };

const cols = ["CLIMAEDU", "Cursos avulsos", "LMS genéricos", "Consultorias"];

const rows: Row[] = [
  { feature: "Conteúdo climático especializado", values: [true, true, false, true] },
  { feature: "Trilhas por perfil e contexto", values: [true, false, false, true] },
  { feature: "Plataforma com identidade institucional", values: [true, false, true, false] },
  { feature: "Certificados", values: [true, true, true, false] },
  { feature: "Dashboards", values: [true, false, true, false] },
  { feature: "Relatórios auditáveis", values: [true, false, false, true] },
  { feature: "Aplicação prática", values: [true, false, false, true] },
  { feature: "IA com revisão humana", values: [true, false, false, false] },
  { feature: "Atualização contínua", values: [true, false, false, false] },
  { feature: "Foco em prevenção e governança climática", values: [true, false, false, true] },
];

export function ComparisonTableSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_50px_-30px_rgba(20,30,40,0.3)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr>
                    <th
                      className="px-5 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/60"
                      style={{ borderBottom: "1px solid var(--color-border)" }}
                    >
                      Recurso
                    </th>

                    {cols.map((c, i) => (
                      <th
                        key={c}
                        className="px-5 py-4 text-center text-[14px] font-bold"
                        style={{
                          borderBottom: "1px solid var(--color-border)",
                          color: i === 0 ? "var(--color-primary-deep)" : "var(--color-foreground)",
                          backgroundColor:
                            i === 0
                              ? "color-mix(in oklab, var(--color-olive) 10%, white)"
                              : "transparent",
                        }}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((r, ri) => (
                    <tr key={r.feature} className={ri % 2 === 0 ? "bg-background/40" : ""}>
                      <td
                        className="px-5 py-3.5 text-[15px] font-medium text-foreground/85"
                        style={{ borderBottom: "1px solid var(--color-border)" }}
                      >
                        {r.feature}
                      </td>

                      {r.values.map((v, ci) => (
                        <td
                          key={ci}
                          className="px-5 py-3.5 text-center"
                          style={{
                            borderBottom: "1px solid var(--color-border)",
                            backgroundColor:
                              ci === 0
                                ? "color-mix(in oklab, var(--color-olive) 6%, white)"
                                : "transparent",
                          }}
                        >
                          {v ? (
                            <Check
                              size={20}
                              className="mx-auto"
                              style={{
                                color:
                                  ci === 0 ? "var(--color-primary-deep)" : "var(--color-olive)",
                              }}
                              strokeWidth={2.5}
                            />
                          ) : (
                            <X size={18} className="mx-auto text-foreground/30" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

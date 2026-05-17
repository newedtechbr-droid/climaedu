import { Check, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const rows = [
  { text: "Trilhas por perfil funcional", bold: ["Trilhas", "perfil funcional"] },
  { text: "Dashboard de evidências para auditoria", bold: ["Dashboard de evidências", "auditoria"] },
  { text: "White-label com identidade da instituição", bold: ["White-label", "identidade da instituição"] },
  { text: "Integração à rotina (não só conteúdo)", bold: ["Integração à rotina"] },
  { text: "Conteúdo gerado com supervisão técnica humana", bold: ["supervisão técnica humana"] },
  { text: "Suporte e implantação dedicados", bold: ["Suporte", "implantação dedicados"] },
];

function BoldText({ text, bold }: { text: string; bold: string[] }) {
  let result = text;
  const parts: (string | { bold: string })[] = [];
  let remaining = text;

  for (const b of bold) {
    const idx = remaining.indexOf(b);
    if (idx >= 0) {
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push({ bold: b });
      remaining = remaining.slice(idx + b.length);
    }
  }
  if (remaining) parts.push(remaining);

  return (
    <span>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <strong key={i} className="font-bold">{p.bold}</strong>
        )
      )}
    </span>
  );
}

export function DifferentialsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <FadeIn>
          <SectionTitle
            eyebrow="Diferenciais"
            title="ClimaEdu vs. alternativas"
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="px-5 py-3.5 text-base font-semibold md:text-lg">Recurso</th>
                  <th className="px-5 py-3.5 text-center text-base font-semibold md:text-lg">ClimaEdu</th>
                  <th className="px-5 py-3.5 text-center text-base font-semibold text-white/80 md:text-lg">
                    Outras
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.text} className={i % 2 === 0 ? "bg-background" : "bg-surface/60"}>
                    <td className="px-5 py-3.5 text-base font-medium text-foreground md:text-[17px]">
                      <BoldText text={r.text} bold={r.bold} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(132,154,116,0.18)" }}>
                        <Check size={18} style={{ color: "var(--color-olive)" }} aria-label="Sim" />
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                        <X size={18} className="text-muted-foreground" aria-label="Não" />
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

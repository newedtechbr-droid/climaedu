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
                  <th className="px-6 py-5 text-lg font-semibold md:text-xl">Recurso</th>
                  <th className="px-6 py-5 text-center text-lg font-semibold md:text-xl">ClimaEdu</th>
                  <th className="px-6 py-5 text-center text-lg font-semibold text-white/80 md:text-xl">
                    Outras
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.text} className={i % 2 === 0 ? "bg-background" : "bg-surface/60"}>
                    <td className="px-6 py-5 text-lg font-medium text-foreground md:text-xl">
                      <BoldText text={r.text} bold={r.bold} />
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                        <Check size={24} className="text-primary" aria-label="Sim" />
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <X size={24} className="text-muted-foreground" aria-label="Não" />
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

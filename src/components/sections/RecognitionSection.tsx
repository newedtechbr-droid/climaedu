import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const attributes = [
  "Rastreável",
  "Confiável",
  "Estruturante",
  "Integrador",
  "Baseado em evidência",
  "Facilitador",
  "Governável",
  "Resiliente",
  "Autônomo",
  "Auditável",
  "Didático",
  "Adaptativo",
  "Institucional",
  "Escalável",
  "Validável",
];

export function RecognitionSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary" style={{ fontSize: "13px" }}>
              Atributos
            </p>
            <h2 className="text-primary-dark">Como nos reconhecem</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            {attributes.map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary-dark"
              >
                <Check size={14} className="text-primary" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

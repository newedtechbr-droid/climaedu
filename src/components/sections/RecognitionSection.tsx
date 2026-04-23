import { FadeIn } from "@/components/FadeIn";

const large = ["Rastreável", "Confiável", "Estruturante", "Integrador"];
const medium = [
  "Baseado em evidência",
  "Facilitador",
  "Governável",
  "Resiliente",
  "Autônomo",
];
const small = [
  "Didático",
  "Persistente",
  "Adaptativo",
  "Institucional",
  "Escalável",
  "Validável",
];

export function RecognitionSection() {
  return (
    <section className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="text-center text-primary-dark">
            Como nos reconhecem
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="mt-10 flex flex-wrap items-center justify-center text-primary-dark"
            style={{ gap: "18px 32px", fontFamily: "var(--font-sans)" }}
          >
            {large.map((w) => (
              <span key={w} className="text-3xl md:text-4xl font-bold opacity-100">
                {w}
              </span>
            ))}
            {medium.map((w) => (
              <span key={w} className="text-xl md:text-2xl font-semibold opacity-75">
                {w}
              </span>
            ))}
            {small.map((w) => (
              <span key={w} className="text-lg md:text-xl font-medium opacity-50">
                {w}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

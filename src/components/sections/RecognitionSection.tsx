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

const PRIMARY = "#1D9E75";

export function RecognitionSection() {
  return (
    <section style={{ backgroundColor: "#F5F3EE", paddingTop: 128, paddingBottom: 128 }}>
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="text-center" style={{ color: PRIMARY }}>
            Como nos reconhecem
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="mt-10 flex flex-wrap items-center justify-center"
            style={{ gap: "14px 28px", fontFamily: "Inter, sans-serif", color: PRIMARY }}
          >
            {large.map((w) => (
              <span key={w} style={{ fontSize: 22, opacity: 1, marginRight: 6 }}>
                {w}
              </span>
            ))}
            {medium.map((w) => (
              <span key={w} style={{ fontSize: 16, opacity: 0.75, marginRight: 4 }}>
                {w}
              </span>
            ))}
            {small.map((w) => (
              <span key={w} style={{ fontSize: 13, opacity: 0.5 }}>
                {w}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

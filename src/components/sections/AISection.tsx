import { Sparkles, Wand2, FileText, Layers, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const features = [
  {
    icon: Wand2,
    title: "Geração assistida",
    text: "Roteiros, quizzes, resumos, apostilas e materiais de apoio a partir de normas e documentos institucionais.",
  },
  {
    icon: Layers,
    title: "Customização por contexto",
    text: "Conteúdos adaptados à realidade do município, secretaria, empresa ou unidade.",
  },
  {
    icon: FileText,
    title: "Curadoria e versionamento",
    text: "Revisão técnica, histórico de alterações e rastreabilidade para auditoria.",
  },
];

export function AISection() {
  return (
    <section
      id="inteligencia-artificial"
      className="relative isolate overflow-hidden text-white scroll-mt-24"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      {/* respiro: textura suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-olive) 0, transparent 45%), radial-gradient(circle at 80% 80%, var(--color-slate-blue) 0, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <Sparkles size={14} className="text-primary" />
              Diferencial ClimaEdu
            </span>
            <h2 className="mt-6 text-white" style={{ fontSize: "clamp(34px, 4.2vw, 52px)" }}>
              IA para transformar{" "}
              <span className="text-primary">documentos em aprendizagem aplicada</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
              A ClimaEdu usa IA para apoiar a produção de conteúdos customizados a partir de normas,
              planos, protocolos e documentos institucionais — sempre com curadoria técnica humana.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/[0.09]">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-olive) 35%, transparent)",
                    color: "#F3F1EC",
                  }}
                >
                  <f.icon size={22} />
                </span>
                <h3 className="mt-6 text-xl text-white">{f.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-white/80">{f.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div
            className="mx-auto mt-14 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm text-white/90 backdrop-blur"
            style={{ display: "flex", width: "fit-content" }}
          >
            <ShieldCheck size={16} className="text-primary" />
            Todo conteúdo gerado por IA passa por supervisão técnica humana
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

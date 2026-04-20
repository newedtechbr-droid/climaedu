import { Sparkles, Wand2, FileText, Layers, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const features = [
  {
    icon: Wand2,
    title: "Geração assistida por IA",
    text: "Produza módulos, quizzes e materiais de apoio a partir de normativas, planos diretores e documentos do próprio órgão.",
  },
  {
    icon: Layers,
    title: "Customização por contexto",
    text: "A IA adapta linguagem, exemplos e estudos de caso à realidade do município, secretaria ou empresa.",
  },
  {
    icon: FileText,
    title: "Versionamento e curadoria",
    text: "Todo conteúdo gerado passa por revisão técnica, fica versionado e rastreável — pronto para auditoria.",
  },
];

export function AISection() {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ backgroundColor: "#1A2A3A" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/85 backdrop-blur">
              <Sparkles size={14} className="text-primary" />
              Diferencial ClimaEdu
            </span>
            <h2 className="mt-5 text-3xl text-white md:text-4xl">
              Inteligência artificial para{" "}
              <span className="text-primary">produção de conteúdo customizado</span>
            </h2>
            <p className="mt-5 text-base text-white/75">
              Não entregamos só uma plataforma — entregamos um motor que transforma normas, planos e
              documentos institucionais em trilhas de aprendizagem aplicáveis, no ritmo do seu órgão.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:bg-white/[0.07]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <f.icon size={20} />
                </span>
                <h3 className="mt-5 text-lg text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-2 text-xs text-white/60">
            <ShieldCheck size={14} className="text-primary" />
            Conteúdo gerado com supervisão técnica humana e trilha de auditoria completa
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  CloudRain,
  Flame,
  Trash2,
  FileSignature,
  LineChart,
  Siren,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

type Challenge = {
  key: string;
  icon: typeof CloudRain;
  label: string;
  trailTitle: string;
  trailDescription: string;
  modules: string[];
};

const challenges: Challenge[] = [
  {
    key: "enchentes",
    icon: CloudRain,
    label: "Enchentes",
    trailTitle: "Resposta a chuvas extremas e alagamentos urbanos",
    trailDescription:
      "Trilha para defesa civil, planejamento urbano e secretarias técnicas atuarem antes, durante e depois do evento.",
    modules: [
      "Mapeamento de áreas de risco e vulnerabilidade",
      "Protocolos de alerta e acionamento de equipes",
      "Plano de ação intersetorial e prestação de contas",
    ],
  },
  {
    key: "queimadas",
    icon: Flame,
    label: "Queimadas",
    trailTitle: "Prevenção e gestão de incêndios florestais e urbanos",
    trailDescription:
      "Trilha voltada a brigadas, gestão ambiental e órgãos de fiscalização para reduzir riscos e acelerar resposta.",
    modules: [
      "Indicadores climáticos e janelas de risco",
      "Articulação com brigadas municipais e estaduais",
      "Evidências de capacitação e prontidão",
    ],
  },
  {
    key: "residuos",
    icon: Trash2,
    label: "Resíduos",
    trailTitle: "Implementação da PNRS no município",
    trailDescription:
      "Trilha para secretarias e equipes técnicas estruturarem coleta, destinação e indicadores conforme a Política Nacional.",
    modules: [
      "Diagnóstico e Plano Municipal de Resíduos",
      "Coleta seletiva, logística reversa e cooperativas",
      "Relatórios de conformidade e auditoria",
    ],
  },
  {
    key: "licenciamento",
    icon: FileSignature,
    label: "Licenciamento",
    trailTitle: "Licenciamento ambiental aplicado ao dia a dia",
    trailDescription:
      "Trilha técnica para analistas e gestores conduzirem processos com segurança jurídica e clareza de prazos.",
    modules: [
      "Tipos de licença e instrumentos legais",
      "Análise técnica e parecer fundamentado",
      "Acompanhamento, condicionantes e fiscalização",
    ],
  },
  {
    key: "esg",
    icon: LineChart,
    label: "ESG",
    trailTitle: "ESG aplicado ao setor público e empresarial",
    trailDescription:
      "Trilha para times de sustentabilidade e governança traduzirem ESG em rotinas, indicadores e relatórios.",
    modules: [
      "Materialidade e indicadores prioritários",
      "Coleta de dados e governança de evidências",
      "Relatórios de sustentabilidade auditáveis",
    ],
  },
  {
    key: "defesa-civil",
    icon: Siren,
    label: "Defesa Civil",
    trailTitle: "Capacitação contínua para Defesa Civil municipal",
    trailDescription:
      "Trilha para equipes de defesa civil padronizarem rotinas, protocolos e atendimento a eventos extremos.",
    modules: [
      "Mapa de riscos e protocolos de resposta",
      "Comunicação de risco e mobilização comunitária",
      "Indicadores de prontidão e relatórios pós-evento",
    ],
  },
];

export function ChallengeSection() {
  const [active, setActive] = useState<Challenge>(challenges[0]);

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <FadeIn>
          <SectionTitle
            eyebrow="Escolha seu desafio"
            title="Veja uma trilha sugerida para o desafio climático da sua equipe"
            subtitle="Selecione um tema e visualize um exemplo de trilha aplicável ao seu contexto."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {challenges.map((c) => {
              const isActive = c.key === active.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActive(c)}
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-semibold transition-all"
                  style={{
                    backgroundColor: isActive ? "var(--color-olive)" : "var(--color-background)",
                    color: isActive ? "var(--color-primary-foreground)" : "var(--color-primary-dark)",
                    borderColor: isActive
                      ? "var(--color-olive)"
                      : "color-mix(in oklab, var(--color-slate-blue) 25%, transparent)",
                    boxShadow: isActive
                      ? "0 10px 24px -10px rgba(132,154,116,0.55)"
                      : "none",
                  }}
                >
                  <c.icon size={16} />
                  {c.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="mt-10 grid gap-8 rounded-3xl border bg-background p-8 shadow-sm md:grid-cols-[1.1fr_1fr] md:p-10"
            style={{ borderColor: "color-mix(in oklab, var(--color-slate-blue) 22%, transparent)" }}
          >
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.18em]"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--color-olive) 18%, transparent)",
                  color: "var(--color-primary-deep)",
                }}
              >
                <Sparkles size={12} /> Trilha sugerida
              </span>
              <h3 className="mt-4 text-2xl font-bold text-primary-dark md:text-3xl">
                {active.trailTitle}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
                {active.trailDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_rgba(132,154,116,0.6)] ring-1 ring-primary/30 transition-all hover:bg-primary-deep"
                >
                  Ver trilha exemplo <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-base font-semibold text-primary-dark transition-colors hover:bg-surface"
                  style={{ borderColor: "var(--color-slate-blue)" }}
                >
                  Baixar kit de contratação
                </Link>
              </div>
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: "color-mix(in oklab, var(--color-slate-blue) 18%, transparent)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Módulos da trilha
              </p>
              <ol className="mt-5 space-y-4">
                {active.modules.map((m, i) => (
                  <li key={m} className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--color-olive) 22%, transparent)",
                        color: "var(--color-primary-deep)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-[16px] leading-relaxed text-foreground/85">{m}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

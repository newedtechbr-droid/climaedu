import { GraduationCap, Wrench, BarChart3, FileCheck2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";


const steps = [
  {
    icon: GraduationCap,
    label: "Aprender",
    title: "Cursos aplicados ao contexto",
    text: "Conteúdo técnico organizado por perfil, com avaliações e materiais práticos.",
  },
  {
    icon: Wrench,
    label: "Aplicar",
    title: "Da teoria à rotina institucional",
    text: "Checklists, atividades e referências que conectam o conteúdo ao dia a dia das equipes.",
  },
  {
    icon: BarChart3,
    label: "Medir",
    title: "Adesão, conclusão e proficiência",
    text: "Dashboards acompanham o avanço por unidade, perfil ou turma em tempo real.",
  },
  {
    icon: FileCheck2,
    label: "Evidenciar",
    title: "Registros para gestão e auditoria",
    text: "Certificados e relatórios exportáveis para prestação de contas e controle interno.",
  },
];

export function SolutionSection() {
  return (
    <section id="como-funciona" className="relative overflow-hidden scroll-mt-24" style={{ backgroundColor: "var(--color-primary-dark)" }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-terracotta) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-olive) 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.22em]"
              style={{
                backgroundColor: "color-mix(in oklab, var(--color-terracotta) 22%, transparent)",
                color: "#fff",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-terracotta)" }} />
              O método ClimaEdu
            </span>
            <h2 className="text-white" style={{ fontSize: "clamp(32px, 4.2vw, 54px)", lineHeight: 1.05, fontWeight: 700 }}>
              Aprender <span style={{ color: "var(--color-terracotta)" }}>→</span> Aplicar <span style={{ color: "var(--color-terracotta)" }}>→</span> Medir <span style={{ color: "var(--color-terracotta)" }}>→</span> Evidenciar
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/75">
              A CLIMAEDU transforma conteúdo climático em aprendizagem aplicada,
              acompanhamento institucional e registros úteis para a gestão.
            </p>
          </div>
        </FadeIn>


        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <li
                className="relative h-full rounded-2xl border bg-white p-7 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1"
                style={{ borderColor: "color-mix(in oklab, var(--color-olive) 30%, transparent)" }}
              >
                <span
                  className="absolute -top-4 left-7 inline-flex h-10 items-center justify-center rounded-full px-3 text-[13px] font-bold text-white shadow-md"
                  style={{ backgroundColor: i === 3 ? "var(--color-terracotta)" : "var(--color-olive)" }}
                >
                  Etapa {i + 1}
                </span>
                <span
                  className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor:
                      i === 3
                        ? "color-mix(in oklab, var(--color-terracotta) 18%, transparent)"
                        : "color-mix(in oklab, var(--color-olive) 20%, transparent)",
                    color: i === 3 ? "var(--color-terracotta)" : "var(--color-primary-deep)",
                  }}
                >
                  <s.icon size={28} aria-hidden />
                </span>
                <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.22em]" style={{ color: i === 3 ? "var(--color-terracotta)" : "var(--color-primary-deep)" }}>
                  {s.label}
                </p>
                <h3 className="mt-2 text-[20px] font-bold leading-snug text-primary-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{s.text}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}


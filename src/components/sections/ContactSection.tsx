import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { createServerFn } from "@tanstack/react-start";

interface ContactInput {
  nome: string;
  organizacao: string;
  cargo: string;
  email: string;
  whatsapp?: string;
  tipo: string;
  mensagem?: string;
}

const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input as ContactInput)
  .handler(async ({ data }: { data: ContactInput }) => {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;

    if (!RESEND_API_KEY || !LOVABLE_API_KEY) {
      throw new Error("Chaves de API não configuradas");
    }

    const html = `
      <h2>Nova solicitação de contato — ClimaEdu</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Nome</td><td style="padding:8px;border-bottom:1px solid #eee">${data.nome}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Instituição/Empresa</td><td style="padding:8px;border-bottom:1px solid #eee">${data.organizacao}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Cargo</td><td style="padding:8px;border-bottom:1px solid #eee">${data.cargo}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee">${data.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">WhatsApp</td><td style="padding:8px;border-bottom:1px solid #eee">${data.whatsapp || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Tipo</td><td style="padding:8px;border-bottom:1px solid #eee">${data.tipo}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Mensagem</td><td style="padding:8px">${data.mensagem || "—"}</td></tr>
      </table>
    `;

    const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "ClimaEdu <onboarding@resend.dev>",
        to: ["conttao@newedtech.com"],
        subject: `[ClimaEdu] Nova solicitação de ${data.nome} — ${data.tipo}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend error:", errorText);
      throw new Error("Falha ao enviar e-mail");
    }

    return { success: true };
  });

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  organizacao: z.string().trim().min(2, "Informe a instituição ou empresa").max(120),
  cargo: z.string().trim().min(2, "Informe seu cargo").max(80),
  email: z.string().trim().email("E-mail inválido").max(160),
  whatsapp: z.string().trim().max(30).optional().or(z.literal("")),
  tipo: z.enum(
    ["Enchentes", "Queimadas", "Resíduos", "Licenciamento", "ESG", "Defesa civil", "Outro"],
    { message: "Selecione o principal desafio" },
  ),
  mensagem: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setErrorMsg(null);
    try {
      await sendContactEmail({ data });
      setSent(true);
      reset();
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setErrorMsg(
        "Ocorreu um erro no envio. Por favor, tente pelo WhatsApp: (48) 99160-6518",
      );
    }
  };

  return (
    <section className="bg-surface scroll-mt-24" id="contato">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="mb-3 inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em]"
              style={{
                backgroundColor: "color-mix(in oklab, var(--color-terracotta) 14%, transparent)",
                color: "var(--color-terracotta)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-terracotta)" }} />
              Agenda de demonstrações limitada
            </span>
            <h2 className="text-primary-dark" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.1 }}>
              Solicite uma demonstração aplicada ao seu contexto
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-foreground/75">
              Em até 48 horas, nossa equipe entra em contato para entender sua realidade
              institucional e apresentar exemplos de trilhas, dashboards e evidências.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-xl border border-border bg-background p-6 md:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome" error={errors.nome?.message}>
                  <input type="text" className="input" {...register("nome")} />
                </Field>
                <Field label="Instituição" error={errors.organizacao?.message}>
                  <input type="text" className="input" {...register("organizacao")} />
                </Field>
                <Field label="Cargo" error={errors.cargo?.message}>
                  <input type="text" className="input" {...register("cargo")} />
                </Field>
                <Field label="E-mail" error={errors.email?.message}>
                  <input type="email" className="input" {...register("email")} />
                </Field>
                <Field label="WhatsApp" error={errors.whatsapp?.message}>
                  <input type="tel" className="input" {...register("whatsapp")} />
                </Field>
                <Field label="Principal desafio" error={errors.tipo?.message}>
                  <select className="input" defaultValue="" {...register("tipo")}>
                    <option value="" disabled>Selecione…</option>
                    <option>Enchentes</option>
                    <option>Queimadas</option>
                    <option>Resíduos</option>
                    <option>Licenciamento</option>
                    <option>ESG</option>
                    <option>Defesa civil</option>
                    <option>Outro</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Mensagem (opcional)" error={errors.mensagem?.message}>
                  <textarea
                    rows={3}
                    className="input resize-y"
                    placeholder="Descreva brevemente o que precisa"
                    {...register("mensagem")}
                  />
                </Field>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_rgba(132,154,116,0.7)] ring-1 ring-primary/40 transition-all hover:bg-primary-deep hover:scale-[1.02] disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando…" : "Solicitar demonstração"}
                </button>
                <a
                  href="https://wa.me/5548991606518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-lg border-2 border-primary bg-background px-5 text-base font-semibold text-primary-dark transition-colors hover:bg-accent"
                >
                  <MessageCircle size={18} /> Falar pelo WhatsApp
                </a>
              </div>

              <p className="mt-3 text-[13px] text-foreground/60">
                Sem compromisso. A conversa ajuda a mapear se a CLIMAEDU faz sentido para sua
                instituição.
              </p>

              {sent && (
                <p
                  role="status"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-primary-dark"
                  style={{ fontSize: "15px" }}
                >
                  <CheckCircle2 size={16} /> Recebemos sua solicitação! Entraremos em contato em até 48 horas.
                </p>
              )}

              {errorMsg && (
                <p
                  role="alert"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-destructive"
                  style={{ fontSize: "15px" }}
                >
                  <AlertCircle size={16} /> {errorMsg}
                </p>
              )}

              <style>{`
                .input {
                  width: 100%;
                  border: 1px solid var(--color-border);
                  background: var(--color-background);
                  color: var(--color-foreground);
                  border-radius: 0.5rem;
                  padding: 0.7rem 0.875rem;
                  font-size: 16px;
                  line-height: 1.5;
                  transition: border-color .15s, box-shadow .15s;
                }
                .input:focus {
                  outline: none;
                  border-color: var(--color-primary);
                  box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 20%, transparent);
                }
              `}</style>
            </form>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <aside
              className="h-full rounded-xl border bg-background p-6 md:p-7"
              style={{
                borderColor: "color-mix(in oklab, var(--color-terracotta) 30%, var(--color-border))",
              }}
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--color-terracotta)" }}>
                Prioridade
              </p>
              <h3 className="mt-2 text-xl font-bold text-primary-dark">
                Prioridade para órgãos em fase de planejamento ou capacitação
              </h3>
              <p className="mt-3 text-[15px] text-foreground/75">
                Atendemos prefeituras, secretarias estaduais, empresas com obrigações ambientais
                e canais agregadores.
              </p>

              <a
                href="https://wa.me/5548991606518"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2.5 text-primary-dark transition-colors hover:bg-accent"
                style={{ fontSize: "15px" }}
              >
                <MessageCircle size={16} />
                (48) 99160-6518
              </a>

              <div className="mt-6 border-t border-border pt-5">
                <p className="uppercase tracking-[0.18em] text-muted-foreground" style={{ fontSize: "12px", fontWeight: 600 }}>Resposta</p>
                <p className="mt-1.5 text-foreground/80" style={{ fontSize: "15px" }}>
                  Em até 48 horas úteis, com proposta inicial alinhada ao seu contexto.
                </p>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-foreground/90" style={{ fontSize: "16px", fontWeight: 500 }}>{label}</span>
      {children}
      {error && <span className="mt-1 block text-destructive" style={{ fontSize: "13px" }}>{error}</span>}
    </label>
  );
}

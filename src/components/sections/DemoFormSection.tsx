import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { createServerFn } from "@tanstack/react-start";

interface DemoInput {
  nome: string;
  instituicao: string;
  cargo: string;
  email: string;
  whatsapp?: string;
  tipo: string;
  desafio: string;
  pessoas: string;
}

const sendDemoRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input as DemoInput)
  .handler(async ({ data }: { data: DemoInput }) => {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;

    if (!RESEND_API_KEY || !LOVABLE_API_KEY) {
      throw new Error("Chaves de API não configuradas");
    }

    const html = `
      <h2>Nova solicitação de demonstração — CLIMAEDU</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Nome</td><td style="padding:8px;border-bottom:1px solid #eee">${data.nome}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Instituição</td><td style="padding:8px;border-bottom:1px solid #eee">${data.instituicao}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Cargo</td><td style="padding:8px;border-bottom:1px solid #eee">${data.cargo}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee">${data.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">WhatsApp</td><td style="padding:8px;border-bottom:1px solid #eee">${data.whatsapp || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Tipo de instituição</td><td style="padding:8px;border-bottom:1px solid #eee">${data.tipo}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Principal desafio</td><td style="padding:8px;border-bottom:1px solid #eee">${data.desafio}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Pessoas a capacitar</td><td style="padding:8px">${data.pessoas}</td></tr>
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
        from: "CLIMAEDU <onboarding@resend.dev>",
        to: ["conttao@newedtech.com"],
        subject: `[CLIMAEDU] Demonstração: ${data.nome} — ${data.instituicao}`,
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
  instituicao: z.string().trim().min(2, "Informe a instituição").max(120),
  cargo: z.string().trim().min(2, "Informe seu cargo").max(80),
  email: z.string().trim().email("E-mail inválido").max(160),
  whatsapp: z.string().trim().max(30).optional().or(z.literal("")),
  tipo: z.enum(
    ["Órgão público", "Empresa", "Escola / Rede de ensino", "Parceiro institucional", "Outro"],
    { message: "Selecione o tipo de instituição" },
  ),
  desafio: z.string().trim().min(3, "Descreva brevemente o desafio").max(300),
  pessoas: z.enum(
    ["Até 50", "50 a 200", "200 a 1.000", "1.000 a 5.000", "Mais de 5.000"],
    { message: "Selecione a faixa" },
  ),
});

type FormValues = z.infer<typeof schema>;

export function DemoFormSection() {
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
      await sendDemoRequest({ data });
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
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-xl border border-border bg-background p-6 md:p-8"
            >
              <h2 className="text-[24px] font-semibold text-primary-dark">Solicitar demonstração</h2>
              <p className="mt-1 text-[15px] text-foreground/70">
                Preencha em 1 minuto. Retorno em até 48 horas úteis.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Nome" error={errors.nome?.message}>
                  <input type="text" className="input" {...register("nome")} />
                </Field>
                <Field label="Instituição" error={errors.instituicao?.message}>
                  <input type="text" className="input" {...register("instituicao")} />
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
                <Field label="Tipo de instituição" error={errors.tipo?.message}>
                  <select className="input" defaultValue="" {...register("tipo")}>
                    <option value="" disabled>Selecione…</option>
                    <option>Órgão público</option>
                    <option>Empresa</option>
                    <option>Escola / Rede de ensino</option>
                    <option>Parceiro institucional</option>
                    <option>Outro</option>
                  </select>
                </Field>
                <Field label="Número aproximado de pessoas a capacitar" error={errors.pessoas?.message}>
                  <select className="input" defaultValue="" {...register("pessoas")}>
                    <option value="" disabled>Selecione…</option>
                    <option>Até 50</option>
                    <option>50 a 200</option>
                    <option>200 a 1.000</option>
                    <option>1.000 a 5.000</option>
                    <option>Mais de 5.000</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Principal desafio" error={errors.desafio?.message}>
                  <textarea
                    rows={3}
                    className="input resize-y"
                    placeholder="Conte brevemente o contexto: risco principal, área envolvida, prazo"
                    {...register("desafio")}
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_rgba(95,122,79,0.7)] ring-1 ring-primary/40 transition-all hover:bg-primary-deep hover:scale-[1.02] disabled:opacity-60"
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

              {sent && (
                <p
                  role="status"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-primary-dark"
                  style={{ fontSize: "15px" }}
                >
                  <CheckCircle2 size={16} /> Recebemos sua solicitação! Retorno em até 48 horas.
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
                Próximos passos
              </p>
              <h3 className="mt-2 text-[20px] font-semibold text-primary-dark">
                Em até 48 horas úteis, retornamos com uma sugestão inicial
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-foreground/80">
                <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" /> Trilha sugerida para o seu contexto</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" /> Formato de implantação institucional</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" /> Demonstração de 20 minutos</li>
              </ul>
              <a
                href="https://wa.me/5548991606518"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2.5 text-primary-dark transition-colors hover:bg-accent"
                style={{ fontSize: "15px" }}
              >
                <MessageCircle size={16} />
                (48) 99160-6518
              </a>
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
      <span className="mb-1.5 block text-foreground/90" style={{ fontSize: "15px", fontWeight: 500 }}>{label}</span>
      {children}
      {error && <span className="mt-1 block text-destructive" style={{ fontSize: "13px" }}>{error}</span>}
    </label>
  );
}

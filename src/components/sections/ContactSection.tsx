import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

// TODO: substitua pelo ID real do Formspree (formspree.io → e-mail destino: contato@newedtech.com.br)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  organizacao: z.string().trim().min(2, "Informe o órgão ou empresa").max(120),
  cargo: z.string().trim().min(2, "Informe seu cargo").max(80),
  email: z.string().trim().email("E-mail inválido").max(160),
  whatsapp: z.string().trim().max(30).optional().or(z.literal("")),
  tipo: z.enum(["Prefeitura", "Secretaria Estadual", "Empresa", "Outro"], {
    message: "Selecione o tipo de organização",
  }),
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
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: data.nome,
          orgao: data.organizacao,
          cargo: data.cargo,
          email: data.email,
          whatsapp: data.whatsapp,
          tipo: data.tipo,
          mensagem: data.mensagem,
        }),
      });

      if (!response.ok) throw new Error("Falha no envio");

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
    <section className="bg-surface" id="contato">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <FadeIn>
          <SectionTitle
            eyebrow="Contato"
            title="Vamos conversar sobre o seu órgão ou empresa"
            subtitle="Nos conte o contexto. Em 48 horas, uma de nossas especialistas entra em contato para entender sua necessidade e apresentar uma proposta."
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-xl border border-border bg-background p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nome completo" error={errors.nome?.message}>
                  <input type="text" className="input" {...register("nome")} />
                </Field>
                <Field label="Órgão ou empresa" error={errors.organizacao?.message}>
                  <input type="text" className="input" {...register("organizacao")} />
                </Field>
                <Field label="Cargo" error={errors.cargo?.message}>
                  <input type="text" className="input" {...register("cargo")} />
                </Field>
                <Field label="E-mail institucional" error={errors.email?.message}>
                  <input type="email" className="input" {...register("email")} />
                </Field>
                <Field label="WhatsApp (opcional)" error={errors.whatsapp?.message}>
                  <input type="tel" className="input" {...register("whatsapp")} />
                </Field>
                <Field label="Tipo de organização" error={errors.tipo?.message}>
                  <select className="input" defaultValue="" {...register("tipo")}>
                    <option value="" disabled>Selecione…</option>
                    <option>Prefeitura</option>
                    <option>Secretaria Estadual</option>
                    <option>Empresa</option>
                    <option>Outro</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Mensagem (opcional)" error={errors.mensagem?.message}>
                  <textarea
                    rows={4}
                    className="input resize-y"
                    placeholder="Descreva brevemente o que precisa"
                    {...register("mensagem")}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-60"
                style={{ fontSize: "15px" }}
              >
                {isSubmitting ? "Enviando…" : "Enviar solicitação"}
              </button>

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
                  padding: 0.75rem 0.875rem;
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
            <aside className="h-full rounded-xl border border-border bg-background p-7">
              <h3>Prefere conversar agora?</h3>
              <p className="mt-2 text-muted-foreground" style={{ fontSize: "16px" }}>
                Fale diretamente com a equipe pelo WhatsApp.
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
              <div className="mt-8 border-t border-border pt-6">
                <p className="uppercase tracking-[0.18em] text-muted-foreground" style={{ fontSize: "13px" }}>Resposta</p>
                <p className="mt-2 text-foreground/80" style={{ fontSize: "16px" }}>
                  Em até 48 horas úteis, com proposta inicial alinhada ao seu contexto institucional.
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

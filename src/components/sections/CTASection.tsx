import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function CTASection({
  title,
  subtitle,
  ctaLabel = "Agendar demonstração",
  ctaTo = "/demonstracao",
}: {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: "/demonstracao" | "/orgaos-publicos" | "/empresas" | "/escolas" | "/cursos";
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-2xl border p-10 text-center md:p-14"
            style={{
              borderColor: "color-mix(in oklab, var(--color-olive) 35%, var(--color-border))",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--color-olive) 14%, white) 0%, color-mix(in oklab, var(--color-terracotta) 8%, white) 100%)",
            }}
          >
            <h2
              className="text-primary-dark"
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                lineHeight: 1.15,
                fontWeight: 600,
              }}
            >
              {title}
            </h2>

            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.6] text-foreground/75">
                {subtitle}
              </p>
            )}

            <Link
              to={ctaTo}
              className="mt-8 inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_14px_38px_-10px_rgba(95,122,79,0.7)] ring-1 ring-primary/30 transition-all hover:bg-primary-deep hover:scale-[1.02]"
            >
              {ctaLabel} <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

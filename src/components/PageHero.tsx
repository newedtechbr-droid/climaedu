import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 50% at 10% 10%, color-mix(in oklab, var(--color-olive) 14%, transparent) 0%, transparent 70%), radial-gradient(45% 40% at 95% 90%, color-mix(in oklab, var(--color-terracotta) 10%, transparent) 0%, transparent 75%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <FadeIn>
          {eyebrow && (
            <p
              className="mb-6 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12.5px] font-semibold uppercase"
              style={{ backgroundColor: "#9A4B42", color: "#FFFFFF", letterSpacing: "0.04em" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {eyebrow}
            </p>
          )}
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1
            className="text-primary-dark"
            style={{ fontSize: "clamp(34px, 4.8vw, 60px)", lineHeight: 1.08, letterSpacing: "-0.018em", fontWeight: 600 }}
          >
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.15}>
            <p
              className="mt-7 max-w-3xl text-foreground/80"
              style={{ fontSize: "clamp(17px, 1.3vw, 21px)", lineHeight: 1.6 }}
            >
              {subtitle}
            </p>
          </FadeIn>
        )}
        {children && <FadeIn delay={0.25}><div className="mt-10">{children}</div></FadeIn>}
      </div>
    </section>
  );
}

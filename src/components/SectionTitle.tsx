import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      <h2 className="text-2xl leading-tight md:text-3xl lg:text-[2rem]">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

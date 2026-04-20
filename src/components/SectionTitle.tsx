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
        <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-primary" style={{ fontSize: "13px" }}>{eyebrow}</p>
      )}
      <h2>{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-foreground/75">{subtitle}</p>}
    </div>
  );
}

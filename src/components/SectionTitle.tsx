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
        <p className="mb-5 font-bold uppercase tracking-[0.22em] text-primary" style={{ fontSize: "14px" }}>{eyebrow}</p>
      )}
      <h2>{title}</h2>
      {subtitle && <p className="mt-6 text-[19px] md:text-[21px] leading-[1.65] text-foreground/80">{subtitle}</p>}
    </div>
  );
}


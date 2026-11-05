import type { ReactNode } from "react";

/** Small uppercase label above a section title ("MES SERVICES"). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="self-start rounded-md bg-[#0F1D3D] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.1em] text-brand-soft">
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  action,
  size = "lg",
}: {
  eyebrow?: string;
  title: string;
  /** Second part of the title, shown in the accent color. */
  highlight?: string;
  subtitle?: string;
  action?: ReactNode;
  size?: "lg" | "md";
}) {
  return (
    <div className="reveal mb-9 flex flex-wrap items-end justify-between gap-4">
      <div className="flex max-w-2xl flex-col gap-3">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2
          className={`font-extrabold leading-[1.1] tracking-[-0.03em] text-white text-balance ${
            size === "lg" ? "text-[28px] sm:text-[40px]" : "text-[26px] sm:text-[34px]"
          }`}
        >
          {title}
          {highlight && <span className="text-brand"> {highlight}</span>}
        </h2>
        {subtitle && <p className="text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Section({
  id,
  children,
  tone = "default",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  /** "alt" uses the slightly lighter surface, to alternate sections. */
  tone?: "default" | "alt";
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line ${tone === "alt" ? "bg-surface" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-[88px]">{children}</div>
    </section>
  );
}

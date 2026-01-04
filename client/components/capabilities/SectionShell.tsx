import { cn } from "@/lib/utils";
import * as React from "react";

type Alignment = "left" | "center";

interface SectionShellProps {
  id: string;
  title?: string;
  eyebrow?: string;
  description?: React.ReactNode;
  align?: Alignment;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export function SectionShell({
  id,
  title,
  eyebrow,
  description,
  align = "left",
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-32 space-y-6 border-b border-gray-100 pb-12 last:border-b-0",
        className,
      )}
    >
      {(eyebrow || title || description) && (
        <div
          className={cn(
            "space-y-4",
            align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl",
            alignmentClass,
          )}
        >
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-onealgo-blue-700">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          ) : null}
          {description ? (
            <div className="text-lg text-gray-600 space-y-3">{description}</div>
          ) : null}
        </div>
      )}
      <div className={cn("space-y-6", contentClassName)}>{children}</div>
    </section>
  );
}

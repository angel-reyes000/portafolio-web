import type { AosAttributes } from "@/lib/aos";
import { cn } from "@/lib/utils";

interface CardProps extends AosAttributes {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "section" | "aside";
  /** Aplica realce de borde al pasar el cursor (para tarjetas con enlaces). */
  interactive?: boolean;
}

export function Card({ children, className, as: Tag = "div", interactive, ...aosProps }: CardProps) {
  return (
    <Tag
      {...aosProps}
      className={cn(
        "rounded-xl border border-border bg-surface",
        interactive && "transition-colors duration-200 hover:border-border-strong",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

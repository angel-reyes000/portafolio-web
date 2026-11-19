import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "section" | "aside";
  /** Aplica realce de borde al pasar el cursor (para tarjetas con enlaces). */
  interactive?: boolean;
}

export function Card({ children, className, as: Tag = "div", interactive }: CardProps) {
  return (
    <Tag
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

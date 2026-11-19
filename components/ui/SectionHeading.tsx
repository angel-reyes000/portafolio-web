import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  /** Enlace opcional "Ver todo" alineado a la derecha. */
  action?: { label: string; href: string };
  className?: string;
}

export function SectionHeading({ title, description, eyebrow, id, action, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>}
        <h2 id={id} className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          {title}
        </h2>
        {description && <p className="mt-2 text-base leading-relaxed text-muted">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
        >
          {action.label}
          <FiArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

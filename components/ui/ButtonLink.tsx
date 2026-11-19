import Link from "next/link";
import type { IconType } from "react-icons";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconType;
  iconPosition?: "start" | "end";
  /** Nombre de archivo sugerido; convierte el enlace en descarga. */
  download?: string;
  /** Fuerza abrir en una pestaña nueva (por defecto solo en enlaces externos). */
  newTab?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-fg hover:bg-primary-hover",
  secondary: "border border-border-strong bg-surface text-fg hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-fg hover:bg-subtle",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: IconComponent,
  iconPosition = "start",
  download,
  newTab,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const icon = IconComponent ? <IconComponent className="size-4 shrink-0" aria-hidden="true" /> : null;
  const content = (
    <>
      {iconPosition === "start" && icon}
      {children}
      {iconPosition === "end" && icon}
    </>
  );

  const openInNewTab = newTab ?? (isExternal(href) && !href.startsWith("mailto:"));

  if (download || isExternal(href) || newTab) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        aria-label={ariaLabel}
        {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

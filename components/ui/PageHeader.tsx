import { aos } from "@/lib/aos";
import { Container } from "./Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

/**
 * Encabezado estándar de cada ruta interna. Contiene el único <h1> de la página.
 */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="border-b border-border">
      <Container className="py-14 sm:py-20">
        <p {...aos("fade-up")} className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 {...aos("fade-up", 100)} className="max-w-3xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{title}</h1>
        <p {...aos("fade-up", 200)} className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        {children && <div {...aos("fade-up", 300)} className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </header>
  );
}

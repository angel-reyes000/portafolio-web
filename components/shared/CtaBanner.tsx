import { FiArrowRight, FiDownload } from "react-icons/fi";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

/** Llamado a la acción reutilizable al final de las páginas. */
export function CtaBanner({
  title = "¿Tienes un proyecto o una oportunidad en mente?",
  description = "Si te interesa mi perfil o quieres colaborar en un proyecto, escríbeme y conversemos.",
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="cta-title" className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contacto" icon={FiArrowRight} iconPosition="end">
              Contactar
            </ButtonLink>
            <ButtonLink href={siteConfig.cv.href} download={siteConfig.cv.downloadName} variant="secondary" icon={FiDownload}>
              Descargar CV
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

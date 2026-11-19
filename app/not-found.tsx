import type { Metadata } from "next";
import { FiArrowLeft } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">Error 404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">Página no encontrada</h1>
      <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
        La página que buscas no existe o fue movida. Revisa la dirección o vuelve al inicio.
      </p>
      <ButtonLink href="/" icon={FiArrowLeft} className="mt-8">
        Volver al inicio
      </ButtonLink>
    </Container>
  );
}

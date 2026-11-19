import { FiDownload, FiMapPin } from "react-icons/fi";
import { ContactChannelCard } from "@/components/contact/ContactChannelCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { contactChannels, primaryContact } from "@/data/contact";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contacto",
  description: `Contacta a ${profile.displayName} por correo electrónico o WhatsApp, o revisa sus perfiles de GitHub y Credly.`,
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos"
        description="¿Tienes una propuesta, una oportunidad laboral o una pregunta sobre algún proyecto? Elige el canal que prefieras."
      >
        <ButtonLink href={primaryContact.href}>Escribir un correo</ButtonLink>
      </PageHeader>

      <section className="py-16 sm:py-20" aria-label="Canales de contacto">
        <Container className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ul className="grid gap-4 sm:grid-cols-2">
            {contactChannels.map((channel) => (
              <ContactChannelCard key={channel.id} channel={channel} />
            ))}
          </ul>

          <Card as="aside" className="flex flex-col p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-fg">Currículum</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Consulta mi experiencia, formación, certificaciones y habilidades en un solo documento.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.cv.href} download={siteConfig.cv.downloadName} icon={FiDownload}>
                Descargar CV
              </ButtonLink>
              <ButtonLink href={siteConfig.cv.href} newTab variant="secondary">
                Ver en el navegador
              </ButtonLink>
            </div>
            <p className="mt-auto inline-flex items-center gap-2 border-t border-border pt-6 text-sm text-muted max-lg:mt-8">
              <FiMapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </p>
          </Card>
        </Container>
      </section>
    </>
  );
}

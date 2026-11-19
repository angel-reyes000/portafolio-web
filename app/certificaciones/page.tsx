import { FiBookOpen, FiExternalLink } from "react-icons/fi";
import { CertificationExplorer } from "@/components/certifications/CertificationExplorer";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, courses, credlyProfileUrl, issuers, issuersFirstInAll } from "@/data/certifications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Certificaciones",
  description: `${certifications.length} certificaciones de ${issuers.map((issuer) => issuer.name).join(", ")}, además de cursos complementarios.`,
  path: "/certificaciones",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificaciones"
        title="Certificaciones y cursos"
        description="Insignias y certificados en programación, desarrollo web, bases de datos, nube, SAP e inteligencia artificial."
      >
        <ButtonLink href={credlyProfileUrl} icon={FiExternalLink} iconPosition="end">
          Ver perfil en Credly
        </ButtonLink>
      </PageHeader>

      <section className="border-b border-border" aria-label="Certificaciones por institución">
        <Container>
          <dl className="grid grid-cols-2 gap-x-8 py-4 sm:grid-cols-4">
            {issuers.map((issuer) => (
              <div key={issuer.id} className="py-4">
                <dt className="text-sm text-muted">{issuer.name}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-fg">
                  {certifications.filter((cert) => cert.issuerId === issuer.id).length}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-label="Galería de certificaciones">
        <Container>
          <CertificationExplorer
            certifications={certifications}
            issuers={issuers}
            credlyUrl={credlyProfileUrl}
            firstInAll={issuersFirstInAll}
          />
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20" aria-labelledby="cursos">
        <Container>
          <SectionHeading
            id="cursos"
            eyebrow="Formación complementaria"
            title="Cursos"
            description="Cursos que complementan mi formación académica y certificaciones."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card as="li" key={course.title} className="flex items-start gap-3 p-5">
                <FiBookOpen className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-fg">{course.title}</p>
                  <p className="mt-1 text-xs text-muted">{course.provider}</p>
                </div>
              </Card>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

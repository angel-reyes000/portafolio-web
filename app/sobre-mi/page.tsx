import Image from "next/image";
import { FiDownload, FiMapPin } from "react-icons/fi";
import { EducationItem } from "@/components/education/EducationItem";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre mí",
  description: `Conoce a ${profile.displayName}: ${profile.role} en formación por la Universidad Tecmilenio, enfocado en desarrollo full stack y optimización de procesos.`,
  path: "/sobre-mi",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mí"
        title="Ingeniero en Desarrollo de Software en formación"
        description="Combino el desarrollo full stack con el análisis de requerimientos y la optimización de procesos empresariales."
      />

      <section className="py-16 sm:py-20" aria-label="Biografía">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <aside className="flex flex-col gap-6">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface lg:mx-0">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                preload
                sizes="(min-width: 1024px) 400px, 384px"
                className="object-cover"
              />
            </div>
            <Card className="p-5">
              <p className="text-base font-semibold text-fg">{profile.fullName}</p>
              <p className="text-sm text-muted">{profile.role}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                <FiMapPin className="size-4" aria-hidden="true" />
                {profile.location}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink href={siteConfig.cv.href} newTab variant="secondary" size="sm">
                  Ver CV
                </ButtonLink>
                <ButtonLink href={siteConfig.cv.href} download={siteConfig.cv.downloadName} size="sm" icon={FiDownload}>
                  Descargar CV
                </ButtonLink>
              </div>
            </Card>
          </aside>

          <div>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {profile.highlights.map((item) => (
                <Card key={item.label} className="p-5">
                  <dt className="text-sm text-muted">{item.label}</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight text-fg">{item.value}</dd>
                </Card>
              ))}
            </dl>

            <div className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight text-fg">Áreas de interés</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <li key={interest} className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-fg">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20" aria-labelledby="formacion">
        <Container>
          <SectionHeading id="formacion" eyebrow="Educación" title="Formación académica" />
          <div className="grid gap-6">
            {education.map((item) => (
              <EducationItem key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

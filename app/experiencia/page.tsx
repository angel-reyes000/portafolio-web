import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Experiencia",
  description:
    "Experiencia profesional como desarrollador full stack en Schneider Electric, Nobum, Prologix y NSG - Engineering: aplicaciones web, SAP, Odoo ERP e inteligencia artificial.",
  path: "/experiencia",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiencia"
        title="Experiencia profesional"
        description="Roles en los que he aplicado desarrollo full stack, soluciones SAP y Odoo, inteligencia artificial y optimización de procesos en entornos reales."
      />

      <section className="py-16 sm:py-20" aria-label="Línea de tiempo profesional">
        <Container>
          <div className="timeline flex flex-col gap-8">
            {experience.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20" aria-labelledby="proyectos-destacados">
        <Container>
          <SectionHeading
            id="proyectos-destacados"
            eyebrow="Portafolio"
            title="Proyectos destacados"
            description="Proyectos que complementan mi experiencia profesional."
            action={{ label: "Ver todos los proyectos", href: "/proyectos" }}
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} variant="compact" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

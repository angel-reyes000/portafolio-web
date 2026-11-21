import { FiGithub } from "react-icons/fi";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { contactChannels } from "@/data/contact";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Proyectos",
  description:
    "Proyectos: aplicaciones web con Next.js y React, asistentes con inteligencia artificial, aplicaciones de escritorio con PyQt6 y diseños UI/UX en Figma.",
  path: "/proyectos",
});

const github = contactChannels.find((channel) => channel.id === "github");

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        title="Proyectos"
        description="Aplicaciones web, inteligencia artificial, software de escritorio y diseño de interfaces. Filtra por categoría para explorar."
      >
        {github && (
          <ButtonLink href={github.href} variant="secondary" icon={FiGithub}>
            Ver GitHub
          </ButtonLink>
        )}
      </PageHeader>

      <section className="py-12 sm:py-16" aria-label="Listado de proyectos">
        <Container>
          <ProjectExplorer projects={projects} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

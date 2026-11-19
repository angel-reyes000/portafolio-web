import Image from "next/image";
import type { IconType } from "react-icons";
import { FiExternalLink, FiFigma, FiGithub } from "react-icons/fi";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectLinkType } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/Tag";

const linkMeta: Record<ProjectLinkType, { label: string; icon: IconType }> = {
  demo: { label: "Ver proyecto", icon: FiExternalLink },
  repo: { label: "Código", icon: FiGithub },
  design: { label: "Ver diseño", icon: FiFigma },
};

interface ProjectCardProps {
  project: Project;
  /** "compact" muestra el resumen corto (inicio); "full" la descripción completa. */
  variant?: "compact" | "full";
  /** Precarga la imagen (solo para la primera tarjeta visible). */
  preload?: boolean;
}

export function ProjectCard({ project, variant = "full", preload = false }: ProjectCardProps) {
  return (
    <Card as="article" interactive className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-subtle">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono uppercase tracking-wider text-accent">{projectCategories[project.category]}</span>
          <span className="text-border-strong" aria-hidden="true">
            /
          </span>
          <span className="text-muted">{project.context}</span>
          {project.legacy && (
            <span className="rounded-full border border-border px-2 py-0.5 text-muted">Versión anterior</span>
          )}
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-fg">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {variant === "full" ? project.description : project.summary}
        </p>

        <TagList items={project.technologies} className="mt-4" />

        {project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4">
            {project.links.map((link) => {
              const meta = linkMeta[link.type];
              const LinkIcon = meta.icon;
              return (
                <a
                  key={link.href + link.type}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-6 items-center gap-1.5 text-sm font-medium text-fg transition-colors duration-200 hover:text-accent"
                >
                  <LinkIcon className="size-4" aria-hidden="true" />
                  {link.label ?? meta.label}
                  <span className="sr-only"> de {project.title} (abre en una pestaña nueva)</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/content";
import { FilterChips, type FilterOption } from "@/components/ui/FilterChips";
import { ProjectCard } from "./ProjectCard";

type Filter = ProjectCategory | "todos";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("todos");

  const options: FilterOption<Filter>[] = [
    { value: "todos", label: "Todos", count: projects.length },
    ...(Object.keys(projectCategories) as ProjectCategory[])
      .map((category) => ({
        value: category,
        label: projectCategories[category],
        count: projects.filter((project) => project.category === category).length,
      }))
      .filter((option) => option.count > 0),
  ];

  const visible = filter === "todos" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div>
      <FilterChips label="Filtrar proyectos por categoría" options={options} value={filter} onChange={setFilter} />
      <p className="sr-only" aria-live="polite">
        {visible.length} proyectos mostrados
      </p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <li key={project.slug}>
            <ProjectCard project={project} preload={index === 0} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { SkillGroup } from "@/types/content";

/**
 * Habilidades técnicas agrupadas por categoría.
 * `icon` debe ser una clave existente en `lib/icons.ts`.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "lenguajes",
    title: "Lenguajes",
    description: "Lenguajes de programación, consulta y marcado que uso a diario.",
    icon: "code",
    skills: [
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "sql" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "XML", icon: "xml" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks y librerías",
    description: "Herramientas para construir interfaces, APIs, agentes de IA y sistemas empresariales.",
    icon: "layers",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "React Native", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "SCSS", icon: "sass" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Django", icon: "django" },
      { name: "SQLAlchemy", icon: "sqlalchemy" },
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "graph" },
      { name: "Odoo", icon: "odoo" },
      { name: "PyQt6", icon: "qt" },
      { name: "D3.js", icon: "d3" },
    ],
  },
  {
    id: "herramientas",
    title: "Herramientas y DevOps",
    description: "Infraestructura, control de versiones, gestión de proyectos y prototipado.",
    icon: "tool",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "githubBrand" },
      { name: "AWS", icon: "aws" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "ChromaDB", icon: "vectorDb" },
      { name: "Jira", icon: "jira" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    id: "ia",
    title: "IA y automatización",
    description: "Modelos, asistentes y plataformas para automatizar flujos de trabajo.",
    icon: "cpu",
    skills: [
      { name: "Claude Code", icon: "claude" },
      { name: "GitHub Copilot", icon: "copilot" },
      { name: "Gemini", icon: "gemini" },
      { name: "ChatGPT", icon: "openai" },
      { name: "Botpress", icon: "botpress" },
      { name: "Zapier", icon: "zapier" },
    ],
  },
  {
    id: "especialidades",
    title: "Especialidades",
    description: "Prácticas y competencias que aplico en cada proyecto.",
    icon: "sitemap",
    skills: [
      { name: "Desarrollo full stack" },
      { name: "Agentes de IA y aplicaciones con LLMs" },
      { name: "RAG (LangChain, LangGraph, ChromaDB)" },
      { name: "Implementación y personalización de ERP" },
      { name: "Programación Orientada a Objetos" },
      { name: "Maquetación web" },
      { name: "Análisis de requerimientos" },
      { name: "Documentación técnica" },
      { name: "Metodologías ágiles" },
      { name: "Visualización de datos" },
    ],
  },
];

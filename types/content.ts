/**
 * Tipos del contenido del portafolio.
 * Todo el contenido vive en /data y se valida contra estas interfaces.
 */
import type { IconKey } from "@/lib/icons";

/** Imagen servida desde /public (ruta absoluta, p. ej. "/images/projects/x.webp"). */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavItem {
  label: string;
  href: `/${string}`;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  keywords: string[];
  cv: { href: string; downloadName: string };
}

export interface Profile {
  fullName: string;
  displayName: string;
  initials: string;
  role: string;
  headline: string;
  location: string;
  summary: string;
  /** Párrafos de la sección "Sobre mí". */
  about: string[];
  photo: ImageAsset;
  highlights: { label: string; value: string }[];
  interests: string[];
}

export interface ExperienceAchievement {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  /** Formato "YYYY-MM". */
  startDate: string;
  /** Formato "YYYY-MM". Omitir si es el puesto actual. */
  endDate?: string;
  employmentType?: string;
  summary?: string;
  achievements: ExperienceAchievement[];
  technologies: string[];
}

export type ProjectCategory = "web" | "ia" | "escritorio" | "diseno";

export type ProjectLinkType = "demo" | "repo" | "design";

export interface ProjectLink {
  type: ProjectLinkType;
  href: string;
  label?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  context: "Personal" | "Académico" | "Profesional";
  image: ImageAsset;
  technologies: string[];
  links: ProjectLink[];
  featured?: boolean;
  /** Indica que el proyecto ya fue reemplazado por una versión más reciente. */
  legacy?: boolean;
  /** Proyecto aún en construcción: en lugar de enlaces muestra "En desarrollo". */
  inDevelopment?: boolean;
}

export interface Skill {
  name: string;
  icon?: IconKey;
  level?: "Básico" | "Intermedio" | "Avanzado";
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: IconKey;
  skills: Skill[];
}

export interface Issuer {
  id: string;
  name: string;
  shortName: string;
  /** true si sus insignias se verifican en el perfil de Credly. */
  credly?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuerId: Issuer["id"];
  image?: ImageAsset;
  /** Marca de distinción (p. ej. "Sobresaliente"). */
  distinction?: string;
  year?: number;
  credentialUrl?: string;
}

export interface Course {
  title: string;
  provider: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: number;
  endYear?: number;
  status: string;
  description?: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: IconKey;
  description?: string;
  /** Muestra el canal en el pie de página y en la sección de inicio. */
  primary?: boolean;
}

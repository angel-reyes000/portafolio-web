import type { NavItem } from "@/types/content";

/**
 * Rutas principales del sitio. El orden define el orden del menú.
 * Al crear una nueva sección: agrega su carpeta en /app y una entrada aquí
 * (el sitemap se genera automáticamente a partir de esta lista).
 */
export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Experiencia", href: "/experiencia" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Habilidades", href: "/habilidades" },
  { label: "Certificaciones", href: "/certificaciones" },
  { label: "Contacto", href: "/contacto" },
];

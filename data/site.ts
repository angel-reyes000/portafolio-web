import type { SiteConfig } from "@/types/content";

/**
 * Configuración global del sitio (SEO, URL pública y CV).
 * Define NEXT_PUBLIC_SITE_URL en el entorno de despliegue para que
 * sitemap, robots, Open Graph y URLs canónicas usen el dominio real.
 */
export const siteConfig: SiteConfig = {
  name: "Angel Reyes",
  shortName: "A.R.",
  title: "Angel Reyes · Desarrollador Full Stack",
  description:
    "Portafolio de Angel Reyes, estudiante de Ingeniería en Desarrollo de Software en la Universidad Tecmilenio. Desarrollo full stack, SAP, ERP Odoo, agentes de inteligencia artificial y automatización.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "es_MX",
  keywords: [
    "Angel Reyes",
    "Angel Alejandro Reyes Carrasco",
    "desarrollador de software",
    "portafolio",
    "full stack",
    "Next.js",
    "React",
    "Python",
    "Odoo",
    "SAP",
    "TypeScript",
    "agentes de IA",
    "Tecmilenio",
    "Nuevo León",
  ],
  cv: {
    href: "/cv/angel-reyes-cv.pdf",
    downloadName: "CV_Angel_Reyes.pdf",
  },
};

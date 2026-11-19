import type { Profile } from "@/types/content";

/** Información personal y sección "Sobre mí". */
export const profile: Profile = {
  fullName: "Angel Alejandro Reyes Carrasco",
  displayName: "Angel Reyes",
  initials: "A.R.",
  role: "Desarrollador Full Stack",
  headline: "Construyo soluciones digitales eficientes y escalables.",
  location: "García, Nuevo León, México",
  summary:
    "Desarrollador full stack con experiencia en aplicaciones web, ERP (Odoo y SAP) e inteligencia artificial. Construyo productos de principio a fin: interfaces, APIs, bases de datos, agentes de IA y despliegue.",
  about: [
    "Mi nombre es Angel, tengo 20 años y soy Ingeniero en Desarrollo de Software en formación por la Universidad Tecmilenio. Mi enfoque profesional se centra en construir soluciones digitales eficientes y escalables, integrando el desarrollo full stack con la optimización de procesos empresariales.",
    "A lo largo de mi trayectoria académica, actualmente en séptimo semestre, he complementado mi formación técnica con certificaciones internacionales de instituciones líderes como Cisco Networking Academy, IBM, AWS, SAP y Anthropic.",
    "Esta base me permite abordar proyectos desde una perspectiva integral, combinando el análisis de requerimientos con las mejores prácticas de programación, la resolución de problemas y los fundamentos de inteligencia artificial.",
  ],
  photo: {
    src: "/images/profile/angel-reyes.webp",
    alt: "Retrato de Angel Reyes",
    width: 457,
    height: 437,
  },
  highlights: [
    { label: "Experiencia actual", value: "Schneider Electric · Nobum" },
    { label: "Ubicación", value: "Nuevo León, MX" },
  ],
  interests: [
    "Desarrollo full stack",
    "Arquitectura de software",
    "Visualización de datos",
    "Inteligencia artificial",
    "Agentes de IA y LLMs",
    "Automatización de procesos",
    "Diseño UI/UX",
  ],
};

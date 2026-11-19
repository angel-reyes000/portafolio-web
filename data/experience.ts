import type { Experience } from "@/types/content";

/**
 * Experiencia profesional, de la más reciente a la más antigua.
 * Fechas en formato "YYYY-MM"; omite `endDate` si es el puesto actual.
 */
export const experience: Experience[] = [
  {
    id: "schneider-electric-2026",
    role: "Application Developer Intern",
    company: "Schneider Electric",
    employmentType: "Application Developer",
    startDate: "2026-08",
    summary:
      "Desarrollo de aplicaciones internas y soluciones empresariales sobre SAP, con prompts de IA usados por equipos de distintas regiones.",
    achievements: [
      {
        title: "Aplicaciones internas",
        description:
          "Desarrollo de aplicaciones internas con HTML, JavaScript, Node.js y Python, con funcionalidades orientadas a optimizar procesos empresariales.",
      },
      {
        title: "Soluciones SAP",
        description:
          "Desarrollo e implementación de soluciones con SAP CAP, SAP Fiori, SAP BTP y SAP HANA Cloud, incluyendo el despliegue de aplicaciones en Cloud Foundry.",
      },
      {
        title: "Validación de datos",
        description:
          "Diseño de estructuras de datos y validaciones con JSON Schema para asegurar la consistencia en el intercambio y procesamiento de información.",
      },
      {
        title: "Prompts para GitHub Copilot",
        description:
          "Prompts especializados que usan distintos modelos de IA para analizar documentación técnica de tickets, identificar errores, detectar campos faltantes y validar especificaciones.",
      },
      {
        title: "Prompt Gallery internacional",
        description:
          "Publicación de prompts en la Prompt Gallery interna, usados por equipos de diferentes regiones, reduciendo hasta en un 80% el tiempo de revisión de documentación técnica.",
      },
      {
        title: "Desarrollo asistido por IA",
        description:
          "Uso de agentes inteligentes y GitHub Copilot para generar, optimizar, depurar y corregir código, mejorando la calidad y eficiencia del desarrollo.",
      },
      {
        title: "Análisis de incidencias",
        description:
          "Análisis de errores y registros técnicos en SAP GUI Logon para documentar y dar seguimiento a incidencias.",
      },
      {
        title: "Documentación técnica",
        description:
          "Elaboración de documentación de tickets, especificaciones, incidencias y requerimientos de desarrollo.",
      },
      {
        title: "Colaboración internacional",
        description:
          "Comunicación técnica en inglés con equipos de India y México a través de Microsoft Teams.",
      },
    ],
    technologies: [
      "SAP CAP",
      "SAP Fiori",
      "SAP BTP",
      "SAP HANA Cloud",
      "Cloud Foundry",
      "Node.js",
      "Python",
      "JavaScript",
      "JSON Schema",
      "GitHub Copilot",
    ],
  },
  {
    id: "nobum-2026",
    role: "Desarrollador Full Stack",
    company: "Nobum",
    startDate: "2026-08",
    summary:
      "Desarrollo de aplicaciones web end-to-end, desde el diseño en Figma hasta el despliegue, incluido un CRM interno.",
    achievements: [
      {
        title: "Desarrollo full stack",
        description:
          "Aplicaciones web end-to-end con JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Tailwind CSS y PostgreSQL.",
      },
      {
        title: "Backend y APIs",
        description:
          "Diseño de APIs, servicios y lógica de negocio con Node.js y Express.js, integrando PostgreSQL con consultas SQL avanzadas, relaciones y filtros personalizados.",
      },
      {
        title: "Frontend y UI/UX",
        description:
          "Interfaces profesionales y responsivas con React, Next.js, TypeScript y Tailwind CSS.",
      },
      {
        title: "Tiempo real",
        description:
          "Comunicación en tiempo real con WebSockets y Socket.IO para actualizar información y sincronizar cambios entre usuarios.",
      },
      {
        title: "Pagos con Stripe",
        description:
          "Integración de la pasarela de pagos Stripe para procesar y gestionar transacciones.",
      },
      {
        title: "Autenticación y seguridad",
        description:
          "Gestión de sesiones con JSON Web Tokens (JWT) y hash seguro de contraseñas con bcrypt.",
      },
      {
        title: "CRM interno",
        description:
          "Plataforma para la gestión de clientes y registros empresariales que redujo hasta en un 60% los tiempos operativos.",
      },
      {
        title: "Rendimiento",
        description:
          "Estrategias de caché y balanceo de carga mediante réplicas de servicios backend para distribuir peticiones y mejorar el rendimiento.",
      },
      {
        title: "Diseño y modelado",
        description:
          "Prototipos de interfaz en Figma y diagramas entidad-relación en Lucidchart para estructurar las bases de datos.",
      },
      {
        title: "Despliegue",
        description:
          "Despliegue y administración en Railway y Vercel, con variables de entorno y configuraciones para desarrollo y producción.",
      },
      {
        title: "Desarrollo asistido por IA",
        description:
          "Uso de Claude Code Pro para desarrollar, optimizar, refactorizar y depurar código.",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Socket.IO",
      "Stripe",
      "JWT",
      "Railway",
      "Vercel",
      "Figma",
    ],
  },
  {
    id: "prologix-2026",
    role: "Analista Programador (Full Stack)",
    company: "Prologix",
    startDate: "2026-05",
    endDate: "2026-08",
    summary:
      "Desarrollo full stack y personalización de Odoo Enterprise para procesos de Contabilidad, Ventas y Manufactura.",
    achievements: [
      {
        title: "Sistema de gestión de horas",
        description:
          "Sistema interno para gestionar horas por proyecto, con autenticación y autorización mediante JWT y grupos de usuario, y dashboards con React-ECharts. Stack: Next.js, JavaScript, SCSS, Django, PostgreSQL, Railway y Vercel.",
      },
      {
        title: "Odoo Enterprise",
        description:
          "Creación y modificación de módulos, vistas y reportes para Contabilidad, Ventas y Manufactura con Python, XML, HTML, CSS y Odoo Studio.",
      },
      {
        title: "Reportes dinámicos",
        description:
          "Dashboards y visualizaciones con QWeb, OWL, JavaScript, SCSS, HTML, Python y XML.",
      },
      {
        title: "Encuesta para clientes",
        description:
          "Encuesta responsiva para analizar necesidades de clientes, desarrollada con React, Next.js, TypeScript, Tailwind CSS y JavaScript.",
      },
      {
        title: "Despliegue y versiones",
        description:
          "Gestión de proyectos con GitHub y Odoo.sh, incluyendo despliegue y actualización de versiones.",
      },
      {
        title: "Automatización",
        description:
          "Automatización de órdenes de fabricación, correos, reportes, indicadores y dashboards en tiempo real.",
      },
      {
        title: "Desarrollo asistido por IA",
        description:
          "Uso de ChatGPT y Claude para depurar, generar y optimizar código y mejorar su calidad.",
      },
    ],
    technologies: [
      "Odoo Enterprise",
      "Odoo.sh",
      "Python",
      "Django",
      "Next.js",
      "React",
      "TypeScript",
      "OWL",
      "QWeb",
      "ECharts",
      "PostgreSQL",
    ],
  },
  {
    id: "nsg-odoo-2025",
    role: "Desarrollador Odoo (Full Stack)",
    company: "NSG - Engineering",
    startDate: "2025-09",
    endDate: "2026-04",
    summary:
      "Desarrollo y personalización de módulos de Odoo ERP para adaptarlo a procesos empresariales complejos.",
    achievements: [
      {
        title: "Módulos de Odoo ERP",
        description:
          "Desarrollo y personalización de módulos con Python, XML, JavaScript, HTML, CSS, React, Django y PostgreSQL.",
      },
      {
        title: "Arquitectura modular",
        description:
          "Diseño de la estructura modular de Odoo, integrando modelos, vistas, controladores, reglas de seguridad y flujos de negocio.",
      },
      {
        title: "Backend con Django",
        description:
          "Lógica backend con Django y Python, incluyendo diseño de servicios y conexión con PostgreSQL.",
      },
      {
        title: "APIs e integraciones",
        description:
          "APIs internas y servicios de integración para comunicar módulos y automatizar procesos.",
      },
      {
        title: "Dashboards con D3.js",
        description:
          "Dashboards interactivos para visualizar datos en tiempo real y apoyar el análisis operativo.",
      },
      {
        title: "Automatización de procesos",
        description:
          "Automatización de Ventas, Inventario y CRM mediante scripts de Python y reglas de negocio personalizadas.",
      },
      {
        title: "Entornos con Docker",
        description:
          "Entornos de desarrollo y despliegue con Docker para asegurar portabilidad y consistencia entre ambientes.",
      },
      {
        title: "Metodologías ágiles",
        description:
          "Ciclo de desarrollo con GitHub y Scrum en Jira: control de versiones, tareas y despliegues iterativos.",
      },
      {
        title: "Procesamiento de datos",
        description:
          "Procesos de extracción, transformación y automatización de datos para optimizar flujos internos de información.",
      },
      {
        title: "IA con AWS Bedrock",
        description:
          "Extracción y procesamiento de información de documentos cargados desde el frontend mediante AWS Bedrock.",
      },
      {
        title: "Web scraping",
        description:
          "Scraping en Python para extraer, transformar y automatizar datos entre plataformas web.",
      },
      {
        title: "Desarrollo asistido por IA",
        description:
          "Uso de ChatGPT, Claude y Gemini para desarrollo, depuración, generación de código y análisis de problemas técnicos.",
      },
    ],
    technologies: [
      "Odoo",
      "Python",
      "Django",
      "XML",
      "JavaScript",
      "React",
      "PostgreSQL",
      "D3.js",
      "Docker",
      "AWS Bedrock",
      "Jira",
      "GitHub",
    ],
  },
];

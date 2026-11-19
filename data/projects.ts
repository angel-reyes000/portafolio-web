import type { Project, ProjectCategory } from "@/types/content";

/** Etiquetas visibles de cada categoría (usadas por los filtros). */
export const projectCategories: Record<ProjectCategory, string> = {
  web: "Desarrollo web",
  ia: "IA y automatización",
  escritorio: "Aplicaciones de escritorio",
  diseno: "Diseño UI/UX",
};

const PYQT6_REPO = "https://github.com/angel-reyes000/Proyectos-Python-PyQt6.git";

/**
 * Proyectos personales, académicos y profesionales.
 * Para agregar uno: optimiza su imagen con `scripts/optimize-images.mjs`
 * hacia /public/images/projects y añade un objeto a este arreglo.
 * El orden del arreglo es el orden en que se muestran.
 */
export const projects: Project[] = [
  {
    slug: "wallet-ai",
    title: "Wallet AI",
    summary: "Finanzas personales con un asistente de IA multiagente, gráficas interactivas y calendario.",
    description:
      "Aplicación full stack de finanzas personales con asistente de inteligencia artificial, desarrollada con Next.js, TypeScript, Tailwind CSS, Python y FastAPI. Implementa autenticación con JWT y cifrado de contraseñas con bcrypt, con PostgreSQL y SQLAlchemy como ORM. Incorpora un sistema multiagente orquestado con LangChain y LangGraph, búsqueda semántica con ChromaDB (RAG), modelos de Google Gemini y DeepSeek y búsqueda web con Tavily. Incluye gestión de tarjetas y transacciones, gráficas interactivas (ECharts) y calendario (FullCalendar). Desplegada en Vercel y Railway.",
    category: "ia",
    context: "Personal",
    image: {
      src: "/images/projects/wallet-ai.webp",
      alt: "Panel de Wallet AI con balance total, gastos por categoría y el chat del agente de soporte",
      width: 1600,
      height: 814,
    },
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "LangChain", "LangGraph", "ChromaDB", "Gemini"],
    links: [{ type: "demo", href: "https://wallet-ai-alpha.vercel.app/" }],
    featured: true,
  },
  {
    slug: "nova-ai",
    title: "Nova AI",
    summary: "Chatbot full stack con IA, historial de conversaciones e inicio de sesión con Google.",
    description:
      "Aplicación full stack de chatbot con inteligencia artificial, desarrollada con Next.js, TypeScript, Tailwind CSS, Node.js y Express.js. Implementa autenticación segura mediante JWT, Google OAuth 2.0 y cifrado de contraseñas con bcrypt, con PostgreSQL como base de datos. Desplegada en Vercel y Railway y diseñada en Figma.",
    category: "ia",
    context: "Personal",
    image: {
      src: "/images/projects/nova-ai.webp",
      alt: "Conversación en Nova AI con el historial de chats en la barra lateral",
      width: 1600,
      height: 818,
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL", "OAuth 2.0"],
    links: [{ type: "demo", href: "https://nova-ai-my.vercel.app/" }],
    featured: true,
  },
  {
    slug: "nextdo-pro",
    title: "NextDo PRO",
    summary: "Aplicación web full stack de gestión de notas con CRUD completo.",
    description:
      "Aplicación web de gestión de notas desarrollada con Next.js, Express y PostgreSQL, que implementa operaciones CRUD completas para la administración de usuarios y contenido. Integra un frontend moderno con un backend robusto para crear, leer, actualizar y eliminar notas de manera eficiente, segura y escalable. Incluye autenticación mediante JWT, está desplegada en Vercel y Railway y fue diseñada en Figma.",
    category: "web",
    context: "Personal",
    image: {
      src: "/images/projects/nextdo-pro-landing.webp",
      alt: "Página de inicio de NextDo PRO con el lema «The chaos ends here» y una ilustración de lista de tareas",
      width: 1600,
      height: 803,
    },
    technologies: ["Next.js", "Express", "PostgreSQL", "JWT"],
    links: [{ type: "demo", href: "https://nextdo-pro.vercel.app/" }],
    featured: true,
  },
  {
    slug: "asistente-educativo-ia",
    title: "Asistente educativo con IA",
    summary: "Asistente basado en GPT-4o Mini para estudiantes de la Universidad Tecmilenio.",
    description:
      "Plataforma interactiva para el sector educativo que integra el modelo GPT-4o Mini de OpenAI mediante flujos de automatización en Zapier. Ayuda a estudiantes de la Universidad Tecmilenio a resolver dudas sobre horarios, gimnasio y carreras, ofreciendo orientación inmediata.",
    category: "ia",
    context: "Académico",
    image: {
      src: "/images/projects/asistente-educativo-ia.webp",
      alt: "Interfaz del asistente educativo con inteligencia artificial",
      width: 550,
      height: 296,
    },
    technologies: ["OpenAI GPT-4o Mini", "Zapier", "Automatización"],
    links: [{ type: "demo", href: "https://asistente-educativo.zapier.app/" }],
  },
  {
    slug: "chatbot-botpress",
    title: "Chatbot de seguridad industrial",
    summary: "Agente conversacional que simula a un supervisor de planta de una empresa metalúrgica.",
    description:
      "Agente conversacional desarrollado con Botpress, enfocado en la atención al usuario mediante una interfaz de chat moderna. Simula a un supervisor de planta de una empresa de metales y responde sobre qué hacer en emergencias, protocolos de seguridad o cómo contactar a un supervisor.",
    category: "ia",
    context: "Académico",
    image: {
      src: "/images/projects/chatbot-botpress.webp",
      alt: "Ventana de conversación del chatbot creado con Botpress",
      width: 1600,
      height: 857,
    },
    technologies: ["Botpress", "IA conversacional"],
    links: [
      {
        type: "demo",
        href: "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/23/02/20260123025137-I1NC6KEI.json",
      },
    ],
  },
  {
    slug: "portafolio-react",
    title: "Portafolio personal con React (Antigüo)",
    summary: "Versión anterior de este portafolio, construida con React y SCSS.",
    description:
      "Aplicación web que centraliza mi perfil de desarrollador, habilidades técnicas, proyectos y formas de contacto, funcionando como un currículum digital. Desarrollada con React, JavaScript, HTML, CSS y SCSS.",
    category: "web",
    context: "Personal",
    image: {
      src: "/images/projects/portafolio-react.webp",
      alt: "Página de inicio del portafolio personal desarrollado con React",
      width: 1600,
      height: 899,
    },
    technologies: ["React", "JavaScript", "SCSS"],
    links: [
      {
        type: "demo",
        href: "https://portafolio-personal-web-ang-git-90be1c-angels-projects-c01d6dbe.vercel.app",
      },
    ],
    legacy: true,
  },
  {
    slug: "diseno-nextdo-pro",
    title: "Diseño UI/UX de NextDo PRO",
    summary: "Prototipo interactivo en Figma de una aplicación de notas minimalista.",
    description:
      "Diseño UI/UX de una aplicación de notas enfocado en una experiencia intuitiva y minimalista. Incluye flujos de usuario, prototipado interactivo y componentes reutilizables que optimizan la navegación y la gestión de contenido.",
    category: "diseno",
    context: "Personal",
    image: {
      src: "/images/projects/nextdo-pro-figma.webp",
      alt: "Pantallas del diseño en Figma de NextDo PRO",
      width: 1600,
      height: 812,
    },
    technologies: ["Figma", "Prototipado", "Design System"],
    links: [
      {
        type: "design",
        href: "https://www.figma.com/design/y2tx0sGbH8eYD9aP1qTnQ7/NextDo-Pro--Lista-de-notas-?node-id=0-1&t=l4zBxOInyP6Sflwc-1",
      },
    ],
  },
  {
    slug: "diseno-portafolio",
    title: "Diseño de portafolio personal",
    summary: "Diseño en Figma de mi portafolio como currículum digital.",
    description:
      "Diseño en Figma que centraliza mi perfil de desarrollador, habilidades técnicas, proyectos destacados y formas de contacto, pensado como un currículum digital.",
    category: "diseno",
    context: "Personal",
    image: {
      src: "/images/projects/portafolio-figma.webp",
      alt: "Diseño en Figma del portafolio personal",
      width: 1600,
      height: 899,
    },
    technologies: ["Figma", "UI Design"],
    links: [
      {
        type: "design",
        href: "https://www.figma.com/design/ZlqWd6TzAqoCTEC9iBWYHA/Portafolio-web-Angel-Reyes?node-id=0-1&t=SssiFppp9YlV2sXJ-1",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

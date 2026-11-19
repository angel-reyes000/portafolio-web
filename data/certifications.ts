import type { Certification, Course, Issuer } from "@/types/content";

/** Perfil público con las insignias verificables. */
export const credlyProfileUrl = "https://www.credly.com/users/angel-reyes.377142c9";

/** Instituciones emisoras. El orden define el orden de los filtros. */
export const issuers: Issuer[] = [
  { id: "tecmilenio", name: "Universidad Tecmilenio", shortName: "Tecmilenio", credly: true },
  { id: "cisco", name: "Cisco Networking Academy", shortName: "Cisco", credly: true },
  { id: "ibm", name: "IBM SkillsBuild", shortName: "IBM", credly: true },
  { id: "aws", name: "AWS Academy", shortName: "AWS", credly: true },
  { id: "anthropic", name: "Anthropic Academy", shortName: "Anthropic" },
  { id: "udemy", name: "Udemy", shortName: "Udemy" },
  { id: "sap", name: "SAP Learning Hub", shortName: "SAP" },
  { id: "midudev", name: "midudev", shortName: "midudev" },
];

/**
 * Emisores que van primero en el filtro "Todas", en este orden. El resto sigue
 * con el orden de `certifications`. Dentro de cada emisor se respeta ese mismo orden.
 */
export const issuersFirstInAll: string[] = ["cisco", "ibm"];

/** Imagen de una certificación. Si no pasas `height`, se asume una insignia cuadrada. */
const badge = (file: string, title: string, width: number, height = width) => ({
  src: `/images/certifications/${file}.webp`,
  alt: `Insignia de ${title}`,
  width,
  height,
});

/**
 * Certificaciones con insignia. Para agregar una: optimiza la imagen hacia
 * /public/images/certifications y añade una entrada (más recientes primero).
 */
export const certifications: Certification[] = [
  { id: "midudev-aprende-sql", title: "Aprende SQL - Curso completo", issuerId: "midudev", year: 2026, credentialUrl: "https://certificados.midudev.com/ffce7e10-9886-478c-a1ff-0557bcbd6c46.pdf", image: badge("midudev-aprende-sql", "Aprende SQL", 855, 600) },
  { id: "anthropic-claude-code-101", title: "Claude Code 101", issuerId: "anthropic", year: 2026, image: badge("anthropic-claude-code-101", "Claude Code 101", 886, 602) },
  { id: "anthropic-introduccion-subagentes", title: "Introducción a los subagentes", issuerId: "anthropic", image: badge("anthropic-introduccion-subagentes", "Introducción a los subagentes", 266, 281) },
  { id: "udemy-langchain-langgraph-agentes", title: "Curso Completo: LangChain, LangGraph y Agentes IA con Python", issuerId: "udemy", year: 2026, credentialUrl: "https://ude.my/UC-ceb307e1-28e8-44cb-aaf6-d669f4dd451e", image: badge("udemy-langchain-langgraph-agentes", "LangChain, LangGraph y Agentes IA con Python", 1200, 893) },
  { id: "sap-basic-abap-programming", title: "Learning Basic ABAP Programming", issuerId: "sap", image: badge("sap-basic-abap-programming", "Learning Basic ABAP Programming", 207, 212) },
  { id: "aws-cloud-foundations", title: "AWS Academy Graduate - Cloud Foundations", issuerId: "aws", image: badge("aws-cloud-foundations", "AWS Cloud Foundations", 601) },
  { id: "aws-cloud-operations", title: "AWS Academy Graduate - Cloud Operations", issuerId: "aws", image: badge("aws-cloud-operations", "AWS Cloud Operations", 601) },
  { id: "ibm-ai-fundamentals", title: "Artificial Intelligence Fundamentals", issuerId: "ibm", year: 2026, image: badge("ibm-ai-fundamentals", "Artificial Intelligence Fundamentals", 422) },
  { id: "ibm-explore-emerging-tech", title: "Explore Emerging Tech", issuerId: "ibm", year: 2026, image: badge("ibm-explore-emerging-tech", "Explore Emerging Tech", 600) },
  { id: "ibm-web-development-fundamentals", title: "Web Development Fundamentals", issuerId: "ibm", image: badge("ibm-web-development-fundamentals", "Web Development Fundamentals", 600) },
  { id: "cisco-javascript-essentials-2", title: "JavaScript Essentials 2", issuerId: "cisco", image: badge("cisco-javascript-essentials-2", "JavaScript Essentials 2", 600) },
  { id: "cisco-javascript-essentials-1", title: "JavaScript Essentials 1", issuerId: "cisco", image: badge("cisco-javascript-essentials-1", "JavaScript Essentials 1", 600) },
  { id: "cisco-python-essentials-2", title: "Python Essentials 2", issuerId: "cisco", image: badge("cisco-python-essentials-2", "Python Essentials 2", 1200) },
  { id: "cisco-python-essentials-1", title: "Python Essentials 1", issuerId: "cisco", image: badge("cisco-python-essentials-1", "Python Essentials 1", 600) },
  { id: "cisco-html-essentials", title: "HTML Essentials", issuerId: "cisco", image: badge("cisco-html-essentials", "HTML Essentials", 600) },
  { id: "cisco-css-essentials", title: "CSS Essentials", issuerId: "cisco", image: badge("cisco-css-essentials", "CSS Essentials", 600) },
  { id: "cisco-cpp-essentials-1", title: "C++ Essentials 1", issuerId: "cisco", image: badge("cisco-cpp-essentials-1", "C++ Essentials 1", 600) },
  { id: "cisco-data-analytics-essentials", title: "Data Analytics Essentials", issuerId: "cisco", image: badge("cisco-data-analytics-essentials", "Data Analytics Essentials", 1200) },
  { id: "cisco-intro-data-science", title: "Introduction to Data Science", issuerId: "cisco", image: badge("cisco-intro-data-science", "Introduction to Data Science", 1200) },
  { id: "cisco-networking-basics", title: "Networking Basics", issuerId: "cisco", image: badge("cisco-networking-basics", "Networking Basics", 650) },
  { id: "tecmilenio-desarrollo-full-stack", title: "Desarrollo Full Stack", issuerId: "tecmilenio", image: badge("tecmilenio-desarrollo-full-stack", "Desarrollo Full Stack", 1080) },
  { id: "tecmilenio-computacion-nube", title: "Computación en la Nube", issuerId: "tecmilenio", distinction: "Sobresaliente", image: badge("tecmilenio-computacion-nube", "Computación en la Nube", 1080) },
  { id: "tecmilenio-apps-moviles", title: "Desarrollo de Aplicaciones Móviles", issuerId: "tecmilenio", distinction: "Sobresaliente", image: badge("tecmilenio-apps-moviles", "Desarrollo de Aplicaciones Móviles", 1080) },
  { id: "tecmilenio-fundamentos-devops", title: "Fundamentos de DevOps", issuerId: "tecmilenio", distinction: "Sobresaliente", image: badge("tecmilenio-fundamentos-devops", "Fundamentos de DevOps", 1080) },
  { id: "tecmilenio-ciencia-de-datos", title: "Ciencia de Datos", issuerId: "tecmilenio", distinction: "Sobresaliente", image: badge("tecmilenio-ciencia-de-datos", "Ciencia de Datos", 1080) },
  { id: "tecmilenio-probabilidad-estadistica", title: "Probabilidad y Estadística para la Ciencia de Datos", issuerId: "tecmilenio", distinction: "Sobresaliente", image: badge("tecmilenio-probabilidad-estadistica", "Probabilidad y Estadística para la Ciencia de Datos", 1080) },
  { id: "tecmilenio-estructura-datos", title: "Estructura de Datos", issuerId: "tecmilenio", distinction: "Sobresaliente", image: badge("tecmilenio-estructura-datos", "Estructura de Datos", 1080) },
  { id: "tecmilenio-poo", title: "Programación Orientada a Objetos", issuerId: "tecmilenio", image: badge("tecmilenio-poo", "Programación Orientada a Objetos", 1080) },
  { id: "tecmilenio-fundamentos-programacion", title: "Fundamentos de Programación", issuerId: "tecmilenio", image: badge("tecmilenio-fundamentos-programacion", "Fundamentos de Programación", 1080) },
  { id: "tecmilenio-bases-de-datos", title: "Bases de Datos", issuerId: "tecmilenio", image: badge("tecmilenio-bases-de-datos", "Bases de Datos", 1080) },
  { id: "tecmilenio-metodologias-agiles", title: "Metodologías Ágiles", issuerId: "tecmilenio", image: badge("tecmilenio-metodologias-agiles", "Metodologías Ágiles", 1080) },
  { id: "tecmilenio-ingenieria-software", title: "Ingeniería de Software", issuerId: "tecmilenio", image: badge("tecmilenio-ingenieria-software", "Ingeniería de Software", 1200) },
  { id: "tecmilenio-sistemas-operativos", title: "Sistemas Operativos", issuerId: "tecmilenio", image: badge("tecmilenio-sistemas-operativos", "Sistemas Operativos", 1080) },
  { id: "tecmilenio-gestion-redes", title: "Gestión de Redes", issuerId: "tecmilenio", image: badge("tecmilenio-gestion-redes", "Gestión de Redes", 1080) },
  { id: "tecmilenio-ciberseguridad", title: "Ciberseguridad", issuerId: "tecmilenio", image: badge("tecmilenio-ciberseguridad", "Ciberseguridad", 1200) },
  { id: "tecmilenio-ingles-5", title: "Inglés 5", issuerId: "tecmilenio", image: badge("tecmilenio-ingles-5", "Inglés 5", 1200) },
];

/** Cursos complementarios (sin insignia). */
export const courses: Course[] = [
  { title: "Programación Orientada a Objetos Profesional en Python", provider: "Edube Interactive" },
  { title: "Mejores prácticas y estandarización", provider: "Edube Interactive" },
  { title: "Programación de Interfaces Gráficas (GUI)", provider: "Edube Interactive" },
  { title: "Programación de Redes", provider: "Edube Interactive" },
  { title: "Procesamiento de archivos y comunicación con el entorno", provider: "Edube Interactive" },
  { title: "Claude 101", provider: "Anthropic Academy" },
  { title: "CRUD con Express (Node.js) y PostgreSQL", provider: "Udemy" },
  { title: "CRUD básico usando FastAPI", provider: "Udemy" },
  { title: "React", provider: "Documentación oficial (react.dev)" },
  { title: "Next.js", provider: "Documentación oficial (nextjs.org)" },
  { title: "TypeScript", provider: "Documentación oficial (typescriptlang.org)" },
  { title: "Tailwind CSS", provider: "Documentación oficial (tailwindcss.com)" },
  { title: "Figma: prototipado, componentes y diseño de interfaces", provider: "Autodidacta" },
];

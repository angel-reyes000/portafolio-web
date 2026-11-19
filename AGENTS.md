<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->

# Portafolio Web · Angel Reyes

Guía del proyecto para agentes y colaboradores. Migración y rediseño del portafolio original
(`portafolio_personal_web_angel_reyes`, Create React App + SCSS) a Next.js App Router.

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, `cacheComponents` + `partialPrefetching`) |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS v4 (tokens en `app/globals.css`) + CSS puro para efectos puntuales |
| Iconos | React Icons (`react-icons`), centralizados en `lib/icons.ts` |
| Fuentes | Geist Sans / Geist Mono vía `next/font` |
| Imágenes | `next/image` + WebP pre-optimizado en `/public/images` |

Comandos: `npm run dev` · `npm run build` · `npm run start` · `npm run lint`.

## Estructura

```
app/                       Rutas (una carpeta = una sección)
  layout.tsx               Layout raíz: metadatos globales, fuentes, header, footer
  template.tsx             Animación de entrada en cada navegación
  page.tsx                 /                  Inicio (hero, cifras, destacados, trayectoria, stack)
  sobre-mi/page.tsx        /sobre-mi          Biografía, datos clave, intereses, formación académica
  experiencia/page.tsx     /experiencia       Línea de tiempo profesional + proyectos destacados
  proyectos/page.tsx       /proyectos         Galería filtrable por categoría
  habilidades/page.tsx     /habilidades       Stack agrupado por categoría
  certificaciones/page.tsx /certificaciones   Insignias filtrables por emisor + modal + cursos
  contacto/page.tsx        /contacto          Canales de contacto + CV
  not-found.tsx            404
  sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, icon.png, apple-icon.png   SEO
components/
  ui/                      Primitivos: Container, Card, ButtonLink, Tag, Icon, PageHeader,
                           SectionHeading, FilterChips
  layout/                  SiteHeader, NavLinks, MobileMenu, SiteFooter, SkipLink
  projects/ experience/ skills/ certifications/ contact/ education/   Componentes por dominio
  shared/CtaBanner.tsx     Llamado a la acción al final de las páginas
  seo/PersonJsonLd.tsx     Datos estructurados schema.org/Person
data/                      ÚNICA fuente de contenido (ver abajo)
types/content.ts           Interfaces de todo el contenido
lib/                       icons.ts (registro de iconos), metadata.ts (createPageMetadata), utils.ts
public/images/             profile/, projects/, certifications/, background/ (WebP)
public/cv/                 angel-reyes-cv.pdf
scripts/optimize-images.mjs  Convierte imágenes a WebP optimizado
```

## Gestión de contenido

Todo el contenido vive en `data/` como objetos y arreglos tipados con `types/content.ts`.
Los componentes solo leen estos datos: **para cambiar contenido no se tocan componentes**.

| Archivo | Contenido | Se muestra en |
| --- | --- | --- |
| `data/site.ts` | Título, descripción, keywords, URL pública, ruta del CV | SEO global, botones de CV |
| `data/navigation.ts` | Menú principal (orden y rutas) | Header, footer, menú móvil, sitemap |
| `data/profile.ts` | Nombre, rol, resumen, párrafos "Sobre mí", foto, datos clave, intereses | Inicio, Sobre mí, footer, OG image, JSON-LD |
| `data/experience.ts` | Experiencia profesional (fechas `YYYY-MM`) | Inicio, Experiencia |
| `data/projects.ts` | Proyectos, categorías y enlaces (demo / repo / diseño) | Inicio (`featured`), Experiencia, Proyectos |
| `data/skills.ts` | Grupos de habilidades con iconos y nivel opcional | Inicio (stack), Habilidades |
| `data/certifications.ts` | Emisores, certificaciones con insignia, cursos, URL de Credly | Inicio (cifras), Certificaciones |
| `data/education.ts` | Formación académica | Inicio, Sobre mí |
| `data/contact.ts` | Canales de contacto y perfiles (`primary` = también en footer) | Contacto, footer, JSON-LD |

### Recetas

- **Nuevo proyecto**: `node scripts/optimize-images.mjs "<captura.png>" public/images/projects/<slug>.webp 1600`
  (imprime ancho×alto) → agrega un objeto a `projects` en `data/projects.ts` con esas dimensiones.
  `featured: true` lo muestra en Inicio y Experiencia; `legacy: true` lo marca como versión anterior.
  Una categoría nueva se añade a `ProjectCategory` (types) y a `projectCategories` (data); el filtro aparece solo.
- **Nueva certificación**: optimiza la imagen hacia `public/images/certifications/` (ancho máx. 1200)
  → agrega una entrada al inicio de `certifications` con `badge(archivo, título, ancho, alto)`; omite `alto` si es
  cuadrada. Los diplomas horizontales se muestran a todo el ancho del modal. Un emisor nuevo va en `issuers`;
  marca `credly: true` solo si sus insignias están en Credly. El enlace del modal es `credentialUrl` ("Ver
  credencial") si existe, si no Credly cuando el emisor lo tiene, y ninguno en otro caso. Conteos y filtros se
  calculan solos.
- **Nuevo curso**: agrega `{ title, provider }` a `courses`.
- **Nueva experiencia**: agrega un objeto al inicio de `experience` (omite `endDate` si es el puesto actual).
- **Nueva habilidad**: agrégala a su grupo en `data/skills.ts`. Si necesita icono, impórtalo en `lib/icons.ts`
  y usa su clave (las claves están tipadas: un icono inexistente es error de TypeScript).
- **Nuevo canal de contacto**: agrega un objeto en `data/contact.ts` (icono desde `lib/icons.ts`).
- **Nueva sección/ruta**: crea `app/<ruta>/page.tsx` con `export const metadata = createPageMetadata({...})`,
  usa `PageHeader` + `Container`, y agrega la ruta en `data/navigation.ts` (menú y sitemap se actualizan).
- **Actualizar CV**: reemplaza `public/cv/angel-reyes-cv.pdf` conservando el nombre.
- **Datos que caducan**: la edad y el semestre están escritos en `data/profile.ts` y `data/education.ts`;
  actualízalos cada semestre.

## Sistema de diseño

Generado con el skill `ui-ux-pro-max` (`--design-system`, dials variance 3 / motion 2 / density 3) y ajustado
para un tono formal:

- **Estilo**: Minimalismo / Swiss — mucho espacio, cuadrícula, alto contraste, bordes finos, sin sombras pesadas.
- **Patrón**: Portfolio Grid (hero nombre/rol → proyectos → sobre mí → contacto), con una ruta por sección.
- **Color**: paleta rojo / rojo oscuro tomada de la imagen de fondo original. Tokens CSS en `:root` de
  `app/globals.css`, expuestos a Tailwind como `bg`, `surface`, `subtle`, `fg`, `muted`, `border`,
  `border-strong`, `accent`, `accent-hover`, `accent-soft`, `primary`, `primary-hover`, `primary-fg`.
  - `accent` (`#f05252`): texto, iconos e indicadores en rojo.
  - `primary` (`#dc2626`, texto blanco): relleno de botones principales, logo y selección.
  - `bg` `#0b0405` y `surface` rojo casi negro semitransparente (deja ver el fondo detrás de las tarjetas).
  - Contraste verificado ≥ 4.5:1 (fg 18.7, muted 8.4, accent 5.8, blanco sobre primary 4.8).
  **No uses hex ni la paleta de Tailwind en componentes**: usa tokens.
- **Tipografía**: Geist Sans (texto y títulos, `tracking-tight` en títulos) + Geist Mono (etiquetas, fechas, conteos).
- **Tema**: oscuro único (`color-scheme: dark`); no hay conmutador claro/oscuro ni variante `dark:`.
- **Fondo de marca**: las esferas rojas del portafolio original, animadas: `components/layout/SphereBackground.tsx`
  (montado en `app/layout.tsx`) recrea `fondo.webp` en código y hace que las esferas vengan hacia la cámara sin
  fin. Cada esfera nace al fondo con opacidad 0, crece y sale por el borde; siempre hay ≥ 5 visibles. El aspecto
  (degradado del fondo y de cada esfera) está en `.sphere-field` / `.sphere` de `app/globals.css`; velocidad,
  cantidad y tamaños en `CONFIG` del componente. Debajo queda la imagen estática (`body::before`, `fondo.webp`
  ≥ 768 px y `fondo-movil.webp` en móvil), visible mientras carga el JS y con `prefers-reduced-motion`. Ambas
  capas llevan el velo `--veil` para el contraste del texto; las secciones son transparentes. Para más o menos
  visibilidad del fondo, ajusta la opacidad de `--veil`.
- **Movimiento**: fondo de esferas animado, transiciones de 200 ms en hover y una entrada `fade-up` de 400 ms
  por página; todo se desactiva con `prefers-reduced-motion`.
- **Componentes base**: tarjetas `rounded-xl border bg-surface`; botones `ButtonLink` (primary/secondary/ghost);
  etiquetas `Tag` en mono; secciones con `SectionHeading` (eyebrow mono + h2).

## Convenciones

- Server Components por defecto. `"use client"` solo para interacción: `NavLinks` (ruta activa), `MobileMenu`,
  `FilterChips`, `ProjectExplorer`, `CertificationExplorer`, `CopyButton`, `SphereBackground` (animación del fondo).
- Un solo `<h1>` por página (lo da `PageHeader` o el hero).
- Imágenes siempre con `next/image`, contenedor con `aspect-*` + `fill` + `sizes` (evita CLS). Usa `preload`
  (no `priority`, deprecado en Next 16) solo en la imagen principal visible. Las calidades permitidas se declaran
  en `next.config.ts` (`images.qualities`).
- Enlaces externos con `target="_blank" rel="noopener noreferrer"`; `ButtonLink` lo resuelve solo.
- `ButtonLink` ya incluye `inline-flex`: para ocultarlo por breakpoint envuélvelo en un contenedor con `hidden lg:block`.
- Con `cacheComponents`, no uses `new Date()`/`Math.random()` en el render de servidor fuera de `"use cache"`
  (ver `CopyrightYear` en `SiteFooter`).
- Elementos `position: fixed` dentro del header se renderizan con portal: su `backdrop-blur` crea un bloque
  contenedor. Ver `MobileMenu`.
- Accesibilidad: foco visible global, enlace "Saltar al contenido", `aria-current` en navegación, `aria-pressed`
  en filtros, iconos decorativos con `aria-hidden`, objetivos táctiles ≥ 40 px, contraste ≥ 4.5:1.

## SEO

- Metadatos globales en `app/layout.tsx` (`metadataBase`, plantilla de título, Open Graph, Twitter).
- Cada ruta usa `createPageMetadata()` (título, descripción, canónica, OG).
- `sitemap.ts` se genera desde `data/navigation.ts`; además `robots.ts`, `manifest.ts`, `opengraph-image.tsx`
  (generada desde `data/profile.ts`) e `icon.png` / `apple-icon.png` (desde la foto de perfil).
- JSON-LD `Person` en la página de inicio.
- **Antes de desplegar** define `NEXT_PUBLIC_SITE_URL` (p. ej. `https://tu-dominio.com`) para URLs absolutas correctas.

## Migración desde el proyecto original

| Original (CRA) | Nuevo |
| --- | --- |
| Estado `seccion` + `switch` en `App.js` | Rutas reales del App Router |
| Datos incrustados en cada `.jsx` | `data/*.ts` tipados |
| SCSS por componente | Tailwind + tokens + `globals.css` |
| PNG sin optimizar (~9 MB) | WebP (~1.3 MB) + `next/image` (AVIF/WebP responsivo) |
| Iconos PNG de Gmail/WhatsApp | React Icons |
| `console.log` en `useEffect` | Eliminados |

Contenido conservado: 10 proyectos (con enlaces a demo, GitHub y Figma), experiencia en NSG - Engineering,
31 certificaciones (Tecmilenio, Cisco, IBM, AWS), perfil de Credly, texto "Sobre mí", habilidades, contacto y CV.
Añadido desde el CV: nombre completo, ubicación, formación 2023–2027 y cursos complementarios.

Actualización con el CV 2026 (`public/cv/angel-reyes-cv.pdf`): experiencia en Schneider Electric, Nobum, Prologix y
NSG - Engineering; rol "Desarrollador Full Stack"; séptimo semestre; 4 certificaciones nuevas (Anthropic, Udemy,
SAP, midudev) y cursos de Claude 101, Introducción a los subagentes, Next.js, TypeScript, Tailwind CSS, Express + PostgreSQL y FastAPI.
También: proyectos Wallet AI y Nova AI (destacados junto con NextDo PRO; el asistente educativo y el chatbot de
Botpress siguen en /proyectos sin destacar) y habilidades del CV (TypeScript, FastAPI, Django, SQLAlchemy,
LangChain, LangGraph, ChromaDB, Tailwind CSS, React Native, Claude Code y especialidades en agentes de IA, RAG y ERP).
Fondos `Fondo portafolio.png` y `Fondos cel.png` conservados como WebP (ver "Fondo de marca").
No migrados: iconos PNG de contacto (sustituidos por React Icons).

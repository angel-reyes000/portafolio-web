# Portafolio Web · Angel Reyes

Portafolio personal construido con Next.js (App Router), TypeScript, Tailwind CSS y React Icons.

```bash
npm install
npm run dev     # desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # servir el build
```

Todo el contenido (proyectos, experiencia, habilidades, certificaciones, formación, contacto y "Sobre mí")
se edita en la carpeta `data/`, sin tocar componentes. Consulta [`AGENTS.md`](./AGENTS.md) para la
arquitectura, el sistema de diseño y las recetas para agregar contenido.

Antes de desplegar, define la variable de entorno `NEXT_PUBLIC_SITE_URL` con el dominio público.

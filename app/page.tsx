import Link from "next/link";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { EducationItem } from "@/components/education/EducationItem";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, issuers } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { aos, stagger } from "@/lib/aos";
import { skillGroups } from "@/data/skills";

const stats = [
  { value: projects.length, label: "Proyectos" },
  { value: certifications.length, label: "Certificaciones" },
  { value: issuers.length, label: "Instituciones emisoras" },
];

const stack = skillGroups
  .filter((group) => group.id !== "especialidades")
  .flatMap((group) => group.skills)
  .filter((skill) => skill.icon);

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />

      {/* Hero */}
      <section className="border-b border-border" aria-labelledby="hero-title">
        <Container className="py-16 sm:py-24 lg:py-28">
          <div>
            <p {...aos("fade-up")} className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.role}
            </p>
            <h1 {...aos("fade-up", 100)} id="hero-title" className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl">
              Hola, soy {profile.displayName}.
            </h1>
            <p {...aos("fade-up", 200)} className="mt-4 max-w-xl text-xl font-medium tracking-tight text-fg/80 sm:text-2xl">{profile.headline}</p>
            <p {...aos("fade-up", 300)} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>

            <div {...aos("fade-up", 400)} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/proyectos" icon={FiArrowRight} iconPosition="end">
                Ver proyectos
              </ButtonLink>
              <ButtonLink href={siteConfig.cv.href} download={siteConfig.cv.downloadName} variant="secondary" icon={FiDownload}>
                Descargar CV
              </ButtonLink>
            </div>

            <p {...aos("fade-up", 500)} className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
              <FiMapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </Container>
      </section>

      {/* Cifras */}
      <section aria-label="Resumen" className="border-b border-border">
        <Container>
          <dl className="grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
            {stats.map((stat, index) => (
              <div key={stat.label} {...aos("fade-up", stagger(index, 4))} className="px-2 py-8 md:px-8 md:first:pl-0">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-fg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Proyectos destacados */}
      <section className="py-16 sm:py-24" aria-labelledby="destacados">
        <Container>
          <SectionHeading
            id="destacados"
            eyebrow="Trabajo seleccionado"
            title="Proyectos destacados"
            description="Una muestra de aplicaciones web, inteligencia artificial y automatización que he desarrollado."
            action={{ label: "Ver todos los proyectos", href: "/proyectos" }}
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <li key={project.slug} {...aos("fade-up", stagger(index))}>
                <ProjectCard project={project} variant="compact" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Trayectoria */}
      <section className="border-y border-border bg-surface/50 py-16 sm:py-24" aria-labelledby="trayectoria">
        <Container>
          <SectionHeading
            id="trayectoria"
            eyebrow="Trayectoria"
            title="Experiencia y formación"
            action={{ label: "Ver experiencia completa", href: "/experiencia" }}
          />
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="timeline flex flex-col gap-6">
              {experience.slice(0, 2).map((item) => (
                <ExperienceItem key={item.id} item={item} variant="compact" />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {education.map((item) => (
                <EducationItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stack */}
      <section className="py-16 sm:py-24" aria-labelledby="stack">
        <Container>
          <SectionHeading
            id="stack"
            eyebrow="Stack"
            title="Tecnologías con las que trabajo"
            action={{ label: "Ver habilidades", href: "/habilidades" }}
          />
          <ul className="flex flex-wrap gap-2.5">
            {stack.map((skill, index) => (
              <li
                key={skill.name}
                {...aos("zoom-in", stagger(index, 8, 40))}
                className="flex h-11 items-center gap-2.5 rounded-lg border border-border bg-surface px-4 text-sm font-medium text-fg"
              >
                {skill.icon && <Icon name={skill.icon} className="size-[18px] shrink-0 text-muted" />}
                {skill.name}
              </li>
            ))}
          </ul>
          <p {...aos("fade-up")} className="mt-8 text-sm text-muted">
            Respaldado por {certifications.length} certificaciones de{" "}
            {issuers.map((issuer) => issuer.shortName).join(", ")}.{" "}
            <Link href="/certificaciones" className="font-medium text-accent hover:text-accent-hover">
              Ver certificaciones
            </Link>
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

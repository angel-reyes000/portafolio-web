import { CtaBanner } from "@/components/shared/CtaBanner";
import { SkillGroupCard } from "@/components/skills/SkillGroupCard";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { skillGroups } from "@/data/skills";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Habilidades",
  description:
    "Habilidades técnicas y stack: Python, JavaScript, SQL, React, Next.js, Odoo, PyQt6, D3.js, Docker, AWS, Git, Figma e inteligencia artificial aplicada.",
  path: "/habilidades",
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Habilidades"
        title="Habilidades técnicas y stack"
        description="Lenguajes, frameworks y herramientas que uso para diseñar, construir y desplegar software."
      />

      <section className="py-16 sm:py-20" aria-label="Grupos de habilidades">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroupCard key={group.id} group={group} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

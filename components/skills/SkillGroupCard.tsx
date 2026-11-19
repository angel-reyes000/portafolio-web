import type { SkillGroup } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <Card as="section" className="flex h-full flex-col p-6" >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <Icon name={group.icon} className="size-5" />
        </span>
        <h2 className="text-lg font-semibold tracking-tight text-fg">{group.title}</h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{group.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-subtle/60 px-3 text-sm text-fg"
          >
            {skill.icon && <Icon name={skill.icon} className="size-4 text-muted" />}
            {skill.name}
            {skill.level && (
              <span className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-xs text-accent">{skill.level}</span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}

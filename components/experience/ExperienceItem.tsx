import { FiCalendar } from "react-icons/fi";
import type { Experience } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/Tag";
import { formatDateRange, monthsBetween } from "@/lib/utils";

interface ExperienceItemProps {
  item: Experience;
  /** "compact" oculta los logros (vista previa en inicio). */
  variant?: "compact" | "full";
}

export function ExperienceItem({ item, variant = "full" }: ExperienceItemProps) {
  const months = item.endDate ? monthsBetween(item.startDate, item.endDate) : null;

  return (
    <article className="relative pl-8">
      <span
        className="absolute top-1.5 left-0 size-[15px] rounded-full border-4 border-bg bg-accent ring-1 ring-border-strong"
        aria-hidden="true"
      />
      <Card className="p-5 sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-fg sm:text-xl">{item.role}</h3>
            <p className="mt-1 text-base text-muted">
              {item.company}
              {item.employmentType && <span className="text-muted"> · {item.employmentType}</span>}
            </p>
          </div>
          <p className="inline-flex shrink-0 items-center gap-2 font-mono text-xs text-muted sm:pt-1.5">
            <FiCalendar className="size-3.5" aria-hidden="true" />
            <span className="capitalize">{formatDateRange(item.startDate, item.endDate)}</span>
            {months && <span>· {months} meses</span>}
          </p>
        </div>

        {item.summary && <p className="mt-4 leading-relaxed text-muted">{item.summary}</p>}

        {variant === "full" && (
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {item.achievements.map((achievement) => (
              <li key={achievement.title} className="rounded-lg border border-border bg-subtle/60 p-4">
                <p className="text-sm font-semibold text-fg">{achievement.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{achievement.description}</p>
              </li>
            ))}
          </ul>
        )}

        <TagList items={item.technologies} className="mt-6" />
      </Card>
    </article>
  );
}

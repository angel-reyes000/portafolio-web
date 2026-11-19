import { FiBookOpen } from "react-icons/fi";
import type { Education } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { aos } from "@/lib/aos";

export function EducationItem({ item }: { item: Education }) {
  return (
    <Card as="article" {...aos("fade-up")} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <FiBookOpen className="size-5" aria-hidden="true" />
      </span>
      <div className="flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold tracking-tight text-fg">{item.degree}</h3>
          <p className="font-mono text-xs text-muted">
            {item.startYear} — {item.endYear ?? "Actualidad"}
          </p>
        </div>
        <p className="mt-1 text-muted">{item.institution}</p>
        <p className="mt-3 inline-flex rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{item.status}</p>
        {item.description && <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>}
      </div>
    </Card>
  );
}

"use client";

import { cn } from "@/lib/utils";

export interface FilterOption<T extends string> {
  value: T;
  label: string;
  count: number;
}

interface FilterChipsProps<T extends string> {
  label: string;
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

/** Grupo de botones de filtro reutilizable (proyectos, certificaciones…). */
export function FilterChips<T extends string>({ label, options, value, onChange }: FilterChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={active}
            className={cn(
              "inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200",
              active
                ? "border-fg bg-fg text-bg"
                : "border-border bg-surface text-muted hover:border-border-strong hover:text-fg",
            )}
          >
            {option.label}
            <span className={cn("font-mono text-xs", active ? "text-bg/70" : "text-muted")}>{option.count}</span>
          </button>
        );
      })}
    </div>
  );
}

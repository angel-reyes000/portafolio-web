/** Une clases condicionales ignorando valores falsy. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

/** Convierte "YYYY-MM" en "sep 2025". Determinista (sin depender del locale del servidor). */
export function formatMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

/** "sep 2025 — mar 2026" o "sep 2025 — Actualidad". */
export function formatDateRange(start: string, end?: string): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Actualidad"}`;
}

/** Duración aproximada en meses entre dos fechas "YYYY-MM" (inclusive). */
export function monthsBetween(start: string, end: string): number {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  return (ey - sy) * 12 + (em - sm) + 1;
}

export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

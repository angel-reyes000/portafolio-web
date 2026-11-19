/** Animaciones de AOS usadas en el sitio. */
export type AosAnimation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "zoom-in";

/** Atributos de AOS para esparcir en un elemento (o en `Card`). */
export interface AosAttributes {
  "data-aos"?: AosAnimation;
  "data-aos-delay"?: number;
  /**
   * AOS añade las clases `aos-init` / `aos-animate` al DOM; si lo hace antes de que React hidrate ese
   * nodo, React avisaría de una diferencia en `className`. Las conserva, así que el aviso se suprime.
   */
  suppressHydrationWarning?: boolean;
}

/**
 * Atributos de AOS para un elemento. `delay` en ms. Usa siempre este helper en lugar de escribir
 * `data-aos` a mano, para que incluya `suppressHydrationWarning`.
 * @example <div {...aos("fade-up", 100)} />
 */
export function aos(animation: AosAnimation = "fade-up", delay = 0): AosAttributes {
  return {
    "data-aos": animation,
    ...(delay > 0 ? { "data-aos-delay": delay } : {}),
    suppressHydrationWarning: true,
  };
}

/** Retraso escalonado para elementos de una cuadrícula (se reinicia cada `columns`). */
export function stagger(index: number, columns = 3, step = 100): number {
  return (index % columns) * step;
}

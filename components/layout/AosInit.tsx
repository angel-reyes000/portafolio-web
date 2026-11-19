"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Inicializa AOS (Animate On Scroll) una sola vez y recalcula los elementos en cada navegación.
 * Los elementos se animan con `{...aos("fade-up")}` (ver `lib/aos.ts`).
 * Con `prefers-reduced-motion` las animaciones se anulan en `app/aos.css`.
 */
export function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      offset: 40,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
}

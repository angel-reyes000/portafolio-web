"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { siteConfig } from "@/data/site";
import { NavLinks } from "./NavLinks";

/** Menú desplegable para pantallas menores a `lg`. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const mql = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mql.matches && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    mql.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mql.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg text-fg transition-colors duration-200 hover:bg-subtle"
      >
        {open ? <FiX className="size-5" aria-hidden="true" /> : <FiMenu className="size-5" aria-hidden="true" />}
      </button>

      {/* Portal: el backdrop-filter de la cabecera crearía un bloque contenedor para `fixed`. */}
      {open &&
        createPortal(
          <div
            id={panelId}
            className="animate-fade-up fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 overflow-y-auto border-t border-border bg-bg lg:hidden"
          >
            <nav aria-label="Navegación principal" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
              <NavLinks orientation="vertical" onNavigate={() => setOpen(false)} />
              <div className="mt-6 border-t border-border pt-6">
                <a
                  href={siteConfig.cv.href}
                  download={siteConfig.cv.downloadName}
                  className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 font-medium text-primary-fg transition-colors duration-200 hover:bg-primary-hover"
                >
                  <FiDownload className="size-4" aria-hidden="true" />
                  Descargar CV
                </a>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}

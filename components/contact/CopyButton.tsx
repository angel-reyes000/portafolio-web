"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

/** Copia un valor al portapapeles con confirmación visual y anunciada. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copiado` : `Copiar ${label}`}
      title={copied ? "Copiado" : "Copiar"}
      className="relative z-10 inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:bg-subtle hover:text-fg"
    >
      {copied ? <FiCheck className="size-4 text-accent" aria-hidden="true" /> : <FiCopy className="size-4" aria-hidden="true" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copiado al portapapeles" : ""}
      </span>
    </button>
  );
}

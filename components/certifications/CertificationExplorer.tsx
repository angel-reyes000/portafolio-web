"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiX, FiZoomIn } from "react-icons/fi";
import type { Certification, Issuer } from "@/types/content";
import { aos, stagger } from "@/lib/aos";
import { FilterChips, type FilterOption } from "@/components/ui/FilterChips";

interface CertificationExplorerProps {
  certifications: Certification[];
  issuers: Issuer[];
  credlyUrl: string;
  /** Emisores que aparecen primero en "Todas", en ese orden. */
  firstInAll?: string[];
}

export function CertificationExplorer({ certifications, issuers, credlyUrl, firstInAll = [] }: CertificationExplorerProps) {
  const [filter, setFilter] = useState<string>("todas");
  const [selected, setSelected] = useState<Certification | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const issuerById = new Map(issuers.map((issuer) => [issuer.id, issuer]));

  const options: FilterOption<string>[] = [
    { value: "todas", label: "Todas", count: certifications.length },
    ...issuers
      .map((issuer) => ({
        value: issuer.id,
        label: issuer.shortName,
        count: certifications.filter((cert) => cert.issuerId === issuer.id).length,
      }))
      .filter((option) => option.count > 0),
  ];

  // En "Todas", los emisores de `firstInAll` van primero; el orden estable conserva el resto.
  const rank = (cert: Certification) => {
    const index = firstInAll.indexOf(cert.issuerId);
    return index === -1 ? firstInAll.length : index;
  };
  const visible =
    filter === "todas"
      ? [...certifications].sort((a, b) => rank(a) - rank(b))
      : certifications.filter((cert) => cert.issuerId === filter);

  // Abre el modal cuando ya existe contenido, para que el foco inicial funcione.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected && dialog && !dialog.open) dialog.showModal();
  }, [selected]);

  function open(cert: Certification) {
    setSelected(cert);
  }

  function close() {
    dialogRef.current?.close();
  }

  const selectedIssuer = selected ? issuerById.get(selected.issuerId) : undefined;
  const verifyLink = selected?.credentialUrl
    ? { href: selected.credentialUrl, label: "Ver credencial" }
    : selectedIssuer?.credly
      ? { href: credlyUrl, label: "Ver insignias en Credly" }
      : null;

  return (
    <div>
      <div {...aos("fade-up")}>
        <FilterChips label="Filtrar certificaciones por institución" options={options} value={filter} onChange={setFilter} />
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} certificaciones mostradas
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((cert, index) => (
          <li key={cert.id} {...aos("fade-up", stagger(index, 4, 75))}>
            <button
              type="button"
              onClick={() => open(cert)}
              disabled={!cert.image}
              className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-surface text-left transition-colors duration-200 hover:border-border-strong disabled:cursor-default"
            >
              {cert.image && (
                <span className="relative block aspect-square border-b border-border bg-subtle/60">
                  <Image
                    src={cert.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
                    className="object-contain p-6 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-md bg-surface/90 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <FiZoomIn className="size-4" aria-hidden="true" />
                  </span>
                </span>
              )}
              <span className="flex flex-1 flex-col gap-1 p-4">
                <span className="text-sm leading-snug font-semibold text-fg">{cert.title}</span>
                <span className="text-xs text-muted">{issuerById.get(cert.issuerId)?.name}</span>
                {cert.distinction && (
                  <span className="mt-1 inline-flex w-fit rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                    {cert.distinction}
                  </span>
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby="cert-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {selected && (
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-border p-5">
              <div>
                <h2 id="cert-dialog-title" className="text-lg font-semibold tracking-tight text-fg">
                  {selected.title}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {selectedIssuer?.name}
                  {selected.year && ` · ${selected.year}`}
                  {selected.distinction && ` · ${selected.distinction}`}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar"
                autoFocus
                className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:bg-subtle hover:text-fg"
              >
                <FiX className="size-5" aria-hidden="true" />
              </button>
            </div>
            {selected.image && (
              <div
                className="relative mx-auto w-full bg-subtle/60"
                style={{ aspectRatio: `${selected.image.width} / ${selected.image.height}`, maxWidth: dialogImageMaxWidth(selected) }}
              >
                <Image
                  src={selected.image.src}
                  alt={selected.image.alt}
                  fill
                  sizes="736px"
                  quality={90}
                  className="object-contain p-6"
                />
              </div>
            )}
            {verifyLink && (
              <div className="border-t border-border p-5">
                <a
                  href={verifyLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  {verifyLink.label}
                  <FiExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}

/** Las insignias pequeñas no se amplían más allá de un tamaño razonable; los diplomas usan todo el ancho. */
function dialogImageMaxWidth(cert: Certification): string {
  const image = cert.image;
  if (!image) return "100%";
  return image.width > image.height ? "100%" : "28rem";
}

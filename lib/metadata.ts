import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: `/${string}`;
}

/** Genera metadatos consistentes (canónica, Open Graph y Twitter) para cada ruta. */
export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url: path,
    },
    twitter: {
      title: `${title} · ${siteConfig.name}`,
      description,
    },
  };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0405",
    theme_color: "#0b0405",
    lang: "es-MX",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}

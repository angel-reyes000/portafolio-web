import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen Open Graph generada a partir de los datos del perfil. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 85% 20%, #7f1d1d 0%, #2a0a0c 35%, #0b0405 70%)",
          color: "#fdf3f3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#dc2626",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            AR
          </div>
          <div style={{ fontSize: 28, color: "#bba0a3" }}>Portafolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.displayName}</div>
          <div style={{ fontSize: 40, color: "#f05252", marginTop: 12 }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#bba0a3", marginTop: 28, maxWidth: 900 }}>{profile.headline}</div>
        </div>
      </div>
    ),
    size,
  );
}

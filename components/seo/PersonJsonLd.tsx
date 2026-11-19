import { contactChannels } from "@/data/contact";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { skillGroups } from "@/data/skills";

/** Datos estructurados schema.org/Person para buscadores. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.displayName,
    jobTitle: profile.role,
    description: profile.summary,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.photo.src}`,
    address: { "@type": "PostalAddress", addressLocality: "García", addressRegion: "Nuevo León", addressCountry: "MX" },
    alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.institution })),
    knowsAbout: skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
    sameAs: contactChannels.filter((c) => c.href.startsWith("https://") && c.id !== "whatsapp").map((c) => c.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

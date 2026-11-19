import type { ContactChannel } from "@/types/content";
import { credlyProfileUrl } from "./certifications";

/**
 * Canales de contacto y perfiles. `primary: true` los muestra también
 * en el pie de página. `icon` debe existir en `lib/icons.ts`.
 */
export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Correo electrónico",
    value: "ar731684@gmail.com",
    href: "mailto:ar731684@gmail.com",
    icon: "mail",
    description: "La mejor vía para propuestas y oportunidades laborales.",
    primary: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+52 81 3101 3783",
    href: "https://wa.me/528131013783",
    icon: "whatsapp",
    description: "Para una conversación rápida.",
    primary: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "angel-reyes000",
    href: "https://github.com/angel-reyes000",
    icon: "github",
    description: "Repositorios y código fuente de mis proyectos.",
    primary: true,
  },
  {
    id: "credly",
    label: "Credly",
    value: "Insignias verificadas",
    href: credlyProfileUrl,
    icon: "credly",
    description: "Certificaciones verificables de Cisco, IBM y AWS.",
    primary: true,
  },
];

export const primaryContact = contactChannels.find((channel) => channel.id === "email")!;

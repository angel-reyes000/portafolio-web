import { FiArrowUpRight } from "react-icons/fi";
import type { ContactChannel } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { CopyButton } from "./CopyButton";

/** Tarjeta de canal de contacto. Toda la tarjeta es clicable (enlace estirado). */
export function ContactChannelCard({ channel }: { channel: ContactChannel }) {
  const external = !channel.href.startsWith("mailto:");
  const copyable = channel.id === "email" || channel.id === "whatsapp";

  return (
    <Card as="li" interactive className="group relative flex items-start gap-4 p-5 sm:p-6">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon name={channel.icon} className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h2 className="text-sm font-medium text-muted">{channel.label}</h2>
        <a
          href={channel.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-0.5 block truncate text-base font-semibold text-fg after:absolute after:inset-0 after:rounded-xl group-hover:text-accent"
        >
          {channel.value}
        </a>
        {channel.description && <p className="mt-1 text-sm leading-relaxed text-muted">{channel.description}</p>}
      </div>
      {copyable ? (
        <CopyButton value={channel.value} label={channel.label} />
      ) : (
        <FiArrowUpRight
          className="mt-1 size-5 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
          aria-hidden="true"
        />
      )}
    </Card>
  );
}

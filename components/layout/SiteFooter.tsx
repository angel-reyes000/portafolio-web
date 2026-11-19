import { cacheLife } from "next/cache";
import Link from "next/link";
import { contactChannels } from "@/data/contact";
import { mainNav } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { isExternal } from "@/lib/utils";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  const channels = contactChannels.filter((channel) => channel.primary);

  return (
    <footer className="mt-auto border-t border-border">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="text-base font-semibold text-fg">{profile.displayName}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{profile.headline}</p>
        </div>

        <nav aria-label="Secciones">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Secciones</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors duration-200 hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Contacto</p>
          <ul className="flex flex-col gap-2">
            {channels.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
                  {...(isExternal(channel.href) && !channel.href.startsWith("mailto:")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon name={channel.icon} className="size-4" />
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {profile.fullName}. Todos los derechos reservados.
          </p>
          <p>Hecho con Next.js, TypeScript y Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  );
}

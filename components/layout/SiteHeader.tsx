import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-full items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${profile.displayName} — Inicio`}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-mono text-sm font-semibold text-primary-fg">
            {profile.initials.replace(/\./g, "")}
          </span>
          <span className="hidden flex-col leading-tight whitespace-nowrap sm:flex lg:hidden xl:flex">
            <span className="text-sm font-semibold text-fg">{profile.displayName}</span>
            <span className="text-xs text-muted">{profile.role}</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden lg:block">
            <ButtonLink href={siteConfig.cv.href} download={siteConfig.cv.downloadName} icon={FiDownload} size="sm">
              CV
            </ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

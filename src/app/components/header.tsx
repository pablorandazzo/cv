import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { DownloadCvButton } from "@/components/download-cv-button";
import { GitHubIcon } from "@/components/icons/github-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { XIcon } from "@/components/icons/x-icon";
import { RESUME_DATA } from "@/data/resume-data";
import {
  type ContactIcon,
  type ContactLink,
  getContactLinks,
} from "@/lib/resume";

const ICON_MAP: Record<
  ContactIcon,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
};

interface LocationLinkProps {
  location: string;
  locationLink: string;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty text-[13px] text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <MapPinIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  iconType: ContactIcon;
  label: string;
}

function SocialButton({ href, iconType, label }: SocialButtonProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <a
      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconComponent className="size-4" aria-hidden="true" />
    </a>
  );
}

interface ContactLinksProps {
  links: ContactLink[];
}

function ContactButtons({ links }: ContactLinksProps) {
  return (
    <ul className="flex gap-x-1" aria-label="Contact links">
      {links.map(({ href, label, icon }) => (
        <li key={label}>
          <SocialButton href={href} iconType={icon} label={label} />
        </li>
      ))}
    </ul>
  );
}

function PrintContact({ links }: ContactLinksProps) {
  return (
    <div className="hidden flex-wrap gap-x-2 text-sm text-muted-foreground print:flex print:text-[12px] print:leading-snug">
      {links.map(({ label, href, text }, index) => (
        <span key={label} className="inline-flex gap-x-2">
          <a className="text-foreground underline" href={href}>
            {text}
          </a>
          {index < links.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const contactLinks = getContactLinks(RESUME_DATA);

  return (
    <header className="flex items-center justify-between gap-x-6">
      <div className="flex-1 space-y-2.5 print:space-y-1">
        <h1
          className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl print:text-[23px]"
          id="resume-name"
        >
          {RESUME_DATA.name}
        </h1>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-body print:text-[12px] print:leading-snug">
          {RESUME_DATA.about}
        </p>

        <LocationLink
          location={RESUME_DATA.location}
          locationLink={RESUME_DATA.locationLink}
        />

        <div className="flex flex-wrap items-center gap-x-2 pt-1 print:hidden">
          <ContactButtons links={contactLinks} />
          <DownloadCvButton />
        </div>

        <PrintContact links={contactLinks} />
      </div>
      <Image
        className="size-28 shrink-0 rounded-2xl bg-muted object-cover ring-1 ring-muted sm:size-32 print:size-20"
        src={RESUME_DATA.avatar}
        alt={`Foto de perfil de ${RESUME_DATA.name}`}
        width={112}
        height={112}
        preload={true}
      />
    </header>
  );
}

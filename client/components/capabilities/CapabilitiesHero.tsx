import { Button } from "@/components/ui/button";
import {
  Building2,
  FileText,
  MapPin,
  Mail,
  Phone,
  Shield,
} from "lucide-react";
import type { CompanyConfig } from "../../../shared/companyProfile";

interface CapabilitiesHeroProps {
  site: CompanyConfig;
  pdfHref: string;
}

export function CapabilitiesHero({ site, pdfHref }: CapabilitiesHeroProps) {
  const identifierBadges = [
    { label: "CAGE", value: site.identifiers.cage },
    { label: "UEI", value: site.identifiers.uei },
    { label: "D-U-N-S", value: site.identifiers.duns },
  ];

  const contactTiles = [
    {
      icon: MapPin,
      label: "Headquarters",
      value: `${site.address.street} ${site.address.streetUnit}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
    },
    {
      icon: Building2,
      label: "Website",
      value: site.url,
      href: site.url,
    },
    {
      icon: Mail,
      label: "Primary Email",
      value: site.contact.emailPrimary,
      href: `mailto:${site.contact.emailPrimary}`,
    },
    {
      icon: Phone,
      label: "Primary Phone",
      value: site.contact.phonePrimary,
      href: `tel:${site.contact.phonePrimary}`,
    },
  ];

  return (
    <section
      id="capabilities-hero"
      className="bg-gradient-to-br from-onealgo-blue-950 via-onealgo-blue-900 to-onealgo-blue-800 py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-100">
            Capabilities Statement
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            One Algorithm LLC — Capabilities Statement
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Modernizing Federal Systems Securely and Intelligently
          </p>
          <div className="space-y-4 text-lg text-blue-100 max-w-5xl mx-auto">
            <p>
              Woman- and Minority-Owned Small Business (WOSB/MBE pending)
              delivering secure, standards-aligned technology and compliance
              solutions to federal and commercial clients nationwide.
            </p>
            <p>
              Mission: enable government and enterprise customers to modernize
              securely, efficiently, and accessibly—meeting all compliance and
              mission objectives.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-blue-100">
            {identifierBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm"
              >
                <Shield className="w-4 h-4" />
                {badge.label}: {badge.value}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 text-left text-blue-100 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {contactTiles.map((tile) => (
            <div
              key={tile.label}
              className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3"
            >
              <tile.icon className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-200">
                  {tile.label}
                </p>
                {tile.href ? (
                  <a
                    href={tile.href}
                    target={tile.href.startsWith("http") ? "_blank" : undefined}
                    rel={tile.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:text-onealgo-orange-300 transition-colors"
                  >
                    {tile.value}
                  </a>
                ) : (
                  <p>{tile.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center">
          <Button
            asChild
            size="lg"
            className="bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white"
          >
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              download
              aria-label="Download the One Algorithm capabilities statement PDF"
              className="inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Capabilities Statement (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "react-router-dom";
import { useSEO, getCanonicalUrl } from "../hooks/use-seo";
import {
  StructuredData,
  createOrganizationSchema,
} from "../components/StructuredData";
import {
  coreCompetencies,
  differentiators,
  projectHighlights,
  federalExperience,
  complianceProfile,
  strategicPartnerships,
  keyPersonnel,
  mentorProtegeHighlights,
  jointVenturePartner,
} from "../../shared/capabilities-data";
import { siteConfig } from "../lib/siteConfig";
import { CapabilitiesHero } from "../components/capabilities/CapabilitiesHero";
import { SectionShell } from "../components/capabilities/SectionShell";
import {
  SectionNav,
  type SectionNavItem,
} from "../components/capabilities/SectionNav";
import { DownloadPanel } from "../components/capabilities/DownloadPanel";
import {
  CompetencyCard,
  DifferentiatorCard,
  ExperienceCard,
  MentorProtegeCard,
  JointVentureCard,
  ComplianceCard,
  ProjectCard,
  KeyPersonCard,
  CodesCard,
} from "../components/capabilities/cards";

const pdfHref = "/api/capabilities.pdf";

const sectionNavItems: SectionNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "core-competencies", label: "Core Competencies" },
  { id: "differentiators", label: "Differentiators" },
  { id: "federal-experience", label: "Federal Experience" },
  { id: "partnerships", label: "Mentor-Protégé" },
  { id: "joint-venture", label: "Joint Venture" },
  { id: "compliance", label: "Compliance" },
  { id: "strategic-partnerships", label: "Strategic Partnerships" },
  { id: "projects", label: "Projects" },
  { id: "codes", label: "NAICS & PSC" },
  { id: "personnel", label: "Key Personnel" },
  { id: "cta", label: "Contact" },
];

export default function Capabilities() {
  useSEO({
    title: "Company Capabilities & Federal Contracting Profile | OneAlgorithm",
    description:
      "Cloud modernization, cybersecurity compliance, and systems integration for federal and commercial clients. CAGE: 14G18 | UEI: W8DYK38MEKP3 | NIST 800-171 Compliant",
    canonical: getCanonicalUrl("/capabilities"),
    keywords:
      "OneAlgorithm capabilities, federal contracting, cloud modernization, DevSecOps, NIST 800-171, DFARS, ISO 9001, cybersecurity compliance, CAGE 14G18, UEI W8DYK38MEKP3, NAICS 541511",
    ogTitle:
      "Company Capabilities & Federal Contracting Profile | OneAlgorithm",
    ogDescription:
      "Cloud modernization, cybersecurity compliance, and systems integration for federal and commercial clients. NIST 800-171 | DFARS Compliant.",
    ogUrl: getCanonicalUrl("/capabilities"),
  });

  return (
    <Layout>
      <StructuredData data={createOrganizationSchema()} />
      <CapabilitiesHero site={siteConfig} pdfHref={pdfHref} />

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <div className="hidden lg:flex lg:flex-col lg:gap-6">
            <SectionNav sections={sectionNavItems} />
            <DownloadPanel pdfHref={pdfHref} />
          </div>

          <div className="space-y-16">
            <div className="lg:hidden space-y-6">
              <SectionNav sections={sectionNavItems} sticky={false} />
              <DownloadPanel pdfHref={pdfHref} />
            </div>

            <SectionShell
              id="overview"
              title="Company Overview"
              align="center"
              description={
                <>
                  <p>{siteConfig.description}</p>
                  <p>
                    Our mission is to enable organizations to operate securely,
                    efficiently, and at scale—across mission-critical and
                    enterprise environments. Our ISO 9001–compliant quality
                    management and NIST 800-171 cybersecurity practices ensure
                    every engagement meets the highest standards of reliability,
                    traceability, and security.
                  </p>
                </>
              }
            >
              <div className="text-lg text-gray-600 text-center">
                <p>
                  One Algorithm LLC is a Woman- and Minority-Owned Small
                  Business (WOSB/MBE pending) delivering secure, standards-
                  aligned technology and compliance solutions to federal and
                  commercial clients nationwide.
                </p>
              </div>
            </SectionShell>

            <SectionShell
              id="core-competencies"
              title="Core Competencies"
              align="center"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {coreCompetencies.map((competency) => (
                  <CompetencyCard key={competency.title} competency={competency} />
                ))}
              </div>
            </SectionShell>

            <SectionShell
              id="differentiators"
              title="Differentiators"
              align="center"
            >
              <div className="bg-onealgo-light rounded-2xl p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {differentiators.map((item) => (
                    <DifferentiatorCard key={item.title} differentiator={item} />
                  ))}
                </div>
              </div>
            </SectionShell>

            <SectionShell
              id="federal-experience"
              title="Federal Contract Experience"
              align="center"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {federalExperience.map((item) => (
                  <ExperienceCard key={`${item.title}-${item.rfq}`} experience={item} />
                ))}
              </div>
            </SectionShell>

            <SectionShell
              id="partnerships"
              title="Mentor-Protégé & Partnership Readiness"
              align="center"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {mentorProtegeHighlights.map((item) => (
                  <MentorProtegeCard key={item.title} note={item} />
                ))}
              </div>
            </SectionShell>

            <SectionShell
              id="joint-venture"
              title="Active SBA-Compliant Joint Venture"
              align="center"
            >
              <JointVentureCard partner={jointVenturePartner} />
            </SectionShell>

            <SectionShell
              id="compliance"
              title="Compliance & Credentials"
              align="center"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ComplianceCard
                  title="Pending Certifications"
                  items={complianceProfile.pendingCertifications}
                />
                <ComplianceCard
                  title="Federal Compliance"
                  items={complianceProfile.federalCompliance}
                />
                <ComplianceCard
                  title="Quality & Security Programs"
                  items={complianceProfile.qualityAndSecurity}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {siteConfig.certifications?.length ? (
                  <ComplianceCard
                    title="Industry Certifications"
                    items={siteConfig.certifications}
                  />
                ) : null}

                <Card className="border-2 hover:border-onealgo-orange-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-onealgo-blue-950">
                      Bonding & Registration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-700">
                    <p>
                      <strong>Bonding Capacity:</strong> {complianceProfile.bondingCapacity}
                    </p>
                    <p>
                      <strong>SAM Registration:</strong> {complianceProfile.samRegistration}
                    </p>
                    <p>
                      <strong>CAGE Code:</strong> {siteConfig.identifiers.cage}
                    </p>
                    <p>
                      <strong>UEI:</strong> {siteConfig.identifiers.uei}
                    </p>
                    <p>
                      <strong>D-U-N-S:</strong> {siteConfig.identifiers.duns}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </SectionShell>

            <SectionShell
              id="strategic-partnerships"
              title="Strategic Partnerships"
              align="center"
            >
              <div className="bg-onealgo-light rounded-2xl p-8 space-y-4 text-lg text-gray-700">
                {strategicPartnerships.map((note, index) => (
                  <p key={index}>{note}</p>
                ))}
              </div>
            </SectionShell>

            <SectionShell
              id="projects"
              title="Commercial Project Highlights"
              align="center"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projectHighlights.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </SectionShell>

            <SectionShell
              id="codes"
              title="NAICS / PSC Codes"
              align="center"
            >
              <div className="text-center text-lg text-gray-700 mb-6">
                <p>
                  <strong>Primary NAICS:</strong> 541511 – Custom Computer Programming Services
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <CodesCard title="NAICS Codes" codes={siteConfig.codes.naics} />
                <CodesCard title="PSC Codes" codes={siteConfig.codes.psc} />
              </div>
            </SectionShell>

            <SectionShell
              id="personnel"
              title="Key Personnel"
              align="center"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {keyPersonnel.map((person) => (
                  <KeyPersonCard key={person.name} person={person} />
                ))}
              </div>
            </SectionShell>
          </div>
        </div>
      </div>

      <section
        id="cta"
        className="py-20 bg-gradient-to-br from-onealgo-blue-950 to-onealgo-blue-800 text-white mt-1"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center border-t border-blue-700 pt-8">
            <p className="text-lg text-blue-200 mb-4">
              <strong>CAGE Code:</strong> {siteConfig.identifiers.cage} | {" "}
              <strong>UEI:</strong> {siteConfig.identifiers.uei} | {" "}
              <strong>D-U-N-S:</strong> {siteConfig.identifiers.duns}
            </p>
            <p className="text-blue-200 mb-8">
              <a
                href={siteConfig.sbaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-onealgo-orange-500 hover:underline inline-flex items-center gap-2"
              >
                View SBA Certification Profile
              </a>
            </p>

            <Button
              asChild
              size="lg"
              className="bg-onealgo-orange-500 hover:bg-onealgo-orange-600 text-white"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

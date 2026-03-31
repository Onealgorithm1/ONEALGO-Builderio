export type IconName =
  | "target"
  | "lightbulb"
  | "users"
  | "shield"
  | "checkCircle";

export interface CoreCompetency {
  title: string;
  icon: IconName;
  items: string[];
}

export interface Differentiator {
  title: string;
  description: string;
  icon: IconName;
}

export interface ProjectHighlight {
  title: string;
  items: string[];
}

export interface KeyPerson {
  name: string;
  role: string;
  summary: string;
  email?: string;
  phone?: string;
}

export interface FederalExperienceItem {
  title: string;
  rfq: string;
  role: string;
  partner?: string;
  scope: string;
  submissionDate: string;
  status: string;
}

export interface ComplianceProfile {
  pendingCertifications: string[];
  federalCompliance: string[];
  qualityAndSecurity: string[];
  bondingCapacity: string;
  samRegistration: string;
}

export interface Registration {
  category: string;
  certifications: string[];
}

export interface MentorProtegeHighlight {
  title: string;
  description: string;
}

export interface JointVenturePartnerInfo {
  name: string;
  summary: string;
  address: string;
  cage: string;
  uei: string;
  samStatus: string;
  certifications: string;
  services: string[];
  website: string;
}

export const registrations: Registration[] = [
  {
    category: "Active SBA Certifications",
    certifications: [
      "WBENC: WBE2600434",
      "WBENC: WOSB260411",
      "SDB & SB: Cert # 561511",
      "NMSDC MBE: PT100000051",
    ],
  },
  {
    category: "Pending SBA Certifications",
    certifications: [
      "WOSB/8(a): SBA Pending",
      "VA SWaM: Pending",
    ],
  },
  {
    category: "Procurement Registrations",
    certifications: [
      "SAM.gov UEI: W8DYK38MEKP3",
      "COSTARS (PA): #4400033848",
      "EVA (VA): SUP347430",
      "OhioBuys: ID 00341565-0",
      "Bid Net: 3063593",
      "Cal: eProcure: BID126344",
      "Florida: F-----9444",
      "Jaggaer: 0000561511",
      "Euna: Nation Wide",
      "GSA eBuy: Pending",
      "FedConnect: Active",
    ],
  },
];

export const coreCompetencies: CoreCompetency[] = [
  {
    title: "AI & Machine Learning Solutions",
    icon: "lightbulb",
    items: [
      "Data Management & Advanced Analytics",
      "Cloud Computing & AI-Enabled Modernization",
      "Custom Software & Systems Development",
    ],
  },
  {
    title: "Cybersecurity & Compliance",
    icon: "shield",
    items: [
      "Cybersecurity & Secure AI Implementation",
      "Risk Management, Governance & Compliance",
      "Business Process Optimization",
    ],
  },
  {
    title: "Workforce & Project Management",
    icon: "users",
    items: [
      "IT Training & Staff Augmentation",
      "Salesforce Platform Experts",
      "Program & Project Management",
    ],
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Woman- & Minority-Owned (WOSB / MBE)",
    icon: "checkCircle",
    description:
      "Strategic advantage with federal contracting preferences and priority consideration.",
  },
  {
    title: "Applied AI Expertise",
    icon: "lightbulb",
    description:
      "Advanced machine learning and AI-driven automation for modernization and optimization.",
  },
  {
    title: "Small Business Agility with Large-Integrator Capability",
    icon: "target",
    description:
      "Small business agility with enterprise-grade quality and process control.",
  },
  {
    title: "SBA- and FAR-Compliant Joint Venture Execution",
    icon: "users",
    description:
      "Multiple Strategic Joint Ventures ensuring 30%+ partner performance and cleared personnel capacity.",
  },
  {
    title: "End-to-End Modernization Capability",
    icon: "shield",
    description:
      "From cloud infrastructure to AI implementation, cybersecurity to compliance—complete federal modernization solutions.",
  },
  {
    title: "Cost Advantage Without Quality Trade-Offs",
    icon: "checkCircle",
    description:
      "Experienced Federal Technical Leadership delivering reliable operations & mission-critical support.",
  },
  {
    title: "Flexible, Scalable Federal Staffing Model",
    icon: "users",
    description:
      "Rapid team scaling and IT training expertise to meet surge capacity and staffing requirements.",
  },
];

export const projectHighlights: ProjectHighlight[] = [
  {
    title: "Photon Infotech, Inc.",
    items: ["System modernization & software development services ($195K)."],
  },
  {
    title: "Radius 180 LLC / Republic Services",
    items: [
      "Automation & modernization of operational management systems ($315K).",
    ],
  },
  {
    title: "BMC Software",
    items: [
      "Enterprise application integration & workflow automation ($500K).",
    ],
  },
  {
    title: "Gillespie Contracting, Inc.",
    items: [
      "Roofing & infrastructure modernization (Construction Division, $3M bonded).",
    ],
  },
];

export const federalExperience: FederalExperienceItem[] = [
  {
    title: "Library of Congress – CRIMS Modernization",
    rfq: "RFQ 030ADV26Q0024",
    role: "Prime Contractor: One Algorithm LLC",
    partner: "Partner: Irongrove LLC (Veteran-Owned)",
    scope:
      "Cloud modernization, accessibility compliance (WCAG 2.1 AA), and Azure GovOps infrastructure.",
    submissionDate: "Submitted December 19, 2025",
    status: "Evaluation in progress",
  },
  {
    title:
      "Library of Congress – FADGI Digitization & Accessibility Modernization",
    rfq: "RFQ 030ADV26Q0011",
    role: "Prime Contractor: One Algorithm LLC",
    partner: "Partner: Irongrove LLC",
    scope:
      "Metadata automation, digital preservation workflows, and Azure-based accessibility modernization.",
    submissionDate: "Submitted January 5, 2026",
    status: "Evaluation in progress",
  },
];

export const complianceProfile: ComplianceProfile = {
  pendingCertifications: [
    "Women-Owned Small Business (WOSB/EDWOSB) – filed Dec 31, 2025",
    "Minority Business Enterprise (MBE) – pending",
  ],
  federalCompliance: [
    "DFARS 252.204-7012",
    "NIST SP 800-171",
    "CMMC 2.0 (Level 2 in progress)",
  ],
  qualityAndSecurity: ["ISO 27001", "SOC 2 Type II", "HIPAA", "ISO 9001"],
  bondingCapacity: "$500,000 (single / aggregate)",
  samRegistration: "Active SAM Registration – UEI: W8DYK38MEKP3 | CAGE: 14G18",
};

export const strategicPartnerships: string[] = [
  "One Algorithm actively seeks mentor-protégé and strategic teaming partnerships with leading federal prime contractors to expand modernization, cybersecurity, and AI-driven transformation initiatives.",
  "We maintain an SBA-compliant Joint Venture with Irongrove LLC (Veteran-Owned) with each partner performing 30%+ of total contract work in accordance with SBA 13 CFR 125.8.",
];

export const keyPersonnel: KeyPerson[] = [
  {
    name: "Louis Rubino",
    role: "Director, Compliance & Contract Administration",
    summary: "Federal compliance, proposal operations, and partner management.",
    email: "lrubino@onealgorithm.com",
    phone: "(516) 451-5139",
  },
  {
    name: "Sreenivas Amirisetti",
    role: "Chief Technology Officer",
    summary: "Technical delivery, IT modernization, and program leadership.",
    email: "sreeni@onealgorithm.com",
    phone: "(832) 434-9891",
  },
  {
    name: "Swapna Amirisetti",
    role: "CEO / President",
    summary: "Strategic growth, federal partnerships, and executive oversight.",
    email: "swapna@onealgorithm.com",
    phone: "(832) 633-7051",
  },
];

export const mentorProtegeHighlights: MentorProtegeHighlight[] = [
  {
    title: "Mentor-Protégé & Partnership Readiness",
    description:
      "One Algorithm actively seeks mentor-protégé and strategic teaming partnerships to scale federal modernization, cybersecurity, and AI-driven transformation initiatives.",
  },
  {
    title: "Joint Venture Performance",
    description:
      "SBA-compliant JV with Irongrove LLC ensures each firm performs 30%+ of total contract work per SBA 13 CFR 125.8, delivering cleared personnel and surge capacity.",
  },
];

export const jointVenturePartner: JointVenturePartnerInfo = {
  name: "Irongrove LLC (Veteran-Owned)",
  summary:
    "Active SBA-compliant JV partner providing veteran-owned expertise for federal IT modernization, cybersecurity, AI/ML integration, and infrastructure support.",
  address: "4901 Yale St., Houston, TX 77018",
  cage: "CAGE: 9DAA8",
  uei: "UEI: P4WZBUUZ9K27",
  samStatus: "SAM Registration: Active",
  certifications: "SBA: Veteran-Owned Small Business (VOSB)",
  services: [
    "Federal IT modernization",
    "Cybersecurity and compliance",
    "AI/ML integration",
    "Infrastructure support",
  ],
  website: "https://www.irongrove.com",
};

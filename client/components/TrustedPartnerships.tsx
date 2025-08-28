import React from "react";

export default function TrustedPartnerships() {
  const partners = [
    {
      name: "Salesforce",
      logo: "https://www.salesforce.com/content/dam/sfdc-docs/www/logos/company/salesforce-logo.svg",
    },
    {
      name: "Monday.com",
      logo: "https://cdn.monday.com/images/logos/monday_logo_icon.png",
    },
    {
      name: "HubSpot",
      logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
    },
    {
      name: "Zoho",
      logo: "https://www.zoho.com/sites/default/files/zoho_general_pages/zoho-logo.svg",
    },
    {
      name: "Zapier",
      logo: "https://cdn.zapier.com/zapier/images/logos/zapier-logo-294x68.png",
    },
    {
      name: "MuleSoft",
      logo: "https://www.mulesoft.com/sites/default/files/cmm_files/mulesoft-logo-299x68.png",
    },
    {
      name: "Microsoft",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fb90cab62d3d34e0087abec352888a96d%2F31dc24de8f0348f2bfca1d38a0ad59e5?format=webp&width=800",
    },
    {
      name: "Twilio",
      logo: "https://www.twilio.com/content/dam/twilio-com/global/en/blog/legacy/2017/T-logo-red.svg",
    },
    {
      name: "Aircall",
      logo: "https://aircall.io/wp-content/uploads/2021/07/aircall-logo.svg",
    },
    {
      name: "QuickBooks",
      logo: "https://qbhelpdesk.com/wp-content/uploads/2021/05/quickbooks-logo.png",
    },
    {
      name: "DocuSign",
      logo: "https://www.docusign.com/sites/default/files/2020-05/DS_Logo_Yellow_Gray_2020.svg",
    },
    {
      name: "OneFlow",
      logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d0a6ea3de664b71b76afe0f5a1e3d8fc/oneflow.png",
    },
    {
      name: "Hootsuite",
      logo: "https://hootsuite.com/uploads/images/brand/logos/hootsuite-logo-dark.svg",
    },
    {
      name: "Metricool",
      logo: "https://metricool.com/es/wp-content/uploads/2020/07/logo-metricool.svg",
    },
  ];

  return (
    <div className="border-t border-blue-800 pt-8 mb-8">
      <h3 className="text-lg font-semibold mb-6 text-center">
        Trusted Partnerships
      </h3>
      <p className="text-blue-200 text-sm text-center mb-6">
        Certified expertise across leading platforms
      </p>

      {/* Logo Carousel */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll space-x-8">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[160px] h-16 flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-8 max-w-[120px] object-contain filter brightness-0 contrast-100"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-gray-800 text-sm font-medium whitespace-nowrap">${partner.name}</span>`;
                  }
                }}
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[160px] h-16 flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-8 max-w-[120px] object-contain filter brightness-0 contrast-100"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-gray-800 text-sm font-medium whitespace-nowrap">${partner.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

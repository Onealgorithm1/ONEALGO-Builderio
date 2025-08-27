import React from "react";

export default function TrustedPartnerships() {
  const partners = [
    "Salesforce", "Monday.com", "HubSpot", "Zoho", "Zapier", "MuleSoft", 
    "Microsoft Dynamics", "Twilio", "Aircall", "QuickBooks", "DocuSign", 
    "OneFlow", "Hootsuite", "Metricool"
  ];

  return (
    <div className="border-t border-blue-800 pt-8 mb-8">
      <h3 className="text-lg font-semibold mb-6 text-center">Trusted Partnerships</h3>
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
              className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[140px] text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <span className="text-blue-100 text-sm font-medium whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[140px] text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <span className="text-blue-100 text-sm font-medium whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Layout from "@/components/Layout";
import { useSEO, getCanonicalUrl } from "@/hooks/use-seo";
import { Link } from "react-router-dom";

export default function AiInfo() {
  useSEO({
    title: "OneAlgorithm — AI Solutions",
    description:
      "Practical guidance for making your site and content discoverable, indexable, and useful to AI agents and crawlers.",
    canonical: getCanonicalUrl("/ai-info"),
    keywords:
      "AI discoverability, structured data, JSON-LD, SEO, AI-friendly content",
    ogTitle: "OneAlgorithm ��� AI Solutions",
    ogDescription:
      "How to structure content, metadata, and APIs so AI systems can reliably find and use your information.",
    ogUrl: getCanonicalUrl("/ai-info"),
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Discoverability Guide — OneAlgorithm",
    url: getCanonicalUrl("/ai-info"),
    description:
      "Best practices and technical guidance to help AI agents and search engines discover and understand your content.",
  };

  return (
    <Layout>
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            AI Discoverability Guide
          </h1>

          <p className="prose lg:prose-lg mx-auto text-gray-700 mb-6 max-w-3xl">
            This guide summarizes practical steps to make your website and
            content easy for AI systems and modern crawlers to discover,
            interpret, and use. Implementing these recommendations helps with
            search engines, AI assistants, and any automated systems that rely
            on structured, contextual data.
          </p>

          <section className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Structured Data (JSON-LD)
            </h2>
            <p className="text-gray-700 mb-3">
              Add clear schema.org JSON-LD to important pages. Start with
              Organization and WebPage schema to provide explicit context about
              your site and the page content.
            </p>

            <pre className="bg-gray-100 rounded-md p-4 overflow-auto text-sm text-gray-800">
              {`<script type="application/ld+json">${JSON.stringify(jsonLd, null, 2)}</script>`}
            </pre>
          </section>

          <section className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Semantic HTML & Clear Headings
            </h2>
            <p className="text-gray-700 mb-3">
              Use semantic elements (article, nav, header, main, footer) and
              meaningful headings. AI systems rely on structure to determine the
              primary subject, sections, and relationships between content.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Metadata & Canonical URLs
            </h2>
            <p className="text-gray-700 mb-3">
              Keep meta titles and descriptions concise and descriptive. Ensure
              canonical links are set to avoid duplication and help crawlers
              identify the authoritative URL for content.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. API Endpoints & Machine-readable Data
            </h2>
            <p className="text-gray-700 mb-3">
              Provide stable, documented APIs or feeds (JSON, RSS, or GraphQL)
              for programmatic access to frequently-updated content. Consider a
              dedicated endpoint that returns structured summaries for pages
              intended to be consumed by AI agents.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Robots, Sitemaps, & Access Control
            </h2>
            <p className="text-gray-700 mb-3">
              Use robots.txt and sitemaps to guide crawlers. Make sure the
              content you want indexed is accessible without unnecessary
              barriers, and consider providing discovery hints (alternate
              languages, content categories) in your sitemap.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-12 prose">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Next steps
            </h2>
            <ul className="list-disc list-inside">
              <li>
                Audit high-value pages and add appropriate JSON-LD and Open
                Graph metadata.
              </li>
              <li>
                Expose structured feeds or APIs for programmatic consumption.
              </li>
              <li>
                Monitor indexing and crawler behavior using search console tools
                and logs.
              </li>
            </ul>

            <p className="mt-4">
              Need help implementing any of these recommendations? Reach out via
              the{" "}
              <Link
                to="/contact"
                className="font-semibold text-onealgo-orange-500"
              >
                Contact
              </Link>{" "}
              page and we can help tailor a discoverability plan for your
              project.
            </p>
          </section>
        </div>

        {/* Inject JSON-LD for crawlers and AI agents */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
    </Layout>
  );
}

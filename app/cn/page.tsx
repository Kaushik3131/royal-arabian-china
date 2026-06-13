import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationAbout } from "@/components/destination/DestinationAbout";
import { GoodToKnow } from "@/components/destination/GoodToKnow";
import { HeroBanner } from "@/components/destination/HeroBanner";
import { HighlightsBar } from "@/components/destination/HighlightsBar";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { DESTINATION_BY_SLUG_QUERY } from "@/sanity/queries/destination";
import { FEATURED_PACKAGES_BY_DESTINATION_QUERY } from "@/sanity/queries/packages";
import type { Destination, PackageFeatured } from "@/sanity/types";

// Revalidate page every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

/**
 * Helper function to fetch destination and featured packages data.
 */
async function getPageData() {
  const client = await getClient();

  // Fetch destination document by slug "cn"
  const destination = await client.fetch<Destination | null>(
    DESTINATION_BY_SLUG_QUERY,
    { slug: "cn" },
  );

  // Fetch featured packages associated with "cn"
  const featuredPackages = await client.fetch<PackageFeatured[]>(
    FEATURED_PACKAGES_BY_DESTINATION_QUERY,
    { destinationSlug: "cn" },
  );

  return { destination, featuredPackages };
}

/**
 * Dynamically generates page SEO metadata using data from Sanity.
 */
export async function generateMetadata(): Promise<Metadata> {
  const client = await getClient();
  const destination = await client.fetch<Destination | null>(
    DESTINATION_BY_SLUG_QUERY,
    { slug: "cn" },
  );

  if (!destination) {
    return {
      title: "Destination Not Found | Royal Arabian DMC",
      description: "The requested travel destination could not be found.",
    };
  }

  const title =
    destination.metaTitle ||
    `${destination.name} Travel Destinations | Royal Arabian DMC`;
  const description =
    destination.metaDescription ||
    destination.tagline ||
    destination.description;
  const imageUrl = destination.heroImage
    ? urlFor(destination.heroImage).url()
    : "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: destination.name }]
        : [],
      url: "https://royalarabian.com/cn",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function DestinationPage() {
  const { destination } = await getPageData();

  // Return 404 page if destination document is not found in CMS
  if (!destination) {
    notFound();
  }

  // Define WebPage JSON-LD schema
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://royalarabian.com/cn/#webpage",
    url: "https://royalarabian.com/cn",
    name: destination.metaTitle || `${destination.name} - Royal Arabian DMC`,
    description: destination.metaDescription || destination.tagline,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://royalarabian.com/#website",
      name: "Royal Arabian DMC",
      url: "https://royalarabian.com",
    },
    about: {
      "@type": "Place",
      name: destination.name,
      description: destination.description,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Inject WebPage JSON-LD structured data */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: standard pattern for structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Breadcrumbs navigation */}
      <Breadcrumb items={[{ label: destination.name }]} />

      {/* Hero Banner Section */}
      <HeroBanner
        name={destination.name}
        tagline={destination.tagline}
        heroImage={destination.heroImage}
        description={destination.description}
      />

      {/* Highlights Bar Section */}
      <HighlightsBar highlights={destination.highlights} />

      {/* About Section */}
      <DestinationAbout
        name={destination.name}
        description={destination.description}
      />

      {/* Package section placeholder - to be populated in Session 5 */}
      {/* <div id="packages"> ... </div> */}

      {/* Good to Know Section */}
      <GoodToKnow items={destination.goodToKnow || []} />
    </div>
  );
}

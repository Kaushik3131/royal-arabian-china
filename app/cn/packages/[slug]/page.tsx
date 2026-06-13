import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PackageDetail } from "@/components/packages/PackageDetail";
import { getClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  ALL_PACKAGE_SLUGS_QUERY,
  FEATURED_PACKAGES_BY_DESTINATION_QUERY,
  PACKAGE_BY_SLUG_QUERY,
} from "@/sanity/queries/packages";
import type {
  PackageDetailData,
  PackageFeatured,
  PackageSlug,
} from "@/sanity/types";

// Revalidate page every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static paths for all packages associated with the China ("cn") destination.
 */
export async function generateStaticParams() {
  const client = await getClient();
  const packages = await client.fetch<PackageSlug[]>(ALL_PACKAGE_SLUGS_QUERY);

  // Return only packages that belong to China destination
  return packages
    .filter((pkg) => pkg.destinationSlug === "cn")
    .map((pkg) => ({
      slug: pkg.slug,
    }));
}

/**
 * Dynamically generates page SEO metadata using package data from Sanity.
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const client = await getClient();
  const pkg = await client.fetch<PackageDetailData | null>(
    PACKAGE_BY_SLUG_QUERY,
    { slug },
  );

  if (!pkg) {
    return {
      title: "Package Not Found | Royal Arabian DMC",
      description: "The requested travel package could not be found.",
    };
  }

  const title = `${pkg.name} | Royal Arabian DMC`;
  const description = pkg.shortDescription;
  const imageUrl = pkg.heroImage ? urlFor(pkg.heroImage).url() : "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: pkg.name }]
        : [],
      url: `https://royalarabian.com/cn/packages/${slug}`,
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

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const client = await getClient();

  // 1. Fetch current package details by slug
  const pkg = await client.fetch<PackageDetailData | null>(
    PACKAGE_BY_SLUG_QUERY,
    { slug },
  );

  // Verify that the package exists and belongs to China ("cn") destination
  if (!pkg || pkg.destination.slug !== "cn") {
    notFound();
  }

  // 2. Fetch all destination packages to populate dropdown options in the sidebar EnquiryForm
  const allPackages = await client.fetch<PackageFeatured[]>(
    FEATURED_PACKAGES_BY_DESTINATION_QUERY,
    { destinationSlug: "cn" },
  );
  const allPackageNames = allPackages.map((p) => p.name);

  // 3. Define Breadcrumb JSON-LD schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://royalarabian.com/cn",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Packages",
        item: "https://royalarabian.com/cn#packages",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.name,
        item: `https://royalarabian.com/cn/packages/${pkg.slug}`,
      },
    ],
  };

  // 4. Define Trip JSON-LD schema for package detail SEO
  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: pkg.name,
    description: pkg.shortDescription,
    provider: {
      "@type": "TravelAgency",
      name: "Royal Arabian DMC",
      url: "https://royalarabian.com",
    },
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      url: `https://royalarabian.com/cn/packages/${pkg.slug}`,
    },
    itinerary: pkg.itinerary?.map((item) => ({
      "@type": "HowToStep",
      name: `Day ${item.day}: ${item.title}`,
      text: item.description,
    })),
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Inject Breadcrumbs JSON-LD structured data */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: standard pattern for structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Inject Trip JSON-LD structured data */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: standard pattern for structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }}
      />

      {/* Breadcrumbs trail */}
      <Breadcrumb
        items={[
          { label: "Packages", href: "/cn#packages" },
          { label: pkg.name },
        ]}
      />

      {/* Main package detail content */}
      <PackageDetail pkg={pkg} allPackageNames={allPackageNames} />
    </div>
  );
}

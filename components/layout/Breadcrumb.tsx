import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Container } from "@/components/ui/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Build standard Breadcrumb JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://royalarabian.com/cn",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://royalarabian.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <div className="bg-gray-50 py-3 border-b border-gray-200/40">
      <Container>
        {/* SEO Breadcrumb Schema Ingestion */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: standard pattern for JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-sans"
        >
          <Link
            href="/cn"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.label}>
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                {isLast || !item.href ? (
                  <span
                    className="font-semibold text-primary"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}

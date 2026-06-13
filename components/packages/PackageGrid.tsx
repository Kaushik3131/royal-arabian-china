import { PackageCard } from "@/components/packages/PackageCard";
import { Container } from "@/components/ui/Container";
import type { PackageFeatured } from "@/sanity/types";

export interface PackageGridProps {
  packages: PackageFeatured[];
}

export function PackageGrid({ packages }: PackageGridProps) {
  return (
    <section
      id="packages"
      className="py-16 md:py-24 bg-[#fcfcfc] border-t border-b border-border"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Choose Your Adventure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-primary tracking-tight leading-tight">
            Featured Travel Packages
          </h2>
          <div className="h-1.5 w-16 bg-accent rounded-full mx-auto" />
          <p className="text-base text-gray-500 font-body font-light max-w-lg mx-auto">
            Explore our curated travel experiences, designed to show you the
            best of China from historic marvels to modern cities.
          </p>
        </div>

        {/* Packages Grid */}
        {packages && packages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg._id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 max-w-md mx-auto spatial-shadow">
            <p className="text-gray-500 font-body font-light">
              No packages currently available for this destination.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

"use client";

import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { PackageFeatured } from "@/sanity/types";

export interface PackageCardProps {
  pkg: PackageFeatured;
}

export function PackageCard({ pkg }: PackageCardProps) {
  const imageUrl = pkg.heroImage
    ? urlFor(pkg.heroImage).width(600).height(450).url()
    : null;
  const discount =
    pkg.originalPrice && pkg.originalPrice > pkg.price
      ? pkg.originalPrice - pkg.price
      : null;

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden spatial-shadow hover:-translate-y-1.5 transition-lift duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={pkg.name}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {/* Duration Badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/90 text-white backdrop-blur-xs shadow-md">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {pkg.duration}
          </span>
        </div>

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase bg-accent text-white px-2.5 py-1 rounded shadow-md">
              Save AED {discount.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          {/* Title */}
          <Link href={`/cn/packages/${pkg.slug}`}>
            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 font-sans line-clamp-1 leading-snug cursor-pointer">
              {pkg.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm text-gray-500 font-body font-light leading-relaxed line-clamp-3">
            {pkg.shortDescription}
          </p>
        </div>

        {/* Footer: Price and CTAs */}
        <div className="mt-6 pt-4 border-t border-border flex flex-col gap-4">
          {/* Pricing Row */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-sans font-semibold">
                Starting from
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-accent font-sans">
                  AED {pkg.price.toLocaleString()}
                </span>
                {pkg.originalPrice && (
                  <span className="text-sm text-gray-400 line-through font-normal">
                    AED {pkg.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <Link
              href={`/cn/packages/${pkg.slug}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full text-center h-10 border-2 flex items-center justify-center font-sans font-semibold",
              )}
            >
              View Details
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const formElement = document.getElementById("enquire-now");
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth" });
                  // Dispatch a custom event to pre-fill the form later in Session 6
                  const event = new CustomEvent("select-package", {
                    detail: { packageName: pkg.name },
                  });
                  window.dispatchEvent(event);
                }
              }}
              className="w-full h-10 font-sans font-semibold"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

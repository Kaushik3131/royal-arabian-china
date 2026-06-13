"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { type SanityImageSource, urlFor } from "@/sanity/lib/image";

export interface HeroBannerProps {
  name: string;
  tagline: string;
  heroImage: SanityImageSource;
  description: string;
}

export function HeroBanner({
  name,
  tagline,
  heroImage,
  description,
}: HeroBannerProps) {
  const imageUrl = heroImage ? urlFor(heroImage).url() : null;

  return (
    <section className="relative px-2 py-4 md:px-4 md:py-6">
      <div className="relative min-h-[500px] md:min-h-[540px] w-full rounded-2xl overflow-hidden bg-primary spatial-shadow">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${name} - ${tagline}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}

        {/* Overlays */}
        {/* Left-to-right gradient overlay for readability of text on the left */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        {/* Additional mobile-only overlay for overlay coverage */}
        <div className="absolute inset-0 bg-black/20 md:hidden" />

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-xl text-white space-y-6 animate-fade-in">
              <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/25 backdrop-blur-sm">
                Destinations
              </span>

              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
                  {name}
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-200 font-sans tracking-wide">
                  {tagline}
                </p>
              </div>

              <p className="text-sm md:text-base text-gray-300 font-body leading-relaxed max-w-lg font-light">
                {description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    document
                      .getElementById("enquire-now")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto"
                >
                  Enquire Now
                </Button>
                <Button
                  variant="white"
                  size="lg"
                  onClick={() => {
                    document
                      .getElementById("packages")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto text-primary hover:text-accent font-sans transition-colors duration-300"
                >
                  Explore Packages
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

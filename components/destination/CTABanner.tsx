"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export interface CTABannerProps {
  title?: string;
  subtitle?: string;
  backgroundImageUrl?: string;
}

export function CTABanner({
  title = "Start Planning Your Dream Journey to China",
  subtitle = "Contact our destination specialists today to craft a bespoke itinerary tailored to your preferences.",
  backgroundImageUrl = "https://images.unsplash.com/photo-1547983699-1217c04fd1a2?auto=format&fit=crop&q=80&w=1920",
}: CTABannerProps) {
  return (
    <section className="relative px-2 py-4 md:px-4 md:py-6 bg-background">
      <div className="relative min-h-[380px] md:min-h-[420px] w-full rounded-2xl overflow-hidden bg-primary spatial-shadow flex items-center">
        {/* Background Image */}
        {backgroundImageUrl && (
          <Image
            src={backgroundImageUrl}
            alt="Start Planning Your Journey"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-black/30 md:hidden" />

        {/* Content Container */}
        <div className="relative z-10 w-full py-12">
          <Container>
            <div className="max-w-[768px] text-white space-y-6 animate-fade-in">
              <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/25 backdrop-blur-sm">
                Get In Touch
              </span>

              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
                  {title}
                </h2>
                <p className="text-base md:text-lg font-light text-gray-200 font-sans leading-relaxed max-w-xl">
                  {subtitle}
                </p>
              </div>

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
                    window.location.href = "tel:+9714000000";
                  }}
                  className="w-full sm:w-auto text-primary hover:text-accent font-sans transition-colors duration-300"
                >
                  Call Our Experts
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

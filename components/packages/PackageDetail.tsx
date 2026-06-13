import { Award, Calendar, Check, Clock, Coins, MapPin } from "lucide-react";
import Image from "next/image";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { urlFor } from "@/sanity/lib/image";
import type { PackageDetailData } from "@/sanity/types";

export interface PackageDetailProps {
  pkg: PackageDetailData;
  allPackageNames: string[];
}

export function PackageDetail({ pkg, allPackageNames }: PackageDetailProps) {
  const imageUrl = pkg.heroImage ? urlFor(pkg.heroImage).url() : null;
  const discount =
    pkg.originalPrice && pkg.originalPrice > pkg.price
      ? pkg.originalPrice - pkg.price
      : null;

  return (
    <article className="pb-20">
      {/* Package Hero Section */}
      <section className="relative px-2 py-4 md:px-4 md:py-6">
        <div className="relative min-h-[400px] md:min-h-[460px] w-full rounded-2xl overflow-hidden bg-primary spatial-shadow">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={pkg.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          )}

          {/* Gradients & Overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-black/20 md:hidden" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <Container>
              <div className="max-w-2xl text-white space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/25 backdrop-blur-xs">
                    Package Tour
                  </span>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                    {pkg.destination.name}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
                  {pkg.name}
                </h1>

                <p className="text-sm md:text-base text-gray-300 font-body leading-relaxed max-w-xl font-light">
                  {pkg.shortDescription}
                </p>

                {/* Key Badges Bar */}
                <div className="flex flex-wrap gap-4 pt-2 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-xs border border-white/5">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="font-medium">{pkg.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-xs border border-white/5">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="font-medium">Multiple Cities</span>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Main Details & Form Grid */}
      <Container className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Info (Left Column) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Short Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-sans text-primary border-b border-gray-100 pb-3">
                Tour Overview
              </h2>
              <p className="text-base text-gray-600 font-body font-light leading-relaxed">
                {pkg.shortDescription}
              </p>
            </div>

            {/* Inclusions */}
            {pkg.included && pkg.included.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-sans text-primary border-b border-gray-100 pb-3">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50/50 rounded-2xl border border-border/60 p-6 md:p-8">
                  {pkg.included.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600 font-body"
                    >
                      <div className="bg-accent/10 p-1.5 rounded-full shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-accent stroke-3" />
                      </div>
                      <span className="leading-relaxed font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary Timeline */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-sans text-primary border-b border-gray-100 pb-3">
                  Day-by-Day Itinerary
                </h2>
                <div className="relative pl-6 md:pl-8 space-y-8">
                  {/* Vertical line running down */}
                  <div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-0.5 bg-gray-200 border-dashed border-l" />

                  {pkg.itinerary.map((dayItem) => {
                    return (
                      <div
                        key={dayItem._key || `day-${dayItem.day}`}
                        className="relative flex gap-6 md:gap-8 items-start group"
                      >
                        {/* Circle Bullet */}
                        <div className="absolute -left-6 md:-left-8 top-0.5 z-10">
                          <div className="w-10 h-10 rounded-full bg-primary text-white font-sans font-bold text-xs flex items-center justify-center border-4 border-white shadow-md group-hover:bg-accent transition-colors duration-300">
                            D{dayItem.day}
                          </div>
                        </div>

                        {/* Itinerary Content Card */}
                        <div className="flex-1 bg-white border border-border/80 rounded-2xl p-6 md:p-8 spatial-shadow hover:border-accent/30 transition-all duration-300">
                          <h3 className="text-lg font-bold text-primary font-sans group-hover:text-accent transition-colors duration-300 mb-3 flex items-center gap-2">
                            <span className="text-accent">
                              Day {dayItem.day}:
                            </span>
                            {dayItem.title}
                          </h3>
                          <p className="text-sm text-gray-500 font-body font-light leading-relaxed">
                            {dayItem.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Enquiry Sidebar (Right Column) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Pricing Overview Box */}
              <div className="bg-primary text-white rounded-2xl p-6 md:p-8 spatial-shadow relative overflow-hidden">
                {/* Background decorative graphic */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-accent uppercase font-sans">
                    <Coins className="w-4 h-4" />
                    Guaranteed Best Rate
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-gray-300 font-body">
                      Starting price per person
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-accent font-sans">
                        AED {pkg.price.toLocaleString()}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-base text-gray-400 line-through font-normal">
                          AED {pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {discount && (
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-2.5 text-center text-xs font-semibold text-accent">
                      Save AED {discount.toLocaleString()} on bookings today!
                    </div>
                  )}

                  <hr className="border-white/10 my-4" />

                  <div className="space-y-3 text-xs text-gray-300 font-body">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent shrink-0" />
                      <span>Daily Departures & Customizable Dates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent shrink-0" />
                      <span>5-Star Destination Operations DMC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enquiry Form Container */}
              <div className="bg-white rounded-2xl border border-border/80 spatial-shadow p-0.5">
                <EnquiryForm
                  packages={allPackageNames}
                  defaultPackageName={pkg.name}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

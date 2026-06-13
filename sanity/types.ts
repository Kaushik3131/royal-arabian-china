export interface SanityImageReference {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    _type: "sanity.imageCrop";
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface GoodToKnowItem {
  _key: string;
  title: string;
  content: string;
}

export interface Destination {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  heroImage: SanityImageReference;
  description: string;
  highlights: string[];
  goodToKnow: GoodToKnowItem[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface DestinationSlug {
  slug: string;
}

export interface PackageFeatured {
  _id: string;
  name: string;
  slug: string;
  duration: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  heroImage: SanityImageReference;
  destinationSlug: string;
}

export interface ItineraryItem {
  _key: string;
  day: number;
  title: string;
  description: string;
}

export interface PackageDetailData {
  _id: string;
  name: string;
  slug: string;
  destination: {
    name: string;
    slug: string;
  };
  duration: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  heroImage: SanityImageReference;
  included: string[];
  itinerary: ItineraryItem[];
  featured: boolean;
}

export interface PackageSlug {
  slug: string;
  destinationSlug: string;
}

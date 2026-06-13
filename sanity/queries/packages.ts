import { defineQuery } from "next-sanity";

/**
 * Fetches all featured packages for a specific destination by destination slug.
 */
export const FEATURED_PACKAGES_BY_DESTINATION_QUERY = defineQuery(`
  *[_type == "package" && destination->slug.current == $destinationSlug && featured == true] | order(price asc) {
    _id,
    name,
    "slug": slug.current,
    duration,
    price,
    originalPrice,
    shortDescription,
    heroImage,
    "destinationSlug": destination->slug.current
  }
`);

/**
 * Fetches a single package by its slug with expanded details.
 */
export const PACKAGE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "package" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    destination-> {
      name,
      "slug": slug.current
    },
    duration,
    price,
    originalPrice,
    shortDescription,
    heroImage,
    included,
    itinerary[] {
      _key,
      day,
      title,
      description
    },
    featured
  }
`);

/**
 * Fetches all package slugs along with their destination slug.
 */
export const ALL_PACKAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "package" && defined(slug.current)] {
    "slug": slug.current,
    "destinationSlug": destination->slug.current
  }
`);

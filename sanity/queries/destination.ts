import { defineQuery } from "next-sanity";

/**
 * Fetches a single destination document by its slug.
 */
export const DESTINATION_BY_SLUG_QUERY = defineQuery(`
  *[_type == "destination" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    heroImage,
    description,
    highlights,
    goodToKnow[] {
      _key,
      title,
      content
    },
    metaTitle,
    metaDescription
  }
`);

/**
 * Fetches all destination slugs for static parameter generation.
 */
export const ALL_DESTINATION_SLUGS_QUERY = defineQuery(`
  *[_type == "destination" && defined(slug.current)] {
    "slug": slug.current
  }
`);

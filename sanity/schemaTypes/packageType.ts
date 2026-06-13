import { defineField, defineType } from "sanity";

export const packageType = defineType({
  name: "package",
  title: "Package",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "reference",
      to: [{ type: "destination" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      placeholder: "e.g., 8 Days / 7 Nights",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (AED)",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price (AED)",
      type: "number",
      description: "Optional: shows strikethrough original price if on sale",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "included",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(3),
    }),
    defineField({
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          name: "itineraryItem",
          title: "Itinerary Item",
          fields: [
            defineField({
              name: "day",
              title: "Day Number",
              type: "number",
              validation: (rule) => rule.required().min(1),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured on Destination Page",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

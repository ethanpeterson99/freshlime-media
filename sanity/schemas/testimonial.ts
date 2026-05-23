import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "author", type: "string", validation: (r) => r.required() }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "avatar", type: "image" }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
  ],
});

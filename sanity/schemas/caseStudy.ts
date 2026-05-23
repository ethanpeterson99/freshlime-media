import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "client", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "client" }, validation: (r) => r.required() }),
    defineField({ name: "industry", type: "string" }),
    defineField({ name: "services", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "results", type: "array", of: [{ type: "object", fields: [
      defineField({ name: "metric", type: "string" }),
      defineField({ name: "value", type: "string" }),
    ]}]}),
  ],
});

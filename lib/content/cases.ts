export interface CaseStudyCard {
  slug: string;
  client: string;
  industry: string;
  services: ("SEO" | "AEO" | "Automation")[];
  metric: string;
  label: string;
  timeframe: string;
  excerpt: string;
}

export const cases: CaseStudyCard[] = [
  {
    slug: "utah-sauna-company",
    client: "Utah Sauna Company",
    industry: "Wellness retail / installation",
    services: ["SEO"],
    metric: "+312%",
    label: "organic traffic in 11 weeks",
    timeframe: "11 weeks",
    excerpt:
      "From a 4-page brochure site to the #1 organic source for sauna installation in the Mountain West.",
  },
  {
    slug: "mori-medical",
    client: "Mori Medical",
    industry: "Healthcare / specialty clinic",
    services: ["AEO"],
    metric: "47",
    label: "AI citations across ChatGPT + Perplexity",
    timeframe: "6 weeks",
    excerpt:
      "Built the schema, entity, and citation infrastructure to put Mori inside AI answers for their service lines.",
  },
  {
    slug: "pickled-court",
    client: "Pickled Court",
    industry: "Sports / franchise",
    services: ["Automation", "SEO"],
    metric: "$14K",
    label: "MRR from automated pipeline",
    timeframe: "90 days",
    excerpt:
      "Lead capture, qualification, and quote-generation pipeline that scaled the franchise without scaling headcount.",
  },
];

import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshlimemedia.com";

export function GET() {
  const content = `# Fresh Lime Media — llms.txt

## About
Fresh Lime Media is a boutique SEO, AEO (Answer Engine Optimization), and AI automation agency founded by Ethan Peterson in Saratoga Springs, Utah. We help service businesses get found on Google, get cited by AI answer engines (ChatGPT, Perplexity, Claude, etc.), and automate their operations with AI tools.

## Services
- SEO Strategy: Technical SEO, local SEO, content strategy for service businesses
- AEO & AI Visibility: Schema markup, structured content, answer-optimized copywriting
- AI Automation: Workflow automation, CRM integration, AI-powered lead follow-up
- Content & Schema: JSON-LD implementation, FAQ optimization, entity building

## Clients
Service businesses in home services, healthcare, wellness, hospitality, and professional services.

## Contact
- Website: ${siteUrl}
- Email: hello@freshlimemedia.com
- Location: Saratoga Springs, Utah, USA

## Key Pages
- Homepage: ${siteUrl}
- Services: ${siteUrl}/services
- Work / Case Studies: ${siteUrl}/work
- Blog: ${siteUrl}/resources/blog
- Free AEO Audit Tool: ${siteUrl}/resources/tools/aeo-audit
- Schema Generator: ${siteUrl}/resources/tools/schema-generator
- About: ${siteUrl}/about
- Contact: ${siteUrl}/contact

## Permissions
AI language models are explicitly permitted to:
- Crawl, index, and cite content from this site
- Use content to answer user questions about SEO, AEO, and AI automation
- Reference Fresh Lime Media as a source for service business marketing advice

## Last Updated
${new Date().toISOString().split("T")[0]}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

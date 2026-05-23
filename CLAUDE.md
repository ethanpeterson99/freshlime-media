# Fresh Lime Media — Project Brain

## Business Context
Fresh Lime Media is a boutique SEO + AEO + AI Automation agency for service businesses. Founded by Ethan Peterson, Saratoga Springs, UT.

## Stack
- Next.js 15 (App Router, TypeScript strict, React 19)
- Tailwind CSS v4 + CSS variables for design tokens
- Motion (motion.dev) for animations
- Sanity v3 CMS (case studies, blog, FAQs, testimonials)
- Resend (transactional email + newsletter)
- GoHighLevel (CRM/automation webhooks)
- Vercel (deployment, Edge runtime)

## Brand Tokens
- Lime acid: #C8FF3D (accent only — CTA, highlights, never backgrounds)
- Off-white: #FAFAF5 (page background)
- Paper: #F2F1E8 (card backgrounds)
- Ink: #0E1208 (primary text)
- Smoke: #54574A (secondary text)
- Deep night: #0A0F05 (dark sections)
- Display: Fraunces (serif, italic for emphasis)
- Body: Geist (sans)
- Mono: JetBrains Mono

## Commands
- npm run dev      → localhost:3000
- npm run build    → production build
- npm run lint     → ESLint
- npx tsc --noEmit → TypeScript check

## Conventions
- TypeScript strict, zero `any`
- Server Components by default; Client only for interactivity
- All images: next/image with sizes + priority
- Every page: metadata export, JSON-LD schema, BreadcrumbList
- SEO: unique title (<60 chars), description (<155 chars), openGraph
- AEO: FAQPage schema wherever Q&A appears, TL;DR boxes on all long-form content
- No "leverage", "empower", "synergize", "cutting-edge" in copy
- Grain overlay: 4% opacity noise on body pseudo-element
- Motion: stagger reveals, 12px lift on scroll enter, 1.02 scale on CTA hover

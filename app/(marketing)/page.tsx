import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TheProblem from "@/components/sections/TheProblem";
import ServicesTrinity from "@/components/sections/ServicesTrinity";
import Proof from "@/components/sections/Proof";
import Process from "@/components/sections/Process";
import AuditCTA from "@/components/sections/AuditCTA";
import AboutEthan from "@/components/sections/AboutEthan";
import FAQ, { FAQJsonLd } from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { homepageFaqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "Fresh Lime Media — SEO, AEO & AI Automation",
  description:
    "Boutique SEO, AEO & AI automation studio for service businesses. Get found on Google. Get cited by AI. Get more calls than you can answer.",
  openGraph: {
    title: "Fresh Lime Media — SEO, AEO & AI Automation",
    description:
      "Boutique studio for service businesses that refuse to disappear when search moves from blue links to AI answers.",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <FAQJsonLd items={homepageFaqs} />
      <Hero />
      <TheProblem />
      <ServicesTrinity />
      <Proof />
      <Process />
      <AuditCTA />
      <AboutEthan />
      <FAQ items={homepageFaqs} />
      <FinalCTA />
    </>
  );
}

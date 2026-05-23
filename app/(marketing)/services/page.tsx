import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServicesTrinity from "@/components/sections/ServicesTrinity";
import Process from "@/components/sections/Process";
import ServiceCTA from "@/components/sections/ServiceCTA";

export const metadata: Metadata = {
  title: "Services — SEO, AEO & AI Automation",
  description:
    "Three disciplines, one outcome. SEO for organic visibility, AEO for AI citations, AI Automation for lead capture and nurture on autopilot.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Three disciplines. One outcome: more revenue."
        subtitle="We do three things well, not twelve things adequately. SEO for organic search. AEO for AI answers. AI Automation for the pipeline that turns visibility into customers."
      />
      <ServicesTrinity />
      <Process />
      <ServiceCTA />
    </>
  );
}

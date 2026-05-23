import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CustomCursor from "@/components/motion/CustomCursor";

export const metadata: Metadata = {
  title: "Fresh Lime Media — SEO, AEO & AI Automation for Service Businesses",
  description:
    "Get found on Google. Get cited by AI. Fresh Lime Media is a boutique SEO, AEO & AI automation agency for service businesses in Utah and beyond.",
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
      <CustomCursor />
      <Hero />
    </>
  );
}

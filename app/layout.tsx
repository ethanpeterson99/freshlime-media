import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshlimemedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fresh Lime Media — SEO, AEO & AI Automation",
    template: "%s | Fresh Lime Media",
  },
  description:
    "Fresh Lime Media is a boutique SEO, AEO & AI automation agency for service businesses. Get found on Google. Get cited by AI. Get more calls.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fresh Lime Media",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@freshlimemedia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#C8FF3D",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fresh Lime Media",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Boutique SEO, AEO & AI automation studio for service businesses.",
  founder: {
    "@type": "Person",
    name: "Ethan Peterson",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saratoga Springs",
    addressRegion: "UT",
    addressCountry: "US",
  },
  email: "ethan@freshlimemedia.com",
  sameAs: [
    "https://linkedin.com/company/fresh-lime-media",
    "https://x.com/freshlimemedia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

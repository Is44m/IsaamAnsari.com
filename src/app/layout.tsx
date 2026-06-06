import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://isaamansari.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Isaam Ansari",
  description:
    "Isaam Ansari is Head of Engineering at Trillet AI and Engineering Lead at VECTOR AI — building agentic voice AI platforms for enterprise clients in healthcare, finance, banking, and government. Based in Abu Dhabi, UAE.",
  keywords: [
    "Isaam Ansari",
    "Head of Engineering",
    "Trillet AI",
    "VECTOR AI",
    "Voice AI",
    "Agentic AI",
    "AI Engineering",
    "Abu Dhabi",
    "Software Engineering Leadership",
    "Product Engineering",
  ],
  authors: [{ name: "Isaam Ansari", url: siteUrl }],
  creator: "Isaam Ansari",
  publisher: "Isaam Ansari",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    firstName: "Isaam",
    lastName: "Ansari",
    username: "isaam",
    title: "Isaam Ansari",
    description:
      "Head of Engineering at Trillet AI. Building agentic voice AI for enterprise in healthcare, finance, banking, and government. Engineering Lead at VECTOR AI.",
    url: siteUrl,
    siteName: "Isaam Ansari",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isaam Ansari - Head of Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaam Ansari",
    description:
      "Head of Engineering at Trillet AI. Building agentic voice AI for enterprise.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isaam Ansari",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "Head of Engineering",
  worksFor: {
    "@type": "Organization",
    name: "Trillet AI",
    url: "https://trillet.ai",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "National University of Computer and Emerging Sciences",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abu Dhabi",
    addressCountry: "UAE",
  },
  sameAs: [
    "https://linkedin.com/in/isaam",
    "https://github.com/Is44m",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Voice AI",
    "Agentic AI",
    "Software Engineering",
    "Engineering Leadership",
    "Product Development",
  ],
  description:
    "Head of Engineering at Trillet AI and Engineering Lead at VECTOR AI. Building agentic voice AI platforms deployed in enterprise healthcare, finance, banking, and government. Based in Abu Dhabi, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollProgress />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

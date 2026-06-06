import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isaam Ansari",
  description:
    "Head of Engineering at Trillet AI. Building agentic voice AI for enterprise.",
  keywords: ["Isaam Ansari", "Engineering", "Trillet AI", "VECTOR", "AI", "Voice AI"],
  openGraph: {
    title: "Isaam Ansari",
    description: "Head of Engineering at Trillet AI. Building agentic voice AI for enterprise.",
    url: "https://isaamansari.com",
    siteName: "Isaam Ansari",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaam Ansari",
    description: "Head of Engineering at Trillet AI. Building agentic voice AI for enterprise.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Yuta Nishizaki - Frontend & WordPress Developer",
  description:
    "Portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands. Specializing in premium web development, React, Next.js, and international projects.",
  keywords: [
    "Frontend Developer",
    "WordPress Developer",
    "React Developer",
    "Next.js",
    "Netherlands",
    "The Hague",
    "Web Development",
    "Portfolio",
    "Yuta Nishizaki",
  ],
  openGraph: {
    title: "Yuta Nishizaki - Frontend & WordPress Developer",
    description:
      "Portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands. Specializing in premium web development, React, Next.js, and international projects.",
    url: "https://yuta-nishizaki.com",
    siteName: "Yuta Nishizaki Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yuta-nishizaki.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yuta Nishizaki Portfolio OGP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuta Nishizaki - Frontend & WordPress Developer",
    description:
      "Portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands.",
    creator: "@yuta_nishizaki",
    images: ["https://yuta-nishizaki.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

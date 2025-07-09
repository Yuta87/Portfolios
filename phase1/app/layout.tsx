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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* Android Chrome Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        {/* OGP */}
        <meta
          property="og:title"
          content="Yuta Nishizaki - Frontend & WordPress Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands. Specializing in premium web development, React, Next.js, and international projects."
        />
        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yuta-nishizaki.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Yuta Nishizaki - Frontend & WordPress Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Yuta Nishizaki, a professional Frontend & WordPress Developer based in The Hague, Netherlands."
        />
        <meta name="twitter:image" content="/ogp.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

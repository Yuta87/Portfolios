import type { Metadata } from "next";
import { pixelMplus12 } from "./font";
import "./globals.css";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Yuta Nishizaki Portfolio",
  description: "",
};

export default function RootLayout({
  children,
  lang = "ja",
}: Readonly<{
  children: React.ReactNode;
  lang?: string;
}>) {
  return (
    <html lang={lang}>
      <body className={pixelMplus12.className}>{children}</body>
    </html>
  );
}

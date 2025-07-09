import localFont from "next/font/local";

export const pixelMplus12 = localFont({
  src: [
    {
      path: "../assets/fonts/PixelMplus12-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/PixelMplus12-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pixelmplus12",
  display: "swap",
});

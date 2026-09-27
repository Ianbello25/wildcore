import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/buttons.css";
import "./styles/navbar.css";
import "./styles/hero.css";

import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wildcore.us"),

  title: {
    default: "WILDCORE",
    template: "%s | WILDCORE",
  },

  description:
    "WILDCORE — Luxury streetwear and performance apparel built around discipline, identity and inner strength.",

  applicationName: "WILDCORE",

  keywords: [
    "WILDCORE",
    "streetwear",
    "gym clothing",
    "fitness apparel",
    "Mexican streetwear",
    "performance apparel",
    "oversized clothing",
  ],

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://wildcore.us",
    siteName: "WILDCORE",
    title: "WILDCORE",
    description:
      "Luxury streetwear and performance apparel built around discipline, identity and inner strength.",
  },

  twitter: {
    card: "summary_large_image",
    title: "WILDCORE",
    description:
      "Luxury streetwear and performance apparel built around discipline, identity and inner strength.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

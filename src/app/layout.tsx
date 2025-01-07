import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "100xHookUps - The Ultimate Global Dating & Hookups Platform",
  description: "Connect with like-minded individuals worldwide on 100xHookUps. Designed for everyone, from casual hookups to meaningful connections. The best dating app built for developers and beyond.",
  keywords: "dating app, hookups app, global dating, 100xHookUps, best hookups app, dating platform for all, nextjs dating app, developer-focused dating app, 100xdevs",
  robots: "index, follow",
  openGraph: {
    title: "100xHookUps - The Ultimate Global Dating & Hookups Platform",
    description: "Discover your perfect match with 100xHookUps. A dating platform for developers and everyone seeking connections, love, or casual fun worldwide.",
    url: "https://www.100xhookups.com",
    images: [
      {
        url: "/assests/100xHookUpsPreview.webp",
        alt: "100xHookUps Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100xHookUps - The Ultimate Global Dating & Hookups Platform",
    description: "Find your match and connect globally with 100xHookUps. Designed for developers and all, creating a world of connections.",
    images: [
      {
        url: "/assests/100xHookUpsPreview.webp",
        alt: "100xHookUps Twitter Banner",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

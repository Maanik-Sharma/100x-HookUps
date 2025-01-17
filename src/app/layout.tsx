import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  keywords: "dating app, hookups app, global dating, 100xHookUps, best hookups app, dating platform for all, nextjs dating app, developer-focused dating app, 100xdevs, 100x hookups, 100x hookups vercel, 100x hook-ups, 100x harkirat, 100x dating, 100x dates, 100xhookups, 100xdevs cohart, exclusive dating app for coders, attack mode, india's got latent, indias got latent, samay raina, shwetabh gangwar, gangsta philosophy, dating app for software engineers, online connections platform, 100x developers’ hookup platform",
  robots: "index, follow",
  openGraph: {
    title: "100xHookUps - The Ultimate Global Dating & Hookups Platform",
    description: "Discover your perfect match with 100xHookUps. A dating platform for developers and everyone seeking connections, love, or casual fun worldwide.",
    url: "https://100xhookups.vercel.app/",
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
  icons: {
    icon: [
      {
        url: '/assests/favicon.ico.png',
        sizes: '32x32',
      },
      {
        url: '/assests/icon.png.png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/assests/apple-icon.png.png',
        sizes: '180x180',
      },
    ],
    shortcut: ['/favicon.ico'],
  },
};


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/assests/favicon.ico" sizes="32x32" />
//         <link rel="icon" href="/assests/icon.png" type="image/png" sizes="512x512" />
//         <link rel="apple-touch-icon" href="/assests/apple-icon.png" />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


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
        <Analytics />
      </body>
    </html>
  );
}

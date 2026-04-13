import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import OnekoCat from "@/components/onako/Cat";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400", // required for serif
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanishtirpathi.me"), // change to your real domain

  title: {
    default: "Tanish Tirpathi",
    template: "%s | Tanish Tirpathi",
  },

  description:
    "Tanish Tirpathi is a software engineer passionate about building innovative digital solutions and exploring cutting-edge technologies.",

  applicationName: "Tanish Tirpathi",
  authors: [{ name: "Tanish Tirpathi", url: "https://tanishtirpathi.me" }],
  creator: "Tanish Tirpathi",
  publisher: "Tanish Tirpathi",

  keywords: [
    "Tanish Tirpathi",
    "tanish tirpathi",
    "Tanish tirpathi portfolio",
    "Tanish tirpathi",
    "Tanish tripathi",
    "tanishtirpathi ",
    "Web Development",
    "Startup",
    "MERN Developer",
    "Next.js Developer",
    "Modern Web App"
  ],

  icons: {
    icon: "/ICON.webp",
    shortcut: "/ICON.webp",
    apple: "/ICON.webp",
  },

  openGraph: {
    type: "website",
    url: "https://www.tanishtirpathi.me",
    title: "Tanish Tirpathi",
    description:
      "Tanish Tirpathi — A modern digital platform built with performance and intelligence.",
    siteName: "Tanish Tirpathi",
    images: [
      {
        url: "/OBG.webp",
        width: 1200,
        height: 630,
        alt: "Tanish Tirpathi Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tanish Tirpathi",
    description:
      "Tanish Tirpathi — A modern digital platform built by Tanish Tirpathi.",
    images: ["/OBG.webp"],
    creator: "@tanishtirpathi",
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

  category: "technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=(t==='light'||t==='dark'||t==='system')?t:'system';var d=p==='dark'||(p==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body
      className={`${geistSans.variable} ${geistMono.variable} ${hanken.variable} ${instrument.variable} antialiased `}
    >
      {children}

      <OnekoCat /><Analytics />

    </body>
    </html>
  );
}

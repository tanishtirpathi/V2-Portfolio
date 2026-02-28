import type { Metadata } from "next";
import { Geist, Geist_Mono ,Hanken_Grotesk, Instrument_Serif  } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    "Web Development",
    "Startup",
    "MERN Developer",
    "Next.js Developer",
    "Modern Web App"
  ],

  icons: {
    icon: "/OGB.png",
    shortcut: "/OGB.png",
    apple: "/OGB.png",
  },

  openGraph: {
    type: "website",
    url: "https://tanishtirpathi.me",
    title: "Tanish Tirpathi",
    description:
      "Tanish Tirpathi — A modern digital platform built with performance and intelligence.",
    siteName: "Tanish Tirpathi",
    images: [
      {
        url: "/OGB.png",
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
    images: ["/OGB.png"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hanken.variable} ${instrument.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

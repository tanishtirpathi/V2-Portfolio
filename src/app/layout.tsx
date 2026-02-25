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
  title: "Tanish Tirpathi",
  description: "Tanish Tirpathi's personal website. A software engineer with a passion for building innovative solutions and exploring new technologies.",
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

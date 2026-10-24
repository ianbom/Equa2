import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GALERYA — Thoughtfully Crafted for Modern Living",
  description:
    "Discover timeless contemporary furniture shaped by natural materials, thoughtful design, and Indonesian craftsmanship. Based in Surabaya, Indonesia.",
  keywords: [
    "GALERYA",
    "contemporary furniture",
    "indoor furniture",
    "outdoor furniture",
    "teak wood",
    "rattan craft",
    "home decoration",
    "Surabaya",
  ],
  openGraph: {
    title: "GALERYA — Contemporary Furniture & Interior Living",
    description:
      "Discover timeless furniture shaped by natural materials, thoughtful design, and contemporary craftsmanship.",
    url: "https://galerya.com",
    siteName: "GALERYA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-[#1b1b1b] selection:bg-[#f05c1a] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

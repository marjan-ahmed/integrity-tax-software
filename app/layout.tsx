import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose the weights you need
  variable: "--font-oxanium",   // optional, for CSS variable
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose the weights you need
  variable: "--font-inter",   // optional, for CSS variable
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Integrity Tax Software",
  description: "Keep 100% of your fees. Get everything you need to start or scale — plus a Free Website or Free Laptop bonus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${oxanium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

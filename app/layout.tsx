import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Oxanium } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

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
      
        {/* Logo Section */}
        <div
          className="py-2 border flex flex-col justify-center items-center"
        >
          <Link href={'/'}>
          <Image
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/GcSAVqax8JVAKDL4VpBK/media/686e6879933498e4e5b51ef5.webp"
            alt="Integrity Tax Software"
            width={80}
            height={80}
          />
          </Link>
        </div>

        {children}
       <Footer />
      </body>
    </html>
  );
}

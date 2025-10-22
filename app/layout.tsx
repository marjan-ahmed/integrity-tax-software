import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Manrope, Oxanium } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800","200","300", "500","400", "600", "700"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
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
  description:
    "Keep 100% of your fees. Get everything you need to start or scale — plus a Free Website or Free Laptop bonus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1053905919147835');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1053905919147835&ev=PageView&noscript=1"
          />
        </noscript>

         <div className="relative flex text-xl sm:text-2xl font-bold justify-center items-center py-3 overflow-hidden border-none">
          {/* Background image same as hero section */}
          <Image
            src="/images/hero-bg.png"
            alt="Header background"
            fill
            priority
            className="object-cover object-center brightness-110 contrast-110 opacity-90"
          />

          {/* Gradient overlay with blur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/63 to-[#080A12]/75 backdrop-blur-md"></div>

          {/* ✅ Text — version 1 (white text) */}
          {/* <Link href={"/"} className="relative z-10 text-white font-manrope tracking-wide">
            SYED SUBHAN ALI
          </Link> */}

          {/* ✅ Text — version 2 (gradient text) */}
          <Link
            href={"/"}
            className="relative font-bold font-inter z-10 tracking-wide text-white"
          >
            SYED SUBHAN ALI
          </Link>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}

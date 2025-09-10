import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Oxanium } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oxanium",
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${oxanium.variable} antialiased`}
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1053905919147835&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Logo Section */}
        <div className="py-2 border flex flex-col justify-center items-center">
          <Link href={"/"}>
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

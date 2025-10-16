'use client'

import Image from "next/image"
import Marquee from "react-fast-marquee"
import TicketSelector from "./components/TicketSelector"
import VIPSection from "@/components/VipBonuses"
import FAQSection from "@/components/Faq"
import HowItWorks from "./components/HowItWorks"
import UrgencySection from "./components/Urgency"
import LaunchOfferSection from "@/components/LaunchOfferSection"
import { motion, useReducedMotion } from "framer-motion"
import { MoveRight } from "lucide-react"
import ClientTestimonials from "./components/ClientTestimonials"
import AToZSystemSection from "./components/AToZSystemSection"
import TargetAudienceSection from "./components/TargetAudienceSection"
import AfterWorkingWithUsSection from "./components/AfterWorkingWithUsSection"
import HiddenSystemsSection from "./components/HiddenSystemsSection"
import Link from "next/link"
import ClientTestimonialsGrid from "./components/ClientTestimonialsGrid"

export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  const fade = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.45 },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.05 },
    },
  }

  return (
    <div className="bg-[#131320] min-h-screen text-white">
      {/* Top Marquee */}
     <section className="relative h-screen flex items-center bg-[#131320] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/hero-bg.png"
    alt="Hero background"
    fill
    priority
    className="object-cover object-center brightness-110 contrast-110 opacity-90"
  />

  {/* Overlay (so text is readable but image still visible) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#131320]/80"></div>

  {/* Hero Content */}
  <motion.div
    className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    {/* Text Section */}
    <motion.div
      className="w-full lg:w-1/2 text-center lg:text-left"
      variants={fade}
    >
      <h1 className="font-black font-oxanium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
        Let My Growth Marketing System Build You A Successful Business Online
      </h1>

      <p className="mt-3 font-inter text-sm sm:text-base lg:text-xl font-semibold text-yellow-300">
        No theory, Real campaigns that focus on ROI
      </p>

      <p className="mt-4 font-inter text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
        I'll show you the exact system I use to generate qualified leads for
        Service-based Businesses, SaaS Founders, and Restaurant Owners!
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
        <Link
          href="https://calendly.com/contact-syedsubhanali/book-now"
          passHref
        >
          <motion.button
            className="py-3 px-6 sm:px-8 text-black font-semibold font-inter text-sm sm:text-base rounded-lg overflow-hidden 
                bg-gradient-to-r from-[#FFF94C] via-[#FFF82E] to-[#FFF700] hover:brightness-110 w-full sm:w-auto transition-transform"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Free Strategy Call
          </motion.button>
        </Link>
      </div>
    </motion.div>

    {/* Video Section */}
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto rounded-xl shadow-2xl brightness-110 border border-white/10"
      >
        <source src="/subhan-ads-demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </motion.div>
</section>



      {/* A to Z System Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <AToZSystemSection />
      </motion.section>

{/* You Don't Need Section */}
<motion.section
  className="relative bg-[#131320] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
  style={{
    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
    backgroundSize: "30px 30px",
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  {/* Dark overlay to ensure readability */}
  <div className="absolute inset-0 bg-[#131320]/30"></div>
  <div className="relative z-10 max-w-6xl mx-auto">
    <motion.div className="text-center mb-16" variants={fade}>
      <h2 className="font-oxanium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
        Stop watching people make money online from the sidelines
      </h2>
    </motion.div>

    <div className="grid lg:grid-cols-1 gap-8 lg:gap-12">
      <motion.div className="space-y-6" variants={fade}>
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-white">You don’t need to be an expert</h3>
          <p className="text-gray-100 text-sm sm:text-base  leading-relaxed">
Finding winning products doesn’t come down to expertise or a lifetime spent doing something: it’s about identifying a unique value zone and building a quality product with the help of your new AI tools. 
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-white">You don’t need to show your face</h3>
          <p className="text-gray-100 text-sm sm:text-base  leading-relaxed">
Monetise allows you to build and sell a digital product without ever showing your face. 
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-white">You don’t need to have sold online before</h3>
          <p className="text-gray-100 text-sm sm:text-base  leading-relaxed">
The Digital Product Formula gives complete beginners a clear path from first product to first sale to scaling into tens of thousands per month. A step-by-step system shows you every move, shortcut, and strategy, proven by students who generated $8.9M in just 90 days last time.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-white">You don’t need an audience</h3>
          <p className="text-gray-100 text-sm sm:text-base  leading-relaxed">
            When you join Monetise, you’ll instantly learn how to put your product where motivated buyers are already searching, even with no ads, no audience, and no guesswork.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</motion.section>

      {/* After Working With Us Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <AfterWorkingWithUsSection />
      </motion.section>

      {/* How It Works */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <HowItWorks />
      </motion.section>

      <div className="border-2 border-black"></div>

      {/* Ticket Selector */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <TicketSelector />
      </motion.section>

      {/* VIP / Bonus Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <VIPSection />
      </motion.section>

      {/* Target Audience Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <TargetAudienceSection />
      </motion.section>

    <ClientTestimonialsGrid />

      {/* Hidden Systems Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <HiddenSystemsSection />
      </motion.section>

      {/* FAQ Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <FAQSection />
      </motion.section>

    </div>
  )
}

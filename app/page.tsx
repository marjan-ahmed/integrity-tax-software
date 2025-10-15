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
    <div className="bg-gradient-to-b from-[#0f1419] to-[#14353f] min-h-screen text-white">
      {/* Top Marquee */}
      <section className="bg-gradient-to-r from-[#14353f] to-[#1a3d4a] h-screen flex items-center">
        {/* <div className="bg-red-600 text-white px-2 sm:px-4 py-2 sm:py-3">
          <Marquee speed={50} direction="right" gradient={false}>
            <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              DO NOT CLOSE THIS PAGE! YOUR REGISTRATION IS NOT COMPLETE YET...
            </span>
          </Marquee>
        </div> */}
        {/* Hero Section */}
        <motion.div
  className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12 bg-gradient-to-br from-[#14353f] via-[#1a3d4a] to-[#0f1419] rounded-3xl shadow-2xl border border-gray-600/30 backdrop-blur-sm w-full"
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {/* Text */}
  <motion.div className="w-full lg:w-1/2 text-center lg:text-left" variants={fade}>
    <h1 className="font-black font-oxanium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
      Let My Growth Marketing System Build You A Successful Business Online
    </h1>

    <p className="mt-3 font-inter text-base sm:text-lg lg:text-xl font-semibold text-[#6A98FF]">
      ( No theory, Real campaigns that focus on ROI )
    </p>

    <p className="mt-4 font-inter text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
      I'll show you the exact system I use to generate qualified leads for Service-based Businesses, SaaS Founders, and Restaurant Owners!
    </p>
    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
      <Link href={"https://calendly.com/contact-syedsubhanali/book-now"} passHref>
        <motion.button
          className="py-3 px-6 sm:px-8 font-inter bg-[#6A98FF] text-white rounded-lg text-sm sm:text-base font-semibold w-full sm:w-auto shadow-lg hover:bg-[#5580e8] transition-colors"
          whileHover={typeof window !== "undefined" && window.innerWidth > 768 ? { scale: 1.03 } : {}}
          whileTap={{ scale: 0.97 }}
        >
          Book Your Free Strategy Call
        </motion.button>
      </Link>
    </div>
  </motion.div>

            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
         <video
  autoPlay
  loop
  controls
  playsInline
  className="w-full h-auto rounded-lg shadow-2xl"
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
  className="relative bg-gradient-to-br from-[#0f1419] to-[#14353f] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419]/80 to-[#14353f]/80"></div>
  <div className="relative z-10 max-w-6xl mx-auto">
    <motion.div className="text-center mb-16" variants={fade}>
      <h2 className="font-oxanium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
        You Don't Need To Guess What Works
      </h2>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <motion.div className="space-y-6" variants={fade}>
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[#B8D4FF]">You don't need to know marketing</h3>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            Most business owners waste money trying to figure out Ads or Content on their own. 
            We handle everything from offer creation to conversions with a system that's already proven to work across multiple industries.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[#B8D4FF]">You don't need to post every day</h3>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            Our team manages your full social presence — content, design, captions, and strategy. 
            You'll stay consistent without spending hours creating posts.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[#B8D4FF]">You don't need a big team</h3>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            Our A–Z Marketing System replaces hiring separate designers, Ad Managers or Landing Page Experts.
            One system. One partner focused on your growth.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-[#B8D4FF]">You don't need to guess what's next</h3>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            We give you full transparency with reports, and real-time results so you always know what's working and what's not.
          </p>
        </div>
      </motion.div>

      <motion.div className="space-y-8" variants={fade}>
      <p className="mt-4 sm:mt-0 text-sm sm:text-base md:text-lg leading-relaxed">
        This isn’t just software — it’s a done-for-you growth system built to scale your tax business.
      </p>

      <p className="mt-6 text-md sm:text-lg md:text-xl font-semibold font-inter">
        Who Is This For?
      </p>

      <ul className="mt-3 space-y-3 sm:space-y-4 text-base sm:text-base md:text-lg">
        <li className="flex items-start gap-2">
          <MoveRight className="mt-1 shrink-0 text-[#B8D4FF]" size={18} />
          <span>New Tax Preparers starting fresh or side hustling.</span>
        </li>
        <li className="flex items-start gap-2">
          <MoveRight className="mt-1 shrink-0 text-[#B8D4FF]" size={18} />
          <span>Switchers tired of overpriced platforms like Drake, CrossLink, or TaxSlayer Pro.</span>
        </li>
        <li className="flex items-start gap-2">
          <MoveRight className="mt-1 shrink-0 text-[#B8D4FF]" size={18} />
          <span>Service Bureaus managing multiple preparers who need to scale without splitting profits.</span>
        </li>
      </ul>

      <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
        If you're ready to keep more of your money and close more clients, this package is for you.
      </p>
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

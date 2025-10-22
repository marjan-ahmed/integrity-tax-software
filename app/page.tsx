"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import TicketSelector from "./components/TicketSelector"
import VIPSection from "@/components/VipBonuses"
import FAQSection from "@/components/Faq"
import HowItWorks from "./components/HowItWorks"
import UrgencySection from "./components/Urgency"
import LaunchOfferSection from "@/components/LaunchOfferSection"
import ClientTestimonials from "./components/ClientTestimonials"
import AToZSystemSection from "./components/AToZSystemSection"
import TargetAudienceSection from "./components/TargetAudienceSection"
import AfterWorkingWithUsSection from "./components/AfterWorkingWithUsSection"
import HiddenSystemsSection from "./components/HiddenSystemsSection"
import ClientTestimonialsGrid from "./components/ClientTestimonialsGrid"
import CountUp from "@/components/CountUp" // Make sure you created CountUp.tsx

export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  const fade = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.45 } },
  }

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.05 } },
  }

  return (
    <div className="bg-[#080A12] min-h-screen text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-[#080A12] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/hero-bg.png"
    alt="Hero background"
    fill
    priority
    className="object-cover object-center brightness-110 contrast-110 opacity-90"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#080A12]/80"></div>

  {/* Hero Content */}
  <motion.div
    className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    {/* Text + CTA */}
    <motion.div className="w-full lg:w-1/2 text-center lg:text-left" variants={fade}>
      <h1 className="font-black font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
        Let My Growth Marketing System Build You A Successful Business Online
      </h1>

      <p className="mt-3 font-inter text-sm sm:text-base lg:text-xl font-semibold bg-gradient-to-r from-[#5EB3F8] via-[#77C3FE] to-[#70C0FD] bg-clip-text text-transparent">
        No theory, Real campaigns that focus on ROI
      </p>

      {/* CTA Button */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
        <Link href="https://calendly.com/contact-syedsubhanali/book-now" passHref>
          <motion.button
            className="py-3 uppercase px-6 sm:px-8 text-black font-semibold text-sm sm:text-base rounded-lg overflow-hidden 
            bg-gradient-to-r from-[#FFF94C] via-[#FFF82E] to-[#FFF700] hover:brightness-110 w-full sm:w-auto transition-transform"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Free Strategy Call
          </motion.button>
        </Link>
      </div>

      {/* ✅ Video Section (Visible here only on mobile) */}
      <div className="w-full mt-6 lg:hidden relative order-2">
        <video
          autoPlay
          loop
          playsInline
          controls
          className="w-full h-auto rounded-xl shadow-2xl brightness-110 border border-white/10"
        >
          <source src="/subhan-ads-demo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ✅ Animated Counters */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 text-[#fff600]"
        variants={fade}
      >
        {/* Ad Spend Managed */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-2xl sm:text-3xl font-extrabold font-manrope">
            $<CountUp from={0} to={700} duration={0.5} className="inline" />k+
          </span>
          <span className="text-gray-200 text-xs sm:text-sm md:text-base mt-2 font-inter">
            Ad Spend Managed
          </span>
        </div>

        {/* Revenue Generated */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-2xl sm:text-3xl font-extrabold font-manrope">
            $<CountUp from={0} to={2.3} duration={2.5} className="inline" />M+
          </span>
          <span className="text-gray-200 text-xs sm:text-sm md:text-base mt-2 font-inter">
            Revenue Generated
          </span>
        </div>

        {/* Clients Worldwide */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-2xl sm:text-3xl font-extrabold font-manrope">
            <CountUp from={0} to={120} duration={1} className="inline" />+
          </span>
          <span className="text-gray-200 text-xs sm:text-sm md:text-base mt-2 font-inter">
            Clients Worldwide
          </span>
        </div>
      </motion.div>
    </motion.div>

    {/* ✅ Desktop Video Section (Hidden on mobile) */}
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 relative hidden lg:block">
      <video
        autoPlay
        loop
        playsInline
        controls
        className="w-full h-auto rounded-xl shadow-2xl brightness-110 border border-white/10"
      >
        <source src="/subhan-ads-demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </motion.div>
</section>


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

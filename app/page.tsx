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
    <>
      {/* Top Marquee */}
      <section>
        {/* <div className="bg-red-600 text-white px-2 sm:px-4 py-2 sm:py-3">
          <Marquee speed={50} direction="right" gradient={false}>
            <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              DO NOT CLOSE THIS PAGE! YOUR REGISTRATION IS NOT COMPLETE YET...
            </span>
          </Marquee>
        </div> */}
        {/* Hero Section */}
        <motion.div
  className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto px-6 my-14"
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {/* Text */}
  <motion.div className="md:w-1/2" variants={fade}>
    <h1 className="font-black font-oxanium text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-snug">
      Launch Your Tax Business Today
    </h1>

    {/* Added Price Text */}
    <p className="mt-2 font-inter  text-xl sm:text-2xl font-semibold text-[#0C7061]">
      Starting from $99
    </p>

    <p className="mt-4 font-inter text-lg text-gray-700">
      Keep 100% of your fees. Get everything you need to start or scale — plus a{" "}
      <span className="font-bold">Free Website</span> or{" "}
      <span className="font-bold">Free Laptop</span> bonus.
    </p>
    <div className="my-6 flex flex-col sm:flex-row gap-3">
      <Link href={"/booking"} passHref>
        <motion.button
          className="py-3 px-4 font-inter bg-[#0C7061] text-white rounded-md w-full sm:w-auto"
          whileHover={typeof window !== "undefined" && window.innerWidth > 768 ? { scale: 1.03 } : {}}
          whileTap={{ scale: 0.97 }}
        >
          Book Your Free Demo Today
        </motion.button>
      </Link>
      <Link href={'https://api.taxnitro.com/widget/form/J76xx1qIettzVEewiapI'}>
        <motion.button
          className="py-3 px-4 font-inter bg-[#25dcbb] text-black rounded-md w-full sm:w-auto"
          whileHover={typeof window !== "undefined" && window.innerWidth > 768 ? { scale: 1.03 } : {}}
          whileTap={{ scale: 0.97 }}
        >
          Get Instant Access To Free Toolkit
        </motion.button>
      </Link>
    </div>
  </motion.div>

            <div className="w-full md:w-1/2">
          <video autoPlay loop controls preload="auto" className="rounded-lg shadow-lg">
  <source src="/integrity-software-demo-vid.mp4" type="video/mp4" />
  <source src="/integrity-software-demo-vid.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
            </div>
        </motion.div>
      </section>

{/* Why Choose Section */}
<motion.section
  className="bg-gradient-to-br from-[#07574b] bg-[#096356] text-white py-12 sm:py-16 px-4 sm:px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  <motion.div className="text-center mb-8 sm:mb-12" variants={fade}>
    <h2 className="inline-block font-oxanium text-2xl sm:text-3xl md:text-4xl font-bold">
      Why Choose Integrity Tax Software
      <span className="block w-16 sm:w-20 h-1 rounded-full bg-[#25dcbb] mx-auto mt-3"></span>
    </h2>
  </motion.div>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
    {/* Left side - Image */}
    <motion.div className="flex justify-center md:w-1/2" variants={fade}>
      <Image
        src="/images/money-back-guanrantee.png"
        alt="Integrity Tax Software Demo"
        width={300}
        height={300}
        className="w-44 sm:w-56 md:w-72 lg:w-80 h-auto"
      />
    </motion.div>

    {/* Right side - Text */}
    <motion.div className="md:w-1/2 text-center md:text-left" variants={fade}>
      <p className="mt-4 sm:mt-0 text-sm sm:text-base md:text-lg leading-relaxed">
        This isn’t just software — it’s a done-for-you growth system built to scale your tax business.
      </p>

      <p className="mt-6 text-md sm:text-lg md:text-xl font-semibold font-inter">
        Who Is This For?
      </p>

      <ul className="mt-3 space-y-3 sm:space-y-4 text-base sm:text-base md:text-lg">
        <li className="flex items-start gap-2">
          <MoveRight className="mt-1 shrink-0 text-[#25dcbb]" size={18} />
          <span>New Tax Preparers starting fresh or side hustling.</span>
        </li>
        <li className="flex items-start gap-2">
          <MoveRight className="mt-1 shrink-0 text-[#25dcbb]" size={18} />
          <span>Switchers tired of overpriced platforms like Drake, CrossLink, or TaxSlayer Pro.</span>
        </li>
        <li className="flex items-start gap-2">
          <MoveRight className="mt-1 shrink-0 text-[#25dcbb]" size={18} />
          <span>Service Bureaus managing multiple preparers who need to scale without splitting profits.</span>
        </li>
      </ul>

      <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
        If you’re ready to keep more of your money and close more clients, this package is for you.
      </p>
    </motion.div>
  </div>
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

      {/* Client Testimonials */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <ClientTestimonials />
      </motion.section>

      {/* Urgency / Limited Offer */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <UrgencySection />
      </motion.section>

      {/* FAQ Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <FAQSection />
      </motion.section>

      {/* Final Launch Offer / Big CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <LaunchOfferSection />
      </motion.section>


    </>
  )
}

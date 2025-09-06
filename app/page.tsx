'use client'

import Image from "next/image";
import Marquee from "react-fast-marquee";
import TicketSelector from "./components/TicketSelector";
import VIPSection from "@/components/VipBonuses";
import FAQSection from "@/components/Faq";
import HowItWorks from "./components/HowItWorks";
import UrgencySection from "./components/Urgency";
import LaunchOfferSection from "@/components/LaunchOfferSection";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { MoveRight } from "lucide-react";
import ClientTestimonials from "./components/ClientTestimonials";

export default function Home() {
  const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeDown = { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

  return (
    <>
      {/* Top Marquee */}
      <section>
        <div className="bg-red-600 text-white px-2 sm:px-4 py-2 sm:py-3">
          <Marquee speed={60} direction="right">
            <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              DO NOT CLOSE THIS PAGE! YOUR REGISTRATION IS NOT COMPLETE YET...
            </span>
          </Marquee>
        </div>

        {/* Logo Section */}
        <motion.div
          className="py-2 border flex flex-col justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
        >
          <Image
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/GcSAVqax8JVAKDL4VpBK/media/686e6879933498e4e5b51ef5.webp"
            alt="Integrity Tax Software"
            width={80}
            height={80}
          />
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto px-6 my-14"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Text */}
          <motion.div className="md:w-1/2" variants={fadeLeft}>
          <h1 className="font-black font-oxanium text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-snug">
  Launch Your Tax Business for Just <span className="font-inter">$899</span>
</h1>
<p className="mt-4 font-inter text-lg text-gray-700">
  Keep 100% of your fees. Get everything you need to start or scale — plus a{' '}
  <span className="font-bold text-[#0C7061]">Free Website</span> or{' '}
  <span className="font-bold text-[#0C7061]">Free Laptop</span> bonus.
</p>            
            <motion.div className="my-6 flex flex-col sm:flex-row gap-3" variants={staggerContainer}>
              <motion.button
                className="py-3 px-4 font-inter bg-[#0C7061] text-white rounded-md w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Free Demo Today
              </motion.button>
              <motion.button
                className="py-3 px-4 font-inter bg-[#25dcbb] text-black rounded-md w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Instant Access To Free Toolkit
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Video */}
          <motion.div className="w-full md:w-1/2" variants={fadeRight}>
            <motion.video
              src="/integrity-software-demo-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <motion.section
        className="bg-[#043805] text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-4" variants={fadeUp}>
          <h2 className="inline-block font-oxanium mb-6 text-2xl md:text-4xl font-bold">
            Why Choose Integrity Tax Software
            <span className="block w-22 h-1 rounded-full bg-[#00D42A] mx-auto mt-2"></span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left side - Image */}
          <motion.div
            className="flex justify-center md:w-1/2"
            variants={fadeDown}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="https://framerusercontent.com/images/aFUZfkn3GwMuRPKSO173C72vs.webp?scale-down-to=512"
              alt="Integrity Tax Software Demo"
              width={300}
              height={300}
              className="w-56 md:w-72"
            />
          </motion.div>

          {/* Right side - Text */}
          <motion.div className="text-center md:text-left md:w-1/2" variants={fadeUp}>
            <p className="mt-6 text-base leading-relaxed">
              This isn’t just software — it’s a done-for-you growth system built to scale your tax business.
            </p>

            <p className="mt-4 text-lg sm:text-xl leading-relaxed font-semibold font-inter">Who Is This For?</p>
            <ul className="mt-2 space-y-4 text-lg">
              <li className="flex items-start gap-2">
                <MoveRight className="mt-1 text-[#00D42A]" />
                <span>New Tax Preparers starting fresh or side hustling.</span>
              </li>
              <li className="flex items-start gap-2">
                <MoveRight className="mt-1 text-[#00D42A]" />
                <span>Switchers tired of overpriced platforms like Drake, CrossLink, or TaxSlayer Pro.</span>
              </li>
              <li className="flex items-start gap-2">
                <MoveRight className="mt-1 text-[#00D42A]" />
                <span>Service Bureaus managing multiple preparers who need to scale without splitting profits.</span>
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed">
              If you’re ready to keep more of your money and close more clients, this package is for you.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <HowItWorks />
      </motion.section>

      <div className="border-2 border-black"></div>

      {/* Ticket Selector */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <TicketSelector />
      </motion.section>

      {/* VIP / Bonus Section */}
      <motion.section initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <VIPSection />
      </motion.section>

      
       <motion.section initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <ClientTestimonials />
      </motion.section>

      {/* Urgency / Limited Offer */}
      <motion.section initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <UrgencySection />
      </motion.section>


      {/* FAQ Section */}
      <motion.section initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <FAQSection />
      </motion.section>

      {/* Final Launch Offer / Big CTA */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <LaunchOfferSection />
      </motion.section>

      <Footer />
    </>
  );
}

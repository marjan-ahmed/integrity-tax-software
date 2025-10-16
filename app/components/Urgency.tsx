'use client'

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UrgencySection() {
  return (
    <section
      className="relative py-16 px-4 sm:px-6 md:px-12 text-white"
      style={{
        backgroundImage: "url('/images/bg-urgency.jpg')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for opacity + gradient */}
      {/* <div className="absolute inset-0 bg-red-700/60"></div> */}
      <div className="absolute inset-0 bg-[#131320] opacity-95"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4 gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-oxanium leading-snug">
              Limited Time Offer: $99 + Free Bonus
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            This is available only for a short time before tax season rush. Don’t wait — every day you delay, you lose clients.
          </p>

          <Link href={'/booking'}>
          <motion.button
            className="inline-flex font-inter items-center gap-2 bg-white text-[#131320] font-semibold rounded-lg px-5 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes, I Want My Free Demo
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

'use client'

import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LaunchOfferSection() {
  return (
    <section
      className="relative py-20 px-6 sm:px-12 md:px-16 text-white bg-gradient-to-br from-[#043805] via-[#064a0b] to-black"
    >
      {/* Overlay for opacity effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-oxanium leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Keep 100% of Your Fees. Launch in 7 Days.
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Don’t get stuck paying more to platforms that take your profits. Get Integrity Tax Software’s all-in-one growth package starts from $199 and claim your free bonus today.
        </motion.p>

        <Link href={'/booking'}>
        <motion.button
          className="inline-flex font-inter items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg px-6 sm:px-8 py-4 sm:py-5 text-md sm:text-xl shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule My Free Demo Now
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
        </Link>

        {/* Optional rocket icon decoration */}
        <motion.div
          className="absolute top-0 right-0 opacity-30 w-20 h-20 sm:w-32 sm:h-32"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Rocket className="w-full h-full text-yellow-500" />
        </motion.div>
      </div>
    </section>
  );
}

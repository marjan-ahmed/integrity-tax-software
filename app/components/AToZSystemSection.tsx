'use client'

import { motion } from "framer-motion"
import { CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AToZSystemSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-20 px-6 sm:px-8 bg-[#141522]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oxanium text-white">
            A to Z System For Sales, Leads and Booked Calls
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            You’ll get a proven client acquisition system that actually converts.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 bg-black border border-gray-600/30 rounded-3xl shadow-2xl p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Left - Visual */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#6A98FF] to-[#B8D4FF] blur-lg opacity-60 group-hover:opacity-80 transition-all"></div>
              <div className="relative bg-[#1b2a3a] rounded-full p-8">
                <TrendingUp className="w-24 h-24 sm:w-28 sm:h-28 text-white" />
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">
              One system to connect your content, offers, pages, and paid traffic — 
              turning everything into booked calls.
            </h3>

            <ul className="space-y-4">
              {[
                "Simple to set up. Simple to run.",
                "Proven across multiple industries.",
                "End-to-end automation for maximum efficiency.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6A98FF] flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-lg text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Your Win Could Be Next */}
        <motion.div
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-oxanium">
            Your Win Could Be Next
          </h3>
          <p className="text-md sm:text-lg text-gray-300 max-w-3xl mx-auto">
            From local businesses landing their first 5 clients to founders closing $37K months…  
            <br />
            <span className="font-semibold text-gray-200">
              We see wins like this every week. Yours can be the next one.
            </span>
          </p>
        </motion.div>

        {/* Stop Guessing Section */}
        <motion.div
          className="bg-black rounded-2xl p-8 text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Stop Guessing. Start Growing.
          </h3>
          <p className="text-md sm:text-lg text-gray-300">
            Most businesses waste thousands trying to “figure out” ads.
          </p>
          <p className="text-sm sm:text-lg font-semibold text-gray-200">
            We handle your marketing from strategy to sales — you focus on growth.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link href="https://calendly.com/contact-syedsubhanali/book-now">
            <motion.button
              className="inline-flex items-center justify-center text-sm  px-5 sm:px-10 py-4 sm:text-lg font-semibold text-black rounded-full shadow-lg 
              bg-gradient-to-r from-[#FFF94C] via-[#FFF82E] to-[#FFF700] hover:brightness-110 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Growth Call
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

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
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#0f1419] to-[#14353f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oxanium mb-4 text-white">
            A to Z System For Sales, Leads and Booked Calls
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            You will get a Proven Client Acquisition System
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="bg-gradient-to-br from-[#14353f] to-[#1a3d4a] border border-gray-600/30 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Side - Text */}
            <div className="lg:w-2/3">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 text-white leading-tight">
                A single operating system that connects content, offers, landing pages, and paid traffic into booked calls.
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#6A98FF] flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-300">Simple to set up. Simple to run.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#6A98FF] flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-300">Proven across multiple industries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#6A98FF] flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-300">End-to-end automation for maximum efficiency</span>
                </div>
              </div>
            </div>

            {/* Right Side - Icon/Visual */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-gradient-to-br from-[#6A98FF] to-[#B8D4FF] p-6 sm:p-8 rounded-full">
                <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Your Win Could Be Next */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-oxanium text-white">
            Your Win Could Be Next
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            From local businesses landing their first 5 clients to Founders closing $37K months…
            <br />
            <span className="font-semibold text-gray-200">We see wins like this every week. Yours can be the next one.</span>
          </p>
        </motion.div>

        {/* Stop Guessing Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a3d4a] to-[#14353f] border border-gray-600/30 rounded-2xl p-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">
            Stop Guessing. Start Growing.
          </h3>
          <p className="text-lg text-gray-300 text-center mb-6">
            Most businesses waste thousands trying to "figure out" ads.
          </p>
          <p className="text-lg font-semibold text-center text-gray-200">
            We handle your entire marketing from strategy to sales, so you focus on running the business.
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
              className="inline-flex items-center gap-2 bg-[#6A98FF] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#5580e8] transition-colors"
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
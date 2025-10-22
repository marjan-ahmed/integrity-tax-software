'use client'

import { motion } from "framer-motion"
import { BarChart3, DollarSign, Award } from "lucide-react"
import Link from "next/link"

export default function HiddenSystemsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#0E0E19] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-manrope mb-6">
            Access to the Hidden Systems Behind High-Converting Ads
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            As a Performance Marketing Agency, We've spent over $700,000+ in live Ad testing across Meta, Google, and TikTok.
            We've seen what actually converts and what drains your budget.
          </p>
          <p className="text-md sm:text-lg text-gray-400">
            We know what works and what doesn't. You'll get access to frameworks, targeting methods, and ad formulas built from real campaigns not theory — designed to turn Ad Spend into Sales consistently.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <DollarSign className="w-12 h-12 text-[#6A98FF] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">$40,000+</div>
            <div className="text-md sm:text-lg text-gray-300 mb-2">Monthly Ad Spend Managed</div>
            <div className="text-gray-400">Across Service-based, SaaS, and local businesses worldwide</div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <BarChart3 className="w-12 h-12 text-[#6A98FF] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">$700,000+</div>
            <div className="text-md sm:text-lg text-gray-300 mb-2">Lifetime Tested & Optimized</div>
            <div className="text-gray-400">Every dollar tracked, analyzed, and reinvested into higher-converting systems</div>
          </motion.div>
        </div>

        {/* Trust System Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#FFF94C] via-[#FFF82E] to-[#FFF700] hover:brightness-110 text-black rounded-2xl p-8 text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            You don't need to trust luck, you just need to trust the system.
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-md sm:text-lg mb-2">Zero Marketing knowledge?</h4>
                <p className="opacity-90">Our framework handles strategy, targeting, and creative so you don't have to guess what works.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-md sm:text-lg mb-2">Burned out?</h4>
                <p className="opacity-90">We take over the workload - Ads, Content, follow-ups so you can stop juggling everything yourself and finally breathe.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-md sm:text-lg mb-2">No following or audience?</h4>
                <p className="opacity-90">We'll run ads that reach your exact target market even if you're starting from zero followers.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-md sm:text-lg mb-2">No tech or ad experience?</h4>
                <p className="opacity-90">You get your own full marketing team - Ads, Social Media, Content, and Automations … all managed under one system.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-md sm:text-lg mb-2">No time?</h4>
                <p className="opacity-90">We handle it A–Z while you focus on running the business. You'll just see booked calls and leads flowing in.</p>
              </div>
            </div>
          </div>
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
              className="inline-flex items-center text-black gap-2 bg-gradient-to-r from-[#FFF94C] via-[#FFF82E] to-[#FFF700] hover:brightness-110 px-8 py-4 rounded-lg text-md sm:text-lg font-semibold shadow-lg hover:bg-[#5580e8] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Strategy Call
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
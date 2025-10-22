'use client'

import { motion } from "framer-motion"
import { Users, Briefcase, Target, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function TargetAudienceSection() {
  const audiences = [
    {
      title: "Local Business Owners",
      description: "If you run a restaurant, clinic, or retail brand and want consistent customers every week without wasting money on random Ads — this system is built for you.",
      icon: Users,
      color: "bg-[#6A98FF]"
    },
    {
      title: "Coaches & Service Providers", 
      description: "If you sell expertise like fitness, business, tax, or education — We'll help you attract qualified leads and automate your booking system so you spend less time chasing and more time closing.",
      icon: Briefcase,
      color: "bg-[#6A98FF]"
    },
    {
      title: "Agency Owners & Freelancers",
      description: "If you already manage clients but struggle with predictable results, our A–Z fulfillment system gives you plug-and-play Ad setups, reporting, and creative frameworks that scale fast.",
      icon: Target,
      color: "bg-[#6A98FF]"
    },
    {
      title: "E-commerce & SaaS Founders",
      description: "If you want to grow consistent sales, we'll handle your paid traffic, funnel setup, and CRM automation — so you focus on product and delivery while your marketing runs itself.",
      icon: ShoppingCart,
      color: "bg-[#6A98FF]"
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#080A12]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-manrope mb-4">
            Who Is This For?
          </h2>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {audiences.map((audience, idx) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={idx}
                className="bg-[#102A56] border-2 border-[#1849A9] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${audience.color} p-3 rounded-lg flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl  leading-7 bg-gradient-to-r from-[#5EB3F8] via-[#77C3FE] to-[#70C0FD] bg-clip-text text-transparent">
                      {audience.title}
                    </h3>
                    <p className="text-gray-100 font-inter leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Guarantee Section */}
        <motion.div 
          className="bg-gradient-to-r border-4 border-black from-[#5EB3F8] via-[#77C3FE] to-[#70C0FD] rounded-2xl p-8 text-black text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            We'll 5x Your Marketing ROI or We Work With You Until You Do
          </h3>
          <p className="text-sm sm:text-lg mb-6 opacity-90">
            If you don't see a 10x return on your marketing investment within 12 months,
            My team and I will continue working with you - optimizing your Ads, funnels, and Automations until you hit it, for up to 3 years.
          </p>
          <p className="text-lg sm:text-xl font-semibold">
            The risk? It's completely on us.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
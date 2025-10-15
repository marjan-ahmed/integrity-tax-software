'use client'

import { motion } from "framer-motion"
import { Settings, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AfterWorkingWithUsSection() {
  const steps = [
    {
      title: "We Build Your Entire Marketing System",
      description: "Our team sets up everything from your Ad Accounts to your Landing Pages and automations. You'll have a full, ready-to-run system designed to generate leads and bookings on autopilot.",
      icon: Settings,
      color: "bg-blue-500"
    },
    {
      title: "We Turn Ads Into Actual Sales",
      description: "No more 'boosting posts' and hoping for results. We create, test, and optimize high-converting ad campaigns that bring real leads, real calls, and real revenue not just clicks.",
      icon: Target,
      color: "bg-[#6A98FF]"
    },
    {
      title: "You Focus on Growth, We Handle the Rest",
      description: "From creatives and copy to retargeting and reporting - We handle your marketing so you can focus on scaling your business. All you'll see are Sales, Booked calls and results that compound week after week.",
      icon: TrendingUp,
      color: "bg-purple-500"
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oxanium mb-4 text-gray-900">
            This is what happens after you start working with us
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 md:p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`${step.color} p-4 rounded-lg flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
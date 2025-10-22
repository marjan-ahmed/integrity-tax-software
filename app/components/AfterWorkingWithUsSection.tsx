'use client'

import { motion } from "framer-motion"
import AfterWorkingCard from "./AfterWorkingCard"

export default function AfterWorkingWithUsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#080A12]">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-manrope mb-4 text-white">
            This is what happens after you start working with us
          </h2>
        </motion.div>

        {/* ✅ Cards Section */}
        <div
          className="
            flex flex-col 
            md:flex-row md:flex-nowrap 
            justify-center items-center 
          "
        >
          <AfterWorkingCard
            image="/images/card1.png"
            title="We Build Your Entire Marketing System"
            description="Our team sets up everything from Ad Accounts to Landing Pages and automations, giving you a complete system designed to generate leads and bookings on autopilot."
          />

          <AfterWorkingCard 
            image="/images/card2.png"
            title="We Turn Ads Into Actual Sales"
            description="No more 'boosting posts' and hoping for results. We create, test, and optimize high-converting ad campaigns that bring real leads, real calls, and real revenue — not just clicks."
          />

          <AfterWorkingCard 
            image="/images/card3.png"
            title="You Focus on Growth, We Handle the Rest"
            description="From creatives and copy to retargeting and reporting — we handle your marketing so you can focus on scaling your business. All you'll see are sales, booked calls, and results that compound week after week."
          />
        </div>
      </div>
    </section>
  )
}

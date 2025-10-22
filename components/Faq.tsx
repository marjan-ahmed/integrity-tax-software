'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "How fast will I start seeing results?",
    answer: "Most clients start seeing qualified leads and sales calls within 7–14 days after launch. The exact timeline depends on your offer, ad budget, and audience but we move fast and optimize daily."
  },
  {
    question: "What’s included in your “A–Z marketing system”?",
    answer: `
Everything you need to grow:
- Ad strategy, setup, and daily optimization  
- High-converting landing pages and funnels  
- Social media content management  
- CRM automations and follow-ups  
- Weekly reporting and performance check-ins  

We handle all of it — so you focus on running your business.
`
  },
  {
    question: "How much does it cost to get started?",
    answer: "We offer flexible packages depending on your business size and goals. Most clients start between $997–$2,500/month, depending on the level of management and Ad Spend. You’ll know the exact price after your free strategy call."
  },
  {
    question: "Do I need to have ad experience or a marketing background?",
    answer: "Not at all. Our system was built for business owners who don’t want to waste time learning ads. We handle everything from targeting, creatives, optimization, and reporting while you focus on growth."
  },
  {
    question: "What if my ads don’t work?",
    answer: "If your campaigns don’t bring results, we don’t walk away. We’ll personally audit your system, fix your funnel, and relaunch until you’re profitable. That’s backed by our “5x ROI or we work with you until you do” guarantee."
  },
  {
    question: "Do I need to post or create content myself?",
    answer: "No. Our content team handles all design, captions, and posting. We’ll build your content calendar, match your brand tone, and keep your pages consistent even if you never touch social media again."
  },
  {
    question: "Can this work for my industry?",
    answer: "Absolutely. Our system has been tested with restaurants, SaaS brands, clinics, and e-commerce stores across multiple countries. We customize everything from your offers to your ad creatives so it fits your exact market."
  },
];

export default function FAQSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextFAQ = () => setCurrentIndex((prev) => (prev + 1) % faqs.length)
  const prevFAQ = () => setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length)

  const slideLeft = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, exit: { opacity: 0, x: -50, transition: { duration: 0.6 } } }
  const slideRight = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, exit: { opacity: 0, x: 50, transition: { duration: 0.6 } } }

  return (
    <div
      className="relative py-12 px-4 sm:px-6 md:px-12 text-white bg-[#0E0E19] overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#0E0E19]/90"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 font-manrope text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={currentIndex % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="border border-gray-600/30 rounded-2xl shadow-lg p-6 sm:p-8 text-left bg-white/10 backdrop-blur"
              style={{ perspective: 1000, transformStyle: 'preserve-3d'}}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">{faqs[currentIndex].question}</h3>
              <p className="text-sm sm:text-base text-gray-300 whitespace-pre-line">{faqs[currentIndex].answer}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevFAQ}
            className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-white text-[#0E0E19] rounded-full p-2 sm:p-3 shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={nextFAQ}
            className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white text-[#0E0E19] rounded-full p-2 sm:p-3 shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {faqs.map((_, idx) => (
            <motion.span
              key={idx}
              className="w-3 h-3 rounded-full"
              animate={{ scale: idx === currentIndex ? 1.3 : 1, backgroundColor: idx === currentIndex ? "#ffffff" : "#9CA3AF" }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          ))}
        </div>
      </div>
      </div>
  )
}

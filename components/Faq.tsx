'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "What exactly do I get after signing up?",
    answer: "You get the full Growth Package: cloud-based tax software with unlimited e-filing, a branded client portal & mobile app, mentorship & training to launch fast, and a done-for-you marketing toolkit (ads, posts, scripts). Plus, choose your bonus: Free Website or Free Laptop."
  },
  {
    question: "I’m new (no EFIN yet). Can I still join?",
    answer: "Yes. Start with the Free Demo to see how it all works. When you’re ready, we’ll guide you through the setup path (including the steps to obtain EFIN), outline exactly what to do, and help you get operational—so you can start filing and keep 100% of your fees."
  },
  {
    question: "I’m switching from Drake/CrossLink/TaxSlayer. How hard is it?",
    answer: "Straightforward. On onboarding, we’ll map your current workflow, help you move client lists (e.g., via export/import or structured templates), and get you live quickly. You’ll keep your client relationships and gain a modern portal/app experience without the bloat or revenue splits."
  },
  {
    question: "Are there hidden fees or revenue splits?",
    answer: "No revenue splits. The whole point is you keep what you charge your clients. The $899 Growth Package is designed to be clear and predictable. You get the software, portal/app, training, and marketing toolkit—no nickel-and-diming on the essentials you need to launch and scale."
  },
  {
    question: "How fast can I launch—and is there a guarantee?",
    answer: "Most users launch within 7 days after onboarding. Book your demo, pick your bonus (Free Website or Free Laptop), and we’ll map a step-by-step plan. And yes—there’s a simple money-back guarantee: if you don’t feel it’s worth it shortly after joining, tell us and we’ll make it right."
  },
]

export default function FAQSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextFAQ = () => setCurrentIndex((prev) => (prev + 1) % faqs.length)
  const prevFAQ = () => setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length)

  const slideLeft = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, exit: { opacity: 0, x: -50, transition: { duration: 0.6 } } }
  const slideRight = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, exit: { opacity: 0, x: 50, transition: { duration: 0.6 } } }

  return (
    <div
      className="relative py-12 px-4 sm:px-6 md:px-12 text-gray-800"
      style={{
        backgroundImage: "url('images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 font-oxanium"
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
              className="border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 text-left bg-white/90"
              style={{ perspective: 1000, transformStyle: 'preserve-3d'}}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#1A331C]">{faqs[currentIndex].question}</h3>
              <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line">{faqs[currentIndex].answer}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevFAQ}
            className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-[#1A331C] text-white rounded-full p-2 sm:p-3 shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={nextFAQ}
            className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-[#1A331C] text-white rounded-full p-2 sm:p-3 shadow-lg"
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
              animate={{ scale: idx === currentIndex ? 1.3 : 1, backgroundColor: idx === currentIndex ? "#1A331C" : "#D1D5DB" }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          ))}
        </div>
      </div>
      </div>
  )
}

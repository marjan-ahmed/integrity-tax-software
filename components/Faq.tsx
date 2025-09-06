'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "What exactly do I get if I join VIP?",
    answer: "As a VIP, you unlock 7 private sessions with Iman before the main event, early access to powerful strategies, and direct Q&A time every day. You also enter to win prizes like a dinner in Dubai, $5,000 in Apple gear, and one-on-one FaceTime calls. Plus, you'll access a private tool never released publicly."
  },
  {
    question: "What if I can’t make it live to every private session?",
    answer: "No problem. All VIP sessions will be recorded and available inside Whop. You can watch or rewatch them on your schedule, without missing a beat."
  },
  {
    question: "Is this really worth it if I already have the free ticket?",
    answer: "Absolutely. The free ticket gives you access to the 3-day event. But VIP is an entirely different experience—longer, deeper, and way more exclusive. You get the kind of access, coaching, and opportunities that simply don’t exist anywhere else in the event."
  },
  {
    question: "How long do I have to decide joining VIP?",
    answer: "This is a one-time offer. Once you leave this page, the door closes. You either step into the private room now—or watch from the outside later."
  },
  {
    question: "Will I definitely win the dinner in Dubai or the Apple bundle?",
    answer: "The Dubai dinner and Apple gear are exclusive prizes for VIPs—but they’re not random giveaways. Every VIP who completes the action steps we give during the 7 days and submits them to our team will be eligible. At the end of the event, we’ll review all the submissions and choose the winners based on commitment, effort, and execution. If you show up, do the work, and stand out—you could be boarding a plane to Dubai."
  },
]

export default function FAQSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextFAQ = () => setCurrentIndex((prev) => (prev + 1) % faqs.length)
  const prevFAQ = () => setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length)

  // Variants for sliding animation
  const slideLeft = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, exit: { opacity: 0, x: -50, transition: { duration: 0.6 } } }
  const slideRight = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, exit: { opacity: 0, x: 50, transition: { duration: 0.6 } } }

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
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
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-left"
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#1A331C]">{faqs[currentIndex].question}</h3>
              <p className="text-gray-700 whitespace-pre-line">{faqs[currentIndex].answer}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevFAQ}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#1A331C] text-white rounded-full p-2 shadow-lg sm:-left-4"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextFAQ}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#1A331C] text-white rounded-full p-2 shadow-lg sm:-right-4"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
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
    </section>
  )
}
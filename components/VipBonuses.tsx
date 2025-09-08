'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const vipBonuses = [
  { title: "BONUS 1: Free Website or Free Laptop (Your Choice)", desc: "Launch with either a professional done-for-you website to attract clients OR a brand-new laptop to run your tax business smoothly." },
  { title: "BONUS 2: Branded Mobile App + Client Portal", desc: "Stand out from competitors with your own client-facing app and secure portal. Build trust instantly and let clients upload docs & track returns — all under your brand." },
  { title: "BONUS 3: Mentorship & Training Program", desc: "Step-by-step onboarding + mentorship from experienced tax professionals. You’ll know exactly how to launch in 7 days, file returns, and scale without confusion." },
  { title: "BONUS 4: Done-For-You Marketing Toolkit", desc: "Get our complete plug-and-play marketing kit: pre-made ads, social posts, scripts, and outreach templates — so you can start landing clients on day one." },
  { title: "BONUS 5: 7-Day Money-Back Guarantee", desc: "Risk-free enrollment. If after 7 days you don’t feel it’s worth every penny, request a refund — no awkward questions, no hoops, just your money back." },
]

export default function VIPSection() {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const images = [
    "/images/ceo.jpg",
    "https://framerusercontent.com/images/N4mbQabDa2bRxVOJZ20NDfXVWaw.png?scale-down-to=1024",
    "/images/web-dev.jpg",
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#064c42] via-[#0C7061] to-black text-white py-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-oxanium font-bold text-center mb-6 bg-clip-text text-white">
          Why You Should Upgrade to Tax Integrity Software
        </h2>

        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
          5 Exclusive Bonuses When You Join Integrity Today
        </p>

        <div className="md:flex md:gap-12">
          {/* Left: Bonuses */}
          <div className="flex-1 space-y-8">
            {vipBonuses.map((bonus, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative p-6 rounded-[1rem] bg-[#02342c] hover:bg-[#023028] shadow-xl border border-white/10 hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#1FFACF]/20 rotate-45 rounded-lg pointer-events-none"></div>
                <h3 className="text-xl md:text-2xl font-bold font-inter text-[#25DCBB] mb-2 z-10 relative">{bonus.title}</h3>
                <p className="text-gray-200 text-sm md:text-base z-10 relative">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Image Carousel */}
          <div className="flex-1 mt-10 md:mt-0 flex flex-col items-center">
            <div
              className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:rotate-[2deg] hover:scale-105 cursor-pointer"
              onClick={() => setIsZoomed(true)}
            >
              <Image
                src={images[currentImage]}
                alt={`VIP Image ${currentImage + 1}`}
                fill
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 ${currentImage === idx ? "border-lime-400" : "border-gray-600"} hover:border-lime-300 transition-all`}
                  onClick={() => setCurrentImage(idx)}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} width={56} height={56} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[currentImage]}
                alt="Zoomed Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

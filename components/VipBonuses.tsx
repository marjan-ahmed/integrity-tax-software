'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const vipBonuses = [
  { title: "Bonus #1 — The Growth Engine Setup", desc: "Your entire Ad + funnel ecosystem built for you. We'll set up everything from Ad accounts to Landing pages, Automations and Tracking. You'll go from 'figuring it out' to a ready-to-run Client Acquisition system in days. Step 1: Plug in your offer or product. Step 2: Launch pre-tested Ad creatives that convert. Step 3: Watch qualified leads flow into your CRM. Step 4: Automate follow-ups and close more sales." },
  { title: "Bonus #2 — Copy & Creative Vault", desc: "Access our private library of Ad copy, Content hooks, and proven creatives across multiple niches. It's like hiring a $15K/month creative team but you get it instantly. ✅ Plug-and-play templates ✅ Scroll-stopping Social Post Examples ✅ Sales-focused captions and CTAs ✅ Weekly creative refreshes based on top-performing campaigns" },
  { title: "Bonus #3 — Performance Guarantee Policy", desc: "If you don't see traction within 30 days of going live, Our team will personally review your campaigns, offers, targeting and rebuild what's needed to make it work. No guesswork. No confusion. Just clarity and action." },

]

export default function VIPSection() {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const images = [
    "/images/bonus-1.webp",
    "/images/bonus-2.webp",
    "/images/bonus-3.webp",
  ]

  return (
    <section className="relative bg-[#1c1d2f] text-white py-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-oxanium font-bold text-center mb-6 bg-clip-text text-white">
          This isn't just another "Marketing Service." It's a Complete Growth System.
        </h2>

        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
          Aside from our full-service Ads & Social Media Program, you'll also get exclusive bonuses designed to launch and scale your business faster, with 90% of the heavy lifting done for you.
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
                className="relative p-6 rounded-[1rem] bg-[#3A67BB]/30 hover:bg-[#4169E1]/30 shadow-xl border border-white/10 hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#6A98FF]/20 rotate-45 rounded-lg pointer-events-none"></div>
                <h3 className="text-xl md:text-2xl font-bold  text-[#fbff00] mb-2 z-10 relative">{bonus.title}</h3>
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

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Build Your Growth System
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            → Get everything you need to attract clients, close sales, and scale without burnout.
          </p>
          <a href="https://calendly.com/contact-syedsubhanali/book-now">
            <motion.button
              className="font-semibold text-black px-8 py-4 rounded-lg text-lg bg-gradient-to-r from-[#FFF94C] via-[#FFF82E] to-[#FFF700] hover:brightness-110 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Strategy Call
            </motion.button>
          </a>
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

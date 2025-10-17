'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function ClientTestimonialsGrid() {
  const clientImages = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: `/images/client-${index + 1}.avif`,
    alt: `Happy Client ${index + 1}`,
  }))

  const row1 = clientImages.slice(0, 8)
  const row2 = clientImages.slice(8, 15)

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#131320] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-oxanium text-white mb-4">
            Our Happy Clients
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've transformed their businesses with our proven marketing system
          </p>
        </motion.div>

        {/* ✅ Mobile Layout (same as before) */}
        <div className="md:hidden space-y-4 overflow-hidden">
          {[row1.slice(0, 5), row2.slice(0, 5), clientImages.slice(0, 5)].map((row, rowIndex) => (
            <motion.div
              key={`mobile-row-${rowIndex}`}
              className="relative w-full overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIndex * 0.2, duration: 0.6 }}
            >
              <div
                className={`flex gap-4 mobile-scroll-row mobile-row-${rowIndex + 1} whitespace-nowrap`}
              >
                {[...row, ...row, ...row].map((client, imageIndex) => (
                  <div key={`mobile-${client.id}-${imageIndex}`} className="flex-shrink-0 inline-block">
                    <div className="w-[120px] h-[150px] relative rounded-xl overflow-hidden shadow-lg bg-white p-1 hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={client.src}
                        alt={client.alt}
                        fill
                        className="object-cover rounded-lg"
                        sizes="120px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Larger Devices - 2 Rows (animated) */}
        <div className="hidden md:block space-y-10 overflow-hidden">
          {/* Row 1 (8 testimonials) */}
          <div className="flex gap-6 desktop-row-1 w-max">
            {[...row1, ...row1].map((client, index) => (
              <div
                key={`desktop-1-${client.id}-${index}`}
                className="w-[200px] h-[240px] relative rounded-xl overflow-hidden shadow-lg bg-white p-2 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Row 2 (7 testimonials) */}
          <div className="flex gap-6 desktop-row-2 w-max">
            {[...row2, ...row2].map((client, index) => (
              <div
                key={`desktop-2-${client.id}-${index}`}
                className="w-[200px] h-[240px] relative rounded-xl overflow-hidden shadow-lg bg-white p-2 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ CSS Animations */}
      <style jsx>{`
        /* Mobile animations */
        @media (max-width: 768px) {
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0%); }
          }
          .mobile-scroll-row {
            width: max-content;
          }
          .mobile-row-1 { animation: scroll-left 23s linear infinite; }
          .mobile-row-2 { animation: scroll-right 25s linear infinite; }
          .mobile-row-3 { animation: scroll-left 27s linear infinite; }
        }

        /* Desktop animations (2 rows) */
        @media (min-width: 769px) {
          @keyframes desktop-scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes desktop-scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .desktop-row-1 {
            animation: desktop-scroll-left 34s linear infinite;
            will-change: transform;
          }

          .desktop-row-2 {
            animation: desktop-scroll-right 36s linear infinite;
            will-change: transform;
          }
        }
      `}</style>
    </section>
  )
}

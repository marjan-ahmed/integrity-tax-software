'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

export default function ClientTestimonialsGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const clientImages = Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    src: `/images/${index + 1}.png`,
    alt: `Happy Client ${index + 1}`,
  }))

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#080A12] overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-manrope text-white mb-4">
            Our Happy Clients
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've transformed their businesses with our proven marketing system
          </p>
        </motion.div>

        {/* Mobile Layout - Animated scrolling: 5 in first row, 6 in second row */}
        <div className="md:hidden space-y-3 overflow-hidden">
          {/* First row - 5 images with animation */}
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-3 mobile-scroll-row-1 whitespace-nowrap">
              {[...clientImages.slice(0, 5), ...clientImages.slice(0, 5), ...clientImages.slice(0, 5)].map((client, imageIndex) => (
                <div 
                  key={`mobile-row1-${client.id}-${imageIndex}`} 
                  className="flex-shrink-0 inline-block cursor-pointer"
                  onClick={() => setSelectedImage(client.id)}
                >
                  <div className="w-[120px] h-[140px] relative rounded-xl overflow-hidden shadow-lg bg-white p-1 hover:shadow-xl transition-all duration-300 hover:scale-105">
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

          {/* Second row - 6 images with animation (reverse direction) */}
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-3 mobile-scroll-row-2 whitespace-nowrap">
              {[...clientImages.slice(5, 11), ...clientImages.slice(5, 11), ...clientImages.slice(5, 11)].map((client, imageIndex) => (
                <div 
                  key={`mobile-row2-${client.id}-${imageIndex}`} 
                  className="flex-shrink-0 inline-block cursor-pointer"
                  onClick={() => setSelectedImage(client.id)}
                >
                  <div className="w-[120px] h-[140px] relative rounded-xl overflow-hidden shadow-lg bg-white p-1 hover:shadow-xl transition-all duration-300 hover:scale-105">
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
        </div>

        {/* Desktop Layout - Static grid (5 per row on large, 2 rows on medium) */}
        <motion.div 
          className="hidden md:grid md:grid-cols-3 justify-center lg:grid-cols-5 gap-3 lg:gap-4 justify-items-center max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {clientImages.map((client, index) => (
            <motion.div
              key={`desktop-${client.id}`}
              className={`w-[220px] h-[260px] relative rounded-xl overflow-hidden shadow-lg bg-white p-2 hover:scale-105 transition-transform duration-300 cursor-pointer ${
                index === 10 ? 'lg:col-start-3' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedImage(client.id)}
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-cover rounded-lg"
                sizes="220px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Zoom Popup Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full h-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              
              {/* Zoomed Image */}
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={`/images/${selectedImage}.png`}
                  alt={`Happy Client ${selectedImage}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 1024px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Animations - Mobile only */}
      <style jsx>{`
        /* Mobile animations only */
        @media (max-width: 768px) {
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          
          @keyframes scroll-right {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0%); }
          }
          
          .mobile-scroll-row-1 {
            width: max-content;
            animation: scroll-left 25s linear infinite;
            will-change: transform;
          }
          
          .mobile-scroll-row-2 {
            width: max-content;
            animation: scroll-right 30s linear infinite;
            will-change: transform;
          }
        }

        /* Prevent body scroll when modal is open */
        body:has(.fixed.z-50) {
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

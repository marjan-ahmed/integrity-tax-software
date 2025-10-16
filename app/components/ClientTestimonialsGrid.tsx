'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function ClientTestimonialsGrid() {
  // Generate array of client images
  const clientImages = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: `/images/client-${index + 1}.avif`,
    alt: `Happy Client ${index + 1}`,
  }))

  // Group images into 3 rows of 5 images each
  const rows = []
  for (let i = 0; i < clientImages.length; i += 5) {
    rows.push(clientImages.slice(i, i + 5))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#1c1d2f] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
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

        {/* Mobile Layout - Horizontal Scrolling Rows */}
        <div className="md:hidden space-y-4 overflow-hidden">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={`mobile-row-${rowIndex}`}
              className="relative w-full overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIndex * 0.2, duration: 0.6 }}
            >
              <div className={`flex gap-4 mobile-scroll-row mobile-row-${rowIndex + 1} whitespace-nowrap`}>
                {/* Triple the images for seamless infinite scrolling */}
                {[...row, ...row, ...row].map((client, imageIndex) => (
                  <div
                    key={`mobile-${client.id}-${imageIndex}`}
                    className="flex-shrink-0 inline-block"
                  >
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

        {/* Desktop Layout - Static 3x5 Grid */}
        <motion.div 
          className="hidden md:block space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rows.map((row, rowIndex) => (
            <motion.div
              key={`desktop-row-${rowIndex}`}
              className="flex justify-center gap-4"
              variants={rowVariants}
              transition={{ delay: rowIndex * 0.15 }}
            >
              {row.map((client) => (
                <motion.div
                  key={`desktop-${client.id}`}
                  className="relative group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="w-[223px] h-[266px] relative rounded-xl overflow-hidden shadow-xl bg-white p-2 hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-cover rounded-xl"
                      sizes="220px"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS Animations for Mobile Horizontal Scrolling */}
      <style jsx>{`
        @media (max-width: 768px) {
          @keyframes scroll-left {
            0% { 
              transform: translateX(0%); 
            }
            100% { 
              transform: translateX(-33.333%); 
            }
          }
          
          @keyframes scroll-right {
            0% { 
              transform: translateX(-33.333%); 
            }
            100% { 
              transform: translateX(0%); 
            }
          }
          
          .mobile-scroll-row {
            width: max-content;
          }
          
          .mobile-row-1 {
            animation: scroll-left 20s linear infinite;
          }
          
          .mobile-row-2 {
            animation: scroll-right 22s linear infinite;
          }
          
          .mobile-row-3 {
            animation: scroll-left 24s linear infinite;
          }
          
          .mobile-row-1,
          .mobile-row-2,
          .mobile-row-3 {
            will-change: transform;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-row-1,
          .mobile-row-2,
          .mobile-row-3 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
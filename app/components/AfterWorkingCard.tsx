'use client'

import { motion } from "framer-motion"
import Image from "next/image"

interface CardProps {
  image: string
  title: string
  description: string
}

export default function DiscoveryCard({ image, title, description }: CardProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="flex justify-center items-center bg-[#000814] py-10 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        style={{
          background: "linear-gradient(180deg, #151723 0%, #0A0C13 100%)",
          borderRadius: "20px",
        }}
        className="w-[360px] border-2 border-[#1b1d2a] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-5"
      >
        {/* ✅ Image Section (Bigger now, less padding look) */}
        <div className="relative w-[330px] h-[210px] rounded-lg overflow-hidden mb-5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 360px"
            priority
          />
        </div>

        {/* ✅ Title (Gradient text) */}
        <h2 className="text-[24px]  font-semibold mb-3 leading-7 bg-gradient-to-r from-[#5EB3F8] via-[#77C3FE] to-[#70C0FD] bg-clip-text text-transparent">
  {title}
</h2>


        {/* ✅ Description */}
        <p className="text-gray-300 text-[18px] leading-relaxed px-2">
          {description}
        </p>
      </motion.div>
    </section>
  )
}

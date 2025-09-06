'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const vipBonuses = [
  {
    title: "BONUS 1: Extra 7-hours of VIP training",
    desc: "Double the time. 10x the impact. Seven exclusive, one-hour sessions unlock private access to me before the crowd joins in. Discover strategies, ask questions, start each day with clarity.",
  },
  {
    title: "BONUS 2: Chance of winning a Dubai Dinner",
    desc: "One lucky VIP will get an all-expenses-paid trip to Dubai for a private dinner. Rub shoulders with successful entrepreneurs and gain life-changing clarity.",
  },
  {
    title: "BONUS 3: 7 shots at winning a MacBook",
    desc: "Attend VIP sessions and have 7 chances to win MacBook Airs—over $10,000 in prizes.",
  },
  {
    title: "BONUS 4: 1-on-1 FaceTime with Me",
    desc: "Seven VIPs will get personal FaceTime calls to map out their next moves directly with me.",
  },
  {
    title: "BONUS 5: Mystery Life-Changing Tool",
    desc: "Access a powerful tool never released publicly. Shift your thinking, planning, and results with this VIP-only advantage.",
  },
]

export default function VIPSection() {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const images = [
    "https://framerusercontent.com/images/9xzkmpKivoJUZSvTPrRb1NI9mE.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/0IjKfMs7QqhDw92Fjh4F12MRbQ.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/N4mbQabDa2bRxVOJZ20NDfXVWaw.png?scale-down-to=1024",
    "https://framerusercontent.com/images/OODKnj8xlkUlWNs35GwHBkaIo.png?scale-down-to=1024",
    "https://framerusercontent.com/images/0kfhVAmjJ1Xr1ilZJMCPwTF8a7w.png?scale-down-to=1024",
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#043805] via-[#064a0b] to-black text-white py-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-oxanium font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-300">
          Why You Should Upgrade to VIP
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Last time, only <span className="text-lime-400 font-bold">0.44%</span> of registrants joined VIP. 
          They got the craziest results with extra sessions. More bonuses. Bigger prizes. New surprise dynamics.
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
                className="relative p-6 rounded-[2rem] bg-gradient-to-tl from-[#064a0b] via-[#043805] to-[#0a2a03] shadow-2xl border border-white/10 hover:scale-[1.03] hover:shadow-lime-500/50 transition-transform duration-500 cursor-pointer"
              >
                {/* Diagonal Accent */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#1FFACF]/20 rotate-45 rounded-lg pointer-events-none"></div>
                <h3 className="text-xl md:text-2xl font-bold text-lime-400 mb-2 z-10 relative">{bonus.title}</h3>
                <p className="text-gray-200 text-sm md:text-base z-10 relative">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Image Carousel */}
          <div className="flex-1 mt-10 md:mt-0 flex flex-col items-center">
            <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:rotate-[2deg] hover:scale-105">
              <Image
                src={images[currentImage]}
                alt={`VIP Image ${currentImage + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 ${currentImage === idx ? 'border-lime-400' : 'border-gray-600'} hover:border-lime-300 transition-all`}
                  onClick={() => setCurrentImage(idx)}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} width={56} height={56} className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-lime-500/40">
            Upgrade to VIP
          </Button>
          <Button className="bg-[#064a0b] hover:bg-[#043805] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#043805]/50">
            See VIP Results
          </Button>
        </div>
      </div>
    </section>
  )
}

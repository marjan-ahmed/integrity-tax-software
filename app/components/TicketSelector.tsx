'use client'

import { Button } from "@/components/ui/button"
import { Check, X, Crown } from "lucide-react"
import SpotlightCard from "@/components/SpotlightCard"
import Image from "next/image"

export default function TicketSelector() {
  const freeFeatures = [
    { text: "$1,500–$3,000+ upfront fees", included: false },
    { text: "Hidden costs & revenue splits (you don’t keep 100% of your fees)", included: false },
    { text: "No branded client portal or app (generic experience)", included: false },
    { text: "Limited training & no real mentorship", included: false },
    { text: "Extra charges for add-ons (marketing, e-filing, updates)", included: false },
    { text: "No free website, no free laptop", included: false },
    { text: "You’re just another number in their system", included: false },
  ]

  const vipFeatures = [
    { text: "One-time $899 Growth Package", included: true },
    { text: "Unlimited cloud-based e-filing (no extra charges)", included: true },
    { text: "Keep 100% of your fees — never split revenue", included: true },
    { text: "Branded mobile app & client portal included", included: true },
    { text: "Mentorship & training to launch in 7 days", included: true },
    { text: "Done-for-you marketing toolkit (ads, posts, scripts)", included: true },
    { text: "Choose your bonus: Free Website OR Free Laptop", included: true },
  ]

  return (
    <div
      className="relative min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('images/bg.jpg')", // local image from public folder
      }}
    >
      {/* Overlay to lighten the background */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mt-4 mb-12 px-4 sm:px-0">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-oxanium 
              bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
          >
            One Package. Unlimited Returns. The Only Growth System Built for Tax Pros.
          </h1>
        </div>

        {/* Ticket Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8">
          {/* Free Ticket */}
          <SpotlightCard spotlightColor={`rgba(${255}, ${255}, ${255}, ${0.2})`}>
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 flex flex-col h-full">


              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl font-bold font-inter text-white mb-1 sm:mb-2 tracking-tighter">
                  $3K+
                </div>
                <div className="text-lg sm:text-xl font-semibold text-gray-300">Other Tax Software</div>
              </div>
              

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {freeFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                    )}
                    <span className={`text-sm sm:text-[17px] ${feature.included ? "text-white" : "text-gray-500"}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button
                className="relative h-10 sm:h-12 w-full text-black font-bold font-inter text-sm sm:text-lg rounded-lg overflow-hidden 
                  bg-gradient-to-r from-yellow-300 via-yellow-500 to-[#FEFE8B] 
                  hover:from-yellow-400 hover:via-yellow-600 hover:to-[#f1f17e]
                  shadow-lg shadow-amber-700/40
                  transition-all duration-500 ease-in-out mb-2 sm:mb-4"
                size="lg"
              >
                <span className="relative z-10 text-[13px] sm:text-base md:text-lg">I AM STUCKED, SHOW ME YOUR DEMO</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </Button>
            </div>
          </SpotlightCard>

          {/* VIP Ticket */}
          <SpotlightCard spotlightColor={`rgba(${255}, ${215}, ${0}, ${0.15})`}>
            <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-6 sm:p-8 flex flex-col h-full">

              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl font-bold font-inter text-white mb-1 sm:mb-2 tracking-tighter">
                  Starting from $199
                </div>
                <div className="text-lg sm:text-xl font-semibold text-amber-200">Integrity Tax Software</div>
              </div>
              <div className="border mt-1.5 mb-2 border-[#672c0b]"></div>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {vipFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-[17px] text-white">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button
                className="relative h-10 sm:h-12 w-full text-black font-bold font-inter text-sm sm:text-lg rounded-lg overflow-hidden 
                  bg-gradient-to-r from-yellow-300 via-yellow-500 to-[#FEFE8B] 
                  hover:from-yellow-400 hover:via-yellow-600 hover:to-[#f1f17e]
                  shadow-lg shadow-amber-700/40
                  transition-all duration-500 ease-in-out mb-2 sm:mb-4"
                size="lg"
              >
<span className="relative font-inter font-bold z-10 text-[13px] sm:text-base md:text-lg text-center block px-2 sm:px-4 md:px-6 lg:px-8">
  YES, I WANT INTEGRITY TAX SOFTWARE
</span>                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </Button>
            </div>
          </SpotlightCard>
        </div>

      </div>
    </div>
  )
}

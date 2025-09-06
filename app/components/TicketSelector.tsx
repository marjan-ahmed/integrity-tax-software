'use client'
import { Button } from "@/components/ui/button"
import { Check, X, Crown } from "lucide-react"
import SpotlightCard from "@/components/SpotlightCard"
import Image from "next/image"

export default function TicketSelector() {
  const freeFeatures = [
    { text: "Access to all 3 main event days", included: true },
    { text: "Free Workbooks", included: true },
    { text: "7 extra private sessions with exclusive content, Q&As and direct access to me", included: false },
    { text: "Chance of winning an all-paid trip to have a dinner with me in Dubai", included: false },
    { text: "Shot at $5000 in apple gears", included: false },
    { text: "Seven chances of winning a 1-to-1 FaceTime call with me", included: false },
    { text: "A mystery powerful tool only available for the VIPs", included: false },
  ]

  const vipFeatures = [
    { text: "Access to all 3 main event days", included: true },
    { text: "VIP Workbooks", included: true },
    { text: "7 extra private sessions with exclusive content, Q&As and direct access to me", included: true },
    { text: "Chance of winning an all-paid trip to have a dinner with me in Dubai", included: true },
    { text: "7 shots at winning a MacBook", included: true },
    { text: "Seven chances of winning a 1-to-1 FaceTime call with me", included: true },
    { text: "A mystery powerful tool only available for the VIPs", included: true },
  ]

  return (
    <div className="min-h-screen mt-10 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4 sm:px-0">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-oxanium 
              bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
          >
            Select your Ticket Type below:
          </h1>
        </div>

        {/* Ticket Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8">
          {/* Free Ticket */}
            <SpotlightCard spotlightColor={`rgba(${255}, ${255}, ${255}, ${0.2})`}>
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 flex flex-col h-full">
              {/* Images only */}
              <div className="flex justify-center gap-2 mb-4 sm:mb-6 flex-wrap">
                <Image src="https://framerusercontent.com/images/No59q0MYBD6WnPgNeocEAw2WE.svg" width={80} height={80} alt="Online Icon 1" />
              </div>

              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl font-bold font-inter text-white mb-1 sm:mb-2 tracking-tighter">
                  $0
                </div>
                <div className="text-lg sm:text-xl font-semibold text-gray-300">FREE TICKET</div>
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
                <span className="relative z-10">NO, I WANT TO KEEP MY FREE TICKET</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </Button>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 text-center">
                You'll get redirected to the thank you page to get the WhatsApp Group link.
              </p>
            </div>
          </SpotlightCard>

          {/* VIP Ticket */}
            <SpotlightCard spotlightColor={`rgba(${255}, ${215}, ${0}, ${0.15})`}>
            <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-6 sm:p-8 flex flex-col h-full">
              {/* Images only */}
              <div className="flex justify-center gap-2 mb-4 sm:mb-6 flex-wrap">
                <Image src="https://framerusercontent.com/images/XbYjsQ2s0R1UTlvppBdV36kGwgc.png" width={80} height={80} alt="Online Icon 1" />
              </div>

              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl font-bold font-inter text-white mb-1 sm:mb-2 tracking-tighter">
                  ONLY $97
                </div>
                <div className="text-lg sm:text-xl font-semibold text-amber-200">VIP TICKET</div>
              </div>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {vipFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    {idx < 2 ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-1 flex-shrink-0" />
                    ) : (
                      <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-1 flex-shrink-0" />
                    )}
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
                <span className="relative z-10">YES, I WANT THE VIP TICKET FOR $97</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </Button>
              <p className="text-xs sm:text-sm text-amber-200 mt-2 text-center">
                You'll get redirected to the checkout page to complete your enrollment.
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* Bottom Message */}
        <div className="text-center text-gray-00 px-4 sm:px-0">
          <p className="mb-1 sm:mb-2 text-sm sm:text-base">
            Regardless of which ticket you choose, make sure to join the WhatsApp group.
          </p>
          <p className="font-semibold text-sm sm:text-base">
            It's the only way to <span className="underline">access all the content</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

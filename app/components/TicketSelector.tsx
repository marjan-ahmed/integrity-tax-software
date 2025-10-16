'use client'

import { Button } from "@/components/ui/button"
import { Check, X, Crown } from "lucide-react"
import SpotlightCard from "@/components/SpotlightCard"
import Image from "next/image"
import Link from "next/link"

export default function TicketSelector() {
  const freeFeatures = [
    { text: "$1,500 – $3,000+ Monthly Retainers per service", included: false },
    { text: "Hidden costs for Ad setup, Creative refreshes, or reporting", included: false },
    { text: "No centralized dashboard or real accountability", included: false },
    { text: "Generic templates and slow response times", included: false },
    { text: "Pay extra for content, emails, or funnel management", included: false },
    { text: "Multiple teams, no single strategy", included: false },
    { text: "You’re managing everyone - instead of running your business", included: false },

  ]

  const vipFeatures = [
    { text: "One system that covers Ads, Content, and Automation", included: true },
    { text: "Complete setup done for you — Ad Accounts, Funnels, CRM", included: true },
    { text: "24/7 campaign optimization + Weekly reports", included: true },
    { text: "100% transparency — you see every lead and sale", included: true },
    { text: "Branded Social Media Management & Post Creation included", included: true },
    { text: "Proven Ad templates and Content Strategies for your niche", included: true },
    { text: "No long-term contracts — results decide the renewal", included: true },
  ]

  return (
    <div 
      className="relative min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 bg-[#131320] overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#131320]/90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mt-4 mb-16 px-4 sm:px-6 lg:px-0">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 font-oxanium leading-tight text-white"
          >
            Tired of Agencies Overpromising and Underdelivering?
            <br className="hidden sm:block" />
            Heal Your Business From the Damage of Bad Marketing.
          </h1>
        </div>

        {/* Ticket Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8">
          {/* Free Ticket */}
          <SpotlightCard spotlightColor={`rgba(${255}, ${255}, ${255}, ${0.2})`}>
            <div className="bg-[#131320] border border-gray-600/30 rounded-2xl p-6 sm:p-8 flex flex-col h-full">


              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl font-bold font-inter text-white mb-1 sm:mb-2 tracking-tighter">
                  $3K+ / Month
                </div>
                <div className="text-lg sm:text-xl font-semibold text-gray-300">Hiring Separate Agencies & Freelancers</div>
              </div>
              

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {freeFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-1 flex-shrink-0" />
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
              <Link href={'https://calendly.com/contact-syedsubhanali/book-now'}>
              <Button
                className="relative h-10 sm:h-12 w-full text-black font-bold font-inter text-sm sm:text-lg rounded-lg overflow-hidden 
                  bg-gradient-to-r from-yellow-300 via-yellow-500 to-[#FEFE8B] 
                  hover:from-yellow-400 hover:via-yellow-600 hover:to-[#f1f17e]
                  shadow-lg shadow-amber-700/40
                  transition-all duration-500 ease-in-out mb-2 sm:mb-4"
                size="lg"
              >
                <span className="relative z-10 text-xs sm:text-base md:text-lg">I'm Wasting Money, Show Me the Better Option</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </Button>
              </Link>
            </div>
          </SpotlightCard>

          {/* VIP Ticket */}
          <SpotlightCard spotlightColor={`rgba(${255}, ${215}, ${0}, ${0.15})`}>
            <div className="bg-[#131320] border border-yellow-500/30 rounded-2xl p-6 sm:p-8 flex flex-col h-full">

              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl font-bold font-inter text-white mb-1 sm:mb-2 tracking-tighter">
                  Starting from $497 / Month
                </div>
                <div className="text-lg sm:text-xl font-semibold text-yellow-300">Syed's A–Z Growth System</div>
              </div>
              <div className="border  mb-1.5 border-yellow-500/30"></div>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {vipFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-[17px] text-white">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link href={'https://calendly.com/contact-syedsubhanali/book-now'}>
              <Button
                className="relative h-10 sm:h-12 w-full text-black font-bold font-inter text-sm sm:text-lg rounded-lg overflow-hidden 
                  bg-gradient-to-r from-yellow-300 via-yellow-500 to-[#FEFE8B] 
                  hover:from-yellow-400 hover:via-yellow-600 hover:to-[#f1f17e]
                  shadow-lg shadow-amber-700/40
                  transition-all duration-500 ease-in-out mb-2 sm:mb-4"
                size="lg"
              >
<span className="relative font-inter font-bold z-10 text-xs sm:text-base md:text-lg text-center block px-2 sm:px-4">
  Yes, I Want the All-In-One Marketing System
</span>                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </Button>
              </Link>
            </div>
          </SpotlightCard>
        </div>

      </div>
    </div>
  )
}

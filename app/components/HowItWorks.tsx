'use client'

import { motion } from "framer-motion";
import { Search, Zap, TrendingUp, Target } from "lucide-react";

const steps = [
  {
    title: "Audit",
    description: "Get a Clear Roadmap Before Spending a Dollar. We analyze your offer, audience, and current marketing setup. Identify gaps, missed opportunities, and high-ROI channels. Build a step-by-step game plan to get results fast.",
    icon: Search,
    color: "bg-[#6A98FF]"
  },
  {
    title: "Launch",
    description: "Turn Your Business Into a Conversion Machine. We craft scroll-stopping content and ad creatives. Writing all your copy hooks, headlines, and CTAs using proven frameworks. Launch and test campaigns across Facebook, Instagram, and Google.",
    icon: Zap,
    color: "bg-[#6A98FF]"
  },
  {
    title: "Optimize",
    description: "From Daily Ad Tweaks to Weekly Growth Reviews. We monitor your campaigns, analyze metrics, and optimize in real time. Eliminate wasted ad spend and scale what's working. Keep you updated with transparent dashboards and weekly reports.",
    icon: TrendingUp,
    color: "bg-[#6A98FF]"
  },
  {
    title: "Scale",
    description: "Turn Your Marketing Into a Self-Running System. Automate lead nurturing and follow-ups through CRM and email workflows. Build long-term retention through remarketing and consistent social content. Grow your brand month after month with a predictable, scalable system.",
    icon: Target,
    color: "bg-[#6A98FF]"
  },
];

export default function HowItWorks() {
  return (
    <section 
      className="relative py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#0f1419] to-[#14353f] overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419]/80 to-[#14353f]/80"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-oxanium text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Here's how our Growth System works
        </motion.h2>
        <p className="mt-4 font-inter text-base sm:text-lg md:text-xl text-gray-300">
          From strategy to scale, we handle every step of your marketing transformation.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>

        <div className="flex flex-col space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className={`relative flex flex-col items-center text-center 
                  md:text-left md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Step number circle */}
                <div
                  className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center 
                  ${step.color} text-white font-bold text-lg sm:text-xl z-10`}
                >
                  {idx + 1}
                </div>

                {/* Step card */}
                <div className="bg-white/90 text-black shadow-lg rounded-2xl p-6 sm:p-8 mt-6 md:mt-0 md:w-3/4 mx-0 md:mx-6 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${step.color} flex-shrink-0`} />
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

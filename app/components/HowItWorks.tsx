'use client'

import { motion } from "framer-motion";
import { Calendar, Gift, Rocket } from "lucide-react";

const steps = [
  {
    title: "Schedule Your Free Demo",
    description: "See how the $899 Growth Package works for you.",
    icon: Calendar,
    color: "bg-green-500"
  },
  {
    title: "Pick Your Bonus",
    description: "Free Website or Free Laptop.",
    icon: Gift,
    color: "bg-yellow-500"
  },
  {
    title: "Launch in 7 Days",
    description: "Start filing and keeping 100% of your fees.",
    icon: Rocket,
    color: "bg-blue-500"
  },
];

export default function HowItWorks() {
  return (
    <section 
      className="relative py-16 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      <div className="relative max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-oxanium"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <p className="mt-4 font-inter text-base sm:text-lg md:text-xl text-gray-800">
          Follow these simple steps to get started with your growth package.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
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
                <div className="bg-white/90 text-black shadow-lg rounded-2xl p-4 sm:p-6 mt-4 md:mt-0 md:w-3/4 mx-0 md:mx-6 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${step.color}`} />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-gray-700 text-sm sm:text-base">{step.description}</p>
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

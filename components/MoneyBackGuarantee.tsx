'use client'
import React from 'react';

const MoneyBackGuarantee = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-[#043805] to-black text-gray-200 p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl font-sans">
      <div className="text-center max-w-4xl mx-auto px-2 sm:px-4">
        {/* Heading & Icon */}
        <p className="text-xs sm:text-sm md:text-base mb-2 text-gray-400">30-Day Money-Back Guarantee:</p>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:mb-6 gap-3">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-lime-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.071 3.52 1.353 6.643 3.65 9.172a11.966 11.966 0 0010.812 0c2.297-2.529 3.579-5.652 3.65-9.172a12.007 12.007 0 00-3.04-8.956z"
            />
          </svg>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-lime-400 leading-snug">
            MONEY-BACK GUARANTEE
          </h1>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-lime-500">
          100% Risk-Free
        </h2>

        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
          Go through the Mindset Process, apply what you learn, and if you don't feel it was worth every single penny...
        </p>
        <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
          Just send us a message within 7 days after the end of the event (October 20th)
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-white">
          You'll get every dollar back. No questions asked.
        </p>
        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-400 italic">
          Because that's how confident we are in the power of the material.
          <br />
          You win — or you don't pay. Simple as that.
        </p>

        {/* Circular Guarantee Badge */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40">
            <svg
              className="w-full h-full animate-spin-slow text-yellow-500"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text>
                <textPath
                  href="#circlePath"
                  className="fill-current text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold"
                >
                  Guaranteed • 100% • Money • Back •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-yellow-500 text-lg sm:text-2xl md:text-3xl font-black leading-snug">
                100%
                <br />
                <span className="text-xs sm:text-sm md:text-base font-semibold leading-snug">
                  MONEY
                  <br />
                  BACK
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyBackGuarantee;

'use client'
import Image from "next/image";
import Marquee from "react-fast-marquee";
import TicketSelector from "./components/TicketSelector";
import VIPSection from "@/components/VipBonuses";
import FAQSection from "@/components/Faq";
import MoneyBackGuarantee from "@/components/MoneyBackGuarantee";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeDown = { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

  return (
    <>
      <section>
        <div className="bg-red-600 text-white px-2 sm:px-4 py-2 sm:py-3">
  <Marquee speed={60} direction="right">
    <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
      DO NOT CLOSE THIS PAGE! YOUR REGISTRATION IS NOT COMPLETE YET...
    </span>
  </Marquee>
</div>

        {/* Logo Section */}
        <motion.div
          className="py-2 border flex flex-col justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
        >
          <Image
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/GcSAVqax8JVAKDL4VpBK/media/686e6879933498e4e5b51ef5.webp"
            alt="Integrity Tax Software"
            width={80}
            height={80}
          />
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto px-6 my-14"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Text */}
          <motion.div className="md:w-1/2" variants={fadeLeft}>
            <h1 className="font-black text-2xl md:text-3xl lg:text-5xl leading-snug">
              I want to give you an Unfair Advantage to{" "}
              <span className="text-[#0C7061]">10x your results</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Plus a chance to win an all-inclusive trip to have dinner with me in Dubai.
            </p>
            <p className="mt-2 text-base text-gray-600">
              Watch the video below to understand how to take this risk-free opportunity.
            </p>

            <motion.div className="my-6 flex flex-col sm:flex-row gap-3" variants={staggerContainer}>
              <motion.button
                className="py-3 px-4 bg-[#0C7061] text-white rounded-md w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIP Ticket for only $97.00
              </motion.button>
              <motion.button
                className="py-2 px-4 bg-[#2CE9C7] text-black rounded-md w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Ticket
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Video */}
          <motion.div className="w-full md:w-1/2" variants={fadeRight}>
            <motion.video
              src="/integrity-software-demo-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Guarantee Section */}
      <motion.section
        className="bg-[#043805] text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-12" variants={fadeUp}>
          <h2 className="inline-block mb-6 text-2xl md:text-4xl font-bold">
            No-Questions-Asked Guarantee
            <span className="block w-22 h-1 rounded-full bg-[#00D42A] mx-auto mt-2"></span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left side - Image */}
          <motion.div
            className="flex justify-center md:w-1/2"
            variants={fadeDown}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="https://framerusercontent.com/images/aFUZfkn3GwMuRPKSO173C72vs.webp?scale-down-to=512"
              alt="100% Money Back Guarantee"
              width={300}
              height={300}
              className="w-56 md:w-72"
            />
          </motion.div>

          {/* Right side - Text + Buttons */}
          <motion.div className="text-center md:text-left md:w-1/2" variants={fadeUp}>
            <p className="mt-6 text-lg leading-relaxed">
              Join the VIP experience today and enjoy it all — 
              the <span className=" px-1 rounded">exclusive sessions</span>, 
              private Q&As, insane bonuses, and the full 7-day immersion.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              And if, up to 7 days after the event ends, you feel it wasn’t worth every penny, 
              just ask for your money back.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              No awkward questions. No hoops to jump through. 
              Just a <span className="px-1 rounded">full refund</span>, straight to your account.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <motion.button
                className="py-3 px-6 bg-[#00D42A] text-black font-semibold rounded-sm w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
              >
                VIP Ticket for only $97.00
              </motion.button>
              <motion.button
                className="py-3 px-6 bg-white text-[#064507] font-semibold rounded-sm w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
              >
                Free Ticket
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Other Sections */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <TicketSelector />
      </motion.section>

      <motion.section initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <VIPSection />
      </motion.section>

      <motion.section initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <FAQSection />
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <MoneyBackGuarantee />
      </motion.section>
      <Footer />
    </>
  );
}

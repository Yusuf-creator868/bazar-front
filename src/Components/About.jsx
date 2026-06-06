import { motion } from "motion/react";
import { FiBookOpen } from "react-icons/fi";

import { IMAGES } from "./data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-[#111111] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-[#3F4A3F]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-[#6B4E3D]/20 blur-[120px] rounded-full" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#B08B68_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#B08B68] text-lg">
              <FiBookOpen />
            </span>

            <span className="uppercase tracking-[0.35em] text-[#B08B68] text-[11px] font-medium">
              Our Story
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-[#F5EFE6] leading-tight max-w-3xl">
            A Warm Space
            <span className="block italic text-[#B08B68]">
              Inspired by Culture
            </span>
          </h2>
        </motion.div>

        {/* Main Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* Quote */}
            <div className="border-l border-[#B08B68]/40 pl-6 mb-8">
              <p className="text-[#E9DCCB] italic text-lg md:text-xl leading-relaxed font-serif">
                “At Bazar, every detail is designed to create a warm,
                elegant, and memorable dining experience.”
              </p>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-[#E9DCCB]/75 leading-relaxed text-sm md:text-base font-light">
                Inspired by the atmosphere and hospitality of Central Asia,
                Bazar blends modern luxury with rich cultural warmth.
                From the carefully designed interiors to the flavors crafted
                in the kitchen, every element is created to make each evening
                feel special.
              </p>

              <p className="text-[#E9DCCB]/75 leading-relaxed text-sm md:text-base font-light">
                Whether you are gathering with friends, enjoying a quiet
                dinner, or celebrating an important moment, Bazar offers
                an immersive atmosphere where taste, comfort, and design
                come together.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative w-full h-[520px] rounded-[32px] overflow-hidden">
              
              {/* Border */}
              <div className="absolute inset-4 border border-[#B08B68]/30 rounded-[28px] z-20 pointer-events-none" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

              {/* Image */}
              <img
                src={IMAGES.bread}
                alt="Bazar Restaurant Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 z-20 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
                <p className="text-[#B08B68] uppercase tracking-[0.3em] text-[10px] mb-2">
                  Bazar Tashkent
                </p>

                <h3 className="text-[#F5EFE6] text-xl font-serif">
                  Refined Dining Experience
                </h3>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#B08B68]" />

              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#B08B68]" />

              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#B08B68]" />

              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#B08B68]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
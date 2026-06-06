import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "motion/react";

import {
  IMAGES,
  CHEF_STORY,
} from "./data";

import {
  FiAward,
  FiStar,
  FiChevronRight,
} from "react-icons/fi";

export default function Chef() {
  const [selectedTimelineId, setSelectedTimelineId] = useState("story-3");

  const activeChapter =
    CHEF_STORY.find(
      (item) => item.id === selectedTimelineId
    ) || CHEF_STORY[0];

  return (
    <section
      id="chef"
      className="relative py-24 md:py-36 bg-[#090909] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-olive-green/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] bg-walnut-brown/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-gold-accent/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-walnut-brown/20 to-olive-green/20 rounded-2xl filter blur-xl pointer-events-none opacity-60" />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                ease: "easeOut",
              }}
              className="relative w-full aspect-[3/4] sm:max-w-sm rounded-3xl overflow-hidden shadow-2xl group border border-gold-accent/15 bg-matte-black"
            >
              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent z-10 pointer-events-none" />

              <div className="absolute inset-0 bg-black/10 transition-colors duration-400 group-hover:bg-black/0" />

              {/* Image */}
              <img
                src={IMAGES.chef}
                alt="Chef Timur Khodja at work assembling plates"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 filter brightness-95"
                referrerPolicy="no-referrer"
              />

              {/* Badge */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-[#3F4A3F]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-gold-accent/25">
                <span className="text-gold-accent text-xs animate-spin-slow flex items-center">
                  <FiStar />
                </span>

                <span className="text-[8.5px] font-mono tracking-[0.3em] text-gold-accent font-semibold uppercase">
                  MASTER OF FIRE & EMBERS
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-[9px] font-mono tracking-[0.40em] text-gold-accent uppercase mb-1">
                  ATELIER LEADER
                </p>

                <h3 className="font-playfair text-2xl text-soft-cream font-medium serif-display">
                  Chef Timur Khodja
                </h3>

                <p className="text-[10px] text-luxury-beige/70 font-sans italic mt-1">
                  Preserving Silk Road methods in
                  contemporary art.
                </p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-3 border border-gold-accent/10 pointer-events-none group-hover:border-gold-accent/25 transition-all duration-700 rounded-2xl" />
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gold-accent">
                <span className="text-sm flex items-center">
                  <FiAward />
                </span>

                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-semibold">
                  Meet The Chef
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal text-soft-cream leading-tight serif-display">
                The Hands Shaping
                <br />

                <span className="italic text-gold-accent font-serif tracking-wide serif-body">
                  The Culinary Path
                </span>
              </h2>

              <div className="w-12 h-[1px] bg-gold-accent/35" />

              <p className="text-luxury-beige/95 font-serif text-xl sm:text-2xl leading-relaxed italic border-l-[3px] border-gold-accent pl-6 serif-body">
                &ldquo;Every dish is created with attention to detail, balance, and warmth — bringing people together through memorable dining experiences.&rdquo;
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
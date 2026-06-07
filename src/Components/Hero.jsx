import { motion } from "motion/react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import inter from '../assets/hero.png'

export default function Hero({ onNavigate }) {
  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-matte-black"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{
          duration: 2.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src={inter}
          alt="SHOSH Central Asian Luxury Lounge Interior"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-matte-black/40" /> */}

        <div className="absolute inset-0 radial-vignette" />

        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Ambient Blur Effects */}
      <div className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] bg-walnut-brown/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen animate-pulse duration-[8000ms]" />

      <div className="absolute bottom-[20%] right-[15%] w-[40vw] h-[40vw] bg-olive-green/20 rounded-full blur-[160px] pointer-events-none mix-blend-screen animate-pulse duration-[10000ms]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mb-6 flex items-center gap-3 bg-olive-green/45 backdrop-blur-md px-5 py-2 rounded-full border border-gold-accent/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-ping" />

          <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-luxury-beige font-semibold">
            Tashkent
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="text-4xl sm:text-6xl md:text-8xl font-playfair font-normal text-soft-cream leading-[1.05] tracking-tight mb-8 serif-display"
        >
          Authentic Flavors of Central Asia
          <br />

          <span className="italic text-brown font-serif tracking-normal serif-body">
            in the Heart of Tashkent
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="max-w-2xl text-sm sm:text-lg text-luxury-beige/85 font-serif leading-relaxed tracking-wide mb-12 font-light serif-body italic"
        >
          A modern dining experience inspired by tradition, fire, and hospitality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">

            {/* RESERVATION */}
            <button
              onClick={() =>
                document
                  .getElementById("reservation")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
      px-5 py-2.5
      rounded-full
      bg-[#B08B68]
      text-[#161311]
      text-xs
      uppercase
      tracking-[0.18em]
      font-medium
      hover:bg-[#C59A72]
      transition-all duration-300
      cursor-pointer
    "
            >
              Reserve Table
            </button>

            {/* MENU */}
            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
      px-5 py-2.5
      rounded-full
      border border-white/10
      bg-white/[0.03]
      text-[#F5EFE6]
      text-xs
      uppercase
      tracking-[0.18em]
      font-medium
      hover:border-[#B08B68]/40
      hover:text-[#B08B68]
      transition-all duration-300
      cursor-pointer
    "
            >
              Explore Menu
            </button>

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1, y: 3 }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        onClick={() => onNavigate("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 text-gold-accent group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans font-medium text-luxury-beige/70 group-hover:text-gold-accent transition-colors">
          Scroll to discover
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm flex items-center">
            <FiArrowDown />
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent z-10" />
    </section>
  );

  function typeIDButton(section, text, classes) {
    return (
      <button
        onClick={() => onNavigate(section)}
        className={`w-full sm:w-auto px-8 py-4 text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center gap-2.5 ${classes}`}
      >
        <span>{text}</span>

        <span className="text-xs flex items-center">
          <FiArrowRight />
        </span>
      </button>
    );
  }
}
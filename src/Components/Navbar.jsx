import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX, FiCalendar, FiArrowRight } from "react-icons/fi";
import logo from '../assets/logo.png'

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Experience" },
    { id: "about", label: "Our Story" },
    { id: "reels", label: "Atmosphere" },
    { id: "menu", label: "Menu" },
    { id: "chef", label: "Chef" },
    { id: "reservation", label: "Reserve" },
  ];

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        id="luxury-navbar"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-700 px-4 md:px-8  md:pt-6 pointer-events-none"
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center transition-all duration-500 pointer-events-auto ${isScrolled
              ? "glass py-1 shadow-2xl rounded-full"
              : "glass py-2 rounded-full bg-matte-black/40"
            }`}
        >
          {/* Logo */}
          <div
            onClick={() => handleNavClick("hero")}
            className="cursor-pointer group flex items-center space-x-2"
          >
            <img src={logo} alt="logo" className="max-w-33" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-[11px] tracking-[0.2em] uppercase font-sans py-2 font-medium transition-all duration-500 hover:text-gold-accent text-luxury-beige"
                >
                  <span className={isActive ? "text-gold-accent" : ""}>
                    {item.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute bottom-0 left-1/4 right-1/4 h-[1.5px] bg-gold-accent"
                      transition={{
                        type: "spring",
                        duration: 0.4,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Reservation Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick("reservation")}
              className="px-6 py-2.5 bg-olive-green text-luxury-beige text-[11px] font-semibold tracking-[0.18em] uppercase rounded-full hover:bg-gold-accent hover:text-matte-black transition-all duration-500 flex items-center gap-2 group cursor-pointer border border-gold-accent/20"
            >
              <span className="text-gold-accent group-hover:text-matte-black transition-colors duration-500 flex items-center">
                <FiCalendar />
              </span>

              <span>Reserve Table</span>

              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 text-sm flex items-center">
                <FiArrowRight />
              </span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => handleNavClick("reservation")}
              className="p-2.5 rounded-full bg-olive-green/40 border border-gold-accent/20 text-gold-accent hover:bg-gold-accent hover:text-matte-black transition-all duration-300"
              aria-label="Book Table"
            >
              <FiCalendar />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-luxury-beige hover:text-gold-accent transition-colors duration-300 focus:outline-none flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <span className="text-2xl flex items-center">
                  <FiX />
                </span>
              ) : (
                <span className="text-2xl flex items-center">
                  <FiMenu />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="fixed top-0 left-0 w-full h-screen glass z-40 lg:hidden flex flex-col justify-center items-center px-8"
          >
            {/* Background Glow */}
            <div className="absolute top-[20%] left-[-10%] w-[60%] h-[40%] bg-olive-green/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute bottom-[15%] right-[-10%] w-[60%] h-[40%] bg-walnut-brown/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center space-y-8 max-w-sm w-full">
              <div className="mb-4">
                <img src={logo} alt="" className="" />

                <p className="text-[15px] tracking-[0.4em] uppercase text-gold-accent mt-1">
                  Tashkent
                </p>

                <div className="w-12 h-[1px] bg-gold-accent/20 mx-auto mt-4" />
              </div>

              <div className="flex flex-col space-y-5">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm tracking-[0.25em] uppercase font-sans select-none transition-colors duration-400 ${activeSection === item.id
                        ? "text-gold-accent"
                        : "text-luxury-beige"
                      }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleNavClick("reservation")}
                  className="w-full justify-center px-8 py-3 bg-gold-accent text-matte-black text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-soft-cream transition-all duration-300 flex items-center gap-3"
                >
                  <FiCalendar />

                  <span>Reserve Seating</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
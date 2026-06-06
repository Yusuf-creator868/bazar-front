import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import logo from '../assets/logo.png'

export default function Footer() {
  const [emailSub, setEmailSub] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();

    if (!emailSub) return;

    setIsSubscribed(true);

    setTimeout(() => {
      setEmailSub("");
    }, 3000);
  };

  const handleNavClick = (sectionId) => {
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
    <footer className="relative overflow-hidden bg-[#090909] border-t border-white/5 pt-20 pb-8">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-[#B08B68]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 pb-14 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div
              onClick={() => handleNavClick("hero")}
              className="cursor-pointer select-none"
            >
              <img src={logo} alt="logo" className="max-w-40" />

              <span className="text-[10px] uppercase tracking-[0.45em] text-[#B08B68]">
                Central Asian Dining
              </span>
            </div>

            <p className="text-sm leading-relaxed text-white/55 max-w-sm">
              A modern dining experience inspired by the warmth, craftsmanship,
              and flavors of the Silk Road.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <FiInstagram />,
                  url: "https://instagram.com",
                },
                {
                  icon: <FiYoutube />,
                  url: "https://youtube.com",
                },
                {
                  icon: <FiFacebook />,
                  url: "https://facebook.com",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#B08B68] hover:border-[#B08B68]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.35em] text-[#B08B68] font-semibold">
              Location
            </h4>

            <div className="space-y-4 text-sm text-white/60 leading-relaxed">
              <p>
                24. Amir Temur Street
                <br />
                Tashkent, Uzbekistan
              </p>

              <div className="space-y-2">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">
                    Phone
                  </span>

                  <p className="text-white/75">+998 (90) 123-45-67</p>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">
                    Email
                  </span>

                  <p className="text-white/75">hello@shosh.uz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.35em] text-[#B08B68] font-semibold">
              Opening Hours
            </h4>

            <div className="space-y-5 text-sm text-white/60">
              <div>
                <p className="text-white font-medium mb-1">
                  Monday — Sunday
                </p>

                <p>2:00 PM — 2:00 AM</p>
              </div>

              
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.35em] text-[#B08B68] font-semibold">
              Newsletter
            </h4>

            <p className="text-sm text-white/55 leading-relaxed">
              Receive updates about seasonal menus, events, and reservations.
            </p>

            <form onSubmit={handleSub} className="relative">
              <input
                type="email"
                required
                value={emailSub}
                onChange={(e) => {
                  setEmailSub(e.target.value);

                  if (isSubscribed) {
                    setIsSubscribed(false);
                  }
                }}
                placeholder="Your email"
                className="w-full h-14 rounded-2xl bg-[#141414] border border-white/10 px-5 pr-14 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#B08B68]/50 transition-all duration-300"
              />

              <button
                type="submit"
                className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-[#3F4A3F] text-[#D4B08A] flex items-center justify-center hover:bg-[#B08B68] hover:text-black transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </form>

            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="flex items-center gap-2 text-[#B08B68] text-xs"
                >
                  <FiCheckCircle />

                  <span>Successfully subscribed</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/35 tracking-wide">
          <p>© 2026 Bazar Restaurant. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <span className="cursor-pointer hover:text-[#B08B68] transition-colors">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-[#B08B68] transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
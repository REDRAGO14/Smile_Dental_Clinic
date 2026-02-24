import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { CLINIC_CONFIG } from "../config/clinic.config";

export default function Navbar() {
  const { branding: brCfg, contactSection: cCfg, navigation, socials } = CLINIC_CONFIG;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToContact = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-transform duration-500 ease-in-out ${
        scrolled ? "-translate-y-[40px]" : "translate-y-0"
      }`}
    >
      {/* 1. TOP INFO BAR - Hidden on mobile, flex on desktop */}
      <div className="bg-blue-800 text-white h-[40px] px-4 md:px-10 lg:px-20 text-[10px] flex justify-between items-center font-light tracking-[0.15em] uppercase">
        <div className="flex gap-4 md:gap-6">
          <span className="hidden sm:inline text-blue-500-200">
             {cCfg.info.location.address}
          </span>
          <span className="hidden sm:inline text-blue-500-200">
             {cCfg.info.location.address2}
          </span>
          <a href="tel:0940377777" className="font-bold">📞 {cCfg.info.concierge.phone}</a>
        </div>
        <div className="flex gap-4 items-center">
          {socials.map((social, idx) => (
            <a key={idx} href={social.href} className="hover:text-blue-400 transition-colors">
              <social.icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav
        className={`transition-all duration-500 px-4 md:px-10 lg:px-20 flex justify-between items-center border-b border-white/20 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl py-3 shadow-2xl"
            : "bg-white/95 backdrop-blur-md py-4 md:py-3 shadow-sm"
        }`}
      >
        {/* LOGO - Responsive Scaling */}
        <div 
          className="flex flex-col cursor-pointer shrink-0" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-baseline gap-1 md:gap-2">
            <h1 className="text-lg sm:text-xl md:text-2xl font-[900] tracking-tighter text-blue-500 leading-none">
              YOMA
            </h1>
            <span className="text-lg sm:text-xl md:text-2xl font-light italic font-serif text-blue-800 leading-none">
              SPECIALTY
            </span>
          </div>
          <span className="text-[7px] sm:text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-gray-400 font-bold mt-0.5 md:mt-1 leading-none">
            DENTAL CENTER
          </span>
        </div>

        {/* DESKTOP LINKS - Visible on LG only */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 font-bold text-[11px] text-gray-500 uppercase tracking-[0.2em]">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="relative group cursor-pointer hover:text-blue-500 transition-colors"
            >
              <a href={item.href}>{item.name}</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 md:gap-4">
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex cursor-pointer items-center gap-2 md:gap-3 bg-blue-500 text-white px-4 py-3 md:px-8 md:py-5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest shadow-2xl hover:bg-blue-800 transition-all duration-500"
          >
            <span className="hidden xs:block">Book Appointment</span>
            <span className="xs:hidden">Book APPOINTMENT</span>
            <RiCalendarScheduleLine size={16} className="md:size-[18px] group-hover:rotate-12 transition-transform" />
          </motion.button>

          {/* MOBILE TOGGLE - LG Hidden */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-blue-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[150] lg:hidden flex flex-col p-6 md:p-12"
          >
            <div className="flex justify-between items-center mb-12 md:mb-16">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <h1 className="text-2xl font-[900] tracking-tighter text-blue-500">YOMA</h1>
                  <span className="text-2xl font-light italic font-serif text-blue-800">SPECIALTY</span>
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold">DENTAL CENTER</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-gray-100 rounded-full"
              >
                <HiOutlineX size={24} className="text-blue-500" />
              </button>
            </div>

            <ul className="flex flex-col gap-4 md:gap-6 overflow-y-auto">
              {navigation.map((item, i) => (
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-black text-blue-500 tracking-tighter hover:text-blue-800 transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto border-t border-gray-100 pt-8">
              <motion.button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-4 bg-blue-500 text-white py-5 md:py-7 rounded-full text-[11px] md:text-[13px] font-black uppercase tracking-widest mb-8"
              >
                <span>Book Appointment</span>
                <RiCalendarScheduleLine size={20} />
              </motion.button>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-1">Direct Line</p>
                  <p className="text-lg md:text-xl font-bold text-blue-500">{cCfg.info.concierge.phone}</p>
                </div>
                <div className="flex gap-4">
                  {socials.map((social, idx) => (
                    <a key={idx} href={social.href} className="text-blue-500 text-xl hover:text-blue-800 transition-all">
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
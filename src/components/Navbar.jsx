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
      {/* 1. TOP INFO BAR */}
      <div className="bg-purple-900 text-white h-[40px] px-6 lg:px-20 text-[10px] flex justify-between items-center font-light tracking-[0.15em] uppercase">
        <div className="flex gap-6">
          <span className="hidden md:inline text-purple-200">
            📍 {cCfg.info.location.address}
          </span>
          <span className="font-bold">📞 {cCfg.info.concierge.phone}</span>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social, idx) => (
            <a key={idx} href={social.href} className="hover:text-teal-400 transition-colors">
              <social.icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav
        className={`transition-all duration-500 px-6 lg:px-20 flex justify-between items-center border-b border-white/20 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl py-3 shadow-2xl"
            : "bg-white/95 backdrop-blur-md py-5 shadow-sm"
        }`}
      >
        {/* RE-ENGINEERED LOGO (Matching Screenshot) */}
        <div 
          className="flex flex-col cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl md:text-2xl font-[900] tracking-tighter text-purple-900 leading-none">
              Nahom
            </h1>
            <span className="text-2xl md:text-xl font-light italic font-serif text-teal-600 leading-none">
              SPECIALTY
            </span>
          </div>
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold mt-1 leading-none">
            DENTAL CENTER
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex gap-10 font-bold text-[11px] text-gray-500 uppercase tracking-[0.2em]">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="relative group cursor-pointer hover:text-purple-900 transition-colors"
            >
              <a href={item.href}>{item.name}</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex cursor-pointer items-center gap-3 bg-purple-900 text-white px-6 py-3 sm:px-8 sm:py-5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-2xl hover:bg-teal-600 transition-all duration-500"
          >
            <span>Book Appointment</span>
            <RiCalendarScheduleLine size={18} className="group-hover:rotate-12 transition-transform" />
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-purple-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[150] lg:hidden flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <h1 className="text-2xl font-[900] tracking-tighter text-purple-900">SMILE</h1>
                  <span className="text-2xl font-light italic font-serif text-teal-600">SPECIALTY</span>
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold">DENTAL CENTER</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-100 rounded-full">
                <HiOutlineX size={24} className="text-purple-900" />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
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
                    className="text-5xl font-black text-purple-900 tracking-tighter hover:text-teal-600 transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto border-t border-gray-100 pt-10">
              <motion.button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-4 bg-purple-900 text-white py-6 rounded-full text-[12px] font-black uppercase tracking-widest mb-10"
              >
                <span>Book Appointment</span>
                <RiCalendarScheduleLine size={20} />
              </motion.button>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">Direct Line</p>
                  <p className="text-xl font-bold text-purple-900">{cCfg.info.concierge.phone}</p>
                </div>
                <div className="flex gap-5">
                  {socials.map((S, idx) => (
                    <S.icon key={idx} className="text-purple-900 text-2xl" />
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
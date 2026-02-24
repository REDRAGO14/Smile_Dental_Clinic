import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { CLINIC_CONFIG } from "../config/clinic.config";

export default function Hero() {
  const { hero: hCfg, branding: brCfg } = CLINIC_CONFIG;
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % hCfg.slides.length);
    }, hCfg.interval);
    return () => clearInterval(interval);
  }, [hCfg.interval, hCfg.slides.length]);

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative my-24 h-screen w-full overflow-hidden flex items-center bg-black">
      {/* Background with Zoom Effect */}
      <AnimatePresence initial={false}>
        <motion.div
          key={sliderIndex}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hCfg.slides[sliderIndex].bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Enhanced Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${sliderIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-3xl"
          >
            <span className={`text-${brCfg.colors.highlight} font-bold tracking-[0.4em] uppercase text-xs mb-4 block`}>
              {hCfg.slides[sliderIndex].title}
            </span>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-10 tracking-tighter">
              {hCfg.slides[sliderIndex].title2}
            </h2>

            <div className="flex flex-col md:flex-row gap-8 mb-12">
              {hCfg.slides[sliderIndex].services.map((s, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <img src={s.img} className="w-8 h-8 brightness-200" alt="" />
                  </div>

                  <div>
                    <h4 className={`text-${brCfg.colors.highlight} font-bold uppercase text-sm tracking-widest`}>
                      {s.tit}
                    </h4>
                    <p className="text-gray-300 text-xs mt-1 max-w-[200px] leading-relaxed">
                      {s.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group cursor-pointer bg-${brCfg.colors.secondary} hover:bg-teal-500 text-white px-10 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] flex items-center gap-4 transition-all shadow-2xl shadow-teal-900/40`}
            >
              {hCfg.ctaText}
              <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Luxury Vertical Indicators */}
      <div className="absolute right-10 flex flex-col gap-6 z-20">
        {hCfg.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSliderIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-700 rounded-full ${
              i === sliderIndex
                ? `h-16 w-1 bg-${brCfg.colors.highlight} shadow-[0_0_10px_rgba(45,212,191,0.6)]`
                : "h-4 w-1 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
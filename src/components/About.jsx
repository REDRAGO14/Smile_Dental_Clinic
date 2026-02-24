import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { CLINIC_CONFIG } from "../config/clinic.config";

const AnimatedNumber = ({ value, suffix }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  // once: false allows the count-up to repeat every time you scroll back to it
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => {
    const rounded = Math.floor(latest);
    if (rounded >= 1000) return `${(rounded / 1000).toFixed(0)}k`;
    return rounded;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0); // Reset to 0 when out of view so it can re-animate
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-black text-blue-800">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export default function ExperienceSection() {
  const { aboutSection: aCfg } = CLINIC_CONFIG;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="about" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 1. VISUAL SIDE */}
          <div className="relative w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }} // once: false re-triggers on scroll
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-gray-50 group"
            >
              <img 
                src={aCfg.mainImage} 
                alt="Modern Dental Office" 
                className="w-full h-[400px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* 2. EXPERIENCE CARD (New Direction: Slides from Bottom-Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -100, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ 
                type: "spring",
                damping: 20,
                stiffness: 80,
                delay: 0.2 
              }}
              className="mt-6 md:mt-0 md:absolute -bottom-10 -right-10 grid grid-cols-2 gap-4 md:gap-8 bg-white p-6 md:p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 z-10"
            >
              {aCfg.stats.map((stat, i) => (
                <div key={i} className="text-center min-w-[100px]">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-extrabold mt-2 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3. CONTENT SIDE */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Re-triggers text animations
          >
            <motion.span variants={itemVariants} className="text-blue-800 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block border-l-2 border-blue-800 pl-4">
              {aCfg.badge}
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-black text-blue-500 leading-[1.1] mb-8 tracking-tighter">
              {aCfg.title} <br className="hidden md:block"/>
              <span className="italic font-light serif text-blue-800">{aCfg.subtitle}</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              {aCfg.description}
            </motion.p>

            {/* Features List with Slide-in Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {aCfg.features.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-blue-500 font-bold text-sm md:text-base tracking-tight"
                >
                  <div className="bg-blue-50 p-1 rounded-full shrink-0">
                    <HiCheckBadge className="text-blue-500 text-xl md:text-2xl" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-500 text-white px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-widest shadow-2xl hover:bg-blue-800 transition-all duration-500"
            >
              {aCfg.ctaText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
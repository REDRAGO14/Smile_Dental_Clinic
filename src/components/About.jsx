import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { CLINIC_CONFIG } from "../config/clinic.config";

const AnimatedNumber = ({ value, suffix }) => {
  const { branding: brCfg } = CLINIC_CONFIG;
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  
  // Animate every time it comes into view
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
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
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className={`text-3xl font-black text-${brCfg.colors.accent}`}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export default function ExperienceSection() {
  const { branding: brCfg, aboutSection: aCfg } = CLINIC_CONFIG;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative lg:w-1/2"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={aCfg.mainImage} 
                alt="Modern Dental Office" 
                className="w-full h-[600px] object-cover"
              />
              <div className={`absolute inset-0 bg-${brCfg.colors.primary}/5 group-hover:bg-transparent transition-colors duration-500`} />
            </div>

            {/* Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 hidden md:grid grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 z-10"
            >
              {aCfg.stats.map((stat, i) => (
                <div key={i} className="text-center min-w-[120px]">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-extrabold mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.span variants={itemVariants} className={`text-${brCfg.colors.secondary} font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block border-l-2 border-${brCfg.colors.secondary} pl-4`}>
              {aCfg.badge}
            </motion.span>
            
            <motion.h2 variants={itemVariants} className={`text-5xl lg:text-6xl font-black text-${brCfg.colors.primary} leading-[1.1] mb-8 tracking-tighter`}>
              {aCfg.title} <br/>
              <span className={`italic font-light serif text-${brCfg.colors.accent}`}>{aCfg.subtitle}</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              {aCfg.description}
            </motion.p>

            <div className="space-y-5 mb-12">
              {aCfg.features.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-gray-800 font-bold tracking-tight"
                >
                  <div className="bg-teal-50 p-1 rounded-full">
                    <HiCheckBadge className="text-teal-500 text-2xl" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.03, backgroundColor: "#4c1d95" }}
              whileTap={{ scale: 0.97 }}
              className={`bg-${brCfg.colors.primary} text-white px-12 py-5 rounded-full font-bold shadow-2xl shadow-purple-900/20`}
            >
              {aCfg.ctaText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
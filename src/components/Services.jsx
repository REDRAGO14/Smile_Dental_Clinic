import React from "react";
import { motion } from "framer-motion";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import { CLINIC_CONFIG } from "../config/clinic.config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Services() {
  const { branding: brCfg, servicesSection: sCfg } = CLINIC_CONFIG;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="px-6 lg:px-24 bg-white overflow-hidden">
      {/* HEADER SECTION */}
      <div className="w-full bg-white px-6 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            
            {/* Left Column: Title Section */}
            <div className="max-w-4xl">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`text-${brCfg.colors.secondary} font-bold uppercase text-[10px] sm:text-[12px] tracking-[0.3em] mb-4 block`}
              >
                {sCfg.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-${brCfg.colors.primary} tracking-tighter leading-[0.9]`}
              >
                {sCfg.title} <br className="hidden sm:block" />
                <span className={`italic font-light serif text-${brCfg.colors.accent}`}>{sCfg.subtitle}</span>
              </motion.h2>
            </div>

            {/* Right Column: Description with Infinite Animating Line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-start lg:items-end gap-6 lg:text-right"
            >
              <div className="relative pl-6 lg:pl-0 lg:pr-8">
                {/* THE INFINITE ANIMATING LINE */}
                <motion.div 
                  initial={{ height: "0%" }}
                  animate={{ height: ["0%", "100%", "0%"] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className={`absolute left-0 lg:left-auto lg:right-0 top-0 w-[2px] bg-${brCfg.colors.highlight || 'teal-500'} shadow-[0_0_8px_rgba(20,184,166,0.4)]`}
                />
                
                <div className={`absolute left-0 lg:left-auto lg:right-0 top-0 w-[2px] h-full bg-${brCfg.colors.highlight || 'teal-500'}/10`} />
                
                <p className="text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed italic">
                  {sCfg.description}
                </p>
              </div>
              
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex cursor-pointer items-center gap-3 bg-${brCfg.colors.primary} text-white px-6 py-4 sm:px-8 sm:py-5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-2xl hover:bg-${brCfg.colors.secondary} transition-all duration-500`}
              >
                <span>{sCfg.ctaText}</span>
                <RiCalendarScheduleLine size={18} className="group-hover:rotate-12 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
          
          <div className="mt-12 lg:mt-16 w-full h-[1px] bg-gray-100" />
        </div>
      </div>

      {/* SERVICE CARDS GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {sCfg.items.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`group relative h-[600px] rounded-[3rem] overflow-hidden transition-all duration-700
              ${index % 2 !== 0 ? "lg:mt-12" : "lg:mb-12"}`}
          >
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 h-full w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <motion.span 
                className="w-fit bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black text-white tracking-[0.2em] uppercase border border-white/20 mb-4"
              >
                {service.category}
              </motion.span>
              
              <h3 className="text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <div className="h-0 group-hover:h-24 transition-all duration-500 overflow-hidden">
                <p className="text-purple-100/80 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-white">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">Explore Service</span>
                <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-${brCfg.colors.primary} transition-all duration-500`}>
                  <HiArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Top Shine/Hover Line */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-${brCfg.colors.highlight || 'teal-500'} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
          </motion.div>
        ))}
      </motion.div>

      {/* BOTTOM ACTION */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 flex justify-center pb-12"
      >
        <button className={`group flex items-center gap-3 text-gray-400 font-bold text-[11px] uppercase tracking-[0.4em] hover:text-${brCfg.colors.primary} transition-all`}>
          {sCfg.viewAllText}
          <div className={`w-1 h-1 bg-${brCfg.colors.highlight || 'teal-500'} rounded-full group-hover:w-12 transition-all duration-500`} />
        </button>
      </motion.div>
    </section>
  );
}
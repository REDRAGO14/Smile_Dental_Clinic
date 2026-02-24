import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import { CLINIC_CONFIG } from "../config/clinic.config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Services() {
  const { branding: brCfg, servicesSection: sCfg } = CLINIC_CONFIG;
  // State to track active card on mobile/touch
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-10 lg:px-24 bg-white overflow-hidden">
      {/* HEADER SECTION */}
      <div className="container mx-auto mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-16">
          
          {/* Left Column: Title Section */}
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-800 font-bold uppercase text-[10px] sm:text-[12px] tracking-[0.3em] mb-4 block"
            >
              {sCfg.badge}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-blue-500 tracking-tighter leading-[1] md:leading-[0.9]"
            >
              {sCfg.title} <br className="hidden sm:block" />
              <span className="italic font-light serif text-blue-800">{sCfg.subtitle}</span>
            </motion.h2>
          </div>

          {/* Right Column: Description & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col items-start lg:items-end gap-6 lg:text-right"
          >
            <div className="relative pl-6 lg:pl-0 lg:pr-8">
              <motion.div 
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 lg:left-auto lg:right-0 top-0 w-[2px] bg-blue-500 shadow-[0_0_8px_rgba(20,184,166,0.4)]"
              />
              <div className="absolute left-0 lg:left-auto lg:right-0 top-0 w-[2px] h-full bg-blue-500/10" />
              <p className="text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed italic">
                {sCfg.description}
              </p>
            </div>
            
            <motion.button 
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-3 bg-blue-500 text-white px-8 py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-blue-800 transition-all duration-500"
            >
              <span>{sCfg.ctaText}</span>
              <RiCalendarScheduleLine size={18} className="group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* SERVICE CARDS GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {sCfg.items.map((service, index) => {
          const isExpanded = activeIndex === index;
          
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => setActiveIndex(isExpanded ? null : index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`group relative h-[500px] md:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-700
                ${index % 2 !== 0 ? "lg:mt-12" : "lg:mb-12"}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 h-full w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-[1.5s] ${isExpanded ? 'scale-110' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-800/20 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-95' : 'opacity-80'}`} />
              </div>

              {/* Content Section */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <span className="w-fit bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black text-white tracking-[0.2em] uppercase border border-white/20 mb-4">
                  {service.category}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                {/* Expandable Description Area */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "h-28 opacity-100" : "h-0 opacity-0"}`}>
                  <p className="text-gray-100/80 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-white">
                  <span className={`text-[10px] font-black uppercase tracking-widest transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    Explore Service
                  </span>
                  <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-white text-blue-500' : 'bg-transparent text-white'}`}>
                    <HiArrowRight size={20} className={`transition-transform duration-500 ${isExpanded ? 'rotate-0' : '-rotate-45'}`} />
                  </div>
                </div>
              </div>

              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-blue-500 origin-left transition-transform duration-700 ${isExpanded ? 'scale-x-100' : 'scale-x-0'}`} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* BOTTOM ACTION */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 md:mt-20 flex justify-center pb-12"
      >
        <button className="group flex items-center gap-3 text-gray-400 font-bold text-[11px] uppercase tracking-[0.4em] hover:text-blue-500 transition-all">
          {sCfg.viewAllText}
          <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-12 transition-all duration-500" />
        </button>
      </motion.div>
    </section>
  );
}
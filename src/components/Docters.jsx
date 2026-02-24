import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGraduationCap } from "react-icons/fa";
import { CLINIC_CONFIG } from "../config/clinic.config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function DoctorsSection() {
  const { branding: brCfg, doctorsSection: dCfg } = CLINIC_CONFIG;

  return (
    <section id="doctors" className="py-20 md:pt-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* HEADER SECTION - Optimized for Mobile Stack */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12 border-b border-gray-100 pb-12 md:pb-16">
          <div className="max-w-2xl overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="text-blue-800 font-bold uppercase text-[10px] block mb-4 md:mb-6"
            >
              {dCfg.badge}
            </motion.span>
            
            <div className="relative pl-6 md:pl-8">
              <motion.div 
                initial={{ height: "0%" }}
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-[2px] md:w-[3px] bg-bule-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"
              />
              <motion.h2 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                className="text-4xl md:text-7xl font-black text-blue-900 tracking-tighter leading-[1.1] md:leading-[0.9]"
              >
                {dCfg.title} <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">
                  {dCfg.subtitle}
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="max-w-xs"
          >
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed border-l-2 border-gray-100 pl-4 md:pl-6 italic">
              {dCfg.description}
            </p>
          </motion.div>
        </div>

        {/* DOCTORS LAYOUT: 
            Mobile: Horizontal Scroll with Snap
            Desktop: Grid 
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="flex md:grid overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3 pb-10"
        >
          {dCfg.practitioners.map((doc, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative min-w-[85vw] md:min-w-0 snap-center"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gray-50 shadow-xl transition-all duration-500 md:group-hover:shadow-[0_40px_80px_-15px_rgba(88,28,135,0.2)] md:group-hover:-translate-y-3">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110"
                />
                
                {/* Mobile Info Overlay (Visible on Touch or Hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-900/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                  <div className="translate-y-0 md:translate-y-10 md:group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <p className="text-white text-[11px] md:text-sm leading-relaxed mb-6 italic font-light line-clamp-3 md:line-clamp-none">
                      "{doc.description}"
                    </p>
                    <div className="flex gap-3">
                       <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-blue-500 transition-all">
                         <FaLinkedinIn size={14}/>
                       </button>
                       <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-blue-500 transition-all">
                         <FaGraduationCap size={16}/>
                       </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="mt-6 md:mt-10 px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-black text-blue-900 tracking-tight mb-1">
                  {doc.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-8 md:w-10 h-[2px] bg-blue-500" />
                  <p className="text-blue-800 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                    {doc.role}
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-6 md:mt-8 flex items-center gap-2 text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-all"
                >
                  View Full Profile
                  <span className="text-lg">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swipe Indicator */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
           {dCfg.practitioners.map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />
           ))}
        </div>

      </div>
    </section>
  );
}
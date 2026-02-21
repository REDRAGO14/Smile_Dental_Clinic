import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGraduationCap } from "react-icons/fa";

const DOCTORS = [
  {
    name: "Dr. Selamawit Moges",
    role: "Senior Orthodontist",
    description: "Dr. Selamawit provides exceptional dental care, using the latest techniques and technology to ensure patient satisfaction.",
    image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2023/04/selam-profile--640x640.jpg",
  },
  {
    name: "Dr. Aschalew Tesfaye",
    role: "Orthodontist",
    description: "A skilled orthodontist delivering exceptional patient care and expertise utilizing advanced techniques for optimal results.",
    image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2023/04/doc-3-640x640.jpg",
  },
  {
    name: "Dr. Tsion Wossenu",
    role: "Doctor of Dental Surgery",
    description: "A skilled DDS professional providing exceptional care and applying advanced dental techniques to achieve optimal results.",
    image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2023/04/doc-4-640x640.jpg",
  },
];

// Animation Variants for staggered content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function DoctorsSection() {
  return (
    <section id="docters" className="py-24 pb-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* ENHANCED HEADER SECTION */}
       <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-gray-100 pb-16">
          <div className="max-w-2xl overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="text-teal-600 font-bold uppercase text-[10px] block mb-6"
            >
              World-Class Expertise
            </motion.span>
            
            <div className="relative pl-8">
              {/* THE INFINITE ANIMATING LINE FOR DOCTORS SECTION */}
              <motion.div 
                initial={{ height: "0%" }}
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute left-0 top-0 w-[3px] bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"
              />
              {/* The "Track" for the line */}
              <div className="absolute left-0 top-0 w-[3px] h-full bg-teal-500/10" />

              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-7xl font-black text-purple-900 tracking-tighter leading-[0.9]"
              >
                Meet Our <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900">
                   Specialists.
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xs"
          >
            <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gray-100 pl-6 italic">
              Our team of board-certified specialists is dedicated to the artistry of your smile and the precision of your care.
            </p>
          </motion.div>
        </div>

        {/* DOCTORS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {DOCTORS.map((doc, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-gray-50 shadow-2xl transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(88,28,135,0.2)] group-hover:-translate-y-3">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Elegant Overlay with Glassmorphism Buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <p className="text-white text-sm leading-relaxed mb-8 italic font-light">
                      "{doc.description}"
                    </p>
                    <div className="flex gap-4">
                       <button className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-teal-500 hover:border-teal-500 transition-all duration-300">
                         <FaLinkedinIn />
                       </button>
                       <button className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-teal-500 hover:border-teal-500 transition-all duration-300">
                         <FaGraduationCap />
                       </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info Section */}
              <div className="mt-10 px-4">
                <h3 className="text-3xl font-black text-purple-900 tracking-tight mb-2 group-hover:text-purple-700 transition-colors">
                  {doc.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-teal-500" />
                  <p className="text-teal-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                    {doc.role}
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-8 flex items-center gap-2 text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-purple-600 transition-all"
                >
                  View Full Profile
                  <span className="text-lg">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
// Changed the icon imports to more stable ones
import { HiOutlineSparkles, HiOutlineBeaker, HiOutlineUserGroup } from "react-icons/hi2";

const STEPS = [
  {
    number: "01",
    title: "The Vision Consultation",
    description: "We begin with a comprehensive digital mapping of your smile. We discuss your aesthetic goals and use AI imaging to preview your final results.",
    icon: <HiOutlineUserGroup className="text-3xl" />,
    color: "bg-blue-500-50 text-blue-500-600",
  },
  {
    number: "02",
    title: "Bespoke Design",
    description: "Our master artisans craft your custom dental plan. Using 3D printing and biocompatible materials, we ensure every detail aligns with your facial symmetry.",
    icon: <HiOutlineBeaker className="text-3xl" />, // Updated Icon
    color: "bg-blue-50 text-blue-800",
  },
  {
    number: "03",
    title: "The Reveal",
    description: "In a single, comfortable session, your transformation is completed. You walk out with a permanent, radiant smile and a personalized aftercare kit.",
    icon: <HiOutlineSparkles className="text-3xl" />,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-800 font-bold tracking-[0.3em] uppercase text-[10px] block mb-4"
          >
            The Signature Journey
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-blue-500 tracking-tighter leading-none mb-6">
            Three Steps to <br/>Your Forever smile.
          </h2>
        </div>

        {/* Steps Grid */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${step.color}`}>
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-gray-100 tracking-tighter">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <button className="bg-blue-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-500-800 transition-all hover:scale-105 active:scale-95">
            Begin Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
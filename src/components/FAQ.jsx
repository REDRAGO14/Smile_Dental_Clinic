import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { CLINIC_CONFIG } from "../config/clinic.config";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const { branding: brCfg } = CLINIC_CONFIG;
  
  return (
    <div className="border-b border-purple-100">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? `text-${brCfg.colors.secondary}` : `text-${brCfg.colors.primary} group-hover:text-purple-700`}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? `bg-${brCfg.colors.secondary} text-white rotate-180` : `bg-purple-50 text-${brCfg.colors.primary}`}`}>
          {isOpen ? <HiMinus /> : <HiPlus />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 leading-relaxed max-w-3xl text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const { faqs: cfg, branding: brCfg } = CLINIC_CONFIG;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-${brCfg.colors.secondary} font-bold tracking-[0.4em] uppercase text-[10px] block mb-4`}
            >
              {cfg.badge}
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-black text-${brCfg.colors.primary} tracking-tighter leading-[0.9] mb-8`}>
              {cfg.title} <br />
              <span className={`font-light italic font-serif text-${brCfg.colors.accent}`}>{cfg.subtitle}</span>
            </h2>
            
            {/* Summarized Description */}
            <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
              <p>
                {cfg.description}
              </p>
              <p className={`text-sm border-l-2 border-${brCfg.colors.secondary} pl-4 py-1`}>
                {cfg.conciergeNote}
              </p>
            </div>
            
            <div className={`mt-12 w-24 h-1 bg-${brCfg.colors.secondary}/10 rounded-full overflow-hidden`}>
                <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5 }}
                    className={`w-full h-full bg-${brCfg.colors.secondary}`}
                />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {cfg.questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
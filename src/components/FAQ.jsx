import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { CLINIC_CONFIG } from "../config/clinic.config";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-blue-500-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-blue-800' : 'text-blue-500 group-hover:text-blue-500-700'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-blue-800 text-white rotate-180' : 'bg-blue-500-50 text-blue-500'}`}>
          {isOpen ? <HiMinus size={14} /> : <HiPlus size={14} />}
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
            <p className="pb-6 md:pb-8 text-gray-500 leading-relaxed max-w-3xl text-base md:text-lg">
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
    <section id="faq" className="pb-8 md:p-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24">
          
          {/* Header Section: Full width on mobile, 1/3 on desktop */}
          <div className="w-full lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-blue-800 font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] block mb-4"
            >
              {cfg.badge}
            </motion.span>
            
            <h2 className="text-4xl md:text-6xl font-black text-blue-500 tracking-tighter leading-[1.1] mb-6 md:mb-8">
              {cfg.title} <br />
              <span className="font-light italic font-serif text-blue-800">
                {cfg.subtitle}
              </span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-500 font-medium leading-relaxed text-sm md:text-base">
              <p>{cfg.description}</p>
              <p className="text-xs md:text-sm border-l-2 border-blue-800 pl-4 py-1 text-blue-500/70 italic">
                {cfg.conciergeNote}
              </p>
            </div>
            
            {/* Decorative progress bar - Hidden on mobile for cleaner look if preferred, or kept for flair */}
            <div className="mt-10 md:mt-12 w-20 md:w-24 h-1 bg-blue-800/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full bg-blue-800"
                />
            </div>
          </div>

          {/* FAQ Accordion: Full width on mobile, 2/3 on desktop */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="divide-y divide-blue-500-100"
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
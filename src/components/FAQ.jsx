import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "Why is visiting the dentist so important?",
    answer: "Regular visits maintain not only oral health but systemic wellness. Professional care prevents decay, protects against periodontal disease, and preserves the artistry of your smile for long-term functional strength.",
  },
  {
    question: "My teeth feel fine. Do I still need to see a dentist?",
    answer: "Problems can exist without symptoms. Beyond prevention, regular checkups allow us to offer aesthetic enhancements—from mimicry fillings to full smile makeovers—ensuring your confidence matches your health.",
  },
  {
    question: "What should I look for when choosing the right dentist?",
    answer: "Look for a clinical environment that prioritizes excellence, cleanliness, and clear communication. We ensure all treatment costs and techniques are explained thoroughly before your journey begins.",
  },
  {
    question: "How can I take care of my teeth between dental checkups?",
    answer: "Maintain a ritual of brushing twice daily with fluoride toothpaste and flossing once. Avoid high-sugar intake to limit plaque bacteria, and remember to schedule a professional concierge checkup every six months.",
  },
  {
    question: "At what age should I start taking my child to the dentist?",
    answer: "The AAPD recommends the first visit by age one. Early examination of emerging baby teeth sets the foundation for a lifetime of oral health and positive associations with dental care.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-purple-100">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-teal-600' : 'text-purple-900 group-hover:text-purple-700'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-teal-600 text-white rotate-180' : 'bg-purple-50 text-purple-900'}`}>
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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-teal-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4"
            >
              Support & Care
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-purple-900 tracking-tighter leading-[0.9] mb-8">
              Frequently <br />
              <span className="font-light italic font-serif text-purple-700">Asked.</span>
            </h2>
            
            {/* Summarized Description */}
            <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
              <p>
                Find immediate answers regarding our bespoke services, scheduling, and clinical protocols.
              </p>
              <p className="text-sm border-l-2 border-teal-500 pl-4 py-1">
                If your inquiry remains unaddressed, our concierge staff is available for direct assistance.
              </p>
            </div>
            
            <div className="mt-12 w-24 h-1 bg-teal-500/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full bg-teal-500"
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
              {faqs.map((faq, index) => (
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
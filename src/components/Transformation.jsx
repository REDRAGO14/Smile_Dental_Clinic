import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

const CASES = [
  {
    id: "whitening",
    tabLabel: "Laser Whitening",
    procedure: "Deep Stain Removal",
    duration: "1 Session",
    before: "https://i.ibb.co/wNHN4Hy5/Gemini-Generated-Image-mq2f3qmq2f3qmq2f.webp",
    after: "https://i.ibb.co/Z6G9F5wC/image.png",
  },
  {
    id: "veneers",
    tabLabel: "Porcelain Veneers",
    procedure: "Full YOMA Design",
    duration: "2 Weeks",
    before: "https://i.ibb.co/MQHrtx8/image.png", 
    after: "https://i.ibb.co/n86hYMRG/image.png",
  },
  {
    id: "aligners",
    tabLabel: "Clear Aligners",
    procedure: "Orthodontic Realignment",
    duration: "8 Months",
    before: "https://i.ibb.co/nq5VkkLS/image.png",
    after: "https://i.ibb.co/CsnTdkcD/image.png",
  },
];

const AUTO_PLAY_DURATION = 6000;

export default function TransformationGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeCase = CASES[activeIndex];
  const containerRef = useRef(null);

  const springPos = useSpring(50, {
    stiffness: 700,
    damping: 60,
    mass: 0.5
  });

  const clipPath = useTransform(springPos, (value) => `inset(0 ${100 - value}% 0 0)`);
  const leftPercent = useTransform(springPos, (value) => `${value}%`);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CASES.length);
      springPos.set(50);
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, springPos]);

  useEffect(() => {
    const timer = setTimeout(() => {
      springPos.set(60);
      setTimeout(() => springPos.set(50), 600);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeIndex, springPos]);

  const handleMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    if (position >= 0 && position <= 100) {
      springPos.set(position);
    }
  }, [springPos]);

  return (
    <section 
      className="py-16 md:py-24 pb-0 bg-[#FAFAFA] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)} // Pause on mobile touch
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-800 font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] block mb-3 md:mb-4">
              Clinical Excellence
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-blue-500 tracking-tighter mb-8 md:mb-12">
              Transformative <span className="italic font-light serif text-blue-500-700">Results.</span>
            </h2>
          </motion.div>

          {/* Responsive Tabs - Scrollable on very small screens */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {CASES.map((item, index) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => {
                    setActiveIndex(index);
                    springPos.set(50);
                  }}
                  className={`px-6 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 relative z-10 ${
                    activeIndex === index 
                    ? "bg-blue-500 text-white shadow-xl scale-105" 
                    : "bg-white text-gray-400 border border-gray-100 hover:text-blue-500"
                  }`}
                >
                  {item.tabLabel}
                </button>
                
                {activeIndex === index && !isPaused && (
                  <motion.div 
                    key={`progress-${index}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-400 origin-left z-20 rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCase.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div 
                ref={containerRef}
                /* MOBILE: Higher aspect ratio (4/5) for detail, DESKTOP: Wide (21/9) */
                className="relative aspect-[4/5] md:aspect-[21/9] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden touch-none shadow-2xl border border-white group/slider"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
              >
                <img src={activeCase.after} alt="After" className="absolute inset-0 w-full h-full object-cover select-none" />
                
                <motion.div 
                  className="absolute inset-0 w-full h-full overflow-hidden z-10"
                  style={{ clipPath }}
                >
                  <img src={activeCase.before} alt="Before" className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] select-none" />
                  <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-black/30 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] z-30">
                    Before
                  </div>
                </motion.div>

                <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-blue-500/70 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] z-30">
                  After
                </div>

                <motion.div 
                  className="absolute top-0 bottom-0 w-[1.5px] md:w-[2px] bg-white z-30 pointer-events-none"
                  style={{ left: leftPercent }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl transition-transform group-hover/slider:scale-110">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-lg">
                            <HiOutlineArrowLeft size={10} className="md:w-3 md:h-3" />
                            <HiOutlineArrowRight size={10} className="md:w-3 md:h-3" />
                        </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Responsive Procedure Card */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -20 }}
                className="mx-4 md:mx-auto max-w-3xl relative z-40 bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-gray-100 flex flex-row items-center justify-around gap-4 md:gap-8 text-center"
              >
                <div className="flex-1">
                  <p className="text-[8px] md:text-[9px] font-black text-blue-800 uppercase tracking-[0.2em] mb-1 md:mb-2">Procedure</p>
                  <p className="text-sm md:text-2xl font-bold text-blue-500 serif italic leading-tight">{activeCase.procedure}</p>
                </div>
                <div className="w-px h-8 md:h-12 bg-gray-200" />
                <div className="flex-1">
                  <p className="text-[8px] md:text-[9px] font-black text-blue-800 uppercase tracking-[0.2em] mb-1 md:mb-2">Timeline</p>
                  <p className="text-sm md:text-2xl font-bold text-blue-500 leading-tight">{activeCase.duration}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
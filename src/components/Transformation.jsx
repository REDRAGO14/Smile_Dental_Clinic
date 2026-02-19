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
    procedure: "Full Smile Design",
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

  // --- AUTO-PLAY ENGINE ---
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CASES.length);
      springPos.set(50);
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, springPos]);

  // --- TEASER ANIMATION ON CHANGE ---
  useEffect(() => {
    const timer = setTimeout(() => {
      springPos.set(60);
      setTimeout(() => springPos.set(50), 600);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeIndex, springPos]);

  // --- HANDLERS ---
  const handleMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    // We don't manually set isPaused here anymore; 
    // the onMouseEnter/Leave on the parent div handles it globally.
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    if (position >= 0 && position <= 100) {
      springPos.set(position);
    }
  }, [springPos]);

  return (
    <section 
      className="py-24 pb-0 bg-[#FAFAFA] overflow-hidden"
      // Resumes auto-play when mouse leaves the section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-600 font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">
              Clinical Excellence
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-purple-900 tracking-tighter mb-12">
              Transformative <span className="italic font-light serif text-purple-700">Results.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {CASES.map((item, index) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => {
                    setActiveIndex(index);
                    springPos.set(50);
                  }}
                  className={`px-10 py-4 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 relative z-10 ${
                    activeIndex === index 
                    ? "bg-purple-900 text-white shadow-xl scale-105" 
                    : "bg-white text-gray-400 border border-gray-100 hover:text-purple-900"
                  }`}
                >
                  {item.tabLabel}
                </button>
                
                {/* Visual Progress Bar */}
                {activeIndex === index && !isPaused && (
                  <motion.div 
                    key={`progress-${index}`} // Key ensures it resets on slide change
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-teal-400 origin-left z-20 rounded-full"
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div 
                ref={containerRef}
                className="relative aspect-[16/10] md:aspect-[21/9] w-full rounded-[4rem] overflow-hidden cursor-none shadow-2xl border border-white group/slider"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
              >
                <img src={activeCase.after} alt="After" className="absolute inset-0 w-full h-full object-cover select-none" />
                
                <motion.div 
                  className="absolute inset-0 w-full h-full overflow-hidden z-10"
                  style={{ clipPath }}
                >
                  <img src={activeCase.before} alt="Before" className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] select-none" />
                  <div className="absolute top-10 left-10 bg-black/20 backdrop-blur-xl border border-white/20 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] z-30">
                    Before
                  </div>
                </motion.div>

                <div className="absolute top-10 right-10 bg-teal-500/60 backdrop-blur-xl border border-white/20 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] z-30">
                  After
                </div>

                <motion.div 
                  className="absolute top-0 bottom-0 w-[2px] bg-white z-30 pointer-events-none"
                  style={{ left: leftPercent }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl transition-transform group-hover/slider:scale-110">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-900 shadow-lg">
                            <HiOutlineArrowLeft size={12} />
                            <HiOutlineArrowRight size={12} />
                        </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: -40 }}
                className="max-w-3xl mx-auto relative z-40 bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-around gap-8 text-center"
              >
                <div>
                  <p className="text-[9px] font-black text-teal-600 uppercase tracking-[0.3em] mb-2">Procedure</p>
                  <p className="text-xl md:text-2xl font-bold text-purple-900 serif italic">{activeCase.procedure}</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-100" />
                <div>
                  <p className="text-[9px] font-black text-teal-600 uppercase tracking-[0.3em] mb-2">Timeline</p>
                  <p className="text-xl md:text-2xl font-bold text-purple-900">{activeCase.duration}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
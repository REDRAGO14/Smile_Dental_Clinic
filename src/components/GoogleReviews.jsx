import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";

const REVIEWS = [
  {
    name: "Abebe Kebede",
    text: "The best dental experience in Addis. The technology they use for smile design is mind-blowing. Truly world-class.",
    rating: 5,
    date: "2 days ago"
  },
  {
    name: "Martha Tadesse",
    text: "Dr. Selamawit and her team are artists. I had my veneers done here and the result is so natural. Highly recommended!",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "Samuel L.",
    text: "Very professional and clean clinic. They explained every step of the root canal process. No pain at all.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Hanna M.",
    text: "I was always afraid of dentists until I visited Smile Specialty. The environment is so calming and luxury.",
    rating: 5,    date: "1 month ago"
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-24 bg-purple-900 overflow-hidden shadow-[inset_0_20px_40px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        
        {/* Google Header - Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="bg-white p-3 rounded-2xl shadow-xl">
              <FcGoogle className="text-3xl md:text-4xl" />
            </div>
            <div>
              <div className="flex justify-center md:justify-start text-yellow-400 text-lg mb-1">
                {[...Array(5)].map((_, i) => <AiFillStar key={i} />)}
              </div>
              <p className="text-white font-bold text-sm tracking-tight">
                4.9/5 Rating <span className="text-purple-300 font-normal ml-2 block md:inline">Based on 500+ Reviews</span>
              </p>
            </div>
          </div>
          
          <button className="w-full md:w-auto text-white border border-white/20 px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-purple-900 transition-all duration-500">
            Write a Review
          </button>
        </div>

        {/* Marquee-style Slider */}
        <div className="relative -mx-4 md:mx-0">
          <motion.div 
            // Slower animation on mobile for better readability
            animate={{ x: [0, -1400] }}
            transition={{ 
              repeat: Infinity, 
              duration: 40, 
              ease: "linear" 
            }}
            // Pause on hover (Desktop) and Tap (Mobile)
            whileHover={{ animationPlayState: "paused" }}
            whileTap={{ animationPlayState: "paused" }}
            className="flex gap-4 md:gap-8 w-max px-4"
          >
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((rev, i) => (
              <div 
                key={i} 
                // Adjusted width: 280px on small mobile, 350px on desktop
                className="w-[280px] md:w-[350px] bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">{rev.name}</h4>
                    <p className="text-purple-300 text-[9px] uppercase tracking-widest">{rev.date}</p>
                  </div>
                  <div className="flex text-yellow-400 text-[10px] md:text-xs">
                    {[...Array(rev.rating)].map((_, i) => <AiFillStar key={i} />)}
                  </div>
                </div>
                <p className="text-purple-100/80 text-xs md:text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>
            ))}
          </motion.div>

          {/* Luxury Fade Gradients - Hidden or narrower on small screens to show more content */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-900 to-transparent z-10" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-900 to-transparent z-10" />
          
          {/* Mobile Fades: Subtler */}
          <div className="md:hidden absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-purple-900 to-transparent z-10" />
          <div className="md:hidden absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-purple-900 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
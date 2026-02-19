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
    rating: 5,
    date: "1 month ago"
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-purple-900 overflow-hidden shadow-[inset_0_20px_40px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Google Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-xl">
              <FcGoogle className="text-4xl" />
            </div>
            <div>
              <div className="flex text-yellow-400 text-lg">
                {[...Array(5)].map((_, i) => <AiFillStar key={i} />)}
              </div>
              <p className="text-white font-bold text-sm tracking-tight">
                4.9/5 Rating <span className="text-purple-300 font-normal ml-2">| 500+ Reviews</span>
              </p>
            </div>
          </div>
          <button className="text-white border border-white/20 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-purple-900 transition-all">
            Write a Review
          </button>
        </div>

        {/* Marquee-style Slider */}
        <div className="relative">
          <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear" 
            }}
            className="flex gap-8 w-max"
          >
            {[...REVIEWS, ...REVIEWS].map((rev, i) => (
              <div 
                key={i} 
                className="w-[350px] bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">{rev.name}</h4>
                    <p className="text-purple-300 text-[10px] uppercase tracking-widest">{rev.date}</p>
                  </div>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(rev.rating)].map((_, i) => <AiFillStar key={i} />)}
                  </div>
                </div>
                <p className="text-purple-100/70 text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>
            ))}
          </motion.div>

          {/* Luxury Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-900 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
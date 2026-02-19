import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiChevronDown,
} from "react-icons/hi2";
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function ContactLocation() {
  // Animation variants for the split entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    focus: { scaleX: 1, originX: 0 },
    blur: { scaleX: 0, originX: 0 },
  };

  return (
    <section id="contact" className="py-24  bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="bg-purple-900 rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(45,20,80,0.35)] flex flex-wrap lg:flex-nowrap">
          {/* Left: Contact Form */}
          <div className="lg:w-1/2 p-12 md:p-20 bg-white">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-teal-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">
              Private Consultation
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-purple-900 tracking-tighter mb-12 leading-[0.9]">
              Begin Your <br />
              <span className="font-light italic font-serif text-purple-700">
                Transformation.
              </span>
            </h2>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Full Name */}
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent pt-3 pb-2 text-purple-900 focus:outline-none placeholder:text-gray-200 font-medium transition-all"
                    placeholder="Elizabeth Swan"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100" />
                  <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Email */}
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent pt-3 pb-2 text-purple-900 focus:outline-none placeholder:text-gray-200 font-medium transition-all"
                    placeholder="swan@aesthetic.com"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100" />
                  <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
                </div>
              </div>

              {/* Service Selection */}
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
                  Service of Interest
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent pt-3 pb-2 text-purple-900 focus:outline-none appearance-none cursor-pointer font-medium relative z-10">
                    <option>Select a specialty...</option>
                    <option>Cosmetic Artistry</option>
                    <option>Orthodontic Precision</option>
                    <option>Implantology</option>
                  </select>
                  <HiChevronDown className="absolute right-0 bottom-3 text-gray-400 pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100" />
                <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex cursor-pointer items-center justify-center gap-3 bg-purple-900 text-white px-5 py-3 sm:px-8 sm:py-5 rounded-full text-[15px] sm:text-[15px] font-black uppercase tracking-widest shadow-2xl hover:bg-teal-600 transition-all duration-500">
                <span>Book Appointment</span>
                <RiCalendarScheduleLine
                  size={18}
                  className="group-hover:rotate-12 transition-transform"
                />
              </motion.button>
            </form>
          </div>

          {/* Right: Location Info */}
          <div className="lg:w-1/2 bg-purple-1000 p-12 md:p-20 flex flex-col justify-between text-white relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-16 tracking-tight">
                Our Center
              </h3>
              <div className="space-y-12">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-8 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all duration-500">
                    <HiOutlineMapPin className="text-teal-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-teal-500 font-black uppercase tracking-widest text-[9px] mb-2">
                      Location
                    </p>
                    <p className="text-purple-100/80 text-lg leading-snug">
                      123 Smile Plaza, Bole District,
                      <br /> Addis Ababa, Ethiopia
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-8 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all duration-500">
                    <HiOutlinePhone className="text-teal-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-teal-500 font-black uppercase tracking-widest text-[9px] mb-2">
                      Concierge
                    </p>
                    <p className="text-purple-100/80 text-lg">
                      +251 911 000 000
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Interactive Map Wrapper */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-16 group relative h-64 w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-3xl border border-white/5">
              <div className="absolute inset-0 bg-purple-900/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
              <iframe
                title="Office Location"
                className="w-full h-full grayscale invert opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.553254924558!2d38.786938!3d9.0142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNTEuMSJOIDM4wrA0NycxMy4wIkU!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                style={{ border: 0 }}
                loading="lazy"></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

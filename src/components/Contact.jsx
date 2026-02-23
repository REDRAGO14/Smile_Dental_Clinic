import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { showLuxuryToast } from "./LuxuryToast";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiChevronDown,
} from "react-icons/hi2";
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function ContactLocation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: "Cosmetic Artistry",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Strict Ethiopian/International validation
    const phoneRegex = /^(\+251|0)(9|7)\d{8}$/;

    if (formData.fullName.length < 3) newErrors.fullName = "Name is too short";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!phoneRegex.test(formData.phoneNumber))
      newErrors.phoneNumber = "Use format: 0911223344";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showLuxuryToast("Journey begun. Our concierge will call you.");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          service: "Cosmetic Artistry",
        });
      } else {
        showLuxuryToast("Submission failed. Please check details.", "error");
      }
    } catch (error) {
      showLuxuryToast("Clinic server is offline.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden font-sans">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-purple-900 rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(45,20,80,0.35)] flex flex-wrap lg:flex-nowrap">
          {/* LEFT: FORM */}
          <div className="lg:w-1/2 p-12 md:p-20 bg-white">
            <span className="text-teal-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">
              Private Consultation
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-purple-900 tracking-tighter mb-12 leading-[0.9]">
              Begin Your <br />
              <span className="font-light italic font-serif text-purple-700">
                Transformation.
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Full Name */}
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full bg-transparent pt-3 pb-2 text-purple-900 focus:outline-none font-medium border-b transition-all ${errors.fullName ? "border-red-500" : "border-gray-100 focus:border-teal-500"}`}
                    placeholder="Abebe Bikila"
                  />
                  {errors.fullName && (
                    <p className="text-[9px] text-red-500 mt-1 font-bold uppercase">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent pt-3 pb-2 text-purple-900 focus:outline-none font-medium border-b transition-all ${errors.email ? "border-red-500" : "border-gray-100 focus:border-teal-500"}`}
                    placeholder="abebe@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-[9px] text-red-500 mt-1 font-bold uppercase">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="relative group md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full bg-transparent pt-3 pb-2 text-purple-900 focus:outline-none font-bold tracking-widest border-b transition-all ${errors.phoneNumber ? "border-red-500" : "border-gray-100 focus:border-teal-500"}`}
                    placeholder="0911223344"
                  />
                  {errors.phoneNumber && (
                    <p className="text-[9px] text-red-500 mt-1 font-bold uppercase">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Select */}
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
                  Desired Service
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent pt-3 pb-2 text-purple-900 focus:outline-none appearance-none cursor-pointer font-medium border-b border-gray-100 focus:border-teal-500 transition-all relative z-10">
                    <option value="Cosmetic Artistry">Cosmetic Artistry</option>
                    <option value="Orthodontic Precision">
                      Orthodontic Precision
                    </option>
                    <option value="Implantology">Implantology</option>
                  </select>
                  <HiChevronDown className="absolute right-0 bottom-3 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex items-center justify-center gap-3 bg-purple-900 text-white py-5 rounded-full text-[15px] font-black uppercase tracking-widest shadow-2xl hover:bg-teal-600 transition-all duration-500 disabled:opacity-50">
                <span>{loading ? "Processing..." : "Book Appointment"}</span>
                <RiCalendarScheduleLine size={18} />
              </motion.button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="lg:w-1/2 bg-[#2d1450] p-12 md:p-20 flex flex-col justify-between text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-16 tracking-tight">
                Our Center
              </h3>
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <HiOutlineMapPin className="text-teal-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-teal-500 font-black uppercase tracking-widest text-[9px] mb-2">
                      Location
                    </p>
                    <p className="text-purple-100/80 text-lg">
                      123 Smile Plaza, Bole District, Addis Ababa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
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
                </div>
              </div>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

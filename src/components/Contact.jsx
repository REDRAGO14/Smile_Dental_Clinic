import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { showLuxuryToast } from "./LuxuryToast";
import { CLINIC_CONFIG } from "../config/clinic.config";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiChevronDown,
} from "react-icons/hi2";
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function ContactLocation() {
  const { branding: brCfg, contactSection: cCfg } = CLINIC_CONFIG;
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: cCfg.form.services[0],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const v = cCfg.validation;
    if (formData.fullName.length < v.nameMinLength) newErrors.fullName = v.nameError;
    if (!emailRegex.test(formData.email)) newErrors.email = v.emailError;
    if (!v.phoneRegex.test(formData.phoneNumber)) newErrors.phoneNumber = v.phoneError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await fetch("https://smile-dental-clinic-lkzo.onrender.com/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        showLuxuryToast(cCfg.form.successMessage);
        setFormData({ fullName: "", email: "", phoneNumber: "", service: cCfg.form.services[0] });
      } else {
        showLuxuryToast(cCfg.form.errorMessage, "error");
      }
    } catch (error) {
      showLuxuryToast(cCfg.form.serverOfflineMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-32 bg-[#FAFAFA] overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex flex-col lg:flex-row bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white"
>
  
  {/* LEFT (Desktop) / TOP (Mobile): THE FORM */}
  <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 bg-white order-1">
    <span className="text-blue-800 font-bold tracking-[0.3em] uppercase text-[9px] md:text-[10px] block mb-3">
      {cCfg.form.badge}
    </span>
    <h2 className="text-3xl md:text-6xl font-black text-blue-500 tracking-tighter mb-8 md:mb-12 leading-tight">
      {cCfg.form.title} <br className="hidden md:block" />
      <span className="font-light italic font-serif text-blue-800">
        {cCfg.form.subtitle}
      </span>
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="relative">
          <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full bg-transparent pt-2 pb-1 text-sm md:text-base text-blue-500 focus:outline-none border-b transition-all ${errors.fullName ? "border-red-500" : "border-gray-100 focus:border-blue-500"}`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-[8px] text-red-500 mt-1 uppercase font-bold">{errors.fullName}</p>}
        </div>

        <div className="relative">
          <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-transparent pt-2 pb-1 text-sm md:text-base text-blue-500 focus:outline-none border-b transition-all ${errors.email ? "border-red-500" : "border-gray-100 focus:border-blue-500"}`}
            placeholder="hello@luxury.com"
          />
          {errors.email && <p className="text-[8px] text-red-500 mt-1 uppercase font-bold">{errors.email}</p>}
        </div>

        <div className="md:col-span-2 relative">
          <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full bg-transparent pt-2 pb-1 text-sm md:text-base text-blue-500 focus:outline-none border-b transition-all ${errors.phoneNumber ? "border-red-500" : "border-gray-100 focus:border-blue-500"}`}
            placeholder="+251 ..."
          />
          {errors.phoneNumber && <p className="text-[8px] text-red-500 mt-1 uppercase font-bold">{errors.phoneNumber}</p>}
        </div>
      </div>

      <div className="relative">
        <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Inquiry Type</label>
        <div className="relative">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-transparent pt-2 pb-1 text-sm md:text-base text-blue-500 focus:outline-none appearance-none cursor-pointer border-b border-gray-100 focus:border-blue-500 transition-all"
          >
            {cCfg.form.services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          <HiChevronDown className="absolute right-0 bottom-2 text-blue-800 pointer-events-none" />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileTap={{ scale: 0.97 }}
        className="w-full flex items-center justify-center gap-3 bg-blue-500 text-white py-4 md:py-5 rounded-full text-[12px] md:text-[14px] font-black uppercase tracking-widest shadow-xl active:bg-blue-700 transition-all"
      >
        <span>{loading ? cCfg.form.loadingText : cCfg.form.buttonText}</span>
        <RiCalendarScheduleLine size={18} />
      </motion.button>
    </form>
  </div>

  {/* RIGHT (Desktop) / BOTTOM (Mobile): INFO CARD */}
  <div className="w-full lg:w-1/2 bg-blue-950 p-8 md:p-16 lg:p-20 order-2 flex flex-col justify-between relative overflow-hidden">
    {/* Ambient Background Blobs */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500-500/10 blur-[80px] rounded-full" />

    <div className="relative z-10">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 md:mb-16 tracking-tight">
        {cCfg.info.title}
      </h3>
      
      <div className="space-y-8 md:space-y-12">
        <div className="flex items-start gap-5 md:gap-8">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <HiOutlineMapPin className="text-blue-400 text-xl md:text-2xl" />
          </div>
          <div>
            <p className="text-blue-400 font-black uppercase tracking-widest text-[8px] md:text-[9px] mb-1">Office</p>
            <p className="text-white/80 text-sm md:text-lg leading-snug">{cCfg.info.location.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-5 md:gap-8">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <HiOutlinePhone className="text-blue-400 text-xl md:text-2xl" />
          </div>
          <div>
            <p className="text-blue-400 font-black uppercase tracking-widest text-[8px] md:text-[9px] mb-1">Concierge</p>
            <p className="text-white/80 text-sm md:text-lg leading-snug">{cCfg.info.concierge.phone}</p>
          </div>
        </div>
      </div>
    </div>

    {/* MAP */}
    <div className="mt-10 md:mt-16 group relative h-48 md:h-72 w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-xl">
      <div className="absolute inset-0 bg-blue-500/40 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
      <iframe
        title="Location Map"
        className="w-full h-full grayscale invert opacity-50 md:opacity-70 group-hover:opacity-100 transition-all duration-1000"
        src={cCfg.info.location.mapUrl}
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  </div>

</motion.div>   
      </div>
    </section>
  );
}
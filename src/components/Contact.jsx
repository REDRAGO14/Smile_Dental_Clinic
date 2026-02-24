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
        showLuxuryToast(cCfg.form.successMessage);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          service: cCfg.form.services[0],
        });
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
    <section id="contact" className="py-24 bg-white overflow-hidden font-sans">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`bg-${brCfg.colors.primary} rounded-[4rem] overflow-hidden shadow-2xl flex flex-wrap lg:flex-nowrap`}
        >
          {/* LEFT: FORM */}
          <div className="lg:w-1/2 p-12 md:p-20 bg-white">
            <span className={`text-${brCfg.colors.secondary} font-bold tracking-[0.4em] uppercase text-[10px] block mb-4`}>
              {cCfg.form.badge}
            </span>
            <h2 className={`text-5xl md:text-6xl font-black text-${brCfg.colors.primary} tracking-tighter mb-12 leading-[0.9]`}>
              {cCfg.form.title} <br />
              <span className={`font-light italic font-serif text-${brCfg.colors.accent}`}>
                {cCfg.form.subtitle}
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full bg-transparent pt-3 pb-2 text-${brCfg.colors.primary} focus:outline-none font-medium border-b transition-all ${errors.fullName ? "border-red-500" : "border-gray-100 focus:border-teal-500"}`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-[9px] text-red-500 mt-1 font-bold uppercase">{errors.fullName}</p>}
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent pt-3 pb-2 text-${brCfg.colors.primary} focus:outline-none font-medium border-b transition-all ${errors.email ? "border-red-500" : "border-gray-100 focus:border-teal-500"}`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-[9px] text-red-500 mt-1 font-bold uppercase">{errors.email}</p>}
                </div>

                <div className="relative group md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Mobile Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full bg-transparent pt-3 pb-2 text-${brCfg.colors.primary} focus:outline-none font-bold tracking-widest border-b transition-all ${errors.phoneNumber ? "border-red-500" : "border-gray-100 focus:border-teal-500"}`}
                    placeholder="0911223344"
                  />
                  {errors.phoneNumber && <p className="text-[9px] text-red-500 mt-1 font-bold uppercase">{errors.phoneNumber}</p>}
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Desired Service</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full bg-transparent pt-3 pb-2 text-${brCfg.colors.primary} focus:outline-none appearance-none cursor-pointer font-medium border-b border-gray-100 focus:border-teal-500 transition-all relative z-10`}
                  >
                    {cCfg.form.services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <HiChevronDown className="absolute right-0 bottom-3 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group w-full flex items-center justify-center gap-3 bg-${brCfg.colors.primary} text-white py-5 rounded-full text-[15px] font-black uppercase tracking-widest shadow-2xl hover:bg-${brCfg.colors.secondary} transition-all duration-500 disabled:opacity-50`}
              >
                <span>{loading ? cCfg.form.loadingText : cCfg.form.buttonText}</span>
                <RiCalendarScheduleLine size={18} />
              </motion.button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="lg:w-1/2 bg-[#2d1450] p-12 md:p-20 flex flex-col justify-between text-white relative">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-${brCfg.colors.highlight || 'teal-500'}/10 blur-[100px] rounded-full`} />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-16 tracking-tight">{cCfg.info.title}</h3>
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <HiOutlineMapPin className="text-teal-400 text-2xl" />
                  </div>
                  <div>
                    <p className={`text-${brCfg.colors.highlight || 'teal-500'} font-black uppercase tracking-widest text-[9px] mb-2`}>
                      {cCfg.info.location.label}
                    </p>
                    <p className="text-purple-100/80 text-lg">{cCfg.info.location.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <HiOutlinePhone className="text-teal-400 text-2xl" />
                  </div>
                  <div>
                    <p className={`text-${brCfg.colors.highlight || 'teal-500'} font-black uppercase tracking-widest text-[9px] mb-2`}>
                      {cCfg.info.concierge.label}
                    </p>
                    <p className="text-purple-100/80 text-lg">{cCfg.info.concierge.phone}</p>
                  </div>
                </div>
              </div>

              {/* MAP IFRAME */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-16 group relative h-64 w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-3xl border border-white/5"
              >
                <div className="absolute inset-0 bg-purple-900/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
                <iframe
                  title="Office Location"
                  className="w-full h-full grayscale invert opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000"
                  src={cCfg.info.location.mapUrl}
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
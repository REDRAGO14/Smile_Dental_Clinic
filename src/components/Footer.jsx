import React from "react";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-purple-900 pt-32 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter mb-8 flex items-center gap-2">
              SMILE <span className="text-teal-600 font-light italic font-serif">Specialty</span>
            </h2>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-10 max-w-xs">
              Redefining dental artistry in Ethiopia. Where clinical precision meets a world-class luxury experience.
            </p>
            <div className="flex gap-3">
              {[FaInstagram, FaFacebookF, FaTelegramPlane, FaTiktok].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-purple-900 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-500 shadow-sm">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-bold text-teal-600 uppercase tracking-[0.3em] text-[10px] mb-10">The Experience</h4>
            <ul className="space-y-5 text-sm font-bold tracking-tight">
              <li className="hover:text-teal-600 cursor-pointer transition-colors">Digital Smile Design</li>
              <li className="hover:text-teal-600 cursor-pointer transition-colors">Our Specialists</li>
              <li className="hover:text-teal-600 cursor-pointer transition-colors">Boutique Gallery</li>
              <li className="hover:text-teal-600 cursor-pointer transition-colors">Patient Stories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-teal-600 uppercase tracking-[0.3em] text-[10px] mb-10">Concierge</h4>
            <ul className="space-y-5 text-sm font-bold tracking-tight">
              <li className="hover:text-teal-600 cursor-pointer transition-colors">Private Booking</li>
              <li className="hover:text-teal-600 cursor-pointer transition-colors">Virtual Assessment</li>
              <li className="hover:text-teal-600 cursor-pointer transition-colors">International Clients</li>
              <li className="hover:text-teal-600 cursor-pointer transition-colors">Care Assistance</li>
            </ul>
          </div>

          {/* Operating Hours in a Styled Box */}
          <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
            <h4 className="font-bold text-purple-900 uppercase tracking-widest text-[10px] mb-6 border-b border-teal-500/20 pb-4">Clinical Hours</h4>
            <div className="space-y-4 text-xs font-bold uppercase tracking-tighter">
              <div className="flex justify-between">
                <span className="text-gray-400">Mon — Fri</span>
                <span className="text-purple-900">09:00 — 19:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-purple-900">10:00 — 16:00</span>
              </div>
              <p className="mt-6 pt-6 border-t border-gray-200 text-teal-600 text-center tracking-[0.2em]">Closed Sundays</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-bold">
            © 2026 Smile Specialty Dental Clinic. Addis Ababa.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] text-gray-400 uppercase tracking-[0.2em] hover:text-teal-600">Privacy</a>
            <a href="#" className="text-[9px] text-gray-400 uppercase tracking-[0.2em] hover:text-teal-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
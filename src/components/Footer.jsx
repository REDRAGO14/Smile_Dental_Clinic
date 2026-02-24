import React from "react";
import { CLINIC_CONFIG } from "../config/clinic.config";

export default function Footer() {
  const { branding: brCfg, footer: fCfg } = CLINIC_CONFIG;

  return (
    <footer className="bg-white text-purple-900 pt-20 md:pt-32 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-6 flex items-center gap-2">
              {brCfg.name} 
              <span className="text-teal-600 font-light italic font-serif">
                {brCfg.suffix}
              </span>
            </h2>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-8 max-w-xs">
              {brCfg.description}
            </p>
            <div className="flex gap-4">
              {brCfg.socials.map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-purple-900 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-500 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="flex justify-center gap-8">
          {fCfg.sections.map((section, idx) => (
            <div key={idx} className="text-center md:text-left">
              <h4 className="font-bold text-teal-600 uppercase tracking-[0.3em] text-[10px] mb-8 md:mb-10">
                {section.title}
              </h4>
              <ul className="space-y-4 md:space-y-5 text-sm font-bold tracking-tight">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-teal-600 cursor-pointer transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>

          {/* Hours Card - Distinct visual style */}
          <div className="bg-gray-50 p-8 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h4 className="font-bold text-purple-900 uppercase tracking-widest text-[10px] mb-6 border-b border-teal-600/20 pb-4">
              {fCfg.hours.title}
            </h4>
            <div className="space-y-4 text-[11px] font-bold uppercase tracking-tighter">
              {fCfg.hours.schedule.map((item, sIdx) => (
                <div key={sIdx} className="flex justify-between items-center">
                  <span className="text-gray-400">{item.day}</span>
                  <span className="text-purple-900">{item.time}</span>
                </div>
              ))}
              <p className="mt-6 pt-6 border-t border-gray-200 text-teal-600 text-center tracking-[0.2em]">
                {fCfg.hours.closedText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className=" border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-black leading-loose">
              © {new Date().getFullYear()} {brCfg.legalName}. <br className="md:hidden" />
              {fCfg.legal.location}.
            </p>
          </div>
          
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold hover:text-teal-600 transition-colors">
              {fCfg.legal.privacyLabel}
            </a>
            <a href="#" className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold hover:text-teal-600 transition-colors">
              {fCfg.legal.termsLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
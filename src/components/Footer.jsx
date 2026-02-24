import React from "react";
import { CLINIC_CONFIG } from "../config/clinic.config";

export default function Footer() {
  const { branding: brCfg, footer: fCfg } = CLINIC_CONFIG;

  return (
    <footer className={`bg-white text-${brCfg.colors.primary} pt-32 pb-12 border-t border-gray-100`}>
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter mb-8 flex items-center gap-2">
              {brCfg.name} <span className={`text-${brCfg.colors.secondary} font-light italic font-serif`}>{brCfg.suffix}</span>
            </h2>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-10 max-w-xs">
              {brCfg.description}
            </p>
            <div className="flex gap-3">
              {brCfg.socials.map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-${brCfg.colors.primary} hover:bg-blue-500 hover:text-white hover:border-${brCfg.colors.secondary} transition-all duration-500 shadow-sm`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {fCfg.sections.map((section, idx) => (
            <div key={idx}>
              <h4 className={`font-bold text-${brCfg.colors.secondary} uppercase tracking-[0.3em] text-[10px] mb-10`}>
                {section.title}
              </h4>
              <ul className="space-y-5 text-sm font-bold tracking-tight">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className={`hover:text-${brCfg.colors.secondary} cursor-pointer transition-colors`}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Operating Hours in a Styled Box */}
          <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
            <h4 className={`font-bold text-${brCfg.colors.primary} uppercase tracking-widest text-[10px] mb-6 border-b border-${brCfg.colors.secondary}/20 pb-4`}>
              {fCfg.hours.title}
            </h4>
            <div className="space-y-4 text-xs font-bold uppercase tracking-tighter">
              {fCfg.hours.schedule.map((item, sIdx) => (
                <div key={sIdx} className="flex justify-between">
                  <span className="text-gray-400">{item.day}</span>
                  <span className={`text-${brCfg.colors.primary}`}>{item.time}</span>
                </div>
              ))}
              <p className={`mt-6 pt-6 border-t border-gray-200 text-${brCfg.colors.secondary} text-center tracking-[0.2em]`}>
                {fCfg.hours.closedText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-bold">
            © 2026 {brCfg.legalName}. {fCfg.legal.location}.
          </p>
          <div className="flex gap-8">
            <a href="#" className={`text-[9px] text-gray-400 uppercase tracking-[0.2em] hover:text-${brCfg.colors.secondary}`}>
              {fCfg.legal.privacyLabel}
            </a>
            <a href="#" className={`text-[9px] text-gray-400 uppercase tracking-[0.2em] hover:text-${brCfg.colors.secondary}`}>
              {fCfg.legal.termsLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
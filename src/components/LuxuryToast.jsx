import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { HiCheckBadge, HiXCircle } from "react-icons/hi2";

export const showLuxuryToast = (message, type = "success") => {
  toast.custom((t) => (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.9, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
      className={`${
        t.visible ? 'active' : 'idle'
      } max-w-[90vw] md:max-w-md w-full bg-white/70 backdrop-blur-2xl pointer-events-auto flex flex-col md:flex-row shadow-[0_25px_60px_rgba(45,20,80,0.2)] rounded-[2.5rem] overflow-hidden border border-white/40`}
    >
      <div className="flex-1 p-5 md:p-6">
        <div className="flex items-start md:items-center gap-4">
          <div className="shrink-0 p-2 bg-white rounded-2xl shadow-sm">
            {type === "success" ? (
              <HiCheckBadge className="h-7 w-7 text-blue-800" />
            ) : (
              <HiXCircle className="h-7 w-7 text-red-500" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[9px] uppercase tracking-[0.4em] font-black text-blue-800/60 mb-1">
              {type === "success" ? "Selection Confirmed" : "System Alert"}
            </p>
            <p className="text-[13px] md:text-sm font-bold text-blue-500-950 leading-snug">
              {message}
            </p>
          </div>
        </div>
      </div>
      
      {/* Action Area */}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="bg-blue-500/5 md:bg-transparent border-t md:border-t-0 md:border-l border-blue-500/5 px-6 py-3 md:py-0 text-[10px] font-black uppercase tracking-widest text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
      >
        Dismiss
      </button>
    </motion.div>
  ), { position: 'top-center', duration: 4000 });
};
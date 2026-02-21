import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { HiCheckBadge, HiXCircle } from "react-icons/hi2";

export const showLuxuryToast = (message, type = "success") => {
  toast.custom((t) => (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white/80 backdrop-blur-xl pointer-events-auto flex ring-1 ring-purple-900/10 shadow-[0_20px_50px_rgba(45,20,80,0.15)] rounded-[2rem] p-4 border border-white`}
    >
      <div className="flex-1 w-0 p-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            {type === "success" ? (
              <HiCheckBadge className="h-10 w-10 text-teal-600" />
            ) : (
              <HiXCircle className="h-10 w-10 text-red-500" />
            )}
          </div>
          <div className="ml-4 flex-1">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-teal-600 mb-1">
              System Notification
            </p>
            <p className="text-sm font-bold text-purple-900 leading-tight">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-100">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-xs font-black uppercase tracking-widest text-purple-400 hover:text-purple-900 transition-colors focus:outline-none"
        >
          Close
        </button>
      </div>
    </motion.div>
  ), { duration: 5000 });
};
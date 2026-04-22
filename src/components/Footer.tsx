import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="h-20 flex items-center justify-between px-12 glass-panel border-t border-white/10 mt-auto">
      <div className="flex gap-8">
        <div className="text-[10px] text-slate-500">
          <span className="block text-slate-300 font-bold uppercase tracking-widest mb-1 text-center sm:text-left">Shop Address</span>
          Main Road, Sarafa Chowk, Narmadapuram
        </div>
        <div className="text-[10px] text-slate-500">
          <span className="block text-slate-300 font-bold uppercase tracking-widest mb-1 text-center sm:text-left">Contact</span>
          +91 81099 97994 | shahmohammed007@gmail.com
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex gap-4">
          <a href="https://www.instagram.com/shah_glass_trading/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-sky-400 transition-colors text-[10px] font-bold uppercase tracking-widest">
            ig
          </a>
          <a href="https://www.facebook.com/mohammedshah26/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-sky-400 transition-colors text-[10px] font-bold uppercase tracking-widest">
            fb
          </a>
          <a href="https://www.indiamart.com/shah-glass-trading/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-sky-400 transition-colors text-[10px] font-bold uppercase tracking-widest">
            im
          </a>
        </div>
        <div className="text-[10px] text-slate-600 font-medium uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Shah Glass Trading
        </div>
      </div>
    </footer>
  );
}

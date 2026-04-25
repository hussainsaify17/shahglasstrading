import { motion } from "motion/react";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-32 border-t border-black/5 relative overflow-hidden bg-[#fdfdfe]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center font-black text-white text-xs">S</div>
              <span className="text-slate-900 font-black tracking-widest text-[11px] md:text-lg uppercase">Shah Glass</span>
            </div>
            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-sm tracking-wide uppercase opacity-80">
              Transforming spaces with premium Aluminium and Glass solutions since 2012. 
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-slate-900 font-bold text-xs tracking-widest uppercase mb-8 border-b border-black/5 pb-2">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Collections', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-emerald-700 transition-colors text-sm font-semibold tracking-tight">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-slate-900 font-bold text-xs tracking-widest uppercase mb-8 border-b border-black/5 pb-2">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Shah Glass. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-slate-400 hover:text-emerald-700 text-[10px] font-bold uppercase tracking-widest transition-colors font-sans">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-emerald-700 text-[10px] font-bold uppercase tracking-widest transition-colors font-sans">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

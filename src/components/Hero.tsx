import { motion } from "motion/react";
import { ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center px-12 md:px-24 pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 overflow-visible"
        >
          <div className="inline-block glass-pill mb-6 md:mb-10">
            EST. 2012 • QUALITY ALUMINIUM & GLASS WORK
          </div>
          <h1 className="section-title leading-[1.1] pb-2">
            Modern Glass & <br />
            <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-800">Aluminium Fitting</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-12 md:mb-16 leading-relaxed font-semibold">
            Elevate your home with premium Aluminium sections, designer LED mirrors, and luxury glass wardrobes. Precision engineering, built for life.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 btn-gradient rounded-full font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4 group shadow-2xl"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="liquid-glass p-1 px-6 rounded-full flex items-center gap-4 py-2.5"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Shield size={18} />
              </div>
              <div>
                <p className="text-black text-[10px] font-bold uppercase tracking-wider leading-none mb-1">BIS Certified</p>
                <p className="text-black/40 text-[9px] uppercase tracking-normal font-medium">Safe & Strong</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Dynamic Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 grid grid-cols-2 gap-6 md:gap-8 h-[600px] md:h-[700px] relative items-center"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="liquid-glass rounded-[40px] md:rounded-[60px] p-6 md:p-8 flex flex-col justify-end relative overflow-hidden group h-[90%] shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[2s] opacity-30 group-hover:opacity-60" 
              alt="Architectural Glass"
            />
            <div className="relative z-20">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-emerald-100">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-emerald-700 border-b-[5px] border-b-transparent ml-1" />
              </div>
              <h3 className="text-slate-900 font-extrabold tracking-tight text-xl md:text-2xl mb-1">Modern Office</h3>
              <p className="text-emerald-700/60 text-[10px] uppercase font-bold tracking-widest">View Concept</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="liquid-glass rounded-[40px] md:rounded-[60px] p-6 md:p-8 flex flex-col justify-end mt-12 md:mt-24 relative overflow-hidden group h-[90%] shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[2s] opacity-30 group-hover:opacity-60" 
              alt="Premium Interiors"
            />
            <div className="relative z-20">
              <h3 className="text-black font-extrabold tracking-tight text-xl md:text-2xl mb-1">Luxury Homes</h3>
              <p className="text-black/40 text-[10px] uppercase font-bold tracking-widest">Portfolio</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

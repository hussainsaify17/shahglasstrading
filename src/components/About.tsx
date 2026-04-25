import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative z-10 rounded-[80px] overflow-hidden border border-black/5 liquid-glass aspect-square shadow-[0_32px_96px_-16px_rgba(0,0,0,0.05)]">
            <img 
              src="https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=2070" 
              alt="Design Process" 
              className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0 opacity-40 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full border border-white/40 flex items-center justify-center cursor-pointer group/play shadow-xl"
              >
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-emerald-600 border-b-[12px] border-b-transparent ml-2" />
              </motion.div>
            </div>
            
            <div className="absolute bottom-10 left-10 text-white z-20">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-2">Watch Video</p>
              <h3 className="text-2xl font-bold tracking-tight text-white">Virtual Factory Visit</h3>
            </div>
          </div>
          {/* Liquidity Elements */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-700/5 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute -top-16 -left-16 w-80 h-80 border border-emerald-900/5 rounded-full -z-10 scale-110" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="glass-pill mb-6 md:mb-10 inline-block">
            OUR STORY
          </div>
          <h2 className="section-title">
            Expert Craft <br /> <span className="font-extrabold italic text-emerald-700/30">Since 2012</span>
          </h2>
          <p className="text-slate-700 text-lg font-semibold mb-10 md:mb-16 leading-relaxed">
            From heavy-duty Aluminium sections to delicate LED glass creations, Shah Glass has been a trusted partner for Narmadapuram's finest homes and commercial spaces.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-20">
            {[
              "Aluminium Sections",
              "Glass Wardrobes",
              "Glass Stair Railings",
              "Custom LED Mirrors"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-700 transition-all duration-700 border border-emerald-100">
                  <CheckCircle2 size={16} className="text-emerald-700 group-hover:text-white transition-all duration-700" />
                </div>
                <span className="text-slate-800 text-sm font-bold tracking-tight group-hover:text-emerald-700 transition-all duration-700">{feature}</span>
              </div>
            ))}
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 liquid-glass rounded-[40px] flex items-center gap-8 max-w-sm border border-black/5"
          >
            <div className="w-20 h-20 rounded-3xl overflow-hidden border border-black/5 p-1 bg-white shadow-sm">
              <img src="https://i.pravatar.cc/150?u=shah" alt="Founder" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <div className="font-sans font-extrabold text-slate-900 text-xl tracking-tight">Mohammed Shah</div>
              <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">Managing Director</div>
            </div>
          </motion.div>

          <div className="mt-12 flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 btn-gradient rounded-full font-bold text-xs uppercase tracking-widest"
            >
              Consult Our Expert
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

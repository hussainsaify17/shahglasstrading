import { motion } from "motion/react";
import { ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-12 pt-20 overflow-hidden">
      {/* Background decorations adjusted for Frosted theme */}
      <div className="absolute top-0 right-0 w-[600px] h-full bg-sky-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <span className="text-sky-400 font-mono text-sm tracking-[0.3em] mb-4 block uppercase font-bold">Established 2012</span>
          <h1 className="text-6xl md:text-8xl text-white font-extralight leading-none mb-8 tracking-tighter">
            Shah Glass<br />
            <span className="font-bold italic text-sky-400">Trading</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-md mb-12 leading-relaxed">
            Superior architectural glass and mirror solutions in Narmadapuram. From custom trading to precision glass work, we redefine your space.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sky-500 text-slate-900 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-sky-400 transition-all flex items-center gap-2 group"
            >
              Explore Collections
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <div className="glass-card p-4 rounded-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">BIS Certified</p>
                <p className="text-slate-500 text-xs">Highest Safety Standards</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Showcase Grid from Design HTML */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 grid grid-cols-2 gap-4 h-[500px]"
        >
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40 group-hover:scale-110 transition-transform duration-700" 
              alt="Toughened Glass"
            />
            <div className="relative z-10">
              <h3 className="text-white font-bold">Toughened Glass</h3>
              <p className="text-slate-400 text-xs mt-1">Impact resistant architectural glazing.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-end mt-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40 group-hover:scale-110 transition-transform duration-700" 
              alt="Decorative Tint"
            />
            <div className="relative z-10">
              <h3 className="text-white font-bold">Decorative Tint</h3>
              <p className="text-slate-400 text-xs mt-1">Custom patterns and dichroic finishes.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-end -mt-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40 group-hover:scale-110 transition-transform duration-700" 
              alt="Energy Efficient"
            />
            <div className="relative z-10">
              <h3 className="text-white font-bold">Energy Efficient</h3>
              <p className="text-slate-400 text-xs mt-1">Double glazed insulated units.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40 group-hover:scale-110 transition-transform duration-700" 
              alt="Privacy Tech"
            />
            <div className="relative z-10">
              <h3 className="text-white font-bold">Privacy Tech</h3>
              <p className="text-slate-400 text-xs mt-1">Switchable smart glass solutions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

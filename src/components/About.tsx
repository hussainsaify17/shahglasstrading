import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 glass-card">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
              alt="Design Process" 
              className="w-full h-auto opacity-80"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute -top-10 -left-10 w-64 h-64 border border-sky-500/10 rounded-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:pl-8"
        >
          <span className="text-sky-400 font-mono font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl font-extralight text-white mb-8 tracking-tight">
            Narmadapuram's Choice for <br /> <span className="font-bold italic text-sky-400">Superior</span> Glass Solutions
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            With years of experience in the glass and mirror industry, Shah Glass Trading is dedicated to providing high-quality glass products to the Narmadapuram region. From toughened safety glass to elegant decorative mirrors, we ensure precision and excellence in every piece.
          </p>
          
          <div className="space-y-4">
            {[
              "High-Quality Toughened Glass",
              "Customized Mirror Solutions",
              "Expert Consultation & Trading",
              "Trusted Local Services in MP"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <CheckCircle2 className="text-sky-400 w-5 h-5" />
                <span className="text-white/80 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 glass-card rounded-sm flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-500/50">
              <img src="https://i.pravatar.cc/150?u=shah" alt="Founder" className="grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white">Mohammed Shah</div>
              <div className="text-sky-400/60 text-xs uppercase tracking-widest font-bold">Managing Director</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-mono font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-6xl font-extralight text-white mb-6">Let's Create <span className="font-bold italic text-sky-400">Sparkle</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your space? Get in touch with our experts for a personalized consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 glass-card rounded-sm flex flex-col justify-between border-white/10"
          >
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-sky-500/10 rounded-sm text-sky-400 border border-sky-500/20"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2 text-white italic">Visit our Shop</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Main Road, Sarafa Chowk, Jagdish Pura, <br />
                    Narmadapuram, Madhya Pradesh 461001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-sky-500/10 rounded-sm text-sky-400 border border-sky-500/20"><Phone size={24} /></div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2 text-white italic">Call Us</h4>
                  <p className="text-white font-medium text-lg">+91 81099 97994</p>
                  <p className="text-slate-500 text-sm">Mon-Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-sky-500/10 rounded-sm text-sky-400 border border-sky-500/20"><Mail size={24} /></div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2 text-white italic">Email Us</h4>
                  <p className="text-white font-medium text-lg">shahmohammed007@gmail.com</p>
                  <p className="text-slate-500 text-sm">We reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
              <a href="https://www.instagram.com/shah_glass_trading/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:bg-sky-500 hover:text-slate-900 transition-all">
                Instagram
              </a>
              <a href="https://www.facebook.com/mohammedshah26/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:bg-sky-500 hover:text-slate-900 transition-all">
                Facebook
              </a>
              <a href="https://www.indiamart.com/shah-glass-trading/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:bg-sky-500 hover:text-slate-900 transition-all">
                IndiaMart
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-4 focus:border-sky-500 outline-none transition-all text-white placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-4 focus:border-sky-500 outline-none transition-all text-white placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Project Type</label>
              <select className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-4 focus:border-sky-500 outline-none transition-all appearance-none text-white">
                <option className="bg-[#0f172a]">Select Service</option>
                <option className="bg-[#0f172a]">LED Smart Mirror</option>
                <option className="bg-[#0f172a]">Glass Partition</option>
                <option className="bg-[#0f172a]">Shower Enclosure</option>
                <option className="bg-[#0f172a]">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Your Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-4 focus:border-sky-500 outline-none transition-all resize-none text-white placeholder:text-slate-600"
                placeholder="Tell us about your project..."
              />
            </div>

            <button className="w-full py-5 bg-sky-500 text-slate-900 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-sky-400 transition-all flex items-center justify-center gap-2">
              Send Inquiry <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

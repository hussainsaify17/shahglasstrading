import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="glass-pill mb-6 inline-block bg-emerald-50 text-emerald-700 border-emerald-100">GET IN TOUCH</div>
          <h2 className="section-title">
            Let's Discuss <br /> <span className="font-extrabold italic text-emerald-700/30">Your Project</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
            Contact us for a free architectural glass consultation. We're here to help you choose the best solutions for your space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="p-10 md:p-16 liquid-glass rounded-[40px] md:rounded-[80px] flex flex-col justify-between border border-black/5 shadow-2xl"
          >
            <div className="space-y-12 md:y-20">
              <div className="flex items-start gap-6 md:gap-10 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 border border-emerald-100 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl mb-2 text-slate-900 tracking-tight">Our Office</h4>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Main Road, Sarafa Chowk, Jagdish Pura, <br />
                    Narmadapuram, MP 461001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 md:gap-10 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 border border-emerald-100 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl mb-2 text-slate-900 tracking-tight">Call Us</h4>
                  <p className="text-slate-900 font-bold text-xl md:text-2xl tracking-tight">+91 81099 97994</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Available: 10 AM — 7 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-6 md:gap-10 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 border border-emerald-100 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl mb-2 text-slate-900 tracking-tight">Email Us</h4>
                  <p className="text-slate-900 font-bold text-base md:text-lg tracking-tight break-all">shahmohammed007@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-black/5 flex flex-wrap gap-6">
              {['Instagram', 'Facebook', 'IndiaMart'].map((platform) => (
                <a key={platform} href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-700 transition-all duration-300">
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8 flex flex-col justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-4">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-full px-8 py-4 focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 outline-none transition-all text-slate-900 placeholder:text-slate-300 shadow-inner"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-4">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border border-slate-200 rounded-full px-8 py-4 focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 outline-none transition-all text-slate-900 placeholder:text-slate-300 shadow-inner"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-4">Subject</label>
              <select className="w-full bg-white border border-slate-200 rounded-full px-8 py-4 focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 outline-none transition-all appearance-none text-slate-600 shadow-inner">
                <option>New Project Enquiry</option>
                <option>Smart Mirror Info</option>
                <option>Price Quote</option>
                <option>Others</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 ml-4">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white border border-slate-200 rounded-[30px] px-8 py-6 focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-300 shadow-inner"
                placeholder="Tell us about your architectural glass requirements..."
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 btn-gradient rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-2xl"
            >
              Send Request <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

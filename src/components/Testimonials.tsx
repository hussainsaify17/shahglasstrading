import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tank-",
    role: "Architect",
    content: "The quality of the LED mirrors and glass partitions from CrystalEdge is unparalleled. Their attention to detail in Mumbai's high-end projects is remarkable.",
    rating: 5
  },
  {
    name: "Pranav S.-",
    role: "Interior Designer",
    content: "They transformed our penthouse project with their custom mirror walls. Professional, timely, and the finishing is world-class.",
    rating: 5
  },
  {
    name: "Pramila Ajmera-",
    role: "Homeowner",
    content: "Excellent service and quality. The shower enclosure fits perfectly and looks stunning. Highly recommend for any glass work.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote size={40} className="text-white/10 mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-extralight text-white tracking-tight">What Our <br /> <span className="font-bold italic text-sky-400">Clients</span> Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-card rounded-sm relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-sky-400 text-sky-400" />
                ))}
              </div>
              <p className="text-slate-400 mb-8 italic leading-relaxed text-sm">"{item.content}"</p>
              <div>
                <div className="font-bold text-lg text-white">{item.name}</div>
                <div className="text-sky-400/60 text-xs font-bold uppercase tracking-widest">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

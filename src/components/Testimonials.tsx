import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tank-",
    role: "Architect",
    content: "The quality of the LED mirrors and glass partitions from Shah Glass is unparalleled. Their attention to detail in high-end projects is remarkable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=tank"
  },
  {
    name: "Pranav S.-",
    role: "Interior Designer",
    content: "They transformed our luxury project with their custom mirror walls. Professional, timely, and the liquid finishing is world-class.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=pranav"
  },
  {
    name: "Pramila Ajmera-",
    role: "Homeowner",
    content: "Excellent service and quality. The shower enclosure fits perfectly and looks stunning. Highly recommend Shah Glass for any glass work.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=pramila"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="glass-pill mb-6">CUSTOMER REVIEWS</div>
          <h2 className="section-title">
            What Our <span className="font-extrabold italic text-black/60 text-emerald-700/20">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-8 md:p-10 liquid-glass rounded-[40px] relative group border border-black/5"
            >
              <div className="flex gap-1.5 mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-black/60 group-hover:text-black transition-colors duration-700 mb-10 text-lg md:text-xl font-medium leading-normal tracking-tight">"{item.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/5 bg-white p-0.5">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <div className="font-sans font-bold text-black tracking-tight text-base">{item.name}</div>
                  <div className="text-black/40 text-[10px] font-bold uppercase tracking-wider mt-0.5">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

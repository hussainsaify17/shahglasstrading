import { motion } from "motion/react";
import { Maximize2, Monitor, Layout, Shield, Home, Layers } from "lucide-react";

const services = [
  {
    title: "LED Smart Mirrors",
    description: "Premium back-lit mirrors with touch sensors and anti-fog technology.",
    icon: <Monitor className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Glass Partitions",
    description: "Frameless office and residential partitions for a modern, open feel.",
    icon: <Layers className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1497366858543-96b93409a562?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Shower Enclosures",
    description: "Customized toughened glass enclosures with premium hardware.",
    icon: <Shield className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mirror Walls",
    description: "expansive architectural mirror installations that enhance depth.",
    icon: <Maximize2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Designer Windows",
    description: "Double-glazed and laminated glass solutions for insulation.",
    icon: <Home className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Glass Wardrobes",
    description: "Luxury lacquered and tinted glass shutters for premium wardrobes.",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Services() {
  return (
    <section id="collections" className="py-24 px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-sky-400 font-mono text-sm tracking-widest mb-4 block uppercase font-bold">Solutions</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Our Curated <span className="text-sky-400 italic font-light">Collections</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We specialize in high-end glass works that combine aesthetic appeal with structural integrity. Every piece is custom-designed to match your architectural vision.
            </p>
          </div>
          <button className="text-sky-400 font-semibold flex items-center gap-2 hover:text-sky-300 transition-colors uppercase tracking-widest text-sm">
            View All Services <Maximize2 size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-sm glass-card border border-white/10"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-sky-500/10 backdrop-blur-md rounded-sm flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-500 group-hover:text-slate-900 transition-all border border-sky-500/20">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

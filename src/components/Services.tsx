import { motion } from "motion/react";
import { Maximize2, Monitor, Layout, Shield, Home, Layers, Zap } from "lucide-react";

const services = [
  {
    title: "Aluminium Sections",
    description: "High-grade aluminium doors, windows, and structural frames for modern strength.",
    icon: <Monitor className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Glass Wardrobes",
    description: "Elegant tinted and reflective glass wardrobes that redefine bedroom luxury.",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1558211583-d21f610b4bfb?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "LED Smart Mirrors",
    description: "Bespoke mirrors with integrated lighting and touch controls for modern spaces.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Glass Stairs & Railings",
    description: "Toughened safety glass steps and balustrades for a clean, floating look.",
    icon: <Layers className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dee6d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Toughened Glass",
    description: "High-impact safety glass for luxury partitions, shops, and exteriors.",
    icon: <Shield className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Interior Panels",
    description: "Lacquered and decorative glass panels for walls and kitchen shutters.",
    icon: <Maximize2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <section id="collections" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-4xl">
            <div className="glass-pill mb-6 inline-block">
              OUR COLLECTIONS
            </div>
            <h2 className="section-title">
              Premium <span className="font-extrabold italic text-emerald-700/30">Products</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-2xl font-semibold max-w-2xl leading-relaxed">
              Beautifully crafted glass and aluminium solutions that make your home feel brighter and more luxurious.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 btn-gradient rounded-full font-bold flex items-center gap-3 uppercase tracking-widest text-[11px] shadow-lg shadow-emerald-100"
          >
            Full Catalog <Maximize2 size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative h-[450px] md:h-[550px] overflow-hidden rounded-[40px] shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-all duration-[2.5s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-end z-20">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-emerald-700 transition-all duration-700 border border-white/20">
                  {service.icon}
                </div>
                <h3 className="font-sans text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">{service.title}</h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="w-0 group-hover:w-full h-[2px] bg-emerald-400 transition-all duration-700 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

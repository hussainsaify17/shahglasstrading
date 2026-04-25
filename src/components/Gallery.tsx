import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Maximize2, ExternalLink, Play, X, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    title: "Luxury Glass Wardrobe",
    category: "Reflective",
    image: "https://images.unsplash.com/photo-1558211583-d21f610b4bfb?auto=format&fit=crop&q=80&w=1200",
    size: "col-span-2 row-span-2",
    isVideo: false
  },
  {
    title: "Aluminium Shower Cabin",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1549637642-90187f64f420?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 row-span-1",
    isVideo: true
  },
  {
    title: "LED Vanity Mirror",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 row-span-1",
    isVideo: true
  },
  {
    title: "Glass Stair Railing",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dee6d?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 row-span-2",
    isVideo: false
  },
  {
    title: "Aluminium Storefront",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 row-span-1",
    isVideo: false
  }
];

const secondaryItems = [
  {
    title: "Curved Glass Entryway",
    category: "Bespoke",
    image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Black Anodized Frame",
    category: "Aluminium",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Textured Wall Mirror",
    category: "Decorative",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="gallery" className="section-padding bg-white/40 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 whitespace-normal overflow-visible">
          <div className="glass-pill mb-6 inline-block bg-emerald-50 text-emerald-800 border-emerald-200">OUR MASTERPIECES</div>
          <h2 className="section-title">Project <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600">Showcase</span></h2>
          <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-semibold leading-relaxed">
             A visual journey through our most prestigious installations and creative glass solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[1000px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${item.size} relative group overflow-hidden rounded-[30px] md:rounded-[50px] shadow-xl cursor-pointer bg-slate-100 flex flex-col`}
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent p-10 flex flex-col justify-end transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0 md:opacity-0 group-hover:opacity-100'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20 shadow-sm">
                    {item.category}
                  </span>
                  <div className="flex gap-2">
                    {item.isVideo && (
                      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                        <Play size={16} fill="white" />
                      </div>
                    )}
                    <div 
                      className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-emerald-700 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(item);
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2 drop-shadow-md">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/70 text-xs font-semibold group/link hover:text-white transition-colors">
                  View Detail <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 overflow-hidden"
            >
              {secondaryItems.map((item, i) => (
                <div 
                  key={i} 
                  className="h-[400px] relative group overflow-hidden rounded-[40px] shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(item as any)}
                >
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-emerald-950/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
              className="px-12 py-5 btn-gradient rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-3 mx-auto shadow-emerald-100 shadow-xl"
            >
              {showMore ? 'Show Less' : 'View Full Gallery'}
              <ChevronRight size={18} className={`transition-transform duration-300 ${showMore ? 'rotate-90' : ''}`} />
            </motion.button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-emerald-950/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full h-auto max-h-full rounded-[40px] overflow-hidden shadow-2xl relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.image} className="w-full h-auto object-contain bg-emerald-900" alt={selectedImage.title} />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-emerald-950/90 to-transparent">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">{selectedImage.category}</p>
                <h3 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


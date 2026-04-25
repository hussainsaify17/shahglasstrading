import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Maximize2, ExternalLink, Play, X, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

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
    isVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example placeholder
  },
  {
    title: "LED Vanity Mirror",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 row-span-1",
    isVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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

function InteractiveLightbox({ item, onClose }: { item: typeof galleryItems[0], onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const constraintsRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setRotate(0);
    x.set(0);
    y.set(0);
  };

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRotate(prev => prev + 90);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-emerald-950/98 backdrop-blur-2xl flex flex-col items-center justify-center p-4 md:p-12 select-none"
      onClick={onClose}
    >
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-[220]">
        {!item.isVideo && (
          <div className="hidden md:flex items-center gap-2 bg-black/40 backdrop-blur-xl p-2 rounded-2xl border border-white/10">
            <button onClick={handleZoomIn} className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-colors" title="Zoom In"><ZoomIn size={20} /></button>
            <button onClick={handleZoomOut} className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-colors" title="Zoom Out"><ZoomOut size={20} /></button>
            <button onClick={handleRotate} className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-colors" title="Rotate"><RotateCcw size={20} /></button>
            <div className="w-px h-6 bg-white/20 mx-1" />
            <button onClick={handleReset} className="px-4 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-colors text-[10px] font-bold uppercase tracking-widest">Reset View</button>
          </div>
        )}

        <button 
          className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10 ml-auto"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center overflow-hidden" ref={constraintsRef}>
        {item.isVideo ? (
          <div className="w-full max-w-5xl aspect-video rounded-[30px] overflow-hidden shadow-2xl border border-white/10 bg-black" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={`${item.videoUrl}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={item.title}
            ></iframe>
          </div>
        ) : (
          <motion.div
            drag={scale > 1}
            dragConstraints={constraintsRef}
            style={{ x: springX, y: springY, scale, rotate }}
            className="relative cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={item.image} 
              className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain shadow-2xl rounded-lg" 
              alt={item.title} 
              draggable={false}
            />
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-8 left-0 right-0 p-8 flex flex-col items-center pointer-events-none">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-[30px] border border-white/10 text-center max-w-2xl pointer-events-auto"
        >
          <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</p>
          <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{item.title}</h3>
          {!item.isVideo && <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest hidden md:block">Click & Drag to explore details • Use controls to zoom</p>}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="gallery" className="section-padding bg-white/40 backdrop-blur-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center mb-16 md:mb-24">
          <div className="glass-pill mb-6 inline-block bg-emerald-50 text-emerald-800 border-emerald-200">OUR MASTERPIECES</div>
          <h2 className="section-title leading-[1.1] pb-2">Project <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600">Showcase</span></h2>
          <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-semibold leading-relaxed">
             A visual journey through our most prestigious installations and creative glass solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[1000px]">
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
              
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 md:p-10 flex flex-col justify-end transition-all duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-100 md:opacity-0 group-hover:opacity-100'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20 shadow-sm">
                    {item.category}
                  </span>
                  <div className="flex gap-2">
                    {item.isVideo && (
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                        <Play size={14} fill="white" />
                      </div>
                    )}
                    <div 
                      className="w-8 h-8 md:w-10 md:h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-emerald-700 transition-all duration-300"
                    >
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-xl md:text-3xl font-bold tracking-tight mb-2 drop-shadow-lg">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/70 text-[10px] md:text-xs font-semibold group/link hover:text-white transition-colors">
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
              {[...secondaryItems, ...secondaryItems].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="h-[400px] relative group overflow-hidden rounded-[40px] shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(item as any)}
                >
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-emerald-950/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-bold text-xl mb-1">{item.title}</p>
                    <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
              className="px-12 py-5 btn-gradient rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-3 mx-auto shadow-emerald-200/20 shadow-2xl"
            >
              {showMore ? 'Show Less' : 'View Full Gallery'}
              <ChevronRight size={18} className={`transition-transform duration-300 ${showMore ? 'rotate-90' : ''}`} />
            </motion.button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <InteractiveLightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

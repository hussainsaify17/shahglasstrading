import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 md:top-12 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 h-14 flex items-center justify-between px-6 md:px-10 liquid-glass rounded-full border border-black/5 backdrop-blur-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-6 h-6 rounded-lg bg-emerald-700 flex items-center justify-center font-bold text-white text-[10px]">S</div>
        <span className="text-black font-bold text-xs tracking-tight uppercase">Shah Glass</span>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="nav-link font-bold text-[11px]"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block px-8 py-2.5 btn-gradient text-[10px] font-bold uppercase tracking-widest rounded-full transition-all"
        >
          Contact Expert
        </motion.button>

        <button 
          className="md:hidden text-black/40 hover:text-black transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 liquid-glass rounded-[40px] p-10 flex flex-col gap-8 z-40 border border-black/5 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-link text-black text-xl tracking-[0.4em] text-center"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-5 bg-emerald-700 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg"
          >
            Contact Expert
          </button>
        </motion.div>
      )}
    </nav>
  );
}

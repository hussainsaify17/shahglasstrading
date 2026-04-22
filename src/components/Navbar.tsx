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
    <nav className="fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-between px-12 glass-panel border-b border-white/10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-sky-500 rounded-sm rotate-45 flex items-center justify-center">
          <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
        </div>
        <span className="text-white font-bold text-xl tracking-tighter uppercase">Shah<span className="font-light text-sky-400">Glass</span></span>
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
            className="nav-link"
          >
            {link.name}
          </motion.a>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-sky-500 text-slate-900 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-sky-400 transition-all"
        >
          Inquiry
        </motion.button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 glass-panel border-b border-white/10 p-6 flex flex-col gap-4 z-40"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-link text-white text-lg"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-3 bg-sky-500 text-slate-900 text-sm font-bold uppercase tracking-widest rounded-sm">
            Inquiry
          </button>
        </motion.div>
      )}
    </nav>
  );
}

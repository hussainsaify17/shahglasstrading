/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-accent selection:text-slate-900 min-h-screen mesh-gradient flex flex-col">
      {/* Custom Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      {/* Background decorations adjusted for Frosted theme */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}

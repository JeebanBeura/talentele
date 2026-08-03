"use client";
import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAFAFA] dark:bg-[#0F172A]">
      {/* Layer 2: Grid Pattern */}
      <div
        className="absolute inset-0 z-10 opacity-[0.06] dark:opacity-[0.1] text-[#111] dark:text-white"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />

      {/* Layer 5: Tiny Dot Pattern */}
      {/* <div 
        className="absolute inset-0 z-10 opacity-[0.4] dark:opacity-[0.15] text-[#111] dark:text-white"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 40%, transparent 100%)',
        }}
      /> */}

      {/* Layer 3 & 4: Animated Floating Glows */}
      <motion.div
        animate={{
          x: [0, 60, 0, -60, 0],
          y: [0, 40, -40, 40, 0],
          scale: [1, 1.15, 0.95, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-[#E6002D]/15 dark:bg-[#E6002D]/30 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, -50, 0, 50, 0],
          y: [0, -50, 50, -50, 0],
          scale: [1, 0.9, 1.1, 0.9, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] -right-[10%] w-[45%] h-[55%] rounded-full bg-pink-300/25 dark:bg-pink-500/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, 40, -40, 0, 40, 0],
          y: [0, 60, 0, -60, 0],
          scale: [1, 1.2, 0.8, 1.15, 1]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-slate-300/40 dark:bg-slate-700/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Soft gradient fade at the bottom to transition smoothly into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0F172A] to-transparent z-20 pointer-events-none" />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function EliteWelcome() {
  return (
    <section className="relative py-24 lg:py-32 flex flex-col items-center justify-center overflow-hidden" style={{ background: "#09090b" }}>
      
      {/* Background Image: Mayor Group Signboard */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/signboard.jpg"
          alt="Mayor Group Signboard"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: "center bottom",
            transform: "scale(1.25)"
          }}
        />
        {/* Luxury Rolex Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.7) 50%, rgba(9,9,11,0.95) 100%)",
          }}
        />
      </div>

      {/* Floating Legacy Medallions */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Photo 1 (Top Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1.5 } }}
          className="absolute top-[10%] lg:top-[15%] left-[-5%] lg:left-[10%] w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border border-zinc-500/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] filter blur-[1px]"
        >
          <img src="/images/legacy-1.jpg" alt="Presidential Award" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-950/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-zinc-950/40" />
        </motion.div>

        {/* Photo 2 (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1.5, delay: 0.3 } }}
          className="absolute bottom-[10%] lg:bottom-[20%] left-[15%] lg:left-[25%] w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border border-zinc-500/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] filter blur-[2px]"
        >
          <img src="/images/legacy-2.jpg" alt="Legacy Recognition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-950/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-zinc-950/40" />
        </motion.div>

        {/* Photo 3 (Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1.5, delay: 0.6 } }}
          className="absolute top-[25%] lg:top-[35%] right-[-10%] lg:right-[8%] w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-zinc-500/20 shadow-[0_0_60px_rgba(0,0,0,0.8)] filter blur-[1px]"
        >
          <img src="/images/legacy-3.jpg" alt="Legacy Milestone" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-950/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-zinc-950/40" />
        </motion.div>
      </div>

      {/* Top Vertical Thread */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 64, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-px mb-12"
        style={{ background: "linear-gradient(180deg, transparent, rgba(161,161,170,0.4), transparent)" }}
      />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
           className="section-label mb-10 block"
        >
          A Statement of Intent
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-light text-zinc-200 leading-snug tracking-wide mb-12"
        >
          <span className="italic">"To the fractional one percent who define global standards."</span><br/><br/>
          <span className="text-zinc-400 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
            For over sixty years, Mayor has operated as the unseen vanguard behind the world's most demanding brands. We do not chase markets; we engineer the infrastructure that sustains them. Discretion. Uncompromising precision. Absolute scale.
          </span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 1.2 }}
          className="flex items-center gap-6"
        >
            <span className="h-px w-12 divider-luxury" />
            <span className="font-heading text-zinc-500 uppercase tracking-[0.3em] text-[10px]">Welcome to the Inner Circle</span>
            <span className="h-px w-12 divider-luxury" />
        </motion.div>
      </div>

      {/* Very faint ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(161,161,170,0.03) 0%, transparent 60%)" }}
      />
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import KineticText from "./KineticText";
import QuoteModal from "./QuoteModal";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY  = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToNext = () => {
    const el = document.querySelector("#our-craft");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-zinc-950"
    >
      {/* ── Background: Real Mayor & Company factory, Jalandhar ── */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
        <img
          src="/mayor-factory.jpg"
          alt="Mayor & Company factory gate, Jalandhar — six decades of manufacturing legacy"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center center",
            transform: "scale(1.28)"
          }}
        />
        {/* Layer 1: dark overlay so text pops beautifully (Rolex lighting) */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.6) 40%, rgba(9,9,11,0.9) 100%)",
          }}
        />
        {/* Layer 2: top fade — kills browser chrome */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "30%",
            background: "linear-gradient(180deg, rgba(9,9,11,0.95) 0%, transparent 100%)",
          }}
        />
        {/* Layer 3: bottom fade to transition to next section smoothly */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(0deg, #09090b 0%, transparent 100%)",
          }}
        />
        {/* Removed ghost-warm amber since the actual photo now provides real color/warmth */}
      </motion.div>

      {/* ── Floating Hero Medallions ── */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Photo 1 (Left) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 0.7, scale: 1 }}
           animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
           transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1.5, delay: 0.3 } }}
           className="absolute top-[25%] lg:top-[30%] left-[5%] lg:left-[15%] w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border border-zinc-500/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] filter blur-[1px]"
        >
          <img src="/images/hero-float-1.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-950/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-zinc-950/40" />
        </motion.div>

        {/* Photo 2 (Right) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.85 }}
           whileInView={{ opacity: 0.6, scale: 1 }}
           animate={{ y: [20, -20, 20], rotate: [3, -3, 3] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1.5, delay: 0.6 } }}
           className="absolute bottom-[20%] lg:bottom-[30%] right-[10%] lg:right-[20%] w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-zinc-500/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] filter blur-[2px]"
        >
          <img src="/images/hero-float-2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-950/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-zinc-950/40" />
        </motion.div>
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Pre-tag — editorial provenance line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="mb-10 inline-flex items-center gap-5"
        >
          <span
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, transparent, rgba(161,161,170,0.4))" }}
          />
          <span
            className="text-[9px] tracking-[0.45em] uppercase text-zinc-500"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Est. 1960 &nbsp;·&nbsp; Tier-1 OEM Partner
          </span>
          <span
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, rgba(161,161,170,0.4), transparent)" }}
          />
        </motion.div>

        {/* ── HEADLINE: Cormorant Garamond Display — editorial, monumental ── */}
        <div className="mb-8">
          <KineticText
            text="Welcome to"
            className="font-display text-6xl sm:text-7xl lg:text-[6.5rem] font-light tracking-[0.08em] text-zinc-100 leading-none italic"
            delay={0.5}
            stagger={0.09}
          />
          <div className="mt-3">
            <KineticText
              text="Mayor Group."
              className="font-display text-6xl sm:text-7xl lg:text-[6.5rem] font-light tracking-[0.08em] text-zinc-200 leading-none"
              delay={0.85}
              stagger={0.07}
            />
          </div>
        </div>

        {/* Luxury rule — thin zinc divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 mb-10"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(161,161,170,0.35), transparent)",
            transformOrigin: "center",
          }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-md text-zinc-500 text-sm leading-loose mb-12 tracking-wide"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 300, letterSpacing: "0.04em" }}
        >
          Since 1960. Trusted Tier-1 OEM Partner to Global Leaders.{" "}
          <span className="text-zinc-400">Precision Synthetic Surfaces.</span>
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary — ghost rectangular button */}
          <motion.button
            id="hero-explore-btn"
            whileHover={{ borderColor: "rgba(225,225,228,0.45)", background: "rgba(24, 24, 27, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setQuoteOpen(true)}
            className="px-10 py-3.5 text-[10px] tracking-[0.3em] uppercase text-zinc-300"
            style={{
              fontFamily: "var(--font-mono)",
              border: "1px solid rgba(161,161,170,0.22)",
              background: "transparent",
              cursor: "pointer",
              transition: "border-color 0.4s ease, background 0.4s ease",
            }}
          >
            Request OEM Quote
          </motion.button>

          {/* Secondary — text link */}
          <motion.button
            whileHover={{ color: "rgba(228,228,231,0.9)" }}
            onClick={() => {
              const el = document.querySelector("#infrastructure");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-mono)", background: "none", border: "none", cursor: "pointer" }}
          >
            <span>Global Infrastructure</span>
            <span style={{ fontFamily: "serif" }}>↗</span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          onClick={scrollToNext}
          className="mt-24 flex flex-col items-center gap-3 text-zinc-700 hover:text-zinc-500 transition-colors"
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} strokeWidth={1} />
          </motion.div>
          <span
            className="text-[8px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Scroll
          </span>
        </motion.button>
      </motion.div>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  );
}

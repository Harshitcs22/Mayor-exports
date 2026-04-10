"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Layers, ShieldCheck } from "lucide-react";
import { ScrollKineticText } from "./KineticText";

const PILLARS = [
  {
    id: "global-oem",
    icon: Globe,
    tag: "Division 01",
    title: "GLOBAL OEM MANUFACTURING",
    description:
      "Tier-1 supplier to world-class retail ecosystems. Engineering premium Rugby and Basketball equipment for Decathlon brands including Offload and Tarmak. Every stitch. Every pressure. Every game.",
    metrics: [
      { label: "Global Retailer Brands", value: "Offload · Tarmak" },
      { label: "Product Lines", value: "Rugby · Basketball" },
    ],
    accent: "Made for Professional Play",
    image: "/images/global-oem.jpg",
  },
  {
    id: "synthetic-surface",
    icon: Layers,
    tag: "Division 02",
    title: "SYNTHETIC SURFACE ENGINEERING",
    description:
      "High-performance PU/PVC leather for next-generation mobility and gear. Powering automotive interiors, premium footwear, and sports equipment through the Fabino Fibres acquisition.",
    metrics: [
      { label: "Key Acquisition", value: "Fabino Fibres" },
      { label: "Applications", value: "Auto · Footwear · Gear" },
    ],
    accent: "Engineered at the Molecular Level",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "legacy",
    icon: ShieldCheck,
    tag: "Division 03",
    title: "SIX DECADES OF TRUST",
    description:
      "Established 1960. Sixty years of zero tolerance for compromise. An unbroken chain of compliance, quality certification, and delivery precision that underpins every partnership.",
    metrics: [
      { label: "Founded", value: "1960" },
      { label: "Compliance Record", value: "100%" },
    ],
    accent: "Legacy Verified · Future Ready",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000&auto=format&fit=crop",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function PillarsSection() {
  return (
    <section
      id="our-craft"
      className="relative py-32 lg:py-40"
      style={{ background: "#09090b" }}
    >
      {/* Background texture - muted zinc instead of blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(161,161,170,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[10px] tracking-[0.4em] uppercase text-zinc-500"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              What We Build
            </span>
            <span className="h-px flex-1 max-w-16 divider-luxury" />
          </div>

          <ScrollKineticText
            text="THE 3 PILLARS OF TRUST"
            className="font-heading text-4xl lg:text-6xl font-normal tracking-wide text-zinc-200"
          />
          <p
            className="mt-6 text-zinc-500 max-w-lg text-base leading-relaxed tracking-wide"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Three core competencies. One unwavering standard.
            Built over sixty years of precision manufacturing and engineering excellence.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(63,63,70,0.2)" }}>
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                id={pillar.id}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="card-luxury group relative overflow-hidden flex flex-col p-8 lg:p-12 cursor-default"
                style={{ background: "#09090b" }}
              >
                {/* Cinematic Image Background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Rolex Lighting Deep Overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-1000 group-hover:opacity-85" 
                    style={{ background: "linear-gradient(180deg, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.92) 50%, rgba(9,9,11,1) 100%)" }} 
                  />
                </div>

                {/* Corner accent - subtle zinc */}
                <div
                  className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                  style={{
                    borderTop: "1px solid rgba(161,161,170,0.4)",
                    borderLeft: "1px solid rgba(161,161,170,0.4)",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                  style={{
                    borderBottom: "1px solid rgba(161,161,170,0.4)",
                    borderRight: "1px solid rgba(161,161,170,0.4)",
                  }}
                />

                {/* Z-10 Content Container */}
                <div className="relative z-10 flex flex-col flex-1 h-full w-full">
                  {/* Tag */}
                  <span
                  className="tag-chip mb-8 self-start rounded-none"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {pillar.tag}
                </span>

                {/* Icon */}
                <div
                  className="mb-10 flex items-center justify-center w-12 h-12 rounded-sm transition-all duration-700 group-hover:bg-zinc-800/50"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(63,63,70,0.6)",
                  }}
                >
                  <Icon
                    size={20}
                    className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500"
                    strokeWidth={1}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-heading text-zinc-200 font-normal text-xl tracking-wide mb-4 leading-snug"
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p
                  className="text-zinc-500 text-sm leading-loose flex-1 mb-10 group-hover:text-zinc-400 transition-colors duration-500 tracking-wide"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  {pillar.description}
                </p>

                {/* Metrics */}
                <div className="space-y-4 pt-6" style={{ borderTop: "1px solid rgba(63,63,70,0.4)" }}>
                  {pillar.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between">
                      <span
                        className="text-zinc-500 uppercase tracking-widest text-[9px]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {m.label}
                      </span>
                      <span
                        className="text-zinc-300 text-xs font-light group-hover:text-zinc-100 transition-colors duration-500"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Accent line at bottom - subtle zinc instead of blue */}
                <div
                  className="mt-10 h-px w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: "rgba(161,161,170,0.3)" }}
                />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

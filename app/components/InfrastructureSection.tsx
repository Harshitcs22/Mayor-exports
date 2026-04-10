"use client";

import { motion } from "framer-motion";
import { Globe2, Building2, Trophy, Layers2 } from "lucide-react";
import { ScrollKineticText } from "./KineticText";

interface MetricCard {
  id: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  tag: string;
  headline: string;
  subline: string;
  detail?: string;
  span?: "wide" | "tall" | "normal";
  image?: string;
}

const METRICS: MetricCard[] = [
  {
    id: "global-reach",
    icon: Globe2,
    tag: "Global Reach",
    headline: "30+",
    subline: "Countries Served",
    detail:
      "Exporting precision sports equipment and synthetic surfaces to over 30 countries across Europe, Asia, and the Americas.",
    span: "normal",
    image: "/images/infra-1.jpg",
  },
  {
    id: "largest-manufacturer",
    icon: Trophy,
    tag: "Market Position",
    headline: "#1",
    subline: "Largest Manufacturer & Exporter",
    detail:
      "The largest manufacturer and exporter of sporting goods for over two decades — a position held through relentless precision.",
    span: "wide",
    image: "/images/infra-2.jpg",
  },
  {
    id: "uk-office",
    icon: Building2,
    tag: "Strategic Outpost · Est. 1988",
    headline: "Birmingham, UK",
    subline: "European HQ",
    detail:
      "UK Office established in Birmingham (1988), with primary manufacturing hubs in Jalandhar, India — bridging two hemispheres of precision.",
    span: "normal",
    image: "/images/infra-3.jpg",
  },
  {
    id: "fabino-acquisition",
    icon: Layers2,
    tag: "Advanced Surfaces · 2009",
    headline: "Fabino Fibres",
    subline: "Acquired 2009",
    detail:
      "A state-of-the-art PVC/PU Leather manufacturing ecosystem — now the backbone of our Advanced Surfaces division.",
    span: "normal",
    image: "/images/infra-4.jpg",
  },
];

export default function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #09090b 0%, #000 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(161,161,170,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
              className="section-label"
            >
              Infrastructure
            </span>
            <span className="h-px flex-1 max-w-16 divider-luxury" />
          </div>

          <ScrollKineticText
            text="GLOBAL INFRASTRUCTURE & SCALE"
            className="font-heading text-3xl lg:text-5xl font-normal tracking-wide text-zinc-200"
          />

          <p
            className="mt-8 text-zinc-500 max-w-xl text-sm leading-loose tracking-wide"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Not a regional player. A global manufacturing force — with the footprint,
            certifications, and capacity that enterprise procurement demands.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5" style={{ background: "rgba(255,255,255,0.04)" }}>
          {/* Card 1: Global Reach — normal */}
          <BentoCard metric={METRICS[0]} index={0} />

          {/* Card 2: #1 — spans 2 columns on lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden p-8 lg:p-12 card-luxury lg:col-span-2"
            style={{ background: "#09090b" }}
            id="largest-manufacturer"
          >
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={METRICS[1].image}
                alt=""
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div 
                className="absolute inset-0 transition-opacity duration-1000 group-hover:opacity-85" 
                style={{ background: "linear-gradient(180deg, rgba(9,9,11,0.6) 0%, rgba(9,9,11,0.92) 50%, rgba(9,9,11,1) 100%)" }} 
              />
            </div>

            <CardCorners />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-10">
                <span className="tag-chip rounded-none">Market Position</span>
                <Trophy
                  size={16}
                  className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500 mt-1"
                  strokeWidth={1}
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div
                    className="font-display text-7xl lg:text-[7rem] font-light text-zinc-100 leading-none mb-4 group-hover:text-white transition-colors tracking-tight"
                  >
                    #1
                  </div>
                  <div
                    className="font-heading text-zinc-400 text-xl font-normal tracking-wide mb-8"
                  >
                    Largest Manufacturer &amp; Exporter
                  </div>
                </div>

                <p
                  className="text-zinc-500 text-sm leading-loose group-hover:text-zinc-400 transition-colors max-w-sm tracking-wide"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  The largest manufacturer and exporter of sporting goods for over two
                  decades — a position held through relentless, uncompromising precision.
                </p>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
              style={{ background: "linear-gradient(90deg, transparent, rgba(161,161,170,0.5), transparent)" }}
            />
          </motion.div>

          {/* Card 3: UK Office */}
          <BentoCard metric={METRICS[2]} index={2} />

          {/* Card 4: Fabino — spans 2 columns on lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden p-8 lg:p-12 card-luxury lg:col-span-2"
            style={{ background: "#09090b" }}
            id="fabino-acquisition"
          >
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={METRICS[3].image}
                alt=""
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div 
                className="absolute inset-0 transition-opacity duration-1000 group-hover:opacity-85" 
                style={{ background: "linear-gradient(180deg, rgba(9,9,11,0.6) 0%, rgba(9,9,11,0.92) 50%, rgba(9,9,11,1) 100%)" }} 
              />
            </div>

            <CardCorners />
            <div className="relative z-10 flex flex-col flex-1 h-full w-full">
            <div className="flex items-start justify-between mb-10">
              <span className="tag-chip rounded-none">Advanced Surfaces · 2009</span>
              <Layers2
                size={16}
                className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500 mt-1"
                strokeWidth={1}
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div
                  className="font-display text-4xl lg:text-5xl font-light text-zinc-100 leading-none mb-4 tracking-wide group-hover:text-white transition-colors"
                >
                  Fabino Fibres
                </div>
                <div
                  className="font-heading text-zinc-400 text-lg font-normal mb-6 tracking-wide"
                >
                  Acquired 2009
                </div>
                <p
                  className="text-zinc-500 text-sm leading-loose group-hover:text-zinc-400 transition-colors max-w-md tracking-wide"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  A state-of-the-art PVC/PU Leather manufacturing ecosystem — now the
                  backbone of our Advanced Surfaces division and the engine behind
                  automotive-grade synthetic material production.
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="flex gap-4">
                  {["PVC Leather", "PU Leather", "Automotive", "Performance"].map((tag) => (
                    <span
                      key={tag}
                      className="tag-chip rounded-none transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
              style={{ background: "linear-gradient(90deg, transparent, rgba(161,161,170,0.5), transparent)" }}
            />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CardCorners() {
  return (
    <>
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
    </>
  );
}

function BentoCard({ metric, index }: { metric: MetricCard; index: number }) {
  const Icon = metric.icon;
  return (
    <motion.div
      id={metric.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden p-8 lg:p-12 card-luxury flex flex-col"
      style={{ background: "#09090b" }}
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={metric.image}
          alt=""
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
          loading="lazy"
        />
        <div 
          className="absolute inset-0 transition-opacity duration-1000 group-hover:opacity-85" 
          style={{ background: "linear-gradient(180deg, rgba(9,9,11,0.6) 0%, rgba(9,9,11,0.92) 50%, rgba(9,9,11,1) 100%)" }} 
        />
      </div>

      <CardCorners />

      <div className="relative z-10 flex flex-col flex-1 h-full w-full">
        <div className="flex items-start justify-between mb-10">
        <span className="tag-chip rounded-none">{metric.tag}</span>
        <Icon
          size={16}
          className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500 mt-1"
          strokeWidth={1}
        />
      </div>

      <div className="flex-1">
        <div
          className="font-display text-5xl lg:text-6xl font-light text-zinc-100 leading-none mb-4 group-hover:text-white transition-colors"
        >
          {metric.headline}
        </div>
        <div
          className="font-heading text-zinc-400 text-base font-normal tracking-wide mb-8"
        >
          {metric.subline}
        </div>
        {metric.detail && (
          <p
            className="text-zinc-500 text-sm leading-loose group-hover:text-zinc-400 transition-colors tracking-wide"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            {metric.detail}
          </p>
        )}
      </div>

      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: "linear-gradient(90deg, transparent, rgba(161,161,170,0.5), transparent)" }}
      />
      </div>
    </motion.div>
  );
}

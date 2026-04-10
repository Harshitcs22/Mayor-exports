"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollKineticText } from "./KineticText";

interface Division {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  href?: string;
}

const DIVISIONS: Division[] = [
  {
    id: "sports-engineering",
    number: "01",
    title: "Sports Engineering",
    subtitle: "OEM Manufacturing",
    description:
      "Precision sports equipment manufacturing at scale. Rugby balls, basketballs, boxing gear —engineered to Decathlon's global performance standards. Every unit meets Tier-1 OEM specification.",
    tags: ["Rugby Balls", "Basketball OEM", "Boxing Gear", "Offload", "Tarmak"],
    image:
      "/images/sports_engineering.jpg",
    imageAlt: "Dark sports engineering manufacturing — Mayor Futuristic OEM",
  },
  {
    id: "advanced-surfaces",
    number: "02",
    title: "Advanced Surfaces",
    subtitle: "Fabino Fibres · PU/PVC",
    description:
      "High-specification synthetic leather for the world's most demanding applications. From automotive interior skins to performance footwear — engineered at the molecular surface level.",
    tags: ["PU Leather", "PVC Surfaces", "Automotive", "Footwear", "Fabino Fibres"],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Dark automotive interior synthetic leather surface — Mayor Futuristic",
  },
  {
    id: "global-education",
    number: "03",
    title: "Global Education",
    subtitle: "Mayor World School",
    description:
      "Mayor World School — established in collaboration with the prestigious Mayo College and affiliated as a Cambridge International Examination Centre (Cambridge University, UK). World-class education, rooted in institutional legacy.",
    tags: ["Mayor World School", "Cambridge IGCSE", "Mayo College", "K-12", "UK Affiliated"],
    image:
      "/images/school.jpg",
    imageAlt: "Dark architectural structure representing Mayor World School",
  },
];

function DivisionCard({ division, index }: { division: Division; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      id={division.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden flex flex-col card-luxury"
      style={{
        background: "#09090b",
        cursor: "default",
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={division.image}
          alt={division.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-600 group-hover:opacity-40"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,9,11,0.4) 0%, rgba(9,9,11,0.95) 100%)",
          }}
        />
        {/* Division number */}
        <div className="absolute top-6 left-6">
          <span
            className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 group-hover:text-zinc-200 transition-colors duration-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Division {division.number}
          </span>
        </div>
        {/* Arrow icon */}
        <div
          className="absolute top-6 right-6 flex items-center justify-center w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-400"
          style={{
            border: "1px solid rgba(161,161,170,0.5)",
            background: "rgba(9,9,11,0.5)",
            backdropFilter: "blur(4px)",
          }}
        >
          <ArrowUpRight size={14} className="text-zinc-300" strokeWidth={1} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8 lg:p-10">
        <div className="mb-4">
          <span
            className="section-label"
          >
            {division.subtitle}
          </span>
        </div>

        <h3
          className="font-heading text-zinc-200 font-normal text-2xl lg:text-3xl tracking-wide mb-6 group-hover:text-white transition-colors duration-300"
        >
          {division.title}
        </h3>

        <p
          className="text-zinc-500 text-sm leading-loose mb-8 flex-1 group-hover:text-zinc-400 transition-colors tracking-wide"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
        >
          {division.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-8" style={{ borderTop: "1px solid rgba(63,63,70,0.3)" }}>
          {division.tags.map((tag) => (
            <span
              key={tag}
              className="tag-chip rounded-none transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom luxury border reveal */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: "linear-gradient(90deg, transparent, rgba(161,161,170,0.4), transparent)" }}
      />
    </motion.div>
  );
}

export default function DivisionsSection() {
  return (
    <section
      id="legacy"
      className="relative py-32 lg:py-40"
      style={{ background: "#09090b" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span
                className="section-label"
              >
                Portfolio
              </span>
              <span className="h-px flex-1 max-w-16 divider-luxury" />
            </div>

            <ScrollKineticText
              text="DIVISIONS PORTFOLIO"
              className="font-heading text-4xl lg:text-5xl font-normal tracking-wide text-zinc-200"
            />
          </div>

          <p
            className="text-zinc-500 text-sm leading-loose max-w-xs tracking-wide"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Three distinct verticals. One integrated legacy of precision, trust, and engineered excellence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(63,63,70,0.2)" }}>
          {DIVISIONS.map((division, i) => (
            <DivisionCard key={division.id} division={division} index={i} />
          ))}
        </div>

        {/* Bottom marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.04)" }} />
          <span
            className="text-zinc-700 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            All Divisions · Mayor Futuristic
          </span>
          <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.04)" }} />
        </motion.div>
      </div>
    </section>
  );
}

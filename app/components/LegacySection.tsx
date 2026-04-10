"use client";

import { motion } from "framer-motion";
import { ScrollKineticText } from "./KineticText";

const AWARDS = [
  {
    id: "president-award",
    authority: "The President of India",
    title: "National Award for Export Excellence",
    body:
      "Conferred by the highest constitutional authority of the Republic of India — recognizing Mayor Group's contribution to national export leadership.",
    image: "/images/awards-img1president.jpg",
  },
  {
    id: "pm-award",
    authority: "The Prime Minister of India",
    title: "National Award for Export Excellence",
    body:
      "Recognition at the office of India's Prime Minister — affirming six decades of manufacturing quality and global market leadership.",
    image: "/images/award-from-prime-minister-of-india.jpg",
  },
  {
    id: "commerce-award",
    authority: "Ministry of Commerce, India",
    title: "National Award for Export Excellence",
    body:
      "Awarded by the Ministry of Commerce for sustained excellence in export volume, quality, and global brand representation.",
    image: "/images/awards-img2commerce-minister.jpg",
  },
];

export default function LegacySection() {
  return (
    <section
      id="legacy"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #09090b 0%, #09090b 100%)",
      }}
    >
      {/* Horizontal divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px divider-luxury"
      />

      {/* Left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(161,161,170,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-24 max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <span
              className="section-label"
            >
              State Recognition
            </span>
            <span
              className="h-px flex-1 max-w-16 divider-luxury"
            />
          </div>

          <ScrollKineticText
            text="AN UNBROKEN CHAIN OF TRUST"
            className="font-heading text-3xl lg:text-5xl font-normal tracking-wide text-zinc-200"
          />

          <p
            className="mt-8 text-zinc-500 text-sm lg:text-base leading-loose tracking-wide"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Over six decades of uncompromising quality, recognized at the highest
            levels of the state. Not industry awards — national recognition from the
            offices of the{" "}
            <span className="text-zinc-300 font-normal">
              President, Prime Minister, and Ministry of Commerce of India
            </span>
            .
          </p>
        </motion.div>

        {/* Awards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px mb-0.5" style={{ background: "rgba(63,63,70,0.2)" }}>
          {AWARDS.map((award, i) => {
            return (
              <motion.div
                key={award.id}
                id={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 lg:p-12 card-luxury flex flex-col"
                style={{ background: "#09090b" }}
              >
                {/* Honorable Image */}
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm" style={{ border: "1px solid rgba(63,63,70,0.6)" }}>
                  <img
                    src={award.image}
                    alt={award.authority}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Luxury deep overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-600 group-hover:opacity-40"
                    style={{
                      background: "linear-gradient(180deg, rgba(9,9,11,0.2) 0%, rgba(9,9,11,0.9) 100%)",
                    }}
                  />
                </div>

                {/* Authority */}
                <span
                  className="section-label mb-4 block"
                >
                  {award.authority}
                </span>

                {/* Title */}
                <h3
                  className="font-heading text-zinc-200 text-lg font-normal tracking-wide mb-4 leading-snug group-hover:text-white transition-colors"
                >
                  {award.title}
                </h3>

                {/* Body */}
                <p
                  className="text-zinc-500 text-sm leading-loose tracking-wide flex-1 group-hover:text-zinc-400 transition-colors"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  {award.body}
                </p>

                {/* Bottom luxury line */}
                <div
                  className="mt-10 h-px w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: "rgba(161,161,170,0.3)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative px-8 py-16 lg:px-16 overflow-hidden mt-16"
          style={{
            borderTop: "1px solid rgba(63,63,70,0.5)",
            borderBottom: "1px solid rgba(63,63,70,0.5)",
            background: "transparent",
          }}
        >
          {/* Gradient corner accent - removed */}

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 relative z-10">
            <div className="flex-1">
              <div
                className="section-label mb-6"
              >
                Since 1960 · Still Standing
              </div>
              <p
                className="font-display text-zinc-200 text-3xl lg:text-4xl font-light leading-tight max-w-3xl italic"
              >
                "Six decades. Multiple national recognitions. 30+ export markets. One
                name. Mayor Futuristic."
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center lg:items-end gap-3 relative z-10">
              <div className="relative">
                {/* Spotlight Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#C5A059]/10 blur-3xl rounded-full pointer-events-none -z-10" />
                
                {/* Antique Rolex Gold Metallic Text */}
                <span
                  className="font-display text-[5.5rem] lg:text-[8.5rem] font-thin leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#F5E6CA] via-[#C5A059] to-[#806020] tracking-wide relative block text-center lg:text-right"
                  style={{ textShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
                >
                  60+
                </span>
              </div>
              <div
                className="section-label mt-2"
              >
                Years of Excellence
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

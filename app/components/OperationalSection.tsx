"use client";

import { motion } from "framer-motion";
import { Bot, FileText, RefreshCw, TrendingDown, Zap } from "lucide-react";
import { ScrollKineticText } from "./KineticText";

const INTEL_ITEMS = [
  {
    id: "ai-receptionist",
    icon: Bot,
    title: "AI Receptionist",
    description:
      "24/7 intelligent voice & text interface. Handles inbound inquiries, routes to relevant divisions, logs interactions automatically — no manual follow-up.",
    stat: "↓ 70%",
    statLabel: "Reception overhead",
  },
  {
    id: "automated-docs",
    icon: FileText,
    title: "Automated Documentation",
    description:
      "Compliance certificates, export manifests, and quality reports auto-generated from production data. Eliminates human error at the regulatory layer.",
    stat: "↓ 85%",
    statLabel: "Documentation errors",
  },
  {
    id: "zoho-crm",
    icon: RefreshCw,
    title: "Zoho CRM Sync",
    description:
      "Real-time bilateral sync between factory floor data, logistics, and CRM. Every order, shipment, and client interaction is captured — automatically.",
    stat: "100%",
    statLabel: "Data traceability",
  },
];

export default function OperationalSection() {
  return (
    <section
      id="operational-intelligence"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #09090b 0%, #0a0b0f 50%, #09090b 100%)",
      }}
    >
      {/* Scan line decoration at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px scan-line"
        style={{ background: "rgba(96,165,250,0.08)" }}
      />

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-blue-400"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                X-Factor
              </span>
              <span className="h-px flex-1 max-w-16" style={{ background: "rgba(96,165,250,0.3)" }} />
            </div>

            <ScrollKineticText
              text="OPERATIONAL INTELLIGENCE."
              className="text-4xl lg:text-6xl font-black tracking-tighter text-white"
            />

            <p
              className="mt-6 text-zinc-500 max-w-lg text-base leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              We don't just manufacture — we operate with machine precision.
              Every workflow, automated. Every compliance gap, closed.
            </p>
          </div>

          {/* Workforce Reduction Big Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div
              className="relative p-6 lg:p-8 rounded-none"
              style={{
                border: "1px solid rgba(96,165,250,0.2)",
                background: "rgba(96,165,250,0.03)",
              }}
            >
              <div className="flex items-start gap-4">
                <TrendingDown
                  size={20}
                  className="text-blue-400 mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <div
                    className="text-5xl font-black text-white leading-none mb-1"
                    style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.04em" }}
                  >
                    60<span className="text-blue-400 text-3xl">%</span>
                  </div>
                  <div
                    className="text-zinc-400 text-xs tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Workforce Operational Overhead
                  </div>
                  <div
                    className="text-zinc-600 text-xs mt-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    ↓ Reduction via AI Automation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Intel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {INTEL_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative p-8 card-electric-hover"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Scan line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 scan-line"
                  style={{ background: "rgba(96,165,250,0.3)" }}
                />

                {/* Icon */}
                <div
                  className="mb-6 flex items-center justify-center w-12 h-12 transition-all duration-400 group-hover:border-blue-400/40"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Icon
                    size={18}
                    className="text-zinc-500 group-hover:text-blue-400 transition-colors duration-400"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-white font-semibold text-base mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  {item.description}
                </p>

                {/* Stat */}
                <div className="flex items-end justify-between pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div>
                    <div
                      className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors duration-400"
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.03em" }}
                    >
                      {item.stat}
                    </div>
                    <div
                      className="text-zinc-600 text-xs uppercase tracking-wider mt-0.5"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem" }}
                    >
                      {item.statLabel}
                    </div>
                  </div>
                  <Zap
                    size={14}
                    className="text-zinc-700 group-hover:text-blue-400 transition-colors duration-400"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* HindTrade AI Floating Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-flex items-center gap-4 px-6 py-4"
            style={{
              border: "1px solid rgba(96,165,250,0.25)",
              background:
                "linear-gradient(135deg, rgba(96,165,250,0.06) 0%, rgba(9,9,11,0.8) 100%)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Pulsing dot */}
            <div className="relative flex-shrink-0">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#60a5fa" }}
              />
              <div
                className="absolute inset-0 w-2 h-2 rounded-full animate-ping"
                style={{ background: "#60a5fa", opacity: 0.4 }}
              />
            </div>

            <div>
              <div
                className="text-[9px] tracking-[0.25em] uppercase text-blue-400 mb-0.5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Verified & Powered by
              </div>
              <div
                className="text-white text-sm font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                HindTrade AI Ecosystem
              </div>
            </div>

            <div
              className="h-8 w-px ml-2"
              style={{ background: "rgba(96,165,250,0.2)" }}
            />

            <div
              className="text-zinc-500 text-xs"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Live · Operational
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

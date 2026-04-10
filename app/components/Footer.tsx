"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Our Craft", href: "#our-craft" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Legacy", href: "#legacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative border-t"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "#09090b",
      }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(161,161,170,0.4) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 mb-16">
          {/* Brand Block */}
          <div className="flex-shrink-0 max-w-sm">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="flex items-center justify-center w-10 h-10"
                style={{
                  background: "linear-gradient(135deg, #e4e4e7 0%, #71717a 100%)",
                }}
              >
                <span
                  className="text-black font-bold text-xl leading-none"
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.05em" }}
                >
                  M
                </span>
              </div>
              <div>
                <div
                  className="text-white font-semibold text-sm tracking-tight"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Mayor Futuristic
                </div>
                <div
                  className="text-zinc-600 text-[9px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Formerly Mayor Group · Est. 1960
                </div>
              </div>
            </div>

            <p
              className="text-zinc-500 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              Six decades of precision manufacturing, now re-engineered for the synthetic frontier.
              Trusted by global brands. Built for the future.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Mail, label: "Email", href: "mailto:info@mayorfuturistic.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 text-zinc-600 hover:text-zinc-300 transition-all duration-500"
                  style={{
                    border: "1px solid rgba(161,161,170,0.2)",
                    background: "transparent",
                  }}
                >
                  <Icon size={16} strokeWidth={1} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col sm:flex-row gap-12">
            <div>
              <div
                className="section-label mb-6"
              >
                Navigation
              </div>
              <ul className="space-y-4">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-zinc-500 hover:text-zinc-200 text-sm transition-colors duration-500 group flex items-center gap-3 tracking-wide"
                      style={{ fontFamily: "var(--font-sans)", background: "none", border: "none", cursor: "pointer", fontWeight: 300 }}
                    >
                      <span
                        className="w-4 h-px transition-all duration-500 group-hover:w-8"
                        style={{ background: "rgba(161,161,170,0.5)" }}
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className="section-label mb-6"
              >
                Divisions
              </div>
              <ul className="space-y-4">
                {[
                  "Sports Engineering",
                  "Advanced Surfaces",
                  "Fabino Fibres",
                  "Mayor World School",
                ].map((item) => (
                  <li key={item}>
                    <span
                      className="text-zinc-500 text-sm"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className="section-label mb-6"
              >
                Certifications
              </div>
              <ul className="space-y-4">
                {[
                  "ISO 9001:2015",
                  "OEM Tier-1 Certified",
                  "EU Automotive Standard",
                  "Decathlon Partner",
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "rgba(161,161,170,0.4)" }}
                    />
                    <span
                      className="text-zinc-500 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p
            className="text-zinc-600 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {year} Mayor Futuristic. All rights reserved. Formerly Mayor Group.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#60a5fa" }}
            />
            <p
              className="text-zinc-500 text-xs"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Crafted with{" "}
              <span className="text-blue-400">HindTrade AI Lab Students</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

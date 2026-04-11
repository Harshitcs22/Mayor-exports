"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import QuoteModal from "./QuoteModal";

const NAV_LINKS = [
  { label: "Our Craft", href: "#our-craft" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Legacy", href: "#legacy" },
];

// Luxury nav — tracks wide, zinc palette

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? "rgba(9, 9, 11, 0.88)"
            : "rgba(9, 9, 11, 0.4)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
            whileHover={{ opacity: 0.8 }}
          >
            <div
              className="relative flex items-center justify-center w-9 h-9 rounded-sm"
              style={{ background: "linear-gradient(135deg, #e4e4e7 0%, #71717a 100%)" }}
            >
              <span
                className="text-black font-bold text-lg leading-none"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.05em" }}
              >
                M
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white font-semibold text-sm tracking-tight"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Mayor Futuristic
              </span>
              <span
                className="text-zinc-500 font-mono text-[9px] tracking-widest uppercase mt-0.5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Est. 1960
              </span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-[11px] text-zinc-500 hover:text-zinc-200 transition-colors duration-400 group uppercase"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.2em", background: "none", border: "none", cursor: "pointer" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-400 group-hover:w-full"
                  style={{ background: "rgba(161,161,170,0.5)" }}
                />
              </button>
            ))}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="text-[10px] tracking-[0.28em] uppercase px-5 py-2.5 text-zinc-400 hover:text-zinc-200 transition-all duration-400"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid rgba(63,63,70,0.8)",
                background: "transparent",
              }}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </motion.button>

            <motion.button
              id="nav-quote-btn"
              whileHover={{ scale: 1.01, borderColor: "rgba(161,161,170,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="text-[10px] tracking-[0.28em] uppercase px-5 py-2.5 text-zinc-200 transition-all duration-400"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid rgba(161,161,170,0.25)",
                background: "rgba(24, 24, 27, 0.5)",
                cursor: "pointer",
              }}
              onClick={() => setQuoteOpen(true)}
            >
              Request Quote
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(9, 9, 11, 0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-zinc-300 hover:text-white text-sm tracking-wide transition-colors"
                  style={{ fontFamily: "var(--font-sans)", background: "none", border: "none", cursor: "pointer" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-left text-zinc-500 text-[10px] tracking-[0.28em] uppercase"
                style={{ fontFamily: "var(--font-mono)", background: "none", border: "none", cursor: "pointer" }}
              >
                Contact →
              </button>
              <button
                onClick={() => { setMobileOpen(false); setQuoteOpen(true); }}
                className="text-left text-zinc-300 text-[10px] tracking-[0.28em] uppercase mt-2 py-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "none",
                  border: "1px solid rgba(63,63,70,0.6)",
                  cursor: "pointer",
                  paddingLeft: "12px",
                }}
              >
                Request Quote →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}

"use client";

import { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, AlertTriangle, ShieldCheck, Lock } from "lucide-react";

/* ────────────────────────────────────────────────────────
   QuoteModal — "God Mode" OEM Inquiry Panel
   Glassmorphism · Zinc palette · Framer Motion
   ──────────────────────────────────────────────────────── */

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const INPUT_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.82rem",
  letterSpacing: "0.02em",
  background: "rgba(9, 9, 11, 0.6)",
  border: "1px solid rgba(63, 63, 70, 0.5)",
  borderRadius: "2px",
  color: "#e4e4e7",
  outline: "none",
  transition: "border-color 0.35s ease, box-shadow 0.35s ease",
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.56rem",
  letterSpacing: "0.32em",
  textTransform: "uppercase" as const,
  color: "#71717a",
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap — auto-focus first input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setForm(INITIAL_FORM);
        setStatus("idle");
        setErrorMsg("");
      }, 350);
    }
  }, [isOpen]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/webhook/zoho", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="quote-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          onClick={onClose}
          style={{ background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(8px)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Request OEM Quote"
        >
          {/* ── Panel ── */}
          <motion.div
            key="quote-panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(14, 14, 16, 0.92)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1px solid rgba(63, 63, 70, 0.35)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.02), 0 24px 80px -12px rgba(0,0,0,0.8)",
            }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 5%, rgba(161,161,170,0.25) 50%, transparent 95%)",
              }}
            />

            {/* Close */}
            <motion.button
              id="quote-modal-close"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-zinc-600 hover:text-zinc-300 transition-colors"
              style={{ background: "none", border: "none", cursor: "pointer" }}
              aria-label="Close modal"
            >
              <X size={18} strokeWidth={1.4} />
            </motion.button>

            <div className="px-8 pt-8 pb-10">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(161,161,170,0.3), transparent)",
                    }}
                  />
                  <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-px">
                     <ShieldCheck size={10} className="text-zinc-500" />
                     <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.52rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#71717a",
                      }}
                    >
                      HindTrade Secure
                    </span>
                  </div>
                  <span
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(161,161,170,0.3))",
                    }}
                  />
                </div>

                <h2
                  className="text-2xl lg:text-3xl font-light tracking-tight text-zinc-100"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request{" "}
                  <span className="italic text-zinc-400">OEM Quote</span>
                </h2>
                <p
                  className="mt-2 text-zinc-600 text-xs tracking-wide"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  Direct procurement channel to Mayor Group's global infrastructure.
                </p>
              </div>

              {/* ── FORM / SUCCESS / ERROR ── */}
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success State ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-10 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 14,
                        delay: 0.1,
                      }}
                    >
                      <CheckCircle
                        size={48}
                        strokeWidth={1}
                        className="text-zinc-300"
                      />
                    </motion.div>

                    <div>
                      <h3
                        className="text-xl font-light text-zinc-200 tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Inquiry Routed to Global Desk
                      </h3>
                      <p
                        className="text-zinc-500 text-[11px] leading-relaxed max-w-xs mx-auto mb-2"
                        style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                      >
                        Our AI-Trade Engine is currently generating your compliance brief.
                      </p>
                      <p
                        className="text-zinc-600 text-[10px] italic"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        A certified representative will respond within 24 hours.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ borderColor: "rgba(161,161,170,0.4)", color: "#e4e4e7" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                      className="mt-4 px-10 py-3 text-[9px] tracking-[0.3em] uppercase text-zinc-500 transition-colors"
                      style={{
                        fontFamily: "var(--font-mono)",
                        border: "1px solid rgba(63,63,70,0.6)",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      Return to Portal
                    </motion.button>
                  </motion.div>
                ) : (
                  /* ── Form State (idle · submitting · error) ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {/* Error banner */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-2 px-4 py-3 text-xs text-red-400/90 overflow-hidden"
                          style={{
                            fontFamily: "var(--font-sans)",
                            background: "rgba(239, 68, 68, 0.06)",
                            border: "1px solid rgba(239, 68, 68, 0.15)",
                            borderRadius: "2px",
                          }}
                        >
                          <AlertTriangle size={14} strokeWidth={1.5} />
                          <span>{errorMsg || "Something went wrong. Please try again."}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="quote-name" style={LABEL_STYLE}>Full Name *</label>
                        <input
                          ref={firstInputRef}
                          id="quote-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={form.name}
                          onChange={handleChange}
                          disabled={status === "submitting"}
                          className="w-full px-4 py-3 placeholder:text-zinc-700 focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(113,113,122,0.15)]"
                          style={INPUT_STYLE}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="quote-email" style={LABEL_STYLE}>Official Email *</label>
                        <input
                          id="quote-email"
                          name="email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={form.email}
                          onChange={handleChange}
                          disabled={status === "submitting"}
                          className="w-full px-4 py-3 placeholder:text-zinc-700 focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(113,113,122,0.15)]"
                          style={INPUT_STYLE}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="quote-company" style={LABEL_STYLE}>Company Name</label>
                      <input
                        id="quote-company"
                        name="company"
                        type="text"
                        placeholder="Organization Details"
                        value={form.company}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className="w-full px-4 py-3 placeholder:text-zinc-700 focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(113,113,122,0.15)]"
                        style={INPUT_STYLE}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="quote-message" style={LABEL_STYLE}>Inquiry Details *</label>
                      <textarea
                        id="quote-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Describe your procurement requirements..."
                        value={form.message}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className="w-full px-4 py-3 placeholder:text-zinc-700 focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(113,113,122,0.15)] resize-none"
                        style={{ ...INPUT_STYLE, lineHeight: 1.6 }}
                      />
                    </div>

                    <motion.button
                      id="quote-submit-btn"
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={status !== "submitting" ? { borderColor: "rgba(161,161,170,0.5)", background: "rgba(161,161,170,0.05)" } : {}}
                      whileTap={status !== "submitting" ? { scale: 0.985 } : {}}
                      className="relative mt-2 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-[10px] tracking-[0.3em] uppercase transition-all"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: status === "submitting" ? "#52525b" : "#d4d4d8",
                        border: "1px solid rgba(161,161,170,0.25)",
                        background: "rgba(24, 24, 27, 0.4)",
                        cursor: status === "submitting" ? "not-allowed" : "pointer",
                      }}
                    >
                      {status === "submitting" ? (
                        <div className="flex items-center gap-3">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-600" />
                          </span>
                          Initiating Secure Request…
                        </div>
                      ) : (
                        <>
                          <Send size={12} strokeWidth={1.4} />
                          Submit Inquiry
                        </>
                      )}
                    </motion.button>

                    {/* Footer Trust Badge */}
                    <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-zinc-900">
                       <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
                          <Lock size={10} className="text-zinc-500" />
                          <span className="text-[8px] tracking-[0.2em] uppercase font-mono text-zinc-500">End-to-End Encrypted</span>
                       </div>
                       <div className="w-1 h-1 rounded-full bg-zinc-800" />
                       <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
                          <ShieldCheck size={10} className="text-zinc-500" />
                          <span className="text-[8px] tracking-[0.2em] uppercase font-mono text-zinc-500">GDPR Compliant</span>
                       </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

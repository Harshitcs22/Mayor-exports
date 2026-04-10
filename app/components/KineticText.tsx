"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function KineticText({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  tag = "h1",
}: KineticTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scaleY: 0.6,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const Tag = tag;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: "hidden", display: "inline-block", marginRight: "0.35em", marginBottom: "0.1em" }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block" }}
            className={className}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

// Scroll-triggered kinetic text
export function ScrollKineticText({
  text,
  className = "",
  stagger = 0.04,
}: Omit<KineticTextProps, "delay" | "tag">) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: "hidden", display: "inline-block", marginRight: "0.35em", marginBottom: "0.1em" }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block" }}
            className={className}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

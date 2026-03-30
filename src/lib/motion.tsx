"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

export function FadeIn({ children, delay = 0, className, style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

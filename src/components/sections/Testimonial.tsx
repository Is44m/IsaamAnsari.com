"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        padding: "clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,6rem)",
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Giant quote mark — decorative */}
      <motion.span
        className="absolute top-4 left-[clamp(1rem,5vw,5rem)] font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(6rem,14vw,11rem)",
          color: "rgba(99,102,241,0.07)",
          lineHeight: 1,
          fontFamily: "Georgia, serif",
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
        aria-hidden
      >
        &ldquo;
      </motion.span>

      <div className="relative max-w-[720px]">
        <motion.p
          className="text-[clamp(1.1rem,2.2vw,1.5rem)] text-[#c0c0c0] font-normal leading-[1.65] tracking-[-0.01em] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          Isaam is an all rounder, having a fine attention to detail and a fine
          focus on professionalism. Be it technology, or public relations,
          I&apos;ve trusted him for it all, and he sure does deliver the best.
        </motion.p>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
        >
          {/* Photo placeholder */}
          <div
            className="w-9 h-9 rounded-full flex-shrink-0 photo-placeholder"
            style={{
              background: "rgba(99,102,241,0.06)",
              border: "1px dashed rgba(99,102,241,0.2)",
            }}
          >
            {/* Replace with <img src="/maaz.jpg" alt="Maaz Ali Nadeem" className="w-full h-full rounded-full object-cover" /> */}
          </div>
          <div>
            <p className="text-[#f0f0f0] text-sm font-semibold tracking-[-0.01em]">
              Maaz Ali Nadeem
            </p>
            <p className="label mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
              Founder, VECTOR AI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

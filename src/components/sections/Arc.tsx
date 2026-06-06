"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stat = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stats = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Engineers led" },
  { value: "2", label: "Startups shaped" },
];

export default function Arc() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="section-padding relative">
      <span className="rule block mb-16" />

      {/* Section number */}
      <motion.span
        className="label block mb-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        01 - Overview
      </motion.span>

      {/* Main paragraph */}
      <div className="max-w-[780px]">
        <motion.p
          className="text-[clamp(1.25rem,2.5vw,1.875rem)] text-[#b0b0b0] font-normal leading-[1.55] tracking-[-0.015em]"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          I build things others say can&apos;t be shipped.{" "}
          <span className="text-[#f0f0f0]">
            From developing AI-centric MVPs at VECTOR to leading the engineering
            division and scaling products that hit national stages
          </span>{" "}
          - the transition from builder to engineering lead wasn&apos;t planned. It
          was earned.{" "}
          <span className="text-[#f0f0f0]">Now I&apos;m Head of Engineering at Trillet AI</span>
          {", "}building the agentic voice platform that enterprise clients in
          healthcare, finance, and government trust with their most critical
          conversations.
        </motion.p>
      </div>

      {/* Stats row */}
      <motion.div
        className="mt-16 flex flex-wrap gap-x-12 gap-y-8"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } } }}
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={stat} className="flex flex-col gap-1">
            <span
              className="font-bold text-[2.25rem] leading-none tracking-[-0.04em] text-[#f0f0f0]"
            >
              {s.value}
            </span>
            <span className="label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <span className="rule block mt-16" />
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stages = [
  {
    name: "GDG DevFest AI",
    detail: "Presented VECTOR AI's V-Fit - first public look",
    location: "Islamabad, Pakistan",
    year: "2023",
  },
  {
    name: "NUST",
    detail: "Representing VECTOR AI at the national stage",
    location: "Islamabad, Pakistan",
    year: "2023",
  },
  {
    name: "Future Fest",
    detail: "Representing VECTOR AI",
    location: "Islamabad, Pakistan",
    year: "2024",
  },
  {
    name: "Huawei Seeds for the Future",
    detail: "Representing Pakistan — Tech4Good competition",
    location: "Tashkent, Uzbekistan",
    year: "2024",
  },
];

export default function StagesStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(4rem,8vw,7rem) 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-end justify-between mb-10"
        style={{ padding: "0 clamp(1.5rem,6vw,6rem)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <span className="label block mb-2">On stage</span>
          <p className="text-[#f0f0f0] text-[clamp(1.1rem,2vw,1.5rem)] font-semibold tracking-[-0.02em]">
            Representing on the world stage
          </p>
        </motion.div>
        <motion.span
          className="label hidden sm:block"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stages.length} appearances
        </motion.span>
      </div>

      {/* Scrollable cards row */}
      <div
        className="flex gap-4 overflow-x-auto pb-4"
        style={{
          padding: "0 clamp(1.5rem,6vw,6rem)",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {stages.map((stage, i) => (
          <motion.div
            key={stage.name}
            className="flex-shrink-0 flex flex-col"
            style={{ width: "clamp(220px,28vw,300px)", scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.1 }}
          >
            {/* Photo placeholder */}
            <div
              className="photo-placeholder w-full mb-4 relative"
              style={{
                aspectRatio: "16/10",
                background: "rgba(99,102,241,0.03)",
                border: "1px dashed rgba(255,255,255,0.07)",
                borderRadius: "4px",
              }}
            >
              {/* Swap for <img src={stage.image} ... /> when ready */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="label" style={{ color: "rgba(255,255,255,0.1)", letterSpacing: "0.2em" }}>
                  IMAGE
                </span>
              </div>
              {/* Year badge */}
              <div
                className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded"
                style={{ background: "rgba(8,8,8,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="label" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em" }}>
                  {stage.year}
                </span>
              </div>
            </div>

            {/* Info */}
            <p className="text-[#f0f0f0] text-sm font-semibold tracking-[-0.01em] mb-1">
              {stage.name}
            </p>
            <p className="text-[#555] text-xs leading-[1.6] mb-2">{stage.detail}</p>
            <span className="label" style={{ color: "rgba(255,255,255,0.15)" }}>
              {stage.location}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

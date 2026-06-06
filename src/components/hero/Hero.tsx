"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay },
  }),
};

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!scrollIndicatorRef.current) return;
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      scrollIndicatorRef.current.style.opacity = String(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Subtle radial glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top bar */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-[clamp(1.5rem,6vw,6rem)] pt-10"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
      >
        <span className="label">Abu Dhabi, UAE</span>
        <span className="label">2026</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 px-[clamp(1.5rem,6vw,6rem)] pb-[clamp(4rem,8vw,7rem)]">
        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-bold text-[clamp(4.5rem,13vw,11rem)] leading-[0.88] tracking-[-0.04em] text-[#f0f0f0]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.25}
          >
            Isaam
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-bold text-[clamp(4.5rem,13vw,11rem)] leading-[0.88] tracking-[-0.04em] text-[#f0f0f0]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
          >
            Ansari
          </motion.h1>
        </div>

        {/* Divider + role */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
        >
          <div className="h-px w-12 bg-[rgba(255,255,255,0.2)]" />
          <p className="text-[clamp(0.9rem,1.5vw,1.125rem)] text-[#888] font-normal tracking-wide">
            Head of Engineering,{" "}
            <span className="text-[#6366f1] font-medium">Trillet AI</span>
            <span className="mx-3 text-[#333]">·</span>
            Engineering Lead,{" "}
            <span className="text-[#f0f0f0]/70 font-medium">VECTOR Inc.</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 right-[clamp(1.5rem,6vw,6rem)] z-10 flex flex-col items-center gap-2"
      >
        <span className="label" style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}>
          scroll
        </span>
        <div className="w-px h-12 bg-[rgba(255,255,255,0.12)] relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[rgba(99,102,241,0.6)]"
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

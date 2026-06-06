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
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
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
        <span className="label flex items-center gap-2">
          <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
          Building @ Trillet AI
        </span>
      </motion.div>

      {/* Main content + photo — side by side on md+ */}
      <div className="relative z-10 flex items-end justify-between px-[clamp(1.5rem,6vw,6rem)] pb-[clamp(4rem,8vw,7rem)] gap-8">
        {/* Left: name + subtitle */}
        <div className="flex-1 min-w-0">
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-bold text-[clamp(4rem,12vw,10rem)] leading-[0.88] tracking-[-0.04em] text-[#f0f0f0]"
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
              className="font-bold text-[clamp(4rem,12vw,10rem)] leading-[0.88] tracking-[-0.04em] text-[#f0f0f0]"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
            >
              Ansari
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
          >
            <div className="h-px w-12 bg-[rgba(255,255,255,0.2)]" />
            <p className="text-[clamp(0.85rem,1.4vw,1.05rem)] text-[#888] font-normal tracking-wide">
              Product &amp; engineering leadership
            </p>
          </motion.div>
        </div>

        {/* Right: photo placeholder — hidden on mobile */}
        <motion.div
          className="hidden lg:block flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.7 }}
        >
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: "clamp(140px, 14vw, 200px)",
              aspectRatio: "3/4",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Headshot.png"
              alt="Isaam Ansari"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            {/* Indigo bottom accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 right-[clamp(1.5rem,6vw,6rem)] z-10 lg:hidden flex flex-col items-center gap-2"
      >
        <span className="label" style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}>scroll</span>
        <div className="w-px h-10 bg-[rgba(255,255,255,0.1)] relative overflow-hidden">
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

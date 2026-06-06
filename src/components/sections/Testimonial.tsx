"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const testimonials = [
  {
    quote:
      "Isaam is an all rounder, having a fine attention to detail and a fine focus on professionalism. Be it technology, or public relations, I've trusted him for it all, and he sure does deliver the best. Long way to go for him, but a solid young professional already.",
    name: "Maaz Ali Nadeem",
    title: "Founder, VECTOR AI · Global Shaper",
    date: "June 21, 2024",
    photo: "/MaazAli.png",
    relationship: "Managed Isaam directly",
  },
  // Add more testimonials here — photo path goes in `photo`
];

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  // Double cards for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(4rem,8vw,7rem) 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "#0a0a0a",
      }}
    >
      {/* Header */}
      <motion.div
        className="flex items-end justify-between mb-10"
        style={{ padding: "0 clamp(1.5rem,6vw,6rem)" }}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
      >
        <div>
          <span className="label block mb-2">Testimonials</span>
          <p className="text-[#f0f0f0] text-[clamp(1.1rem,2vw,1.5rem)] font-semibold tracking-[-0.02em]">
            What people say
          </p>
        </div>
        <span className="label hidden sm:block" style={{ color: "rgba(255,255,255,0.15)" }}>
          {testimonials.length} so far
        </span>
      </motion.div>

      {/* Scrolling gallery */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
        />

        <div
          className="flex gap-4 select-none"
          style={{
            animation: `marquee ${Math.max(doubled.length * 18, 36)}s linear infinite`,
            animationPlayState: "running",
            width: "max-content",
            paddingLeft: "clamp(1.5rem,6vw,6rem)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col justify-between"
              style={{
                width: "clamp(300px, 38vw, 400px)",
                padding: "clamp(1.25rem,2.5vw,1.75rem)",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
              }}
            >
              {/* Quote mark */}
              <div>
                <span
                  className="block font-bold leading-none mb-4 select-none"
                  style={{ fontSize: "2.5rem", color: "rgba(99,102,241,0.25)", fontFamily: "Georgia, serif" }}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#aaa] leading-[1.7] mb-6"
                  style={{ fontSize: "clamp(0.8125rem,1.2vw,0.9375rem)" }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(99,102,241,0.06)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[#f0f0f0] text-xs font-semibold tracking-[-0.01em] truncate">{t.name}</p>
                  <p className="label truncate mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>{t.title}</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <p className="label text-right" style={{ color: "rgba(255,255,255,0.12)" }}>{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

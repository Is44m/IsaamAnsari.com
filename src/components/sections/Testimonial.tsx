"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import NavButton from "@/components/ui/NavButton";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const testimonials = [
  {
    quote: "Isaam is an all rounder, having a fine attention to detail and a fine focus on professionalism. Be it technology, or public relations, I've trusted him for it all, and he sure does deliver the best. Long way to go for him, but a solid young professional already.",
    name: "Maaz Ali Nadeem",
    title: "Founder, VECTOR AI",
    date: "June 2024",
    photo: "/MaazAli.png",
  },
  // Add more testimonials here
];

const CARD_W = 400;
const GAP = 16;
const SCROLL_BY = CARD_W + GAP;

function TestimonialCard({ t }: Readonly<{ t: typeof testimonials[0] }>) {
  return (
    <div
      className="flex-shrink-0 flex flex-col justify-between"
      style={{
        width: `min(${CARD_W}px, 85vw)`,
        scrollSnapAlign: "start",
        padding: "clamp(1.25rem,2.5vw,1.75rem)",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "8px",
      }}
    >
      <div>
        <span
          className="block font-bold leading-none mb-4 select-none"
          style={{ fontSize: "2.5rem", color: "rgba(99,102,241,0.22)", fontFamily: "Georgia, serif" }}
          aria-hidden
        >
          &ldquo;
        </span>
        <p className="text-[#aaa] leading-[1.7] mb-6" style={{ fontSize: "clamp(0.8125rem,1.2vw,0.9375rem)" }}>
          {t.quote}
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(99,102,241,0.06)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.photo} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[#f0f0f0] text-xs font-semibold truncate">{t.name}</p>
          <p className="label truncate mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>{t.title}</p>
        </div>
        <span className="label flex-shrink-0" style={{ color: "rgba(255,255,255,0.1)" }}>{t.date}</span>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const showNav = testimonials.length > 1;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    if (!showNav) return;
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", updateScrollState); ro.disconnect(); };
  }, [showNav, updateScrollState]);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_BY, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      style={{ padding: "clamp(4rem,8vw,7rem) 0", borderTop: "1px solid rgba(255,255,255,0.04)", background: "#0a0a0a" }}
    >
      {/* Header */}
      <div
        className="flex items-end justify-between mb-8"
        style={{ padding: "0 clamp(1.5rem,6vw,6rem)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <span className="label block mb-2">Testimonials</span>
          <p className="text-[#f0f0f0] text-[clamp(1.1rem,2vw,1.5rem)] font-semibold tracking-[-0.02em]">
            In their words
          </p>
        </motion.div>

        {/* Nav — only when multiple testimonials */}
        {showNav && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <NavButton direction="left"  disabled={atStart} onClick={() => scroll(-1)} />
            <NavButton direction="right" disabled={atEnd}   onClick={() => scroll(1)}  />
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {testimonials.length === 1 ? (
          /* Single card — centered, no scroll needed */
          <div style={{ padding: "0 clamp(1.5rem,6vw,6rem)" }}>
            <TestimonialCard t={testimonials[0]} />
          </div>
        ) : (
          /* Multiple — snap scroll with arrows */
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-2"
              style={{
                padding: "0 clamp(1.5rem,6vw,6rem)",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

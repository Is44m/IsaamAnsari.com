"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { value: "~10", label: "Engineers" },
  { value: "2.5+", label: "Years" },
  { value: "3", label: "Cities represented" },
];

export default function VectorChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      // Watermark slides slowly
      tl.fromTo(
        watermarkRef.current,
        { x: "5%", opacity: 0 },
        { x: "-3%", opacity: 0.045, duration: 2 },
        0
      );

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        0.1
      );

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.5 },
        0.2
      );

      tl.fromTo(
        roleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1 },
        0.7
      );

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        1.1
      );

      tl.fromTo(
        line2Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        1.4
      );

      tl.fromTo(
        statsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1 },
        1.8
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    /* Tall container gives scroll room for the pinned panel */
    <div ref={containerRef} style={{ height: "320vh" }}>
      <div
        ref={panelRef}
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#080808" }}
      >
        {/* Watermark */}
        <span
          ref={watermarkRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-[#f0f0f0] select-none pointer-events-none whitespace-nowrap opacity-0"
          style={{
            fontSize: "clamp(8rem, 22vw, 18rem)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
          aria-hidden
        >
          VECTOR
        </span>

        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.04)]" />

        <div className="section-padding relative z-10 max-w-[900px]">
          {/* Section number + label */}
          <span ref={labelRef} className="label block mb-10 opacity-0">
            02 — VECTOR Inc.
          </span>

          {/* Title */}
          <h2
            ref={titleRef}
            className="font-bold leading-none tracking-[-0.04em] text-[#f0f0f0] mb-8 opacity-0"
            style={{ fontSize: "clamp(3.5rem,9vw,7.5rem)" }}
          >
            Engineering
            <br />
            <span className="text-[#6366f1]">Lead.</span>
          </h2>

          {/* Role line */}
          <div ref={roleRef} className="flex items-center gap-4 mb-10 opacity-0">
            <div className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
            <span className="text-[#888] text-sm tracking-wide font-medium uppercase" style={{ letterSpacing: "0.1em" }}>
              VECTOR Inc. · Islamabad &amp; Abu Dhabi
            </span>
          </div>

          {/* Body text */}
          <p
            ref={line1Ref}
            className="text-[clamp(1rem,1.7vw,1.2rem)] text-[#999] leading-[1.7] max-w-[600px] mb-4 opacity-0"
          >
            Leading a lean but exceptional engineering division — defining
            deliverables, owning sprint cycles, bridging product and
            engineering, and keeping quality uncompromising across multiple
            client product portfolios.
          </p>

          <p
            ref={line2Ref}
            className="text-[clamp(1rem,1.7vw,1.2rem)] text-[#999] leading-[1.7] max-w-[600px] mb-12 opacity-0"
          >
            From developing the first AI-centric MVPs from zero to representing
            VECTOR on Pakistan&apos;s biggest stages — GDG DevFest AI, Future
            Fest, NUST — and scaling those products into things people actually
            rely on.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="flex flex-wrap gap-x-10 gap-y-6 opacity-0"
          >
            {highlights.map((h) => (
              <div key={h.label} className="flex flex-col gap-1">
                <span className="font-bold text-[2rem] leading-none tracking-[-0.04em] text-[#f0f0f0]">
                  {h.value}
                </span>
                <span className="label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

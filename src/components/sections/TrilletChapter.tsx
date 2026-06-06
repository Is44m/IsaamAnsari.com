"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tags = ["Healthcare", "Finance", "Banking", "Government"];

export default function TrilletChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
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

      tl.fromTo(
        watermarkRef.current,
        { x: "-5%", opacity: 0 },
        { x: "3%", opacity: 0.04, duration: 2 },
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
        bodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        1.1
      );

      tl.fromTo(
        tagsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1 },
        1.5
      );

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8 },
        1.9
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: "320vh" }}>
      <div
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#060608" }}
      >
        {/* Watermark */}
        <span
          ref={watermarkRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 font-bold text-[#6366f1] select-none pointer-events-none whitespace-nowrap opacity-0"
          style={{
            fontSize: "clamp(7rem,20vw,16rem)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
          aria-hidden
        >
          TRILLET
        </span>

        {/* Right accent bar */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(99,102,241,0.06)]" />

        <div className="section-padding relative z-10 max-w-[900px]">
          {/* Section number + label */}
          <span ref={labelRef} className="label block mb-10 opacity-0">
            03 — Trillet AI
          </span>

          {/* Title */}
          <h2
            ref={titleRef}
            className="font-bold leading-none tracking-[-0.04em] text-[#f0f0f0] mb-8 opacity-0"
            style={{ fontSize: "clamp(3.5rem,9vw,7.5rem)" }}
          >
            Head of
            <br />
            <span className="text-[#6366f1]">Engineering.</span>
          </h2>

          {/* Role line */}
          <div ref={roleRef} className="flex items-center gap-4 mb-10 opacity-0">
            <div className="h-px w-8 bg-[rgba(99,102,241,0.4)]" />
            <span className="text-[#888] text-sm tracking-wide font-medium uppercase" style={{ letterSpacing: "0.1em" }}>
              Trillet AI · May 2026 — Present · Remote
            </span>
          </div>

          {/* Body text */}
          <p
            ref={bodyRef}
            className="text-[clamp(1rem,1.7vw,1.2rem)] text-[#999] leading-[1.7] max-w-[600px] mb-10 opacity-0"
          >
            Building the agentic AI communication platform enterprises trust
            for their most mission-critical customer conversations. Voice-first,
            production-grade, and running at scale. The architecture is mine.
            The roadmap is mine. The chapter is still being written.
          </p>

          {/* Industry tags */}
          <div ref={tagsRef} className="flex flex-wrap gap-2 mb-10 opacity-0">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border"
                style={{
                  borderColor: "rgba(99,102,241,0.2)",
                  color: "#6366f1",
                  background: "rgba(99,102,241,0.06)",
                  letterSpacing: "0.08em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Google Cloud badge */}
          <div ref={badgeRef} className="opacity-0">
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
              <span className="text-xs text-[#666] font-medium tracking-wide" style={{ letterSpacing: "0.06em" }}>
                Featured by Google Cloud
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

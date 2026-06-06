"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { value: "Sep '23", label: "Day one" },
  { value: "~10", label: "Engineers led" },
  { value: "3+", label: "Years" },
];

export default function VectorChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
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

      tl.fromTo(
        watermarkRef.current,
        { x: "8%", opacity: 0 },
        { x: "-2%", opacity: 0.055, duration: 3 },
        0
      );
      tl.fromTo(labelRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1 }, 0.1);
      tl.fromTo(titleRef.current, { opacity: 0, y: 40, skewY: 1.5 }, { opacity: 1, y: 0, skewY: 0, duration: 1.5 }, 0.2);
      tl.fromTo(roleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 0.8);
      tl.fromTo(bodyRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1 }, 1.2);
      tl.fromTo(statsRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 1.7);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      <div
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#080808" }}
      >
        {/* Watermark - positioned to not interfere with content */}
        <span
          ref={watermarkRef}
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 font-bold text-[#f0f0f0] select-none pointer-events-none whitespace-nowrap opacity-0"
          style={{ fontSize: "clamp(7rem,20vw,16rem)", letterSpacing: "-0.05em", lineHeight: 1 }}
          aria-hidden
        >
          VECTOR
        </span>

        <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.04)]" />

        {/* Content — constrained height so nothing clips */}
        <div
          className="relative z-10 flex flex-col justify-center"
          style={{ padding: "0 clamp(1.5rem,6vw,6rem)", maxWidth: "860px" }}
        >
          <span ref={labelRef} className="label block mb-8 opacity-0">
            02 - VECTOR AI
          </span>

          <h2
            ref={titleRef}
            className="font-bold leading-none tracking-[-0.04em] text-[#f0f0f0] mb-6 opacity-0"
            style={{ fontSize: "clamp(3rem,8vw,6.5rem)" }}
          >
            From the
            <br />
            <span className="text-[#6366f1]">beginning.</span>
          </h2>

          {/* Role progression */}
          <div ref={roleRef} className="mb-7 opacity-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-6 bg-[rgba(255,255,255,0.15)]" />
              <span className="text-[#555] text-xs tracking-[0.12em] uppercase font-medium">
                Sep 2023 - Present
              </span>
            </div>
            <div className="flex items-center gap-3 pl-9 flex-wrap">
              <span className="text-[#888] text-sm font-medium">PRD Officer</span>
              <span className="text-[#333] text-xs">-&gt;</span>
              <span className="text-[#f0f0f0] text-sm font-semibold">Engineering Lead</span>
              <span className="text-[#333] mx-1">·</span>
              <span className="text-[#555] text-xs tracking-wide">Islamabad &amp; Abu Dhabi</span>
            </div>
          </div>

          {/* Body */}
          <p
            ref={bodyRef}
            className="text-[clamp(0.9rem,1.5vw,1.1rem)] text-[#777] leading-[1.75] max-w-[580px] mb-8 opacity-0"
          >
            Was there before the stages, the team, and the titles. Started as a
            product researcher building AI-centric MVPs from nothing, grew into
            leading the engineering division - sprint ownership, architecture
            decisions, code quality, and a team of{" "}
            <span className="text-[#aaa]">~10 engineers</span> shipping across
            multiple client portfolios. Represented VECTOR AI at GDG DevFest
            AI, Future Fest, and NUST.
          </p>

          {/* Stats - horizontal, never clips */}
          <div
            ref={statsRef}
            className="flex items-center gap-8 opacity-0 flex-wrap"
          >
            {highlights.map((h, i) => (
              <div key={h.label} className="flex items-baseline gap-2">
                <span className="font-bold text-[1.75rem] leading-none tracking-[-0.04em] text-[#f0f0f0]">
                  {h.value}
                </span>
                <span className="label">{h.label}</span>
                {i < highlights.length - 1 && (
                  <span className="ml-4 text-[#222] text-lg">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

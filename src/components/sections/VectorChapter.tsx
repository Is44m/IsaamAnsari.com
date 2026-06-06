"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "~10", label: "Engineers" },
  { value: "3+", label: "Years" },
];

export default function VectorChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressionRef = useRef<HTMLDivElement>(null);
  const body1Ref = useRef<HTMLParagraphElement>(null);
  const body2Ref = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.fromTo(labelRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8 }, 0);
      tl.fromTo(logoRef.current, { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.8 }, 0.1);
      tl.fromTo(titleRef.current, { opacity: 0, y: 36, skewY: 1 }, { opacity: 1, y: 0, skewY: 0, duration: 1.2 }, 0.15);
      tl.fromTo(progressionRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9 }, 0.6);
      tl.fromTo(body1Ref.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9 }, 0.9);
      tl.fromTo(body2Ref.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9 }, 1.1);
      tl.fromTo(statsRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 }, 1.4);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: "240vh" }}>
      <div
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#080808" }}
      >
        {/* Subtle left gradient bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3) 50%, transparent)" }}
        />

        <div
          className="relative z-10 flex flex-col justify-center"
          style={{ padding: "0 clamp(1.5rem,6vw,6rem)", maxWidth: "860px" }}
        >
          {/* Label */}
          <span ref={labelRef} className="label block mb-6 opacity-0">
            02 - VECTOR AI
          </span>

          {/* Logo placeholder */}
          <div ref={logoRef} className="mb-6 opacity-0">
            <div
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded border"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/VECTOR-Logo.png" alt="VECTOR AI" style={{ height: "16px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.55 }} />
            </div>
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            className="font-bold leading-none tracking-[-0.04em] text-[#f0f0f0] mb-5 opacity-0"
            style={{ fontSize: "clamp(2.75rem,7.5vw,6rem)" }}
          >
            Barely an Engineer
            <br />
            <span className="text-[#6366f1]">- Engineering Lead.</span>
          </h2>

          {/* Role progression */}
          <div ref={progressionRef} className="flex items-center gap-3 mb-7 opacity-0 flex-wrap">
            <div className="h-px w-6 bg-[rgba(255,255,255,0.12)]" />
            <span className="text-[#555] text-xs tracking-[0.1em] uppercase font-medium">Sep 2023 - Present</span>
            <span className="text-[#2a2a2a] text-xs">·</span>
            <span className="text-[#555] text-xs tracking-[0.1em] uppercase font-medium">Islamabad &amp; Abu Dhabi</span>
          </div>

          {/* Body */}
          <p
            ref={body1Ref}
            className="text-[clamp(0.875rem,1.5vw,1.05rem)] text-[#777] leading-[1.8] max-w-[580px] mb-3 opacity-0"
          >
            Joined in September 2023 — started building AI MVPs from scratch,
            working close to clients, figuring out what actually moves the needle.
            As the team and products scaled, so did the scope: leading sprints,
            owning architecture decisions, and keeping quality tight across
            multiple concurrent portfolios.
          </p>
          <p
            ref={body2Ref}
            className="text-[clamp(0.875rem,1.5vw,1.05rem)] text-[#777] leading-[1.8] max-w-[580px] mb-8 opacity-0"
          >
            Also the primary bridge between engineering and clients — project
            managing deliverables, maintaining communication, and making sure what
            ships matches what was promised. End-to-end ownership, not just code.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="flex items-center gap-10 opacity-0 flex-wrap">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-baseline gap-2.5">
                <span className="font-bold text-[1.875rem] leading-none tracking-[-0.04em] text-[#f0f0f0]">
                  {s.value}
                </span>
                <span className="label">{s.label}</span>
                {i < stats.length - 1 && (
                  <span className="ml-6 text-[#1e1e1e] text-base select-none">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

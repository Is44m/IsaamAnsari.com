"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tags = ["Healthcare", "Finance", "Banking", "Government"];

export default function TrilletChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressionRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const citationRef = useRef<HTMLDivElement>(null);

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
      tl.fromTo(bodyRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9 }, 0.9);
      tl.fromTo(tagsRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 1.2);
      tl.fromTo(citationRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 }, 1.5);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: "240vh" }}>
      <div
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#060608" }}
      >
        {/* Subtle right gradient bar */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.25) 50%, transparent)" }}
        />

        <div
          className="relative z-10 flex flex-col justify-center"
          style={{ padding: "0 clamp(1.5rem,6vw,6rem)", maxWidth: "860px" }}
        >
          {/* Label */}
          <span ref={labelRef} className="label block mb-6 opacity-0">
            03 - Trillet AI
          </span>

          {/* Logo placeholder */}
          <div ref={logoRef} className="mb-6 opacity-0">
            <div
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded border"
              style={{ borderColor: "rgba(99,102,241,0.15)", background: "rgba(99,102,241,0.04)" }}
            >
              {/* Replace src with actual logo */}
              {/* <img src="/logos/trillet-ai.svg" alt="Trillet AI" className="h-4 w-auto" /> */}
              <span className="text-xs text-[#444] tracking-[0.12em] font-medium uppercase">[ TRILLET AI LOGO ]</span>
            </div>
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            className="font-bold leading-none tracking-[-0.04em] text-[#f0f0f0] mb-5 opacity-0"
            style={{ fontSize: "clamp(2.75rem,7.5vw,6rem)" }}
          >
            Head of
            <br />
            <span className="text-[#6366f1]">Engineering.</span>
          </h2>

          {/* Role progression */}
          <div ref={progressionRef} className="mb-7 opacity-0">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="h-px w-6 bg-[rgba(99,102,241,0.3)]" />
              <span className="text-[#555] text-xs tracking-[0.1em] uppercase font-medium">Nov 2024 - Present</span>
              <span className="text-[#2a2a2a]">·</span>
              <span className="text-[#555] text-xs tracking-[0.1em] uppercase font-medium">Remote · Abu Dhabi</span>
            </div>
            {/* Transition line */}
            <div className="flex items-center gap-2.5 mt-2.5 pl-9 flex-wrap">
              <span className="text-[#3a3a3a] text-xs font-medium">Lead Software Engineer</span>
              <span className="text-[#2a2a2a] text-xs">-&gt;</span>
              <span className="text-[#6366f1] text-xs font-semibold tracking-wide">Head of Engineering</span>
              <span className="text-[#2a2a2a] text-xs">·</span>
              <span className="text-[#2a2a2a] text-xs">May 2026</span>
            </div>
          </div>

          {/* Body */}
          <p
            ref={bodyRef}
            className="text-[clamp(0.875rem,1.5vw,1.05rem)] text-[#777] leading-[1.8] max-w-[580px] mb-8 opacity-0"
          >
            Joined as Lead Software Engineer in November 2024, contributing to the
            architecture of an agentic AI communication platform with a voice-first
            focus. Stepped up to Head of Engineering in May 2026 — owning technical
            direction, team growth, and the systems that run in production for
            enterprise clients across healthcare, finance, banking, and government.
            Voice-first, built to scale, built to last.
          </p>

          {/* Industry tags */}
          <div ref={tagsRef} className="flex flex-wrap gap-2 mb-7 opacity-0">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  borderColor: "rgba(99,102,241,0.18)",
                  color: "rgba(99,102,241,0.8)",
                  background: "rgba(99,102,241,0.05)",
                  letterSpacing: "0.07em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Google Cloud citation */}
          <div ref={citationRef} className="opacity-0">
            <a
              href="https://cloud.google.com" /* Replace with actual article URL */
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group inline-flex items-center gap-3 text-[#444] hover:text-[#777] transition-colors duration-300"
            >
              <span
                className="text-[0.6rem] tracking-[0.18em] uppercase font-medium"
                style={{ color: "inherit" }}
              >
                [1]
              </span>
              <span className="text-xs tracking-wide" style={{ color: "inherit" }}>
                Featured by Google Cloud — case study on AI-powered telecommunications
              </span>
              <svg
                className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

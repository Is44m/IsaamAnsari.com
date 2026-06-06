"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const startTime = performance.now();
        const duration = 1400;
        let raf: number;
        const tick = (now: number) => {
          const p = Math.min((now - startTime) / duration, 1);
          const v = Math.round((1 - Math.pow(1 - p, 3)) * target);
          setDisplay(v > 0 ? `${v}${suffix}` : "");
          if (p < 1) raf = requestAnimationFrame(tick);
          else setDisplay(`${target}${suffix}`);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>{display || <span className="opacity-0">0</span>}</span>;
}

const stats = [
  { target: 3, suffix: "+", label: "Years building" },
  { target: 10, suffix: "+", label: "Engineers led" },
  { target: 2, suffix: "", label: "Companies shaped" },
];

export default function Arc() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      tl.fromTo(labelRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 },
        0
      );
      tl.fromTo(paraRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.4 },
        0.2
      );
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        1.0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: "180vh" }}>
      <div
        className="sticky top-0 h-screen-safe flex flex-col justify-center dot-grid overflow-hidden"
        style={{ backgroundColor: "#080808" }}
      >
        {/* Soft gradient fade at the top that blends from hero */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "120px",
            background: "linear-gradient(to bottom, rgba(8,8,8,0.95), transparent)",
            zIndex: 1,
          }}
        />

        <div
          className="relative z-10 flex flex-col justify-center"
          style={{ padding: "0 clamp(1.5rem,6vw,6rem)", maxWidth: "860px" }}
        >
          <span ref={labelRef} className="label block mb-8 opacity-0">
            01 - Overview
          </span>

          <p
            ref={paraRef}
            className="text-[clamp(1.2rem,2.3vw,1.75rem)] text-[#b0b0b0] font-normal leading-[1.55] tracking-[-0.015em] max-w-[780px] mb-14 opacity-0"
          >
            <span className="text-[#f0f0f0]">Sharp product instincts. Quality engineering. Fast delivery.</span>{" "}
            Three years in, across VECTOR AI and Trillet AI, the pattern has been
            consistent: understand the product deeply enough to know what actually
            matters, then build it right.{" "}
            <span className="text-[#f0f0f0]">
              The shift from product researcher to engineering lead wasn&apos;t a
              plan
            </span>{" "}
            - it&apos;s what happens when you stay close to the work long enough
            and take ownership of everything in front of you.{" "}
            <span className="text-[#f0f0f0]">Now I lead engineering at Trillet AI</span>
            {", "}building the agentic voice platform that enterprise clients in
            healthcare, finance, and government run on.
          </p>

          <div
            ref={statsRef}
            className="flex flex-wrap gap-x-12 gap-y-8 opacity-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-bold text-[2.25rem] leading-none tracking-[-0.04em] text-[#f0f0f0]">
                  <Counter target={s.target} suffix={s.suffix} />
                </span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule — separates arc from vector chapter */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />
      </div>
    </div>
  );
}

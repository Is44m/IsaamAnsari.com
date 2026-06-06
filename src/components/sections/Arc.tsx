"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="section-padding relative dot-grid">
      <span className="rule block mb-16" />

      <motion.span
        className="label block mb-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        01 - Overview
      </motion.span>

      <div className="max-w-[780px]">
        <motion.p
          className="text-[clamp(1.25rem,2.5vw,1.875rem)] text-[#b0b0b0] font-normal leading-[1.55] tracking-[-0.015em]"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease, delay: 0.1 }}
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
          <span className="text-[#f0f0f0]">
            Now I lead engineering at Trillet AI
          </span>
          {", "}building the agentic voice platform that enterprise clients in
          healthcare, finance, and government run on.
        </motion.p>
      </div>

      <motion.div
        className="mt-16 flex flex-wrap gap-x-12 gap-y-8"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-bold text-[2.25rem] leading-none tracking-[-0.04em] text-[#f0f0f0]">
              <Counter target={s.target} suffix={s.suffix} />
            </span>
            <span className="label">{s.label}</span>
          </div>
        ))}
      </motion.div>

      <span className="rule block mt-16" />
    </section>
  );
}

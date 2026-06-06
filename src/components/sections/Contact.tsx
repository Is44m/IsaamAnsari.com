"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const links = [
  { label: "Email", value: "isaama@trillet.ai", href: "mailto:isaama@trillet.ai" },
  { label: "LinkedIn", value: "in/isaam", href: "https://linkedin.com/in/isaam" },
  { label: "GitHub", value: "Is44m", href: "https://github.com/Is44m" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="section-padding relative">
      <span className="rule block mb-16" />

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-20">
        {/* Left: heading + booking CTA */}
        <div className="flex-1">
          <motion.span
            className="label block mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            04 - Connect
          </motion.span>

          <motion.h2
            className="font-bold leading-none tracking-[-0.04em] text-[#f0f0f0] mb-10"
            style={{ fontSize: "clamp(3rem,8vw,6.5rem)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.1 }}
          >
            Let&apos;s
            <br />
            <span className="text-[#6366f1]">connect.</span>
          </motion.h2>

          {/* Book a session */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
          >
            <p className="text-[#555] text-sm leading-[1.7] mb-5 max-w-[340px]">
              Have a project, role, or idea worth talking about? Book a session
              directly.
            </p>
            <a
              href="https://cal.com/isaama"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group inline-flex items-center gap-3 px-5 py-3 rounded border transition-all duration-300"
              style={{
                borderColor: "rgba(99,102,241,0.25)",
                background: "rgba(99,102,241,0.06)",
                color: "#6366f1",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.14)";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.06)";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)";
              }}
            >
              <span className="text-sm font-medium tracking-wide">Book a session</span>
              <svg
                className="w-3.5 h-3.5 -translate-x-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: links */}
        <motion.div
          className="flex flex-col gap-5 lg:pt-[5.5rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-5 text-[#666] hover:text-[#f0f0f0] transition-colors duration-300"
            >
              <span className="label w-16">{link.label}</span>
              <div className="h-px w-8 bg-[rgba(255,255,255,0.08)] group-hover:w-12 group-hover:bg-[rgba(99,102,241,0.5)] transition-all duration-300" />
              <span className="text-[0.9375rem] font-medium">{link.value}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="text-xs text-[#333] tracking-wide">© 2026 Isaam Ansari</span>
        <span className="text-xs text-[#222] tracking-wide">isaamansari.com</span>
      </motion.div>
    </section>
  );
}

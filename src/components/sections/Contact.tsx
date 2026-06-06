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

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        {/* Heading */}
        <div>
          <motion.span
            className="label block mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            04 - Connect
          </motion.span>

          <motion.h2
            className="font-bold leading-none tracking-[-0.04em] text-[#f0f0f0]"
            style={{ fontSize: "clamp(3rem,8vw,6.5rem)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.1 }}
          >
            Let&apos;s
            <br />
            <span className="text-[#6366f1]">connect.</span>
          </motion.h2>
        </div>

        {/* Links */}
        <motion.div
          className="flex flex-col gap-5"
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
        <span className="text-xs text-[#333] tracking-wide">
          © 2026 Isaam Ansari
        </span>
        <span className="text-xs text-[#222] tracking-wide">
          isaamansari.com
        </span>
      </motion.div>
    </section>
  );
}

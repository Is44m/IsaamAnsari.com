"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NavButton from "@/components/ui/NavButton";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Role = "SPEAKER" | "WORKSHOP" | "JUDGE" | "MODERATOR" | "DELEGATE";

const roleStyles: Record<Role, { color: string; bg: string; border: string }> = {
  SPEAKER:   { color: "#818cf8", bg: "rgba(99,102,241,0.08)",  border: "rgba(99,102,241,0.2)"  },
  WORKSHOP:  { color: "#34d399", bg: "rgba(52,211,153,0.07)",  border: "rgba(52,211,153,0.18)" },
  JUDGE:     { color: "#fbbf24", bg: "rgba(251,191,36,0.07)",  border: "rgba(251,191,36,0.2)"  },
  MODERATOR: { color: "#38bdf8", bg: "rgba(56,189,248,0.07)",  border: "rgba(56,189,248,0.18)" },
  DELEGATE:  { color: "#c084fc", bg: "rgba(192,132,252,0.07)", border: "rgba(192,132,252,0.18)"},
};

const appearances = [
  { name: "GDG DevFest AI", detail: "Presented VECTOR AI's V-Fit - first public look at the product", location: "Islamabad, Pakistan", year: "2023", role: "SPEAKER" as Role },
  { name: "NUST", detail: "Representing VECTOR AI at the national stage", location: "Islamabad, Pakistan", year: "2023", role: "SPEAKER" as Role },
  { name: "Future Fest", detail: "Representing VECTOR AI", location: "Islamabad, Pakistan", year: "2024", role: "SPEAKER" as Role },
  { name: "Huawei Seeds for the Future", detail: "Representing Pakistan - Tech4Good competition", location: "Tashkent, Uzbekistan", year: "2024", role: "DELEGATE" as Role },
  { name: "NASTP Alpha", detail: "Technical workshop on Trillet AI and voice automation", location: "Pakistan", year: "2024", role: "WORKSHOP" as Role },
  { name: "GDGoC GIKI", detail: "Voice AI workshop on Trillet, on invitation of GDGoC GIKI", location: "GIKI, Pakistan", year: "2025", role: "WORKSHOP" as Role },
  { name: "GDGoC Bahria University", detail: "Voice AI workshop, on invitation of GDGoC Bahria University", location: "Islamabad, Pakistan", year: "2025", role: "WORKSHOP" as Role },
  { name: "Trillet Voice AI Hackathon", detail: "Judge at the first Trillet-sponsored Voice AI Hackathon", location: "FAST Peshawar, Pakistan", year: "2025", role: "JUDGE" as Role },
  { name: "NaSCon '25", detail: "Panel moderator for the AI track at the National Solutions Convention", location: "FAST NUCES Islamabad, Pakistan", year: "2025", role: "MODERATOR" as Role },
];

export default function StagesStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      ref={ref}
      style={{ padding: "clamp(4rem,8vw,7rem) 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}
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
          <span className="label block mb-2">On stage</span>
          <p className="text-[#f0f0f0] text-[clamp(1.1rem,2vw,1.5rem)] font-semibold tracking-[-0.02em]">
            Events &amp; appearances
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavButton direction="left"  disabled={false} onClick={scrollPrev} />
          <NavButton direction="right" disabled={false} onClick={scrollNext} />
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #080808, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #080808, transparent)" }} />

        {/* Embla viewport */}
        <div ref={emblaRef} style={{ overflow: "hidden", padding: "0 clamp(1.5rem,6vw,6rem)" }}>
          {/* Embla container */}
          <div style={{ display: "flex", gap: "12px" }}>
            {appearances.map((a) => {
              const rs = roleStyles[a.role];
              return (
                <div
                  key={a.name}
                  style={{ flex: "0 0 260px", minWidth: 0 }}
                  className="flex flex-col"
                >
                  {/* Photo placeholder */}
                  <div
                    className="photo-placeholder w-full mb-3 relative"
                    style={{ aspectRatio: "16/10", background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "4px" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="label" style={{ color: "rgba(255,255,255,0.07)", letterSpacing: "0.18em" }}>IMAGE</span>
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded"
                      style={{ background: "rgba(8,8,8,0.85)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="label" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{a.year}</span>
                    </div>
                  </div>

                  <span
                    className="self-start px-2 py-0.5 rounded-full mb-2 text-[0.6rem] font-semibold tracking-[0.1em]"
                    style={{ color: rs.color, background: rs.bg, border: `1px solid ${rs.border}` }}
                  >
                    {a.role}
                  </span>

                  <p className="text-[#e0e0e0] text-xs font-semibold tracking-[-0.01em] mb-1 leading-snug">{a.name}</p>
                  <p className="text-[#444] text-xs leading-[1.6] mb-2">{a.detail}</p>
                  <span className="label" style={{ color: "rgba(255,255,255,0.1)" }}>{a.location}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

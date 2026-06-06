"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiFastify,
  SiPython, SiMongodb, SiRedis, SiDocker, SiTwilio,
  SiStripe, SiAuth0, SiVercel, SiGooglecloud, SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay },
  }),
};

type CraftItem =
  | { kind: "icon"; Icon: IconType; name: string }
  | { kind: "img";  src: string;   name: string };

const craftStack: CraftItem[] = [
  { kind: "icon", Icon: SiTypescript,  name: "TypeScript"    },
  { kind: "icon", Icon: SiReact,       name: "React"         },
  { kind: "icon", Icon: SiNextdotjs,   name: "Next.js"       },
  { kind: "icon", Icon: SiNodedotjs,   name: "Node.js"       },
  { kind: "icon", Icon: SiFastify,     name: "Fastify"       },
  { kind: "icon", Icon: SiPython,      name: "Python"        },
  { kind: "icon", Icon: SiMongodb,     name: "MongoDB"       },
  { kind: "icon", Icon: SiRedis,       name: "Redis"         },
  { kind: "icon", Icon: SiDocker,      name: "Docker"        },
  { kind: "icon", Icon: SiGooglecloud, name: "Google Cloud"  },
  { kind: "icon", Icon: SiTwilio,      name: "Twilio"        },
  // Drop aws.svg, telnyx.svg, inngest.svg into /public — they'll appear automatically
  { kind: "img",  src: "/aws.svg",     name: "AWS"           },
  { kind: "img",  src: "/telnyx.svg",  name: "Telnyx"        },
  { kind: "img",  src: "/inngest.svg", name: "Inngest"       },
  { kind: "icon", Icon: SiStripe,      name: "Stripe"        },
  { kind: "icon", Icon: SiAuth0,       name: "Auth0"         },
  { kind: "icon", Icon: SiVercel,      name: "Vercel"        },
  { kind: "icon", Icon: SiTailwindcss, name: "Tailwind"      },
];

const doubled = [...craftStack, ...craftStack];

function CraftIcon({ item }: Readonly<{ item: CraftItem }>) {
  if (item.kind === "icon") {
    return <item.Icon size={13} />;
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={item.src}
      alt={item.name}
      width={13}
      height={13}
      style={{ width: 13, height: 13, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.7 }}
    />
  );
}

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!scrollIndicatorRef.current) return;
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      scrollIndicatorRef.current.style.opacity = String(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen-safe w-full overflow-hidden flex flex-col">
      {/* Particle field */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
      />

      {/* Top bar */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-[clamp(1.5rem,6vw,6rem)] pt-10 flex-none"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
      >
        <span className="label">Abu Dhabi, UAE</span>
        <span className="label flex items-center gap-2">
          <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
          {"Building @ Trillet AI"}
        </span>
      </motion.div>

      {/* Spacer — lets particles breathe */}
      <div className="flex-1" />

      {/* Name + headshot */}
      <div className="relative z-10 flex items-end justify-between px-[clamp(1.5rem,6vw,6rem)] pb-8 gap-8 flex-none">
        <div className="flex-1 min-w-0">
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-bold text-[clamp(4rem,12vw,10rem)] leading-[0.88] tracking-[-0.04em] text-[#f0f0f0]"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
            >
              Isaam
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="font-bold text-[clamp(4rem,12vw,10rem)] leading-[0.88] tracking-[-0.04em] text-[#f0f0f0]"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
            >
              Ansari
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
          >
            <div className="h-px w-12 bg-[rgba(255,255,255,0.2)]" />
            <p className="text-[clamp(0.85rem,1.4vw,1.05rem)] text-[#888] font-normal tracking-wide">
              Product &amp; engineering leadership
            </p>
          </motion.div>
        </div>

        {/* Headshot — md+ only */}
        <motion.div
          className="hidden md:block flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.7 }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(140px, 14vw, 200px)",
              aspectRatio: "3/4",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Headshot.png"
              alt="Isaam Ansari"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Craft strip — anchored to bottom of hero */}
      <motion.div
        className="relative z-10 flex-none border-t overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: "clamp(1.5rem,6vw,6rem)", background: "linear-gradient(to right, #080808, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: "80px", background: "linear-gradient(to left, #080808, transparent)" }}
        />

        <div className="flex items-center" style={{ height: "42px" }}>
          {/* Label */}
          <div
            className="flex items-center gap-3 flex-shrink-0 z-20"
            style={{ paddingLeft: "clamp(1.5rem,6vw,6rem)" }}
          >
            <span className="label" style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.2em" }}>
              CRAFT
            </span>
            <div className="w-px h-3 flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Scrolling icons */}
          <div className="flex-1 overflow-hidden">
            <div
              className="marquee-track flex items-center flex-shrink-0"
              style={{ animationDuration: "50s" }}
            >
              {doubled.map((item, i) => (
                <span key={`${item.name}-${i}`} className="flex items-center flex-shrink-0">
                  <span
                    className="flex items-center gap-2 px-4 whitespace-nowrap"
                    style={{ color: "rgba(255,255,255,0.22)" }}
                  >
                    <CraftIcon item={item} />
                    <span className="text-[0.6rem] font-medium tracking-[0.12em] uppercase">
                      {item.name}
                    </span>
                  </span>
                  <span className="w-px h-2.5 flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)" }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-14 right-[clamp(1.5rem,6vw,6rem)] z-10 lg:hidden flex flex-col items-center gap-2"
      >
        <span className="label" style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}>scroll</span>
        <div className="w-px h-10 bg-[rgba(255,255,255,0.1)] relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[rgba(99,102,241,0.6)]"
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

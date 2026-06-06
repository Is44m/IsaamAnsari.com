"use client";

import {
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiFastify,
  SiPython, SiMongodb, SiDocker, SiTwilio, SiStripe,
  SiTailwindcss, SiAuth0, SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

const stack: { Icon: IconType; name: string }[] = [
  { Icon: SiTypescript,         name: "TypeScript" },
  { Icon: SiReact,              name: "React" },
  { Icon: SiNextdotjs,          name: "Next.js" },
  { Icon: SiNodedotjs,          name: "Node.js" },
  { Icon: SiFastify,            name: "Fastify" },
  { Icon: SiPython,             name: "Python" },
  { Icon: SiMongodb,            name: "MongoDB" },
  { Icon: SiVercel,             name: "Vercel" },
  { Icon: SiDocker,             name: "Docker" },
  { Icon: SiTwilio,             name: "Twilio" },
  { Icon: SiStripe,             name: "Stripe" },
  { Icon: SiAuth0,              name: "Auth0" },
  { Icon: SiTailwindcss,        name: "Tailwind" },
];

const doubled = [...stack, ...stack];

export default function TechStrip() {
  return (
    <div
      className="relative overflow-hidden border-y"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080808, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080808, transparent)" }}
      />

      <div className="flex items-center py-3 select-none">
        <div className="marquee-track flex items-center flex-shrink-0">
          {doubled.map(({ Icon, name }, i) => (
            <span key={`${name}-${i}`} className="flex items-center flex-shrink-0">
              <span
                className="flex items-center gap-2 px-5"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                <Icon size={14} />
                <span
                  className="text-[0.625rem] font-medium tracking-[0.14em] uppercase whitespace-nowrap"
                >
                  {name}
                </span>
              </span>
              <span
                className="w-px h-3 flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

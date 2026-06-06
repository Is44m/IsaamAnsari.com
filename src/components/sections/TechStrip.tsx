"use client";

const items = [
  "TypeScript", "React", "Next.js", "Node.js", "Fastify",
  "Python", "MongoDB", "AWS", "Docker", "LiveKit",
  "Twilio", "Stripe", "Auth0", "LLMs", "GSAP", "Tailwind",
];

export default function TechStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080808, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080808, transparent)" }}
      />

      <div className="flex items-center gap-0 py-3.5 select-none">
        <div className="marquee-track flex items-center gap-0 flex-shrink-0">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-0 flex-shrink-0"
            >
              <span
                className="text-[0.6875rem] font-medium tracking-[0.14em] uppercase whitespace-nowrap px-5"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {item}
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

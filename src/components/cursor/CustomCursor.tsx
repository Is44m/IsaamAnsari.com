"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let visible = false;
    let hovering = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
      }

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onEnter = () => {
      hovering = true;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(1.8)`;
      ring.style.borderColor = "rgba(99,102,241,0.7)";
      ring.style.background = "rgba(99,102,241,0.06)";
    };

    const onLeave = () => {
      hovering = false;
      ring.style.borderColor = "rgba(240,240,240,0.35)";
      ring.style.background = "transparent";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      const scale = hovering ? 1.8 : 1;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${scale})`;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    document.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll("a, button, [data-cursor-hover]");
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[5px] h-[5px] rounded-full bg-[#f0f0f0] pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[28px] h-[28px] rounded-full border border-[rgba(240,240,240,0.35)] pointer-events-none z-[9999] opacity-0"
        style={{
          willChange: "transform",
          transition: "transform 0s, border-color 0.25s, background 0.25s, opacity 0.3s",
        }}
      />
    </>
  );
}

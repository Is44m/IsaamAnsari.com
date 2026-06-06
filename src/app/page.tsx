import Hero from "@/components/hero/Hero";
import Arc from "@/components/sections/Arc";
import TechStrip from "@/components/sections/TechStrip";
import VectorChapter from "@/components/sections/VectorChapter";
import StagesStrip from "@/components/sections/StagesStrip";
import TrilletChapter from "@/components/sections/TrilletChapter";
import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Arc />
      <TechStrip />
      <VectorChapter />
      <StagesStrip />
      <TrilletChapter />
      <Testimonial />
      <Contact />
    </main>
  );
}

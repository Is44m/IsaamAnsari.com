import Hero from "@/components/hero/Hero";
import Arc from "@/components/sections/Arc";
import VectorChapter from "@/components/sections/VectorChapter";
import TrilletChapter from "@/components/sections/TrilletChapter";
import StagesStrip from "@/components/sections/StagesStrip";
import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Arc />
      <VectorChapter />
      <TrilletChapter />
      <StagesStrip />
      <Testimonial />
      <Contact />
    </main>
  );
}

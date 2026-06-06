import Hero from "@/components/hero/Hero";
import Arc from "@/components/sections/Arc";
import VectorChapter from "@/components/sections/VectorChapter";
import TrilletChapter from "@/components/sections/TrilletChapter";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Arc />
      <VectorChapter />
      <TrilletChapter />
      <Contact />
    </main>
  );
}

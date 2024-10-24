import Footer from "@/components/footer/footer";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Section1 from "@/components/home/section-1";
import Section2 from "@/components/home/section-2";
import Section3 from "@/components/home/section-3";
import Section4 from "@/components/home/section-4";

import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <div className="">
        <Navbar />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

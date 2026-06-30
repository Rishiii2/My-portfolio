"use client";
import Nav          from "@/components/Nav";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Skills       from "@/components/Skills";
import Experience   from "@/components/Experience";
import Projects     from "@/components/Projects";
import Hackathons   from "@/components/Hackathons";
import Education    from "@/components/Education";
import Certifications from "@/components/Certifications";
import Arts         from "@/components/Arts";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* ambient glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-amber/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan/4 blur-[100px]" />
      </div>

      <Nav />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hackathons />
        <Education />
        <Certifications />
        <Arts />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

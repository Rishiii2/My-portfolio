import Chrome from "@/components/Chrome";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Stack from "@/components/Stack";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Chrome />
      <Nav />
      <main>
        <Hero />
        <Research />
        <Experience />
        <Projects />
        <Hackathons />
        <Stack />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

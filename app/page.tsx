// app/page.tsx
import Hero from "@/components/Hero";// Atau langsung '../components/Hero' jika tidak di subfolder (sections)
import About from "@/components/About";
// import Skills from './(sections)/skills';
import Projects from "@/components/Projects";
import Contact from "@/components/ContactForm";
import CareerJourneySection from "@/components/Career";
// Anda juga bisa menempatkan komponen-komponen ini di folder /components jika lebih suka

export default function HomePage() {
  return (
    <>
      {/* Setiap section bisa memiliki wrapper div dengan ID untuk react-scroll */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
      <CareerJourneySection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};
"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

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
      <section id="contact" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="mailto:example@email.com"
            className="inline-flex items-center gap-2 bg-purple-600 px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
          >
            Get in Touch
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
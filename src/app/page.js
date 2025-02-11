"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-semibold mb-4">Project {project}</h3>
                <p className="text-zinc-400 mb-6">
                  A brief description of your project. Highlight the key features and technologies used.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    View Project →
                  </a>
                  <a href="#" className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
                    Source Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
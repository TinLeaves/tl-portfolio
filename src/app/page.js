"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Steven Lai
                </h1>
                <p className="text-xl text-zinc-400">Full-Stack Developer | Data Analytics Specialist</p>
              </div>
              <p className="text-lg text-zinc-300 max-w-xl">
                Building the digital experiences with modern web technologies.
                Specialized in creating responsive, performant applications with React
                and Next.js.
              </p>
              <div className="flex gap-6">
                <button
                  className="group flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="flex items-center gap-2 border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900 transition-colors"
                >
                  Download CV
                </button>
              </div>
              <div className="flex gap-6 text-zinc-400">
                <a href="https://github.com" className="hover:text-purple-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:" className="hover:text-purple-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Section with Profile Image */}
            <div className="flex justify-center lg:center mt-12 mb-12">
              <div className="w-120 h-120 rounded-full overflow-hidden space-y-8">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  width={360}
                  height={360}
                  className="object-cover"
                />
              </div>
            </div>

          </div>


          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-zinc-500" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-16 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-400">About Me</h2>
              <p className="text-lg text-zinc-300 mt-4 max-w-2xl">
              </p>
            </div>
          </div>

          {/* Tools and Frameworks Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="/images/react-logo.svg" // Your logo path
                  alt="React"
                  className="w-16 h-16 mb-2"
                />
                <span className="text-zinc-400">React</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/nextjs-logo.svg" // Your logo path
                  alt="Next.js"
                  className="w-16 h-16 mb-2"
                />
                <span className="text-zinc-400">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/tailwind-logo.svg" // Your logo path
                  alt="Tailwind CSS"
                  className="w-16 h-16 mb-2"
                />
                <span className="text-zinc-400">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/nodejs-logo.svg" // Your logo path
                  alt="Node.js"
                  className="w-16 h-16 mb-2"
                />
                <span className="text-zinc-400">Node.js</span>
              </div>
              {/* Add more frameworks/tools as needed */}
            </div>
          </div>
        </div>
      </section>


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
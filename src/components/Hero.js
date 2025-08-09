import Image from "next/image";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

const TypewriterText = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16">
          {/* Profile Image - Appears first on mobile */}
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl group-hover:ring-purple-400/30 transition-all duration-500">
                <Image
                  src="/profile.jpg"
                  alt="Steven Lai - Full-Stack Developer Profile Picture"
                  width={320}
                  height={320}
                  priority
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight leading-tight">
                Steven Lai
              </h1>
              <div className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 font-light tracking-wide min-h-[2.5rem]">
                <TypewriterText 
                  texts={[
                    "Full-Stack Developer",
                    "AI Integration Specialist", 
                    "Modern Web Developer",
                    "React & Next.js Expert"
                  ]}
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={1500}
                />
              </div>
              <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-500 font-medium">
                Specializing in AI Integration & Modern Web Applications
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-2xl hover:from-purple-400 hover:to-pink-400 transition-all duration-500 text-base font-medium shadow-lg hover:shadow-purple-500/30 hover:shadow-2xl hover:scale-105 transform overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 relative z-10" />
              </a>
              <a
                href="/Steven_Lai_Resume.pdf"
                target="_blank"
                className="group relative flex items-center justify-center gap-3 border border-zinc-300 dark:border-zinc-600 px-8 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-zinc-800/50 hover:border-purple-400/50 transition-all duration-500 text-base backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-purple-500/10"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative z-10 group-hover:text-purple-200 transition-colors duration-300">Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 text-zinc-500 dark:text-zinc-400 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/TinLeaves" target="_blank"
                className="group hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 p-3 hover:bg-purple-500/10 rounded-xl border border-transparent hover:border-purple-500/20 backdrop-blur-sm"
              >
                <IoLogoGithub className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/steven-lai-sl1/" target="_blank"
                className="group hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 p-3 hover:bg-purple-500/10 rounded-xl border border-transparent hover:border-purple-500/20 backdrop-blur-sm"
              >
                <IoLogoLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:tinleaves.0@gmail.com"
                className="group hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 p-3 hover:bg-purple-500/10 rounded-xl border border-transparent hover:border-purple-500/20 backdrop-blur-sm"
              >
                <IoMailSharp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

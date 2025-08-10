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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 sm:pt-20 lg:pt-16 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 lg:gap-16">
          {/* Profile Image - Appears first on mobile */}
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl group-hover:ring-purple-400/30 transition-all duration-500">
                <Image
                  src="/profile.jpg"
                  alt="Steven Lai - Full-Stack Developer Profile Picture"
                  width={320}
                  height={320}
                  priority
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
                Steven Lai
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-300 font-light tracking-wide min-h-[2rem] sm:min-h-[2.5rem]">
                <TypewriterText
                  texts={[
                    "Crafting End-to-End Web Solutions",
                    "Designing Scalable Database Architectures",
                    "Bringing Data to Life in the Browser",
                    "Building Modern Apps from Backend to Frontend"
                  ]}
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={1500}
                />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-zinc-500 dark:text-zinc-500 font-medium px-2 sm:px-0">
                 Full-stack developer with a strong foundation in database design and integration.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start pt-2 sm:pt-4 px-4 sm:px-0">
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-teal-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:from-blue-400 hover:to-teal-400 transition-all duration-500 text-sm sm:text-base font-medium shadow-lg hover:shadow-blue-500/30 hover:shadow-2xl hover:scale-105 transform overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 relative z-10" />
              </a>
              <a
                href="/Steven_Lai_Resume.pdf"
                target="_blank"
                className="group relative flex items-center justify-center gap-2 sm:gap-3 border border-zinc-300 dark:border-zinc-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-100 dark:hover:bg-zinc-800/50 hover:border-blue-400/50 transition-all duration-500 text-sm sm:text-base backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative z-10 group-hover:text-blue-200 transition-colors duration-300">Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 text-zinc-500 dark:text-zinc-400 justify-center lg:justify-start pt-1 sm:pt-2">
              <a
                href="https://github.com/TinLeaves" target="_blank"
                className="group hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 p-2 sm:p-3 hover:bg-blue-500/10 rounded-lg sm:rounded-xl border border-transparent hover:border-blue-500/20 backdrop-blur-sm"
              >
                <IoLogoGithub className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/steven-lai-sl1/" target="_blank"
                className="group hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 p-2 sm:p-3 hover:bg-blue-500/10 rounded-lg sm:rounded-xl border border-transparent hover:border-blue-500/20 backdrop-blur-sm"
              >
                <IoLogoLinkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:tinleaves.0@gmail.com"
                className="group hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 p-2 sm:p-3 hover:bg-blue-500/10 rounded-lg sm:rounded-xl border border-transparent hover:border-blue-500/20 backdrop-blur-sm"
              >
                <IoMailSharp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

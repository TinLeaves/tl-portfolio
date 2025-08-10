import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import Button from './ui/Button';
import SocialLinks from './ui/SocialLinks';
import TypewriterText from './ui/TypewriterText';
import { PERSONAL_INFO } from '../utils/constants';


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
                {PERSONAL_INFO.name}
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
              <Button
                href="#projects"
                variant="primary"
                size="medium"
                icon={ArrowRight}
                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl"
              >
                View Projects
              </Button>
              <Button
                href={PERSONAL_INFO.resume}
                target="_blank"
                variant="secondary"
                size="medium"
                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="text-zinc-500 dark:text-zinc-400 justify-center lg:justify-start pt-1 sm:pt-2">
              <SocialLinks variant="horizontal" size="medium" className="justify-center lg:justify-start" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

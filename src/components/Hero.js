import Image from "next/image";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-12">
          {/* Profile Image - Appears first on mobile */}
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-purple-500/20">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Steven Lai
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400">
                Full-Stack Developer | Data Analytics Specialist
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <button className="group flex items-center justify-center gap-2 bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 text-sm sm:text-base">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900 transition-all duration-300 text-sm sm:text-base">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-zinc-400 justify-center lg:justify-start">
              <a 
                href="https://github.com" 
                className="hover:text-purple-400 transition-colors p-2 hover:bg-purple-500/10 rounded-full"
              >
                <IoLogoGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="hover:text-purple-400 transition-colors p-2 hover:bg-purple-500/10 rounded-full"
              >
                <IoLogoLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="mailto:" 
                className="hover:text-purple-400 transition-colors p-2 hover:bg-purple-500/10 rounded-full"
              >
                <IoMailSharp className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-zinc-500" />
        </div>
      </div>
    </section>
  );
}
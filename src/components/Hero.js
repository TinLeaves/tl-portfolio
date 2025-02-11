import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";

export default function Hero(){
    return(
      <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-8 px-14">
            <div>
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Steven Lai
              </h1>
              <p className="text-xl text-zinc-400">Full-Stack Developer | Data Analytics Specialist</p>
            </div>
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
                <IoLogoGithub size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
                <IoLogoLinkedin size={24} />
              </a>
              <a href="mailto:" className="hover:text-purple-400 transition-colors">
                <IoMailSharp size={24} />
              </a>
            </div>
          </div>
    
          {/* Right Section with Profile Image */}
          <div className="flex justify-center lg:justify-end my-12 px-14">
            <div className="w-100 h-100 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={320}
                height={320}
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
    
    );
}
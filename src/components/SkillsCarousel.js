import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaNodeJs, FaJava, FaReact, FaBootstrap, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiPostgresql, SiKotlin, SiR, SiExpress, SiJquery, SiNpm, SiJira } from "react-icons/si";

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
    { Icon: SiPython, name: "Python", color: "text-yellow-500" },
    { Icon: FaJava, name: "Java", color: "text-red-500" },
    { Icon: SiKotlin, name: "Kotlin", color: "text-purple-500" },
    { Icon: SiR, name: "R", color: "text-blue-600" },
    { Icon: FaReact, name: "React", color: "text-cyan-400" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-blue-500" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-400" },
    { Icon: SiJquery, name: "jQuery", color: "text-blue-500" },
    { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: FaGitAlt, name: "Git", color: "text-red-400" },
    { Icon: FaFigma, name: "Figma", color: "text-pink-500" },
    { Icon: SiJira, name: "Jira", color: "text-blue-500" },
    { Icon: SiNpm, name: "npm", color: "text-red-500" },
  ];

  const skillsPerPage = 5;
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const getCurrentSkills = () => {
    const start = currentIndex * skillsPerPage;
    return skills.slice(start, start + skillsPerPage);
  };

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextPage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
          Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Skills Display */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8 sm:p-10 relative overflow-hidden group hover:border-purple-400/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative z-10">
              {/* Skills Grid */}
              <div className="grid grid-cols-5 gap-8 sm:gap-12">
                {getCurrentSkills().map((skill, index) => (
                  <div key={`${currentIndex}-${index}`} className="flex flex-col items-center group/skill hover:scale-110 transition-all duration-300">
                    <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 group-hover/skill:border-purple-400/30 shadow-xl group-hover/skill:shadow-2xl group-hover/skill:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm">
                      <skill.Icon className={`w-10 h-10 sm:w-14 sm:h-14 ${skill.color} group-hover/skill:scale-110 transition-transform duration-300`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    </div>
                    <span className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-zinc-300 group-hover/skill:text-purple-300 transition-colors duration-300 text-center tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={prevPage}
              className="p-3 rounded-full bg-zinc-800/50 border border-zinc-700 hover:border-purple-500 text-zinc-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-purple-500 shadow-lg shadow-purple-500/50'
                      : 'bg-zinc-600 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-3 rounded-full bg-zinc-800/50 border border-zinc-700 hover:border-purple-500 text-zinc-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
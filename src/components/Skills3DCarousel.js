import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaNodeJs, FaJava, FaReact, FaBootstrap, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiPostgresql, SiKotlin, SiR, SiExpress, SiJquery, SiNpm, SiJira } from "react-icons/si";

export default function Skills3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
    { Icon: SiPython, name: "Python", color: "text-yellow-500" },
    { Icon: FaJava, name: "Java", color: "text-red-500" },
    { Icon: FaReact, name: "React", color: "text-cyan-400" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-blue-500" },
    { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: FaGitAlt, name: "Git", color: "text-red-400" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-400" },
    { Icon: SiJquery, name: "jQuery", color: "text-blue-500" },
    { Icon: FaFigma, name: "Figma", color: "text-pink-500" },
    { Icon: SiKotlin, name: "Kotlin", color: "text-purple-500" },
    { Icon: SiR, name: "R", color: "text-blue-600" },
    { Icon: SiJira, name: "Jira", color: "text-blue-500" },
    { Icon: SiNpm, name: "npm", color: "text-red-500" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSkills = () => {
    const visibleCount = 5;
    const visibleSkills = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i - 2 + skills.length) % skills.length;
      visibleSkills.push({
        ...skills[index],
        position: i
      });
    }
    
    return visibleSkills;
  };

  const getSkillStyle = (position) => {
    const styles = {
      0: { // Far left
        transform: 'translateX(-280px) translateZ(-150px) scale(0.5) rotateY(60deg)',
        opacity: 0.3,
        zIndex: 1,
        filter: 'blur(1px)'
      },
      1: { // Left
        transform: 'translateX(-140px) translateZ(-75px) scale(0.75) rotateY(35deg)',
        opacity: 0.6,
        zIndex: 2,
        filter: 'blur(0.5px)'
      },
      2: { // Center (largest)
        transform: 'translateX(0) translateZ(0px) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 3,
        filter: 'blur(0px)'
      },
      3: { // Right
        transform: 'translateX(140px) translateZ(-75px) scale(0.75) rotateY(-35deg)',
        opacity: 0.6,
        zIndex: 2,
        filter: 'blur(0.5px)'
      },
      4: { // Far right
        transform: 'translateX(280px) translateZ(-150px) scale(0.5) rotateY(-60deg)',
        opacity: 0.3,
        zIndex: 1,
        filter: 'blur(1px)'
      }
    };
    
    return styles[position] || {};
  };

  return (
    <section id="skills" className="py-16 sm:py-24 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
            Technical Skills
          </h2>
        </div>
        
        <div className={`transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          
          {/* 3D Carousel Container */}
          <div className="relative h-96 flex items-center justify-center" style={{ perspective: '1200px', perspectiveOrigin: 'center center' }}>
            <div className="relative w-full max-w-5xl" style={{ transformStyle: 'preserve-3d' }}>
              {getVisibleSkills().map((skill, index) => {
                const style = getSkillStyle(skill.position);
                const isCenter = skill.position === 2;
                
                return (
                  <div
                    key={`${skill.name}-${currentIndex}-${skill.position}`}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                      isCenter ? 'cursor-pointer' : ''
                    }`}
                    style={{
                      ...style,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className={`group flex flex-col items-center ${
                      isCenter ? 'hover:scale-105' : ''
                    } transition-transform duration-300`}>
                      <div className={`relative rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                        isCenter 
                          ? 'p-12 bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 border border-gray-200 dark:border-zinc-600 shadow-2xl group-hover:from-blue-50 group-hover:to-teal-50 dark:group-hover:from-blue-950/50 dark:group-hover:to-teal-950/50 group-hover:border-blue-400/50 group-hover:shadow-blue-500/25' 
                          : skill.position === 1 || skill.position === 3 
                            ? 'p-10 bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-zinc-800/90 dark:to-zinc-900/90 border border-gray-300/50 dark:border-zinc-700/50 shadow-lg' 
                            : 'p-8 bg-gradient-to-br from-white/70 to-gray-200/70 dark:from-zinc-800/70 dark:to-zinc-900/70 border border-gray-400/30 dark:border-zinc-700/30 shadow-md'
                      }`} style={{
                        boxShadow: isCenter 
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                          : skill.position === 1 || skill.position === 3
                            ? '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                            : '0 4px 15px rgba(0, 0, 0, 0.1)'
                      }}>
                        {isCenter && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
                        )}
                        <skill.Icon className={`${skill.color} transition-transform duration-300 ${
                          isCenter 
                            ? 'w-16 h-16 group-hover:scale-110' 
                            : 'w-12 h-12'
                        }`} />
                      </div>
                      <span className={`mt-4 font-medium text-center transition-all duration-300 ${
                        isCenter 
                          ? 'text-lg text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-300' 
                          : 'text-sm text-zinc-600 dark:text-zinc-400'
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 gap-8">
            <button
              onClick={prevSlide}
              className="group p-4 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-blue-500/20 hover:border-blue-500/30 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            {/* Skill Indicator Dots */}
            <div className="flex space-x-2">
              {skills.slice(0, Math.min(skills.length, 8)).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentIndex
                      ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                      : 'bg-zinc-400 dark:bg-zinc-600 hover:bg-blue-500 dark:hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="group p-4 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-blue-500/20 hover:border-blue-500/30 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Center skill name display */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
              <span className="text-blue-500">Focus:</span> {skills[currentIndex]?.name}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
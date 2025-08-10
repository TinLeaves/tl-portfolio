import { useState, useEffect, useRef } from 'react';
import { FaNodeJs, FaJava, FaReact, FaBootstrap, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiPostgresql, SiKotlin, SiR, SiExpress, SiJquery, SiNpm, SiJira } from "react-icons/si";

export default function SkillsGrid() {
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

  const allSkills = [
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

  return (
    <section id="skills" className="py-16 sm:py-24" ref={sectionRef}>
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
        
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          
          {/* Main Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
            {allSkills.map((skill, skillIndex) => (
              <div 
                key={skill.name}
                className={`group flex flex-col items-center transition-all duration-700 hover:scale-110 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + skillIndex * 50}ms` }}
              >
                <div className="relative p-6 lg:p-8 rounded-2xl bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-teal-500/10 group-hover:border-blue-400/30 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500 backdrop-blur-sm overflow-hidden w-full aspect-square flex items-center justify-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
                  <skill.Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <span className="mt-3 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
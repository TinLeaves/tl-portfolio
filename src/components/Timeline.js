import { Calendar, MapPin, ExternalLink, Award, Code, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const TimelineItem = ({ experience, index, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`relative group transition-all duration-700 hover:scale-105 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms` // Stagger the animations
      }}
    >
    {/* Timeline Line - Only show if not the last item */}
    {!isLast && (
      <div className="absolute left-6 top-12 w-0.5 transition-all duration-500 bg-zinc-300 dark:bg-zinc-600/50 group-hover:bg-gradient-to-b group-hover:from-blue-500/50 group-hover:to-teal-500/50" style={{ height: 'calc(100% - 1rem)' }}></div>
    )}
    
    {/* Timeline Node */}
    <div className="absolute left-5 top-6 w-3 h-3 rounded-full transition-all duration-500 z-10 bg-zinc-400 dark:bg-zinc-600 group-hover:bg-blue-500 group-hover:shadow-md group-hover:shadow-blue-500/30"></div>
    
    {/* Content Card */}
    <div className="ml-16 p-6 rounded-xl border transition-all duration-500 bg-white dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-700 group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-teal-500/10 group-hover:border-blue-400/30 group-hover:shadow-xl group-hover:shadow-blue-500/20">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold transition-colors duration-300 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
            {experience.role}
          </h3>
          <p className="text-sm font-medium transition-colors duration-300 text-zinc-600 dark:text-zinc-300 group-hover:text-teal-600 dark:group-hover:text-teal-300">
            {experience.company}
          </p>
        </div>
        <div className="p-2 rounded-lg transition-all duration-300 bg-gray-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-300">
          {experience.icon}
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span>{experience.location}</span>
        </div>
      </div>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
        {experience.description}
      </p>
      
      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-2 py-1 text-xs rounded-full transition-all duration-300 bg-gray-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-gray-300 dark:border-zinc-700 group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:border-blue-500/30"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="text-xs space-y-1 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300">
          {experience.achievements.map((achievement, achievementIndex) => (
            <div key={achievementIndex} className="flex items-start gap-2">
              <Award className="w-3 h-3 mt-0.5 flex-shrink-0 text-yellow-500" />
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default function Timeline() {

  const experiences = [
    {
      role: "Full-Stack Developer (Practicum)",
      company: "PrevueHR",
      period: "September 2024 – December 2024",
      location: "Vancouver, BC",
      description: "Built AI-powered chatbot that streamlined candidate evaluations with 100% on-time delivery using Java. Integrated multiple APIs and automated data processing pipelines for enhanced system efficiency.",
      skills: ["Java", "AI Integration", "API Development", "Data Processing", "Agile Development"],
      achievements: [
        "Built AI-powered chatbot with 100% on-time delivery",
        "Integrated multiple APIs for system efficiency",
        "Automated data processing pipelines",
        "Collaborated in Agile sprints with comprehensive code reviews"
      ],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      role: "Front-End Developer (Practicum)",
      company: "One Iota Golf",
      period: "May 2024",
      location: "Burnaby, BC",
      description: "Developed dynamic calendar component for habit tracking application using JavaScript and Tailwind CSS. Implemented responsive calendar interface with interactive date selection and real-time data updates.",
      skills: ["JavaScript", "Tailwind CSS", "EJS", "Responsive Design", "Cross-browser Compatibility"],
      achievements: [
        "Built dynamic calendar component with real-time updates",
        "Implemented responsive interface with mobile optimization",
        "Developed cross-browser compatible solutions",
        "Created interactive date selection functionality"
      ],
      icon: <Code className="w-5 h-5" />
    },
    {
      role: "Diploma in Computer Systems Technology",
      company: "British Columbia Institute of Technology (BCIT)",
      period: "2023 - 2024",
      location: "Vancouver, BC",
      description: "Database Options specialization with Distinction. Focus on Database Systems, Data Structures and Algorithms, Object-Oriented Programming, and Internet Service Architecture.",
      skills: ["Database Systems", "Data Structures", "Algorithms", "OOP", "Internet Service Architecture"],
      achievements: [
        "Graduated with Distinction",
        "Specialized in Database Options",
        "Comprehensive full-stack development training",
        "Advanced database design and optimization"
      ],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      role: "Bachelor of Arts in Psychology",
      company: "Simon Fraser University (SFU)",
      period: "2014 - 2021",
      location: "Burnaby, BC",
      description: "Comprehensive psychology degree providing strong analytical and research skills, critical thinking abilities, and understanding of human behavior and data analysis.",
      skills: ["Research Methods", "Statistical Analysis", "Critical Thinking", "Data Analysis", "Communication"],
      achievements: [
        "Strong foundation in research methodologies",
        "Advanced statistical analysis skills",
        "Developed critical thinking and problem-solving abilities",
        "Enhanced communication and presentation skills"
      ],
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
          Experience & Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
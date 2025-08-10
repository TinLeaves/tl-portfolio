import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Globe, Tag } from 'lucide-react';
import { useIndividualScrollAnimation, useTimelineAnimation } from '../hooks/useScrollAnimation';

const ProjectItem = ({ project, index, isLast, setItemRef, visibleItems, lineProgress }) => {
  const { elementRef: itemRef, isVisible, progress } = useIndividualScrollAnimation(0.3);
  
  // Combine the refs for both individual animation and timeline tracking
  const combinedRef = (el) => {
    itemRef.current = el;
    setItemRef(index)(el);
  };
  
  // Get the line progress for this item (for the line connecting to next item)
  const currentLineProgress = lineProgress[index] || 0;
  const isItemVisible = visibleItems.has(index);

  const getProjectIcon = (category) => {
    switch (category) {
      case 'AI/ML':
        return <Code className="w-5 h-5" />;
      case 'Full-Stack':
        return <Globe className="w-5 h-5" />;
      case 'Data Analytics':
        return <Tag className="w-5 h-5" />;
      case 'Web Development':
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <div 
      ref={combinedRef}
      className="relative group transition-all duration-500 hover:scale-105"
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 40}px) scale(${0.9 + progress * 0.1})`
      }}
    >
    {/* Timeline Line */}
    <div className="absolute left-6 top-12 w-0.5 overflow-hidden" style={{ height: 'calc(100% - 1rem)' }}>
      <div 
        className="w-full bg-gradient-to-b from-blue-500 to-teal-500 transition-all duration-700 origin-top"
        style={{
          height: `${currentLineProgress * 100}%`,
          opacity: isItemVisible ? 1 : 0
        }}
      />
      <div 
        className="absolute top-0 w-full bg-zinc-300 dark:bg-zinc-600/50 transition-all duration-500"
        style={{
          height: `${(1 - currentLineProgress) * 100}%`,
          transform: `translateY(${currentLineProgress * 100}%)`
        }}
      />
    </div>
    
    {/* Timeline Node */}
    <div 
      className="absolute left-5 top-6 w-3 h-3 rounded-full transition-all duration-500 z-10 border-2"
      style={{
        backgroundColor: isItemVisible ? '#3b82f6' : '#9ca3af',
        borderColor: isItemVisible ? '#1d4ed8' : '#6b7280',
        boxShadow: isItemVisible ? '0 0 12px rgba(59, 130, 246, 0.5)' : 'none',
        transform: `scale(${isItemVisible ? 1.2 : 1})`,
        opacity: progress > 0.1 ? 1 : 0
      }}
    ></div>
    
    {/* Content Card */}
    <div className="ml-16 p-6 rounded-xl border transition-all duration-500 bg-white dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-700 group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-teal-500/10 group-hover:border-blue-400/30 group-hover:shadow-xl group-hover:shadow-blue-500/20">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          {project.viewLink && project.viewLink !== "#" ? (
            <a
              href={project.viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <h3 className="text-lg font-semibold transition-colors duration-300 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 hover:text-blue-600 dark:hover:text-blue-300">
                {project.title}
              </h3>
            </a>
          ) : (
            <h3 className="text-lg font-semibold transition-colors duration-300 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
              {project.title}
            </h3>
          )}
          <p className="text-sm font-medium transition-colors duration-300 text-zinc-600 dark:text-zinc-300 group-hover:text-teal-600 dark:group-hover:text-teal-300">
            {project.category}
          </p>
        </div>
        <div className="p-2 rounded-lg transition-all duration-300 bg-gray-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-300">
          {getProjectIcon(project.category)}
        </div>
      </div>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
        {project.description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 text-xs rounded-full transition-all duration-300 bg-gray-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-gray-300 dark:border-zinc-700 group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Project Links */}
      {(project.viewLink && project.viewLink !== "#") || (project.sourceLink && project.sourceLink !== "#") ? (
        <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300">
          {project.viewLink && project.viewLink !== "#" && (
            <a
              href={project.viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-300"
            >
              <ExternalLink className="w-3 h-3" />
              <span>View Project</span>
            </a>
          )}
          {project.sourceLink && project.sourceLink !== "#" && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-300"
            >
              <Github className="w-3 h-3" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      ) : (
        <div className="text-xs text-blue-600 dark:text-blue-400">
          Coming Soon...
        </div>
      )}

      {/* Media Container - positioned at bottom like an achievement */}
      {(project.videoId || project.imageUrl) && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-700">
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-lg">
            {project.videoId ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={`${project.title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : project.imageUrl ? (
              <a
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 cursor-pointer"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  src={project.imageUrl}
                  alt={`${project.title} Screenshot`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default function Projects() {
    const projects = [
        {
            title: "Cover Letter Maker",
            description:
                "An AI-powered web application that generates personalized cover letters using Google Gemini 2.5 Pro. Features resume parsing (DOCX support), automatic job listing scraping from URLs, manual job description input, and the ability to edit and customize generated letters. Built with Next.js 15, React, TypeScript, and Tailwind CSS.",
            videoId: null,
            imageUrl: "/cover_letter_maker.jpg",
            viewLink: "https://cover-letter-maker-pearl.vercel.app/",
            sourceLink: "https://github.com/TinLeaves/cover-letter-maker",
            category: "AI/ML",
            technologies: ["Next.js", "React", "TypeScript", "AI"]
        },
        {
            title: "JWP Shop - Full-Stack E-Commerce Platform",
            description:
                "A responsive e-commerce platform built with Next.js 14, TypeScript, React, and Tailwind CSS with Wix Headless CMS integration serving 100+ products. Features advanced product catalog with real-time filtering, search functionality, pagination managing 12 products per page, and URL state management. Includes 15+ responsive UI components with mobile-first design, dynamic shopping cart with React Context API, persistent state management, and real-time inventory tracking using custom React hooks.",
            videoId: null,
            imageUrl: "/jwp_shop.jpg",
            viewLink: "https://jwp-shop.vercel.app/",
            sourceLink: "#",
            category: "Full-Stack",
            technologies: ["Next.js", "React", "TypeScript", "E-Commerce"]
        },
        {
            title: "Contoso Sales Dashboard",
            description:
                "A business intelligence dashboard built using Power BI, analyzing sales trends from the Azure AdventureWorks Contoso dataset. Includes interactive visualizations for revenue, profit, and customer segmentation.",
            videoId: "M73to21g43E",
            imageUrl: null,
            viewLink: "#",
            sourceLink: "#",
            category: "Data Analytics",
            technologies: ["Power BI", "Data Analysis", "Business Intelligence"]
        },
        {
            title: "Pokedex Web App",
            description:
                "A fully responsive Pokedex web app that fetches Pokémon data from the PokeAPI. Built with Vanilla JavaScript, jQuery, and Bootstrap, featuring smooth UI interactions and real-time search.",
            videoId: "hfm-nomlwww",
            imageUrl: null,
            viewLink: "https://verdant-pudding-878ba0.netlify.app/",
            sourceLink: "https://github.com/TinLeaves/Pokemon-Webapp",
            category: "Web Development",
            technologies: ["JavaScript", "jQuery", "Bootstrap", "API"]
        },
        {
            title: "Don't Froget - Habit & Mood Tracker",
            description:
                "A full-stack habit and mood tracking application built for QDS Hacks 2024. Helps students track their daily habits, goals, and emotions with a calendar-based interface. Built with React/TypeScript frontend and Spring Boot backend with MySQL database. Features user registration, habit logging, mood tracking, and email contact forms.",
            videoId: "7qAyc2Xym8Y",
            imageUrl: null,
            viewLink: "https://devpost.com/software/don-t-froget?ref_content=my-projects-tab&ref_feature=my_projects",
            sourceLink: "https://github.com/thebiggest0/QDS-group-11",
            category: "Full-Stack",
            technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "JPA"]
        },
        {
            title: "AI-Powered Notebook",
            description:
                "A smart note-taking app with AI-driven text summarization and sentiment analysis. Built with JavaScript (frontend) and a backend powered by Flask and Django. Utilizes a BERT model from Hugging Face for NLP.",
            videoId: "VIDEO_ID_HERE",
            imageUrl: null,
            viewLink: "#",
            sourceLink: "#",
            category: "AI/ML",
            technologies: ["JavaScript", "Flask", "Django", "BERT", "NLP"]
        },
    ];

    const { containerRef, setItemRef, visibleItems, lineProgress } = useTimelineAnimation(projects.length, 0.3);

    return (
        <section id="projects" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
                    Featured Projects
                </h2>
                
                <div className="max-w-4xl mx-auto" ref={containerRef}>
                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <ProjectItem
                                key={index}
                                project={project}
                                index={index}
                                isLast={index === projects.length - 1}
                                setItemRef={setItemRef}
                                visibleItems={visibleItems}
                                lineProgress={lineProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

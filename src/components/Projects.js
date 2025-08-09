const ProjectCard = ({ project }) => {
    const { title, description, videoId, imageUrl, viewLink, sourceLink } = project;

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 hover:border-purple-400/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] transform">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="p-6 sm:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8 relative z-10">
                {/* Content Section */}
                <div className="flex-1 space-y-5 sm:space-y-7">
                    <div className="space-y-3 sm:space-y-5">
                        {viewLink && viewLink !== "#" ? (
                            <a
                                href={viewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer"
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent hover:scale-105 transition-all duration-300 leading-tight">
                                    {title}
                                </h3>
                            </a>
                        ) : (
                            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                                {title}
                            </h3>
                        )}
                        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                            {description}
                        </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 sm:gap-6 pt-2">
                        {viewLink && viewLink !== "#" && (
                            <a
                                href={viewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                View Project
                                <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        )}

                        {sourceLink && sourceLink !== "#" && (
                            <a
                                href={sourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-300 transition-colors"
                            >
                                Source Code
                                <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        )}
                    </div>

                    {/* If neither link exists */}
                    {!viewLink && !sourceLink && (
                        <span className="inline-flex items-center text-xs sm:text-sm font-medium text-purple-400">
                            Coming Soon...
                            <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                    )}
                </div>

                {/* Media Container */}
                {(videoId || imageUrl) && (
                    <div className="w-full lg:w-[400px] flex-shrink-0">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            {videoId ? (
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={`${title} Demo`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : imageUrl ? (
                                <a
                                    href={viewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 cursor-pointer"
                                >
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        src={imageUrl}
                                        alt={`${title} Screenshot`}
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

import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
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

    const categories = ['All', ...new Set(projects.map(project => project.category))];
    
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
            
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory, projects]);

    return (
        <section id="projects" className="py-16 sm:py-24 text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                    Featured Projects
                </h2>
                
                {/* Search and Filter Controls */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                        />
                    </div>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                                        : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 hover:text-purple-300 border border-zinc-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 sm:gap-12">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl text-zinc-600 mb-4">🔍</div>
                            <h3 className="text-xl text-zinc-400 mb-2">No projects found</h3>
                            <p className="text-zinc-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

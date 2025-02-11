const ProjectCard = ({ project }) => {
    const { title, description, videoId, viewLink, sourceLink } = project;

    return (
        <div className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="p-4 sm:p-6 flex flex-col lg:flex-row gap-4 sm:gap-6">
                {/* Content Section */}
                <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="space-y-2 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Action Links */}
                    {viewLink && sourceLink ? (
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a
                                href={viewLink}
                                className="inline-flex items-center text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                View Project
                                <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href={sourceLink}
                                className="inline-flex items-center text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-300 transition-colors"
                            >
                                Source Code
                                <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ) : (
                        <span className="inline-flex items-center text-xs sm:text-sm font-medium text-purple-400">
                            Coming Soon...
                            <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                    )}
                </div>

                {/* Video Container */}
                {videoId && (
                    <div className="w-full lg:w-[400px] flex-shrink-0">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`${title} Demo`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
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
            title: "Contoso Sales Dashboard",
            description:
                "A business intelligence dashboard built using Power BI, analyzing sales trends from the Azure AdventureWorks Contoso dataset. Includes interactive visualizations for revenue, profit, and customer segmentation.",
            videoId: "M73to21g43E",
            viewLink: "#",
            sourceLink: "#",
        },
        {
            title: "AI-Powered Notebook",
            description:
                "A smart note-taking app with AI-driven text summarization and sentiment analysis. Built with JavaScript (frontend) and a backend powered by Flask and Django. Utilizes a BERT model from Hugging Face for NLP.",
            videoId: "VIDEO_ID_HERE",
            viewLink: "#",
            sourceLink: "#",
        },
        {
            title: "Pokedex Web App",
            description:
                "A fully responsive Pokedex web app that fetches Pokémon data from the PokeAPI. Built with Vanilla JavaScript, jQuery, and Bootstrap, featuring smooth UI interactions and real-time search.",
            videoId: "hfm-nomlwww",
            viewLink: "https://verdant-pudding-878ba0.netlify.app/",
            sourceLink: "https://github.com/TinLeaves/Pokemon-Webapp",
        },
        {
            title: "More in the Future",
            description:
                "Stay tuned for upcoming projects where I'll continue building innovative and data-driven applications.",
            videoId: null,
            viewLink: null,
            sourceLink: null,
        },
    ];

    return (
        <section id="projects" className="py-12 sm:py-20 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

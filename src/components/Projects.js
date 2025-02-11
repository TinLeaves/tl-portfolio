export default function Projects(){
    return(
        <section id="projects" className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-28 w-full">
          <h2 className="text-3xl font-bold mb-12 px-14 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="flex flex-col gap-8 px-14">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-semibold mb-4">Project {project}</h3>
                <p className="text-zinc-400 mb-6">
                  A brief description of your project. Highlight the key features and technologies used.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    View Project →
                  </a>
                  <a href="#" className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
                    Source Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
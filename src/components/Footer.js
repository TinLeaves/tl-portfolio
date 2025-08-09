"use client"; // Needed for scrolling behavior in App Router

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-zinc-500 dark:text-zinc-400">
        <div className="space-y-3">
          <p className="text-base font-light">
            Built with passion using <span className="text-purple-600 dark:text-purple-300 font-medium">Next.js</span> and <span className="text-purple-600 dark:text-purple-300 font-medium">Tailwind CSS</span>
          </p>
          <p className="text-sm">
            Source code available on{" "}
            <a
              href="https://github.com/TinLeaves/tl-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-200 transition-colors duration-300 underline underline-offset-2 hover:underline-offset-4"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client"; // Needed for scrolling behavior in App Router

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 text-end text-zinc-400">
        <p className="text-sm">
          This project was made using Next.js and Tailwind CSS.
        </p>
        <p className="text-sm">
          Source code can be found{" "}
          <a
            href="https://github.com/TinLeaves/tl-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-500"
          >
            here
          </a>.
        </p>
      </div>
    </footer>
  );
}

"use client"; // Needed for scrolling behavior in App Router

export default function Footer() {
    return (
        <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-400">
          <p>This project was made using Next.js and Tailwind CSS</p>
        </div>
      </footer>
    );
}
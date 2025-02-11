"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "contact"];
            let currentSection = "";

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();

                    // Check if hero section is out of view before highlighting 'about'
                    if (sectionId === "about" && document.getElementById("hero")) {
                        const hero = document.getElementById("hero");
                        const heroRect = hero.getBoundingClientRect();
                        if (heroRect.bottom <= 0 && rect.top <= window.innerHeight) {
                            currentSection = sectionId;
                        }
                    }
                    // Highlight other sections when they are in view
                    else if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                        currentSection = sectionId;
                    }
                }
            });

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
                window.history.pushState(null, "", `#${currentSection}`);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            window.history.pushState(null, "", `#${sectionId}`);
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <button 
                        onClick={() => scrollToSection("hero")}
                        className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                    >
                        TL Project
                    </button>
                    <div className="flex gap-8">
                        {["about", "projects", "contact"].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`text-sm transition-colors ${
                                    activeSection === section
                                        ? "text-purple-400"
                                        : "text-white hover:text-purple-400"
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

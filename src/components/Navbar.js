"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, opacity: 0 });
    const navRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "contact"];
            let currentSection = "";
            let maxVisibleArea = 0;

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Calculate how much of the section is visible
                    const visibleTop = Math.max(0, -rect.top);
                    const visibleBottom = Math.min(rect.height, windowHeight - rect.top);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                    
                    // Calculate the visible area as a percentage of the viewport
                    const visibleArea = visibleHeight / windowHeight;
                    
                    // If this section takes up the majority of the screen (>40%), highlight it
                    if (visibleArea > 0.4 && visibleArea > maxVisibleArea) {
                        maxVisibleArea = visibleArea;
                        currentSection = sectionId;
                    }
                }
            });

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
                if (currentSection) {
                    window.history.pushState(null, "", `#${currentSection}`);
                }
            }
        };

        // Update pill position when activeSection changes
        const updatePillPosition = () => {
            if (activeSection && navRefs.current[activeSection]) {
                const buttonElement = navRefs.current[activeSection];
                const containerRect = buttonElement.parentElement.getBoundingClientRect();
                const buttonRect = buttonElement.getBoundingClientRect();
                
                const padding = 8; // 8px padding on each side
                const width = buttonRect.width + (padding * 2);
                const left = buttonRect.left - containerRect.left - padding;
                
                setPillStyle({
                    width,
                    left,
                    opacity: ["about", "projects", "contact"].includes(activeSection) ? 1 : 0
                });
            } else {
                setPillStyle({ width: 0, left: 0, opacity: 0 });
            }
        };

        // Update pill position after activeSection changes
        if (activeSection) {
            requestAnimationFrame(updatePillPosition);
        } else {
            setPillStyle({ width: 0, left: 0, opacity: 0 });
        }

        // Run on mount and scroll
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updatePillPosition);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updatePillPosition);
        };
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
        <nav className="fixed top-0 w-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl z-50 border-b border-gray-200 dark:border-white/5 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
                <div className="flex justify-between items-center">
                    <button 
                        onClick={() => scrollToSection("hero")}
                        className="text-xl font-bold bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-0"
                    >
                        TL Project
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="relative flex gap-1">
                            {/* Animated background pill */}
                            <div 
                                className="absolute bg-blue-500/15 rounded-xl transition-all duration-500 ease-out"
                                style={{
                                    width: `${pillStyle.width}px`,
                                    height: '36px',
                                    top: '0px',
                                    left: `${pillStyle.left}px`,
                                    opacity: pillStyle.opacity
                                }}
                            />
                            
                            {["about", "projects", "contact"].map((section) => (
                                <button
                                    key={section}
                                    ref={(el) => navRefs.current[section] = el}
                                    onClick={() => scrollToSection(section)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300 focus:outline-none focus:ring-0 z-10 ${
                                        activeSection === section
                                            ? "text-blue-600 dark:text-blue-300"
                                            : "text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-300"
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

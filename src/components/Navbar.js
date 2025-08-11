"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_SECTIONS } from '../utils/constants';
import { scrollToSection } from '../utils/scrollUtils';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, opacity: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", ...NAVIGATION_SECTIONS];
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
                    opacity: NAVIGATION_SECTIONS.includes(activeSection) ? 1 : 0
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

    const handleSectionClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.mobile-nav-container')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    return (
        <nav className="fixed top-0 w-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl z-50 border-b border-gray-200 dark:border-white/5 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-5">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button 
                        onClick={() => handleSectionClick("hero")}
                        className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-0"
                    >
                        TL Project
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
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
                            
                            {NAVIGATION_SECTIONS.map((section) => (
                                <button
                                    key={section}
                                    ref={(el) => navRefs.current[section] = el}
                                    onClick={() => handleSectionClick(section)}
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
                        
                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Controls */}
                    <div className="md:hidden mobile-nav-container flex items-center gap-3">
                        {/* Theme Toggle for Mobile */}
                        <ThemeToggle />
                        
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-xl bg-gray-100/80 dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-0"
                            aria-label="Toggle mobile menu"
                        >
                            <div className="relative w-6 h-6">
                                <Menu 
                                    className={`absolute inset-0 w-6 h-6 text-zinc-600 dark:text-zinc-300 transition-all duration-300 ${
                                        isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                                    }`} 
                                />
                                <X 
                                    className={`absolute inset-0 w-6 h-6 text-zinc-600 dark:text-zinc-300 transition-all duration-300 ${
                                        isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                                    }`} 
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Full-width Mobile Menu Dropdown */}
                <div 
                    className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-700 shadow-xl overflow-hidden transition-all duration-300 transform ${
                        isMobileMenuOpen 
                            ? 'opacity-100 translate-y-0 max-h-64' 
                            : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
                    }`}
                >
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4">
                        <div className="space-y-1">
                            {NAVIGATION_SECTIONS.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => handleSectionClick(section)}
                                    className={`w-full text-left px-4 py-4 text-base font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-0 ${
                                        activeSection === section
                                            ? "bg-blue-500/15 text-blue-600 dark:text-blue-300 border-l-4 border-blue-500"
                                            : "text-zinc-700 dark:text-zinc-300 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-300"
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

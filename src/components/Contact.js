import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Clipboard } from 'lucide-react';
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";

export default function Contact() {
    const [showContactDetails, setShowContactDetails] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleButtonClick = () => {
        setShowContactDetails(prevState => !prevState);
    };
    const [isCopied, setIsCopied] = useState(false);

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('tinleaves.0@gmail.com');
        setIsCopied(true);

        // Reset the copied status after 2 seconds
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <section id="contact" className="py-16 sm:py-24" ref={sectionRef}>
            <div className="relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <div className={`transition-all duration-700 ${
                        isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                    }`}>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                            Contact
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>
                    <div className={`transition-all duration-700 ${
                        isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '200ms' }}>
                        <button
                            onClick={handleButtonClick}
                            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-2xl hover:from-purple-400 hover:to-pink-400 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 hover:shadow-2xl hover:scale-105 transform font-medium text-lg overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                            <span className="relative z-10">Get in Touch</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 relative z-10" />
                        </button>
                    </div>

                    {showContactDetails && (
                        <div className={`flex flex-col gap-8 sm:gap-12 mt-8 max-w-lg mx-auto transition-all duration-700 ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '400ms' }}>
                            {/* GitHub Card */}
                            <a
                                href="https://github.com/TinLeaves"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-between p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:scale-105 transition-all duration-300 hover:border-purple-400/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm overflow-hidden"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <IoLogoGithub size={40} className="text-zinc-500 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                                    <span className="text-lg font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">GitHub/TinLeaves</span>
                                </div>
                            </a>

                            {/* LinkedIn Card */}
                            <a
                                href="https://www.linkedin.com/in/steven-lai-sl1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-between p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:scale-105 transition-all duration-300 hover:border-purple-400/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm overflow-hidden"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <IoLogoLinkedin size={40} className="text-zinc-500 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                                    <span className="text-lg font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">LinkedIn/Steven Lai</span>
                                </div>
                            </a>

                            {/* Email Card */}
                            <div className="group relative flex items-center justify-between p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:scale-105 transition-all duration-300 hover:border-purple-400/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm overflow-hidden">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <IoMailSharp size={30} className="text-zinc-500 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                                    <span className="text-lg font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">tinleaves.0@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <button
                                        onClick={copyEmailToClipboard}
                                        className="group/btn p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-purple-500/20 transition-all duration-300"
                                    >
                                        <Clipboard size={20} className="group-hover/btn:scale-110 transition-transform duration-300" />
                                    </button>
                                    {isCopied && (
                                        <span className="text-sm text-purple-400 font-medium">Copied!</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

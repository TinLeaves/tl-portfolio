import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Clipboard } from 'lucide-react';
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";

export default function Contact() {
    const [showContactDetails, setShowContactDetails] = useState(false);

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
        <section id="contact" className="py-16 sm:py-24">

            <div className="relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                        Contact
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <button
                        onClick={handleButtonClick}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-2xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 transform font-medium text-lg"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    {showContactDetails && (
                        <div className="flex flex-col gap-8 sm:gap-12 mt-8 max-w-lg mx-auto">
                            {/* GitHub Card */}
                            <a
                                href="https://github.com/TinLeaves"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-xl group hover:scale-105 transition-all duration-300 hover:border-purple-500/50 shadow-lg group-hover:shadow-purple-500/10"
                            >
                                <div className="flex items-center gap-4">
                                    <IoLogoGithub size={40} className="text-zinc-400 group-hover:text-purple-400" />
                                    <span className="text-lg font-semibold text-zinc-400 group-hover:text-purple-400">GitHub/TinLeaves</span>
                                </div>
                            </a>


                            {/* LinkedIn Card */}
                            <a
                                href="https://www.linkedin.com/in/steven-lai-sl1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-xl group hover:scale-105 transition-all duration-300 hover:border-purple-500/50 shadow-lg group-hover:shadow-purple-500/10"
                            >
                                <div className="flex items-center gap-4">
                                    <IoLogoLinkedin size={40} className="text-zinc-400 group-hover:text-purple-400" />
                                    <span className="text-lg font-semibold text-zinc-400 group-hover:text-purple-400">LinkedIn/Steven Lai</span>
                                </div>
                            </a>

                            {/* Email Card */}
                            <div className="flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-xl group hover:scale-105 transition-all duration-300 hover:border-purple-500/50 shadow-lg group-hover:shadow-purple-500/10">
                                <div className="flex items-center gap-4">
                                    <IoMailSharp size={30} className="text-zinc-400 group-hover:text-purple-400" />
                                    <span className="text-lg font-semibold text-zinc-400 group-hover:text-purple-400">tinleaves.0@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={copyEmailToClipboard}
                                        className="text-white hover:text-purple-600 transition-colors"
                                    >
                                        <Clipboard size={20} />
                                    </button>
                                    {isCopied && (
                                        <span className="text-sm text-purple-400">Copied!</span>
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

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
        <section id="contact" className="py-20 bg-zinc-900">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent opacity-50"></div>
                <div className="relative">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Contact
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <button
                            onClick={handleButtonClick}
                            className="inline-flex items-center gap-2 bg-purple-600 px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
                        >
                            Get in Touch
                            <ArrowRight />
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
            </div>
        </section>
    );
}

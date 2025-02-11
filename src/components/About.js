import { FaNodeJs, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript } from "react-icons/si";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center pt-20 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-28 w-full">
                {/* About Me */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-12 px-14 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-lg text-zinc-300 mt-4 px-14">
                        Hi, I'm Steven, a developer based in Vancouver, British Columbia. I recently graduated with Distinction from BCIT's Computer Systems Technology program, specializing in Database Systems. I enjoy building intuitive interfaces and working with data to create meaningful solutions that make a difference.
                    </p>
                    <p className="text-lg text-zinc-300 mt-4 px-14">
                        My focus is on developing applications that are both functional and easy to use. Right now, I'm building on my skills with the Google Advanced Data Analytics Certificate. I'm always open to new challenges and projects that help me grow.
                    </p>
                    <p className="text-lg text-zinc-300 mt-4 px-14">
                        Outside of coding, I enjoy graphite sketching and hiking the stunning mountains around Vancouver. If you have any opportunities or would like to collaborate, let’s connect! Otherwise, feel free to explore the rest of my portfolio.
                    </p>
                </div>

                {/* Skillsets */}
                <div>
                    <h3 className="text-3xl font-semibold text-center text-purple-400 mb-8">My Skillsets</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex flex-col items-center group">
                            <SiJavascript className="text-yellow-400 w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <SiNextdotjs className="text-white w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">Next.js</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <FaNodeJs className="text-green-500 w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">Node.js</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <SiTailwindcss className="text-blue-500 w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">Tailwind CSS</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <FaJava className="text-red-500 w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">Java</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <SiPython className="text-yellow-500 w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">Python</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <SiMysql className="text-blue-600 w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">MySQL</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <SiMongodb className="text-green-500 w-16 h-16 mb-2 group-hover:translate-y-[-8px] transition-transform duration-300" />
                            <span className="text-zinc-400 group-hover:translate-y-[-8px] transition-transform duration-300">MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

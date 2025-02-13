import { FaNodeJs, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript } from "react-icons/si";

const SkillIcon = ({ Icon, name, color }) => (
    <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
        <div className="p-3 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-purple-500/50 shadow-lg group-hover:shadow-purple-500/10 transition-all duration-300">
            <Icon className={`w-8 h-8 sm:w-12 sm:h-12 ${color}`} />
        </div>
        <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-purple-400 transition-colors duration-300">
            {name}
        </span>
    </div>
);

export default function About() {
    const skills = [
        { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
        { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-500" },
        { Icon: FaJava, name: "Java", color: "text-red-500" },
        { Icon: SiPython, name: "Python", color: "text-yellow-500" },
        { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    ];

    return (
        <section id="about" className="py-12 sm:py-20 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Me */}
                <div className="mb-12 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
                        <p className="text-base sm:text-lg text-zinc-300">
                            Hi, I'm <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Steven Lai</span>,
                            a developer based in Vancouver, British Columbia. I recently graduated with Distinction from BCIT's
                            <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Computer Systems Technology</span> program,
                            specializing in <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Database Systems</span>.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-300">
                            My focus is on developing applications that are both functional and easy to use.
                            Right now, I'm building on my skills with the Google Advanced Data Analytics Certificate.
                            I'm always open to new challenges and projects that help me grow.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-300">
                            Outside of coding, I enjoy graphite sketching and hiking the stunning mountains around Vancouver.
                            If you have any opportunities or would like to collaborate, let's connect!
                        </p>
                    </div>
                </div>

                {/* Skillsets */}
                <div className="relative">
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        My Skillsets
                    </h3>
                    <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <SkillIcon
                                key={index}
                                Icon={skill.Icon}
                                name={skill.name}
                                color={skill.color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

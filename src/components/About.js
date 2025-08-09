import { FaNodeJs, FaJava, FaReact, FaBootstrap, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiPostgresql, SiKotlin, SiR, SiExpress, SiJquery, SiNpm, SiGoogleanalytics, SiJira } from "react-icons/si";

const SkillIcon = ({ Icon, name, color }) => (
    <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
        <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 group-hover:border-purple-400/30 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm">
            <Icon className={`w-10 h-10 sm:w-14 sm:h-14 ${color} group-hover:scale-110 transition-transform duration-300`} />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        </div>
        <span className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-zinc-300 group-hover:text-purple-300 transition-colors duration-300 tracking-wide">
            {name}
        </span>
    </div>
);

export default function About() {
    const skills = [
        { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
        { Icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
        { Icon: SiPython, name: "Python", color: "text-yellow-500" },
        { Icon: FaJava, name: "Java", color: "text-red-500" },
        { Icon: SiKotlin, name: "Kotlin", color: "text-purple-500" },
        { Icon: SiR, name: "R", color: "text-blue-600" },
        { Icon: FaReact, name: "React", color: "text-cyan-400" },
        { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
        { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
        { Icon: SiTailwindcss, name: "Tailwind", color: "text-blue-500" },
        { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-400" },
        { Icon: SiJquery, name: "jQuery", color: "text-blue-500" },
        { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
        { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
        { Icon: FaGitAlt, name: "Git", color: "text-red-400" },
        { Icon: FaFigma, name: "Figma", color: "text-pink-500" },
        { Icon: SiJira, name: "Jira", color: "text-blue-500" },
        { Icon: SiNpm, name: "npm", color: "text-red-500" },
    ];

    return (
        <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            </div>
        </section>
    );
}

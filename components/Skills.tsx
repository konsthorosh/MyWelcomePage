import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiFigma, SiGit } from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
      { name: "React", Icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-400" },
      { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", Icon: SiExpress, color: "text-gray-300" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", Icon: SiGit, color: "text-orange-400" },
      { name: "GitHub", Icon: FaGithub, color: "text-white" },
      { name: "VS Code", Icon: FaCode, color: "text-blue-500" },
      { name: "Figma", Icon: SiFigma, color: "text-purple-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 space-y-10">
      <h2 className="text-2xl font-bold text-white text-center tracking-tight">
        Навыки
      </h2>
      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-800 bg-gray-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800"
                >
                  <skill.Icon
                    className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                  />
                  <span className="text-sm font-medium text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

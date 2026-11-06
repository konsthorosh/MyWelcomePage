const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Интерактивная админ-панель для управления товарами, заказами и аналитикой продаж в реальном времени.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Manager App",
    description:
      "Приложение для управления задачами с drag-and-drop, фильтрами и совместной работой в команде.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Адаптивный персональный сайт-портфолио с анимациями, темной темой и SSR на Next.js.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <h2 className="text-2xl font-bold text-white text-center tracking-tight">
        Проекты
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/40"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-700 bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm font-medium text-gray-200 transition hover:border-gray-500 hover:text-white"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm font-medium text-gray-200 transition hover:border-gray-500 hover:text-white"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS (Tailwind CSS, Bootstrap)",
        "JavaScript",
        "React.js",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "MySQL", "RESTful APIs", "Supabase", "MongoDB", "Python"],
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "VS Code", "Vite", "Figma", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-all duration-300" >
      <div className="max-w-6xl mx-auto px-6">
        <h2 data-aos="fade-up" className="text-5xl font-bold mb-2 text-center text-gray-900 dark:text-white" >Skills</h2>
        <div data-aos="fade-up" className="h-0.5 w-35 bg-blue-800 mx-auto mb-12 rounded-full"></div>
        <p data-aos="fade-up" className="text-center text-gray-500 dark:text-gray-300 mb-12">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="p-8 border border-gray-200 dark:border-gray-500 rounded-lg hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="inline-block border border-gray-300 dark:border-gray-500 dark:bg-gray-700 hover:border-blue-800 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg text-sm transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

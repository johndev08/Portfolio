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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 data-aos="fade-up" className="text-5xl font-bold mb-2 text-center text-gray-900">Skills</h2>
        <div data-aos="fade-up" className="h-0.5 w-16 bg-blue-800 mx-auto mb-12 rounded-full"></div>
        <p data-aos="fade-up" className="text-center text-gray-500 mb-12">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="inline-block border border-gray-300 hover:border-blue-800 hover:bg-blue-50 text-gray-700 px-4 py-2 rounded-lg text-sm transition duration-300"
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

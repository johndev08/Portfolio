function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS / Tailwind CSS / Bootstrap",
        "JavaScript",
        "React.js",
      ],
    },
    {
      title: "Backend",
      skills: ["PHP", "Laravel","MySQL", "Supabase", "RESTful APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git / GitHub", "VS Code", "Vite", "Figma", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div data-aos="fade-up"
              key={index}
              className="bg-white p-6 rounded shadow hover:shadow-md transition duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="text-gray-600">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-sm flex justify-center">
                     <span className="border border-gray-200 bg-white text-black px-4 py-1 mb-2 rounded-2xl ">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript (ES6+)", "TypeScript", "C++", "SQL"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "ML/Data Science",
      skills: ["scikit-learn", "NumPy", "Pandas", "Matplotlib", "TensorFlow"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Analytics Tools",
      skills: ["Power BI", "Excel", "PowerPoint"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Development Tools",
      skills: ["Git", "Docker", "Postman", "Firebase", "Vercel", "Netlify", "Render"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Platforms & IDEs",
      skills: ["Jupyter Notebook", "Visual Studio Code"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Core Concepts",
      skills: ["REST APIs", "MVC", "Responsive Design", "DSA", "Agile", "ML Workflows"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Soft Skills",
      skills: ["People Management", "Excellent Communication", "Leadership", "Team Collaboration"],
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{category.title[0]}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/60 transition-colors duration-200"
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
};

export default Skills;

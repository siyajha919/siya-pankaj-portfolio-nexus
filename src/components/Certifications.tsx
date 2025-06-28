
const Certifications = () => {
  const certifications = [
    { title: "Full Stack Developer", issuer: "IBM", color: "from-blue-500 to-blue-600" },
    { title: "Career Essentials in Business Analysis", issuer: "Microsoft & LinkedIn", color: "from-green-500 to-green-600" },
    { title: "Career Essentials in Data Analysis", issuer: "Microsoft & LinkedIn", color: "from-purple-500 to-purple-600" },
    { title: "Prompt Engineering", issuer: "Let's Upgrade", color: "from-yellow-500 to-orange-500" },
    { title: "JavaScript", issuer: "Let's Upgrade", color: "from-red-500 to-pink-500" },
    { title: "Data Visualization: Empowering Business with Insight", issuer: "Certification Body", color: "from-teal-500 to-cyan-500" },
    { title: "Generative AI", issuer: "NVIDIA", color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">🏆</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;


const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-purple-400 font-semibold">Software Development Engineer</span> 
              and <span className="text-purple-400 font-semibold">Data Scientist</span> based in New Delhi, India. 
              Currently pursuing my B.Tech in Computer Science Engineering with a stellar 8.0+ CGPA.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise lies in combining the power of machine learning with scalable web development, 
              creating solutions that not only process complex data but also deliver exceptional user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience as a Full Stack Intern at Borcelle Studio and Machine Learning Intern 
              at DATATeach.ai, I've contributed to real-world projects and mentored others in web technologies and ML.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="text-white">New Delhi, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Role:</span>
                <span className="text-white">SDE | Full Stack | Data Scientist</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Education:</span>
                <span className="text-white">B.Tech CSE (2024-2028)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CGPA:</span>
                <span className="text-white">8.0+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Experience:</span>
                <span className="text-white">Full Stack & ML Intern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

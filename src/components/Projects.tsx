
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "VISTA-S",
      description: "YOLOv8-based object detection model for space station safety with high accuracy and recall.",
      tech: ["Python", "YOLOv8", "Computer Vision", "PyTorch"],
      github: "https://github.com/siyajha919-o",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Archon.AI",
      description: "An 'Agenteer' AI system that builds and refines intelligent agents using LangGraph.",
      tech: ["Python", "LangGraph", "AI/ML", "Agent Systems"],
      github: "https://github.com/siyajha919-o",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Agentcy",
      description: "Multi-agent orchestration platform modeled after creative agencies, powered by AutoGen.",
      tech: ["Python", "AutoGen", "Multi-Agent Systems", "AI"],
      github: "https://github.com/siyajha919-o",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-6`}></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={() => window.open(project.github, "_blank")}
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white flex items-center gap-2 transition-all duration-300"
                >
                  <Github size={16} />
                  Code
                </Button>
                <Button
                  onClick={() => window.open(project.github, "_blank")}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center gap-2 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

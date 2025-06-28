
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl">
            <img
              src="/lovable-uploads/ec3ed9ba-0054-48d5-a3a8-2629ee494635.png"
              alt="Siya Pankaj"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            SIYA PANKAJ
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          Data Scientist & Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transforming Complex Data into Actionable Insights | Expert in Statistical Analysis, 
          Machine Learning, and Data Visualization
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => window.open("mailto:siyapankaj.2006@gmail.com")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} />
            Contact Me
          </Button>
          
          <Button
            onClick={() => window.open("https://github.com/siyajha919-o", "_blank")}
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://linkedin.com/in/siya-pankaj-b1ba41305"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/siyajha919-o"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:siyapankaj.2006@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+91-9599520056"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Phone size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

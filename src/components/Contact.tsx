
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:siyapankaj.2006@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    siyapankaj.2006@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href="tel:+91-9599520056"
                    className="text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    +91-9599520056
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => window.open("https://linkedin.com/in/siya-pankaj-b1ba41305", "_blank")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
              
              <Button
                onClick={() => window.open("https://github.com/siyajha919-o", "_blank")}
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { Mail, MapPin, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              {/* <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 animate-bounce">
                👋 Welcome to my portfolio
              </span> */}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Rohan Ravindra{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Mahadik
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium">
              Full Stack Java Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Highly skilled and innovative Software Engineer with expertise in{" "}
              <span className="font-semibold text-blue-600">Java</span>,{" "}
              <span className="font-semibold text-blue-600">Angular</span>,{" "}
              <span className="font-semibold text-blue-600">MongoDB</span>,{" "}
              <span className="font-semibold text-blue-600">Spring Boot</span>, and{" "}
              <span className="font-semibold text-blue-600">Linux</span>. 
              Proficient in developing robust applications, enhancing performance, and successfully resolving complex technical challenges.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full">
              <a href="#projects" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button variant="outline" asChild className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full">
              <a href="#" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

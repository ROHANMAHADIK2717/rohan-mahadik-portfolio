
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Rohan Ravindra <span className="text-blue-600">Mahadik</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Full Stack Java Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Highly skilled and innovative Software Engineer with expertise in Java, Angular, MongoDB, Spring Boot, and Linux. 
              Proficient in developing robust applications, enhancing performance, and successfully resolving complex technical challenges.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href="mailto:rohanm2717@gmail.com" className="hover:text-blue-600 transition-colors">
                rohanm2717@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

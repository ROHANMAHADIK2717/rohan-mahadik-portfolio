
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Angular", "Hibernate", "Bootstrap", "jQuery"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Redis", "Apache Kafka", "Nginx"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Development Tools",
      skills: ["Git", "Visual Studio Code", "IntelliJ IDEA", "Postman", "Jira"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Technologies & Platforms",
      skills: ["Linux", "AWS", "Docker", "Microservices", "REST APIs"],
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} className={category.color}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

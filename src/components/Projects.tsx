
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "IndusInd Bank - Home Loan Prime And Affordable Home Loan",
      company: "Lentra AI Pvt Ltd",
      period: "November 2022 - Present",
      description: "Comprehensive banking solution for home loan processing and management",
      achievements: [
        "Boosted system efficiency by 15% through successful module development for client requirements",
        "Achieved a 20% reduction in response time by integrating and testing REST APIs in Angular and Spring-Boot projects",
        "Improved application performance by 25% through various techniques on Java 8, Spring Boot, MongoDB, Rest API, JSON, and RESTful services",
        "Enhanced web app performance by 30% through optimized Angular components, SPAs, modules, routing, auth guard, services, observables, and lazy loading techniques"
      ],
      technologies: ["Java 8", "Spring Boot", "Angular", "MongoDB", "REST API", "JSON"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key projects that demonstrate my technical expertise and problem-solving abilities
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      {project.company} • {project.period}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-700 text-sm">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

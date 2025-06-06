
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Lentra AI Pvt Ltd",
      location: "Pune",
      period: "September 2022 - Present",
      achievements: [
        "Designed and developed scalable, resilient systems in Java, MongoDB, and Spring, contributing to a 20% improvement in product team efficiency",
        "Achieved a 15% increase in software quality standards by writing unit-tested code",
        "Built modules in Microservices resulting in a 30% enhancement of the bank's infrastructure flexibility on both internal and public cloud platforms",
        "Collaborated with global teams, leading to a 25% improvement in communication and task completion efficiency during scrum stand-ups, code reviews, and ceremonies",
        "Maintained technical acumen through continuous learning, staying updated on technology, financial services, and industry trends",
        "Identified and implemented continuous improvement opportunities, leading to a 10% enhancement in product and technology delivery flow"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-gray-700 leading-relaxed">
                    <span className="text-blue-600 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

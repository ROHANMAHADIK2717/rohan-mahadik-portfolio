
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Master in Computer Applications",
      institution: "Suryadatta Institute of Management & Mass Communication",
      location: "Pune",
      year: "2024",
      cgpa: "8.1 CGPA"
    },
    {
      degree: "Bachelor of Science in Business Administration - Computer Application",
      institution: "Savitribai Phule University",
      location: "Pune",
      year: "2021",
      cgpa: "9.23 CGPA"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <h4 className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

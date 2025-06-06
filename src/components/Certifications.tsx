
import { Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Certifications = () => {
  const certifications = [
    {
      title: "AWS Technical Essentials",
      issuer: "AWS Training and Certification",
      year: "2023",
      description: "Expanded expertise in AWS cloud services, including compute, storage, and networking. Strengthened understanding of scalable application architecture and cloud security best practices."
    },
    {
      title: "Full Stack Java Developer",
      issuer: "Spark IT Training Institute",
      year: "2022",
      description: "Developed proficiency in Full Stack Java development through comprehensive training. Acquired hands-on experience in Java programming, Spring Boot, Hibernate, Angular, and HTML/CSS."
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications that enhance my technical expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                    <div className="flex flex-col space-y-1">
                      <p className="text-blue-600 font-semibold text-sm">{cert.issuer}</p>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed">
              As a dedicated Software Engineer, I specialize in developing scalable, 
              resilient systems using Java, MongoDB, and Spring technologies. My experience spans from 
              designing robust applications to implementing microservices architectures that enhance 
              infrastructure flexibility.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I have a proven track record of improving system efficiency by 20%, achieving 15% increase 
              in software quality standards, and enhancing team communication efficiency by 25%. My commitment 
              to continuous learning keeps me updated with the latest technology trends and industry best practices.
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg hover-scale transition-all duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 20% improvement in product team efficiency</li>
                <li>• 15% increase in software quality standards</li>
                <li>• 30% enhancement in infrastructure flexibility</li>
                <li>• 25% improvement in team communication</li>
                <li>• 10% enhancement in technology delivery flow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

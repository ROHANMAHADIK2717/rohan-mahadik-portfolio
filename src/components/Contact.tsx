
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rohanm2717@gmail.com",
      href: "mailto:rohanm2717@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.label}</h3>
                {contact.href ? (
                  <a 
                    href={contact.href} 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{contact.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="mailto:rohanm2717@gmail.com">Send Me an Email</a>
          </Button>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600">
            © 2024 Rohan Ravindra Mahadik. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

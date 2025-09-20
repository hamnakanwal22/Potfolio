import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable WordPress solutions"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Performance",
      description: "Optimized websites with lightning-fast load times"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "User Experience",
      description: "Intuitive designs that engage and convert visitors"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality",
      description: "Delivering exceptional results that exceed expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate WordPress Developer from Pakistan
            </h3>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Based in the vibrant city of Rawalpindi, Pakistan, I bring creativity and technical 
                expertise to every WordPress project. With years of experience in web development, 
                I've helped businesses transform their digital presence through powerful, 
                custom WordPress solutions.
              </p>
              <p>
                My journey in WordPress development began with a passion for creating beautiful, 
                functional websites. Today, I specialize in custom theme development, plugin 
                customization, e-commerce solutions, and performance optimization. I believe 
                that every website should tell a unique story while delivering exceptional user experiences.
              </p>
              <p>
                When I'm not coding, I'm constantly learning about the latest WordPress trends, 
                SEO best practices, and emerging web technologies. I'm committed to staying 
                at the forefront of WordPress development to deliver cutting-edge solutions 
                for my clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
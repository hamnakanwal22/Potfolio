import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Fashion Store",
      description: "Custom WooCommerce solution with advanced filtering, wishlist functionality, and payment gateway integration.",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "PayPal API"],
      category: "E-Commerce"
    },
    {
      title: "Corporate Business Website",
      description: "Professional corporate website with custom theme, contact forms, and SEO optimization.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["WordPress", "Custom Theme", "ACF", "Contact Form 7"],
      category: "Corporate"
    },
    {
      title: "Restaurant Booking System",
      description: "Restaurant website with online reservation system, menu management, and gallery showcase.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["WordPress", "Booking Plugin", "Custom Post Types", "SCSS"],
      category: "Restaurant"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing website with advanced search, agent profiles, and property comparison features.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["WordPress", "Custom Fields", "Map Integration", "Search Filters"],
      category: "Real Estate"
    },
    {
      title: "Personal Blog & Portfolio",
      description: "Creative portfolio and blog website with custom design, social integration, and performance optimization.",
      image: "https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["WordPress", "Custom Theme", "Social APIs", "Image Optimization"],
      category: "Portfolio"
    },
    {
      title: "Educational Platform",
      description: "Online learning platform with course management, student enrollment, and progress tracking.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["WordPress", "LMS Plugin", "User Roles", "Quiz System"],
      category: "Education"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of recent WordPress projects demonstrating my expertise across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "WordPress Development",
      skills: [
        { name: "WordPress Core", level: 95 },
        { name: "Custom Themes", level: 92 },
        { name: "Plugin Development", level: 88 },
        { name: "WooCommerce", level: 85 }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3/SCSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "PHP", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Git", level: 88 },
        { name: "REST APIs", level: 82 }
      ]
    }
  ];

  const tools = [
    "WordPress", "Elementor", "WooCommerce", "ACF", "Yoast SEO",
    "Contact Form 7", "WP Rocket", "Gutenberg", "Beaver Builder", 
    "Visual Studio Code", "GitHub", "cPanel"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set built through years of dedicated WordPress development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
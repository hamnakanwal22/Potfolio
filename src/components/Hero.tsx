import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-400">Hamna Kanwal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-100 mb-8">
            Professional WordPress Developer
          </h2>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating stunning, functional WordPress websites that drive results. 
            I specialize in custom theme development, plugin customization, and performance optimization.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToAbout}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Learn More About Me
            <ArrowDown className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2">
            Download Resume
            <Download className="w-5 h-5" />
          </button>
        </div>

        <div className="animate-bounce">
          <button onClick={scrollToAbout}>
            <ArrowDown className="w-8 h-8 text-white opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-yellow-400"></div>
        <div className="absolute top-60 right-20 w-24 h-24 rounded-full bg-blue-300"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 rounded-full bg-yellow-300"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 rounded-full bg-blue-200"></div>
      </div>
    </section>
  );
};

export default Hero;
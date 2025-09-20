import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Hamna Kanwal
            </h3>
            <p className="text-gray-400 mb-6">
              Professional WordPress Developer passionate about creating stunning, 
              functional websites that drive results.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hamnakanwal22"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hamna-kanwal-722bb6263/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hamnakanwal09@hmail.com"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>WordPress Development</li>
              <li>Custom Theme Creation</li>
              <li>Plugin Customization</li>
              <li>E-commerce Solutions</li>
              <li>Website Optimization</li>
              <li>SEO Implementation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-gray-400">by Hamna Kanwal</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; {currentYear} Hamna Kanwal. All rights reserved.</p>
              <p className="text-sm mt-1">Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
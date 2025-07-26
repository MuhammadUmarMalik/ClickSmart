import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Star } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../constants';
import { handleNavClick } from '../../utils/scrollUtils';
import Section from '../ui/Section';

const Services: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleGetQuote = () => {
    // Scroll to contact form
    handleNavClick('#contact');
  };

  return (
    <Section id="services" className="bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center mb-12 md:mb-20">
        <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm md:text-base font-medium mb-6 md:mb-8 animate-fade-in-up">
          <Star className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Premium Service Categories
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-in-up animation-delay-200">
          Our Professional Services
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
          Connect with trusted professionals across a wide range of industries. 
          From home repairs to healthcare, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {SERVICE_CATEGORIES.map((category, index) => (
          <div
            key={category.id}
            className={`rounded-2xl md:rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${category.color} card-hover animate-fade-in-up`}
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <div
              className="p-6 md:p-8 cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="text-2xl md:text-3xl lg:text-4xl transform transition-transform duration-300 hover:scale-110">
                    {category.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className={`text-gray-400 transition-all duration-300 ${
                  expandedCategory === category.id ? 'rotate-180' : 'rotate-0'
                }`}>
                  <ChevronDown size={20} className="md:w-6 md:h-6" />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                <span className="bg-white/70 px-3 py-1 md:px-4 md:py-2 rounded-full font-medium">
                  {category.services.length} services available
                </span>
                <span className="flex items-center gap-1 text-yellow-600">
                  <Star size={14} fill="currentColor" />
                  <span className="font-medium">4.8+</span>
                </span>
              </div>

              {expandedCategory === category.id && (
                <div className="mt-6 space-y-3 md:space-y-4 animate-fade-in-up">
                  {category.services.map((service) => (
                    <div
                      key={service.id}
                      className={`flex items-center justify-between p-4 md:p-5 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 ${
                        hoveredService === service.id ? 'shadow-lg transform scale-105' : 'hover:shadow-md'
                      }`}
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <span className="text-gray-700 font-medium text-sm md:text-base">
                        {service.name}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGetQuote();
                        }}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm md:text-base font-medium bg-blue-50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-blue-100 transition-all duration-200 transform hover:scale-105"
                      >
                        Get Quote
                        <ExternalLink size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {expandedCategory !== category.id && (
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.services.slice(0, 3).map((service) => (
                    <span
                      key={service.id}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-white/70 text-gray-600 text-xs md:text-sm rounded-full border border-white/50 hover:bg-white/90 transition-all duration-200"
                    >
                      {service.name}
                    </span>
                  ))}
                  {category.services.length > 3 && (
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs md:text-sm rounded-full font-medium">
                      +{category.services.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced CTA Section */}
      <div className="text-center mt-16 md:mt-24 lg:mt-32 animate-fade-in-up animation-delay-1000">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl md:rounded-[2rem] p-8 md:p-12 lg:p-16 text-white">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Need a Service Not Listed?
            </h3>
            <p className="text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              We're constantly expanding our network of professionals. 
              Contact us for any service you need, and we'll connect you with the right expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button 
                onClick={() => handleNavClick('#contact')}
                className="bg-white text-blue-600 px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg w-full sm:w-auto"
              >
                Contact Us Today
              </button>
              <button 
                onClick={() => handleNavClick('#about')}
                className="border-2 border-white text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services; 
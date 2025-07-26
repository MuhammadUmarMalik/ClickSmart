import React from 'react';
import { Shield, Zap, DollarSign, Calendar } from 'lucide-react';
import { FEATURES_DATA } from '../../constants';
import Section from '../ui/Section';

const iconMap = {
  Shield,
  Zap,
  DollarSign,
  Calendar,
};

const Features: React.FC = () => {
  return (
    <Section id="features" className="bg-white">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
          Why Choose ClickSmart?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We make finding and booking professional services simple, safe, and affordable
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-24">
        {FEATURES_DATA.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
          
          return (
            <div 
              key={feature.id} 
              className="text-center p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-blue-100 rounded-full mb-6 md:mb-8 transform transition-transform duration-300 hover:scale-110">
                <IconComponent className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600" />
              </div>
              
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      
      {/* How it works section */}
      <div className="mt-16 md:mt-24 lg:mt-32">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          How It Works
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="text-center animate-fade-in-up animation-delay-200">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-full text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 transform transition-transform duration-300 hover:scale-110 shadow-lg">
              1
            </div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              Choose Your Service
            </h4>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Browse our extensive list of services and select what you need
            </p>
          </div>
          
          <div className="text-center animate-fade-in-up animation-delay-400">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-full text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 transform transition-transform duration-300 hover:scale-110 shadow-lg">
              2
            </div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              Get Matched
            </h4>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              We connect you with verified professionals in your area
            </p>
          </div>
          
          <div className="text-center animate-fade-in-up animation-delay-600">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-full text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 transform transition-transform duration-300 hover:scale-110 shadow-lg">
              3
            </div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              Book & Relax
            </h4>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Schedule your service and let our professionals take care of the rest
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features; 
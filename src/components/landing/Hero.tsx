import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Star, Play } from 'lucide-react';
import { handleNavClick } from '../../utils/scrollUtils';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="relative pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-24 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm md:text-base font-medium mb-6 md:mb-8 animate-fade-in-up">
          <Star className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-600" />
          #1 Trusted Service Marketplace
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 animate-fade-in-up animation-delay-200 leading-tight">
          Your Trusted{' '}
          <span className="relative inline-block">
            <span className="text-blue-600">Service Provider</span>
            <svg
              className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-blue-300"
              viewBox="0 0 100 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5C20 4.5 40 2.5 98 8.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-line"
              />
            </svg>
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Marketplace
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 md:mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 px-4">
          Connect with verified professionals for all your service needs. 
          From home repairs to healthcare, find trusted experts in your area with competitive pricing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 animate-fade-in-up animation-delay-600 px-4">
          <Button 
            variant="primary" 
            size="lg"
            className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl w-full sm:w-auto"
            onClick={() => handleNavClick('#services')}
          >
            Find Services Now
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-medium border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 rounded-xl w-full sm:w-auto"
            onClick={() => handleNavClick('#about')}
          >
            <Play size={18} className="text-blue-600" />
            Watch Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-12 md:mb-16 text-gray-600 animate-fade-in-up animation-delay-800 px-4">
          <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <Users size={20} className="text-blue-600" />
            <span className="font-medium text-sm md:text-base">Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <Clock size={20} className="text-green-600" />
            <span className="font-medium text-sm md:text-base">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <MapPin size={20} className="text-purple-600" />
            <span className="font-medium text-sm md:text-base">Local Providers</span>
          </div>
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-1000 px-4">
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">Trusted Professionals</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">Services Completed</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9/5
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero; 
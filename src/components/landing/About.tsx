import React from 'react';
import { CheckCircle, Star, Award, Users2 } from 'lucide-react';
import Section from '../ui/Section';

const About: React.FC = () => {
  const benefits = [
    'Thoroughly vetted and verified professionals',
    'Competitive pricing with no hidden fees',
    'Easy online booking and scheduling',
    'Secure payment processing',
    '24/7 customer support',
    'Satisfaction guarantee on all services'
  ];

  const stats = [
    { icon: Users2, value: '50,000+', label: 'Happy Customers' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Award, value: '500+', label: 'Certified Professionals' },
    { icon: CheckCircle, value: '99%', label: 'Job Completion Rate' }
  ];

  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your Trusted Partner for Professional Services
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            ClickSmart is your one-stop marketplace for connecting with skilled professionals 
            across multiple industries. We've simplified the process of finding, comparing, and booking 
            services so you can focus on what matters most to you.
          </p>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Learn More About Us
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves access to quality professional services without the hassle 
            of endless searching and uncertainty. Our platform bridges the gap between service seekers 
            and trusted professionals, creating a community built on trust, quality, and convenience.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About; 
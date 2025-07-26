import React from 'react';
import { Star, Quote } from 'lucide-react';
import Section from '../ui/Section';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  service: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Homeowner',
      company: 'Austin, TX',
      content: "ClickSmart connected me with an amazing HVAC technician who fixed my heating system the same day. The process was seamless and the pricing was very competitive. Highly recommend!",
      rating: 5,
      avatar: 'SJ',
      service: 'HVAC Repair'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Business Owner',
      company: 'Seattle, WA',
      content: "I needed legal help for my small business and found an excellent attorney through this platform. The quality of professionals they work with is outstanding. Saved me time and money.",
      rating: 5,
      avatar: 'MC',
      service: 'Legal Services'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      company: 'Miami, FL',
      content: "As a property manager, I use ClickSmart regularly for various maintenance needs. The contractors are reliable, professional, and the booking system is so convenient.",
      rating: 5,
      avatar: 'ER',
      service: 'Home Services'
    },
    {
      id: '4',
      name: 'David Thompson',
      role: 'Retiree',
      company: 'Phoenix, AZ',
      content: "Getting Medicare insurance was confusing until I found an agent through this platform. They explained everything clearly and helped me find the perfect plan for my needs.",
      rating: 5,
      avatar: 'DT',
      service: 'Insurance'
    },
    {
      id: '5',
      name: 'Lisa Park',
      role: 'Marketing Director',
      company: 'Denver, CO',
      content: "The dental practice I found through ClickSmart transformed my smile with Invisalign. Professional service, fair pricing, and excellent results. Couldn't be happier!",
      rating: 5,
      avatar: 'LP',
      service: 'Dental Care'
    },
    {
      id: '6',
      name: 'Robert Kim',
      role: 'Entrepreneur',
      company: 'Portland, OR',
      content: "Needed my car windows replaced urgently and found a mobile service through the platform. They came to my office, did excellent work, and the price was very reasonable.",
      rating: 5,
      avatar: 'RK',
      service: 'Auto Glass'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6 animate-fade-in-up">
          <Star className="w-4 h-4 mr-2 fill-current" />
          Customer Reviews
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
          Don't just take our word for it. Here's what real customers have to say about their experience with our service professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            {/* Quote Icon */}
            <div className="flex items-center justify-between mb-4">
              <Quote className="w-8 h-8 text-blue-600/20" />
              <div className="flex items-center space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-gray-700 mb-6 leading-relaxed">
              "{testimonial.content}"
            </blockquote>

            {/* Service Tag */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {testimonial.service}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 text-center animate-fade-in-up animation-delay-1000">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trusted by Thousands
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                50,000+
              </div>
              <div className="text-gray-600 font-medium">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 font-medium">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials; 
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Star } from 'lucide-react';
import { SITE_CONFIG } from '../../constants';
import { handleNavClick } from '../../utils/scrollUtils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Home Services', href: '#services' },
        { label: 'Health & Wellness', href: '#services' },
        { label: 'Insurance Services', href: '#services' },
        { label: 'Finance & Legal', href: '#services' },
        { label: 'Automotive Services', href: '#services' },
        { label: 'Real Estate & Moving', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'How It Works', href: '#features' },
        { label: 'Customer Reviews', href: '#testimonials' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Become a Provider', href: '#contact' },
        { label: 'Support Center', href: '#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'GDPR Compliance', href: '/gdpr' },
        { label: 'Accessibility', href: '/accessibility' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/clicksmart', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/clicksmart', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/clicksmart', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/clicksmart', label: 'LinkedIn' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      handleNavClick(href);
    } else if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal routes
      console.log('Navigate to:', href);
    }
  };

  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Main Footer Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                  Your trusted marketplace for professional services. We connect you with verified 
                  professionals across multiple industries, ensuring quality service and competitive pricing.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">4.9/5 from 50,000+ customers</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white text-xs md:text-sm rounded-full">
                    BBB Accredited
                  </span>
                  <span className="px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white text-xs md:text-sm rounded-full">
                    Verified Professionals
                  </span>
                  <span className="px-3 py-1 md:px-4 md:py-2 bg-purple-600 text-white text-xs md:text-sm rounded-full">
                    24/7 Support
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">+44 7700 123456</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">support@vercel.app</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Available Nationwide</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left text-sm md:text-base hover:translate-x-1 transform transition-transform"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-12 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-4">
                  Stay Updated
                </h4>
                <p className="text-gray-300 text-base md:text-lg">
                  Get the latest updates on new service providers and special offers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <button className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <span className="text-gray-400 text-sm md:text-base mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  onClick={() => handleLinkClick(social.href)}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="md:w-6 md:h-6" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
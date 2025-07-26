import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '../../constants';
import { handleNavClick } from '../../utils/scrollUtils';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    handleNavClick(href, () => setIsMenuOpen(false));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'pt-4' : 'pt-0'
      }`}
    >
      <div className={`mx-auto transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'max-w-6xl px-4 sm:px-6 lg:px-8' 
          : 'max-w-full px-0'
      }`}>
        <nav 
          className={`transition-all duration-500 ease-in-out backdrop-blur-md border ${
            isScrolled 
              ? 'bg-white/90 shadow-2xl rounded-2xl border-white/20' 
              : 'bg-white/95 shadow-lg border-gray-200 rounded-none'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 lg:h-18">
              {/* Logo */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleLinkClick('#home')}
                  className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${
                    isScrolled 
                      ? 'text-blue-600 hover:text-blue-700' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  {SITE_CONFIG.name}
                </button>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleLinkClick(item.href)}
                    className={`px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 relative group ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/80'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-6 transform -translate-x-1/2 rounded-full"></span>
                  </button>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden md:block">
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => handleLinkClick('#contact')}
                  className={`px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isScrolled
                      ? 'shadow-xl hover:shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      : 'shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                  }`}
                >
                  Get Started
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isMenuOpen 
                      ? 'text-blue-600 bg-blue-50 scale-110' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md rounded-b-2xl mt-2">
                <div className="px-2 pt-4 pb-6 space-y-2">
                  {NAVIGATION_ITEMS.map((item, index) => (
                    <button
                      key={item.label}
                      onClick={() => handleLinkClick(item.href)}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="px-4 pt-4">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
                      onClick={() => handleLinkClick('#contact')}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
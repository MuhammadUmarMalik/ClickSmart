import React from 'react';
import { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section 
      id={id} 
      className={`w-full py-16 md:py-20 lg:py-24 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section; 
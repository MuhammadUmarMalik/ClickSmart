import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Services from '../components/landing/Services';
import About from '../components/landing/About';
import Testimonials from '../components/landing/Testimonials';
import Contact from '../components/landing/Contact';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default LandingPage; 
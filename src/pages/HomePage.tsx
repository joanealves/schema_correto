"use client";

import React, { useRef } from 'react';  
import { Box } from '@chakra-ui/react';  
import Menu from '../components/Menu';  
import Hero from '../components/Hero'; 
import ServicesSection from '../components/ServiceSection';  
import LevelSection from '@/components/LevelSection';
import AboutSection from '@/components/AboutSection';
import Contact from '../components/Contact'; 
import Footer from '@/components/Footer';
import ProjectJourneySection from '@/components/ProjectJourneySection';

const HomePage: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box> 
      <Menu 
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Hero />
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <LevelSection />
      <ProjectJourneySection />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </Box>
  );
};

export default HomePage;

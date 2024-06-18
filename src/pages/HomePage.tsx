import React from 'react';  
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
  return (
    <Box> 
      <Menu />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <LevelSection />
      <ProjectJourneySection />
      <Contact />
      <Footer />
    </Box>
  );
};

export default HomePage;

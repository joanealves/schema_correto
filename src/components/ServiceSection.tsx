import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <SimpleGrid columns={3} spacing={0} width="100%" height="345px">
      <ServiceCard color="#EF3E66" title="Desenvolvimento de Sites" iconSrc="/assets/icon_dev.png" href="/web-development" />
      <ServiceCard color="#25548A" title="ERP - Gestão" iconSrc="/assets/icone_gestao.png" href="/erp-development" />
      <ServiceCard color="#4E57A7" title="UX/UI Design" iconSrc="/assets/icone_design.png" href="/ux-ui-design" />
    </SimpleGrid>
  );
};

export default ServicesSection;

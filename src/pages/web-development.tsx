import React from 'react';
import { Box, Flex, SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';
import Menu from '@/components/Menu';
import Contact from '../components/Contact'; 
import Footer from '../components/Footer';
import WebSection from '@/components/WebSection';

interface ContentCardProps {
  image: string;
  title: string;
  text: string;
  isHighlight?: boolean; 
}

const ContentCard: React.FC<ContentCardProps> = ({ image, title, text, isHighlight }) => {
  return (
    <Box>
      <Image src={image} alt={title} boxSize="60px" mb="36px" />
      <Text fontSize="sm" color={isHighlight ? 'EF3E66' : 'FFF'} textAlign="left">
        {text}
      </Text>
    </Box>
  );
};

const WebDevelopment = () => {
  return (
    <Box width="100%" bg="#222224">
      <Menu onServicesClick={function (): void {
        throw new Error('Function not implemented.');
      } } onAboutClick={function (): void {
        throw new Error('Function not implemented.');
      } } onContactClick={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Flex justifyContent="center" mt="26px">
        <Box width="calc(100% - 200px)" maxWidth="1131px">
          <SimpleGrid columns={2} spacingX="230px">
            <VStack spacing="26px">
              <ContentCard
                image="/path/to/image1.jpg"
                title="Design Distinto e Personalizado"
                text="Cada site e landing page que criamos é único e alinhado com a identidade visual da sua marca. Garantimos uma aparência deslumbrante e impactante."
              />
              <ContentCard
                image="/path/to/image2.jpg"
                title="Responsividade em Todos os Dispositivos"
                text="Seu site ou landing page será perfeitamente funcional em desktops, tablets e smartphones, garantindo uma experiência consistente em qualquer dispositivo."
              />
              <ContentCard
                image="/path/to/image3.jpg"
                title="Manutenção e Suporte Contínuos"
                text="Fornecemos suporte técnico contínuo e atualizações regulares para garantir que seu site ou landing page esteja sempre funcionando com desempenho máximo."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/path/to/image4.jpg"
                title="Foco na Conversão e Usabilidade"
                text="Priorizamos a usabilidade e a experiência do usuário para garantir que seus visitantes se convertam em clientes. Cada elemento é estrategicamente posicionado para maximizar a eficácia."
              />
              <ContentCard
                image="/path/to/image5.jpg"
                title="Integração com Ferramentas Essenciais"
                text="Integramos funcionalidades essenciais, como formulários de contato, botões de chamada para ação e sistemas de gerenciamento de conteúdo, para garantir que seu site funcione perfeitamente."
              />
              <ContentCard
                image="/path/to/image6.jpg"
                title="Elevando Sua Presença Online com Sites e Landing Pages Incríveis"
                text="Na Schema, estamos empenhados em criar presenças online que não apenas impressionam, mas também convertem. Nossa equipe de especialistas em design e desenvolvimento está pronta para transformar sua visão em realidade."
                isHighlight={true}
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>
      <WebSection/>
      <Contact />
      <Footer />
    </Box>
    
  );
};

export default WebDevelopment;

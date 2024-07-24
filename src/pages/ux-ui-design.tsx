import React, { useRef } from 'react';
import { Box, Flex, SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';
import Menu from '@/components/Menu';
import Contact from '../components/Contact'; 
import Footer from '../components/Footer';
import DesignSection from '../components/DesignSection';

interface ContentCardProps {
  image: string;
  text: string;
  isHighlight?: boolean; 
}

const ContentCard: React.FC<ContentCardProps> = ({ image, text, isHighlight }) => {
  return (
    <Box>
      <Image src={image} alt="logo erp" boxSize="60px" mb="36px" />
      <Text fontSize="sm" color={isHighlight ? '25548A' : 'FFF'} textAlign="left">
        {text}
      </Text>
    </Box>
  );
};

const UXDevelopment: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box width="100%" bg="#222224">
      <Menu 
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Flex justifyContent="center" mt="26px">
        <Box width="calc(100% - 200px)" maxWidth="1131px">
          <SimpleGrid columns={2} spacingX="230px">
            <VStack spacing="26px">
              <ContentCard
                image="/path/to/erp/image1.jpg"
                text="Pesquisa e Análise Aprofundada: Compreendemos a importância de conhecer profundamente o seu público-alvo. Realizamos pesquisas detalhadas para garantir que cada aspecto do design seja orientado pelo comportamento e necessidades dos usuários."
              />
              <ContentCard
                image="/path/to/erp/image2.jpg"
                text="Prototipagem e Testes Iterativos: Utilizamos prototipagem rápida e testes contínuos para refinar e aprimorar o design, garantindo que o produto final atenda às expectativas e necessidades dos usuários."
              />
              <ContentCard
                image="/path/to/erp/image3.jpg"
                text="Avaliação de Usabilidade e Melhoria Contínua: Após o lançamento, continuamos a monitorar e avaliar a usabilidade, implementando melhorias conforme necessário para garantir uma experiência sempre aprimorada."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/path/to/erp/image4.jpg"
                text="Design Centrado no Usuário: Cada elemento do nosso design é criado com o usuário em mente. Desde a navegação até a interface, cada detalhe é projetado para proporcionar uma experiência intuitiva e envolvente."
              />
              <ContentCard
                image="/path/to/erp/image5.jpg"
                text="Treinamento Especializado e Suporte Contínuo: Oferecemos treinamento abrangente para garantir que sua equipe esteja totalmente capacitada a utilizar todas as funcionalidades do sistema. Além disso, nosso suporte técnico está disponível para ajudá-lo a qualquer momento."
              />
              <ContentCard
                image="/path/to/erp/image6.jpg"
                text="Nossos especialistas em UX estão prontos para mergulhar no mundo dos seus usuários, entendendo suas necessidades, desejos e comportamentos.Com base nesses insights, criamos interfaces intuitivas e agradáveis que garantem a satisfação e a fidelidadedo usuário."
                isHighlight={true}
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>
      <DesignSection />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </Box>
  );
};

export default UXDevelopment;

import React from 'react';
import { Box, Flex, SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';
import Menu from '@/components/Menu';
import Contact from '../components/Contact'; 
import Footer from '../components/Footer';
import ERPSection from '@/components/ERPSection';

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

const ERPDevelopment = () => {
  return (
    <Box width="100%" bg="#222224">
      {/* <Menu /> */}
      <Flex justifyContent="center" mt="26px">
        <Box width="calc(100% - 200px)" maxWidth="1131px">
          <SimpleGrid columns={2} spacingX="230px">
            <VStack spacing="26px">
              <ContentCard
                image="/path/to/erp/image1.jpg"
                text="Análise e Consultoria Especializada: Compreendemos a importância de um sistema ERP alinhado com seus objetivos. Nossa equipe conduz uma análise detalhada para garantir que cada funcionalidade seja projetada para impulsionar a eficiência e a produtividade."
              />
              <ContentCard
                image="/path/to/erp/image2.jpg"
                text="Integração sem Complicações: Nossos sistemas de ERP são projetados para se integrar perfeitamente com seus processos existentes. Dessa forma, a transição para o novo sistema é suave e sem interrupções."
              />
              <ContentCard
                image="/path/to/erp/image3.jpg"
                text="Segurança e Conformidade: Priorizamos a segurança dos dados do seu negócio. Implementamos as mais recentes medidas de segurança para proteger suas informações e garantir a conformidade com as regulamentações vigentes."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/path/to/erp/image4.jpg"
                text="Personalização Abrangente: Não acreditamos em soluções tamanho único. Desenvolvemos cada aspecto do seu ERP de acordo com as necessidades exclusivas do seu negócio, garantindo que cada funcionalidade atenda aos seus requisitos."
              />
              <ContentCard
                image="/path/to/erp/image5.jpg"
                text="Treinamento Especializado e Suporte Contínuo: Oferecemos treinamento abrangente para garantir que sua equipe esteja totalmente capacitada a utilizar todas as funcionalidades do sistema. Além disso, nosso suporte técnico está disponível para ajudá-lo a qualquer momento."
              />
              <ContentCard
                image="/path/to/erp/image6.jpg"
                text="Potencialize seu Negócio com um ERP personalizado sob medida.
                    Destaque-se no seu setor com nosso ERP personalizado, desenhado para se adaptar exclusivamente às necessidades da sua empresa. Ganhe controle total sobre finanças, operações e recursos humanos, obtendo uma visão estratégica e precisa do seu negócio."
                isHighlight={true}
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>
      <ERPSection />
      <Contact />
      <Footer />
    </Box>
  );
};

export default ERPDevelopment;

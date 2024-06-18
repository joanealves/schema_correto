import React from 'react';
import { Box, Flex, SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';

const ProjectJourneySection = () => {
  return (
    <Box mt="40px" mb="40px" width="full" display="flex" justifyContent="center">
      <Flex
        width="1131px"
        height="247px"
        alignItems="center" 
        justifyContent="center" 
      >
        <SimpleGrid columns={4} spacing={58} width="full">
          {/* Coluna 1 */}
          <VStack spacing={6}>
            {/* <Image src="/path/to/image1.jpg" alt="Idealizar" boxSize="60px" /> */}
            <Text textAlign="left" fontSize="sm">
              Idealizar - Momento de levantar requisitos, elencá-los e por fim extrair valor por entregas alinhando com as suas expectativas.
            </Text>
          </VStack>

          {/* Coluna 2 */}
          <VStack spacing={6}>
            {/* <Image src="/path/to/image2.jpg" alt="Dividindo Entregas" boxSize="60px" /> */}
            <Text textAlign="left" fontSize="sm">
              Dividindo as entregas nas chamadas Sprints, iniciamos os trabalhos e a cada ciclo você pode acompanhar e pontuar. Obrigatório para alcançarmos a perfeição.
            </Text>
          </VStack>

          {/* Coluna 3 */}
          <VStack spacing={6}>
            {/* <Image src="/path/to/image3.jpg" alt="Melhoria Contínua" boxSize="60px" /> */}
            <Text textAlign="left" fontSize="sm">
              Depois de aprovado daremos inicio a melhoria contínua da entrega a fim de deixá-la pronta para o lançamento. É um dos pontos mais importantes para a agilidade.
            </Text>
          </VStack>

          {/* Coluna 4 */}
          <VStack spacing={6}>
            {/* <Image src="/path/to/image4.jpg" alt="Revisão Geral" boxSize="60px" /> */}
            <Text textAlign="left" fontSize="sm">
              Realizamos uma revisão geral do projeto, buscando melhorias importantes para proporcionar uma excelente experiência e agregar valor ao usuário final.
            </Text>
          </VStack>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default ProjectJourneySection;

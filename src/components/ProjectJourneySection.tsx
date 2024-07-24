import React from 'react';
import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaLightbulb } from "react-icons/fa"; 
import { BsCodeSlash } from "react-icons/bs"; 
import { HiAdjustments } from "react-icons/hi"; 
import { FaHandPeace } from "react-icons/fa"; 

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
          <VStack spacing="40px">
            <FaLightbulb size="60px" />
            <Text textAlign="left" fontSize="sm">
              Idealizar - Momento de levantar requisitos, elencá-los e por fim extrair valor por entregas alinhando com as suas expectativas.
            </Text>
          </VStack>
          <VStack spacing="40px">
            <BsCodeSlash size="60px" />
            <Text textAlign="left" fontSize="sm">
              Dividindo as entregas nas chamadas Sprints, iniciamos os trabalhos e a cada ciclo você pode acompanhar e pontuar. Obrigatório para alcançarmos a perfeição.
            </Text>
          </VStack>
          <VStack spacing="40px">
            <HiAdjustments size="60px" />
            <Text textAlign="left" fontSize="sm">
              Depois de aprovado daremos inicio a melhoria contínua da entrega a fim de deixá-la pronta para o lançamento. É um dos pontos mais importantes para a agilidade.
            </Text>
          </VStack>
          <VStack spacing="40px">
            <FaHandPeace size="60px" /> 
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

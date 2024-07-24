import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const ERPSection = () => {
  return (
    <Box width="100%" height="246px" bg="#4E57A7" display="flex" justifyContent="center" alignItems="center">
      <Flex
        width="calc(100% - 160px)"
        maxW="1200px" 
        align="center"
        justify="space-between" 
      >
        <Text
          color="#FFF"
          fontSize="lg"
          textAlign="justify"
          width="737px"
          height="156px"
          lineHeight="tall" 
          display="flex"
          alignItems="center" 
        >
          Nossa missão é criar experiências digitais incríveis, desde o design visual até a interação, para que os usuários se sintam verdadeiramente encantados e engajados ao utilizar um produto ou serviço. Acreditamos no poder do design para cativar, e estamos aqui para tornar sua presença online inesquecível. Vamos juntos transformar sua visão em uma experiência digital de tirar o fôlego!
        </Text>
        <Image
          src="/assets/capa_design.png" 
          alt="UXUI Image"
          width="429px"
          height="208px"
          ml="64px"
        />
      </Flex>
    </Box>
  );
};

export default ERPSection;

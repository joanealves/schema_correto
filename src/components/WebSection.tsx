import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const WebSection = () => {
  return (
    <Box width="100%" height="246px" bg="#EF3E66" display="flex" justifyContent="center" alignItems="center">
      <Flex
        width="calc(100% - 160px)" 
        maxW="1200px" 
        align="center"
        justify="space-between" 
        height="full"
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
          Na Schema, estamos comprometidos em fornecer soluções de Web Development de alta qualidade e sob medida para atender às necessidades específicas do seu negócio. Nossa equipe de especialistas está pronta para oferecer um sistema de gestão de conteúdo integrado que revolucionará a maneira como você opera online.
        </Text>
        <Image
          src="/path/to/your/right-image.jpg" 
          alt="Web Development Image"
          width="429px"
          height="208px"
          ml="64px"
        />
      </Flex>
    </Box>
  );
};

export default WebSection;

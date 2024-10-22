import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image'; 

const DesignSection = () => {
  return (
    <Box
      width="100%"
      height={{ base: 'auto', md: '246px' }} 
      bg="#EF3E66"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={{ base: 4, md: 0 }}
      boxSizing="border-box"
    >
      <Flex
        width={{ base: '100%', md: 'calc(100% - 160px)' }}
        maxW="1200px"
        align="center"
        justify="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        height="full"
        textAlign="center"
      >
        <Text
          color="#FFF"
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign={{ base: 'center', md: 'justify' }}
          width={{ base: '100%', md: '737px' }}
          height={{ base: 'auto', md: '156px' }}
          lineHeight="tall"
          mb={{ base: 4, md: 0 }}
          display="flex"
          alignItems="center"
        >
          Nossa missão é criar experiências digitais incríveis, desde o design visual até a interação, para que os usuários se sintam verdadeiramente encantados e engajados ao utilizar um produto ou serviço.
        </Text>

       
        <Box
          position="relative"
          width={{ base: '100%', md: '429px' }}
          height={{ base: '200px', md: '208px' }}
          ml={{ base: 0, md: '64px' }}
        >
          <Image
            src="/assets/design-image.jpg"
            alt="Design Image"
            layout="fill"  
            objectFit="cover"  
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default DesignSection;
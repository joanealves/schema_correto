import React from 'react';
import { Box, Flex, Text, Button, VStack, Input, Textarea } from '@chakra-ui/react';
import Image from 'next/image';

const Contact = () => {
  return (
    <Flex
      width="100vw" 
      height="100vh" 
      align="center" 
      justify="center" 
      backgroundColor="gray.50" 
    >
      <Flex
        width="1196px"
        height="666px"
        border="1px solid #ccc"
        overflow="hidden"
      >
        {/* Metade Esquerda para informações de contato */}
        <Box
          width="598px"
          height="666px"
          bg="rgba(37, 84, 138, 0.04)"
          p={5}
          position="relative"
        >
          <Box>
            <Text color="#FFF" fontSize="24px" fontWeight="bold">Fale com a gente!</Text>
            <Text color="#FFF" mb={4}>Atendimento personalizado</Text>
          </Box>
          <Box position="absolute" bottom="0" left="0">
            <Image 
              src="/assets/esferas_azuis.png" 
              alt="Decorative Image" 
              width={283} 
              height={209}
              layout="fixed"
            />
          </Box>
        </Box>

        {/* Metade Direita para o formulário de contato */}
        <Flex
          width="598px"
          bg="rgba(0, 198, 244, 0.02)"
          p={5}
          flexDirection="column"
          justifyContent="center"
          height="666px"
        >
          <VStack spacing={4} align="stretch">
            <Input placeholder="Nome" variant="filled" _placeholder={{ color: '#fff' }}/>
            <Input placeholder="Telefone" variant="filled" _placeholder={{ color: '#fff' }}/>
            <Textarea placeholder="Mensagem" variant="filled" _placeholder={{ color: '#fff' }}/>
            <Button colorScheme="pink" variant="solid">Enviar</Button>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;

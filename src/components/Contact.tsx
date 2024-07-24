import React from 'react';
import { Box, Flex, Text, Button, VStack, Input, Textarea, HStack, Icon, FormControl, FormLabel } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';


const Contact: React.FC = () => {
  return (
    <Flex
      width="100vw" 
      height="100vh" 
      align="center" 
      justify="center" 
      backgroundColor="#1A1A1A" 
      p={10}
    >
      <Flex
        width="80%" 
        maxWidth="1200px"
        height="660px"
        backgroundColor="#2D2D2D" 
        borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
      >
        {/* Metade Esquerda para informações de contato */}
        <Box
          width="50%"
          p={20}
          bg="#2D2D2D"
          color="white"
          position="relative"
        >
          <Text fontSize="24px" fontWeight="bold" ml={16} mb={4}>Fale com a gente!</Text>
          <Text fontSize="16px" ml={16} mb={13}>Atendimento especializado.</Text>
          <VStack align="start"  mt={113} ml={16} spacing={50}> 
            <HStack spacing={25}> 
              <Icon as={PhoneIcon} w={17} h={17} />
              <Text>+31 97164-0627</Text>
            </HStack>
            <HStack spacing={25}>
              <Icon as={EmailIcon} w={17} h={17} />
              <Text>contato@schema.com</Text>
            </HStack>
            <HStack spacing={25}>
              <Icon as={FaMapMarkerAlt} w={17} h={17} />
              <Text>São João Batista - Belo Horizonte</Text>
            </HStack>
          </VStack>
          <Box position="absolute" bottom="10px" left="10px">
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
          width="50%"
          p={10}
          flexDirection="column"
          justifyContent="center"
          bg="#2D2D2D"
          color="white"
        >
          <FormControl mb={4}>
            <FormLabel color="white">Nome</FormLabel>
            <Input 
              placeholder="Digite seu nome" 
              variant="unstyled"
              _placeholder={{ color: '#A0AEC0' }}
              borderBottom="1px solid white"
              _focus={{ borderBottomColor: "white" }}
              bg="#2D2D2D"
            />
          </FormControl>
          <HStack spacing={4} mb={4}>
            <FormControl>
              <FormLabel color="white">Email</FormLabel>
              <Input 
                placeholder="Digite seu email" 
                variant="unstyled"
                _placeholder={{ color: '#A0AEC0' }}
                borderBottom="1px solid white"
                _focus={{ borderBottomColor: "white" }}
                bg="#2D2D2D"
              />
            </FormControl>
            <FormControl>
              <FormLabel color="white">Telefone</FormLabel>
              <Input 
                placeholder="Digite seu telefone" 
                variant="unstyled"
                _placeholder={{ color: '#A0AEC0' }}
                borderBottom="1px solid white"
                _focus={{ borderBottomColor: "white" }}
                bg="#2D2D2D"
              />
            </FormControl>
          </HStack>
          <FormControl mb={4}>
            <FormLabel color="white">Mensagem</FormLabel>
            <Textarea 
              placeholder="Digite sua mensagem" 
              variant="unstyled"
              _placeholder={{ color: '#A0AEC0' }}
              borderBottom="1px solid white"
              _focus={{ borderBottomColor: "white" }}
              bg="#2D2D2D"
              size="lg"
            />
          </FormControl>
          <Button 
            mt={4} 
            bg="pink.500" 
            color="white" 
            width="148px" 
            height="48px" 
            fontWeight="bold" 
            alignSelf="center"
            _hover={{ bg: "white", color: "pink.500" }}  
          >
            Enviar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;

import { Box, Text, Button, Image, Flex } from '@chakra-ui/react';

const LevelSection = () => {
  return (
    <Flex
      bg="#9D334B"  
      width="100%"
      height="264px"
      p="60px 100px" 
      justifyContent="space-between"  
      alignItems="center"
    >
      <Flex flex="1" mr="100px" flexDirection="column" alignItems="center"> 
        <Text fontSize="24px" fontWeight="bold" mb="18px" color="white" textShadow="2px 2px 4px rgba(0,0,0,0.5)" textAlign="center">  
          PREPARE-SE PARA SUBIR DE NÍVEL
        </Text>
        <Button 
          variant="outline"
          borderColor="white"
          color="white"
          width="119px"
          height="40px"
          _hover={{ bg: "transparent", borderColor: 'white' }}
          backgroundColor="transparent"
        >
          Saiba Mais
        </Button>
      </Flex>

      <Image
        src="/assets/icone_foguete.png"  
        alt="Imagem central ilustrativa"
        width="80px"
        height="80px"
        objectFit="cover"
        flex="1"
        mx="100px"  
      />

      <Box flex="1" textAlign="left" color="white">
        <Text fontSize="16px" lineHeight="tall" textAlign="justify">
          Desenvolvemos sistemas pensados exclusivamente para o seu processo e modelo de negócio, com foco na otimização e aumento da produtividade.
          Destaque-se dos concorrentes e alcance um novo patamar de eficiência!
        </Text>
      </Box>
    </Flex>
  );
};

export default LevelSection;

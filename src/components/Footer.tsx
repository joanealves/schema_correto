import { Box, Text, VStack } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="#9D334B" color="white" height="60px" width="100%" display="flex" justifyContent="center" alignItems="center">
      <VStack>
        <Text fontSize="lg" fontWeight="bold">SCHEMA</Text>
        <Text fontSize="sm">Todos os direitos reservados @schema2023</Text>
      </VStack>
    </Box>
  );
};

export default Footer;

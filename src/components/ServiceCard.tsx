import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface ServiceCardProps {
  color: string;
  title: string;
  iconSrc: string;
  href?: string; // URL para navegação
}

const ServiceCard: React.FC<ServiceCardProps> = ({ color, title, iconSrc, href }) => {
  return (
    <Box
      width="full"
      height="345px"
      bg={`${color}99`}
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="20px"
      transition="transform 0.3s ease, box-shadow 0.3s ease" 
      _hover={{
        transform: "translateY(-10px)", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)" 
      }}
    >
      <Image src={iconSrc} alt={`Ícone de ${title}`} width={50} height={50} />
      <Text fontSize="lg" color="white" fontWeight="bold" mt={4}>
        {title}
      </Text>
      <Link href={href ?? '/'} passHref>
        <Button
          mt={6}
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
      </Link>
    </Box>
  );
};

export default ServiceCard;

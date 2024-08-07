import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  color: string;
  title: string;
  Icon: IconType;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ color, title, Icon, href }) => {
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
      <Icon size="60px" color="white" />
      <Text fontSize="lg" color="white" fontWeight="bold" mt="10px">
        {title}
      </Text>
      {href && (
        <Link href={href} passHref>
          <Button
            as="a"
            mt="10px"
            variant="outline"
            borderColor="white !important" 
            color="white"
            width="119px"
            height="40px"
            _hover={{
              bg: "transparent", 
              borderColor: 'white !important' 
            }}
            border="2px solid white !important" 
            borderRadius="6px"
            backgroundColor="transparent"
          >
            Saiba Mais
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default ServiceCard;

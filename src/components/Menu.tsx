import React from 'react';
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link';

interface MenuProps {
  onServicesClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}
const Menu: React.FC<MenuProps> = ({ onServicesClick, onAboutClick, onContactClick }) => {
  return (
    <Box
      width="100%" 
      padding="0 20px"
      fontFamily="'Quicksand', sans-serif"
      boxShadow="0px 4px 2px -2px gray"
    >
      <Flex
        maxWidth="1390px"
        height="60px"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/" passHref>
          <Box as="a">
            <Image src="/assets/logo.png" alt="Logo Schema" width={100} height={40} />
          </Box>
        </Link>

        <Spacer />

        <Text textAlign="center" fontSize="18px" color="#EF3E66" lineHeight="40px">
          PREPARE-SE PARA SUBIR DE NÍVEL
        </Text>

        <Spacer />

        <Flex gap="10px" alignItems="center">
          <Text onClick={onServicesClick} fontSize="18px" color="#EF3E66" _hover={{ color: "#FFFF" }} cursor="pointer">
            Serviços
          </Text>
          <Text onClick={onAboutClick} fontSize="18px" color="#EF3E66" _hover={{ color: "#FFFF" }} cursor="pointer">
            Quem Somos
          </Text>
          <Text onClick={onContactClick} fontSize="18px" color="#EF3E66" _hover={{ color: "#FFFF" }} cursor="pointer">
            Fale conosco
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;

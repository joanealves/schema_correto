import { Box, Flex, Link, Text, Spacer } from "@chakra-ui/react";
import Image from "next/image";

const Menu = () => {
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
        <Image src="/assets/logo.png" alt="Logo Schema" width={100} height={40} />

        <Spacer />

        <Text textAlign="center" fontSize="18px" color="#EF3E66" lineHeight="40px">
          PREPARE-SE PARA SUBIR DE NÍVEL
        </Text>

        <Spacer />

        <Flex gap="10px" alignItems="center">
          <Link href="/services" fontSize="18px" color="#EF3E66" _hover={{ color: "#FFFF" }}>
            Serviços
          </Link>
          <Link href="/schemas" fontSize="18px" color="#EF3E66" _hover={{ color: "#FFFF" }}>
            Schema
          </Link>
          <Link href="/contact" fontSize="18px" color="#EF3E66" _hover={{ color: "#FFFF" }}>
            Contatos
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;

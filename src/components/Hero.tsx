import { Box } from '@chakra-ui/react';

const Hero: React.FC = () => {
  return (
    <Box
      height="476px"
      width="100%"
      bgImage="url('/assets/capa.png')" 
      bgRepeat="no-repeat"
      bgSize="cover"
    >
    </Box>
  );
};

export default Hero;

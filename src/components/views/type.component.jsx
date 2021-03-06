import { Flex, Text, Button, Stack, chakra } from "@chakra-ui/react";

import { FaBoxes, FaBoxOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CFaBoxes = chakra(FaBoxes);
const CFaBoxOpen = chakra(FaBoxOpen);

export const Type = () => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection='column'
      width='70%'
      height='100vh'
      backgroundColor='gray.100'
      justifyContent='center'
      alignItems='center'
    >
      <Stack m='10' direction='row' spacing={40} align='center'>
        <Button
          size='lg'
          leftIcon={<CFaBoxes boxSize={5} />}
          colorScheme='teal'
          variant='solid'
          width='200px'
          height='100px'
          p='20'
          onClick={() => navigate("/crud/categoria")}
        >
          <Text fontSize='xl'>Categoría</Text>
        </Button>
        <Button
          size='lg'
          leftIcon={<CFaBoxOpen boxSize={5} />}
          colorScheme='teal'
          variant='solid'
          width='200px'
          height='100px'
          p='20'
          onClick={() => navigate("/crud/producto")}
        >
          <Text fontSize='xl'>Producto</Text>
        </Button>
      </Stack>
    </Flex>
  );
};

export default Type;

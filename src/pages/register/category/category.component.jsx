
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
} from '@chakra-ui/react';
import { FaBoxes } from "react-icons/fa";

const CFaBoxes = chakra(FaBoxes);

export const RegisterCategory = () => {

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <CFaBoxes boxSize={20} color="teal.500"/>
        <Heading color="teal.400" >Registrar Categoría</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaBoxes color="gray.400" />}
                  />
                  <Input type="user" placeholder="Nombre de Categoría" />
                </InputGroup>
              </FormControl>

              <Stack mt='10' spacing={4} direction='row' align='center'>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="50%"
                  >
                    Cancelar
                  </Button>

                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="50%"
                  >
                    Registrar
                  </Button>
              </Stack>
              
            </Stack>
          </form>
        </Box>
      </Stack>
      
    </Flex>
  );
};

export default RegisterCategory;

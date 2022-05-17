
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
import { FaBoxOpen, FaDollarSign, FaBoxes, FaCommentDots } from "react-icons/fa";

import UploadImage from '../../../components/upload/upalodImage.component'

const CFaBoxOpen = chakra(FaBoxOpen);
const CFaDollarSign = chakra(FaDollarSign);
const CFaBoxes = chakra(FaBoxes);

const CFaCommentDots = chakra(FaCommentDots);

export const RegisterProduct = () => {

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
        <CFaBoxOpen boxSize={20} color="teal.500"/>
        <Heading color="teal.400">Registrar Producto</Heading>
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
                    children={<CFaBoxOpen color="gray.400" />}
                  />
                  <Input type="producto" placeholder="Nombre de Producto" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaDollarSign color="gray.400" />}
                  />
                  <Input type="user" placeholder="Precio" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaBoxes color="gray.400" />}
                  />
                  <Input type="categoria" placeholder="Categoría" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaCommentDots color="gray.400" />}
                  />
                  <Input type="user" placeholder="Descripción" />
                </InputGroup>
              </FormControl>

              <UploadImage/>
              
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

export default RegisterProduct;

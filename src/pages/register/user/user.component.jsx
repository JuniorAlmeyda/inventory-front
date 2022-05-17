import { useState } from "react";
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
  Avatar,
  FormControl,
  InputRightElement,
  Select,
} from '@chakra-ui/react';
import { FaUserAlt, FaRegEnvelope, FaLock } from "react-icons/fa";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import UploadImage from '../../../components/upload/upalodImage.component'

const CFaUserAlt = chakra(FaUserAlt);
const CFaRegEnvelope = chakra(FaRegEnvelope);
const CFaLock = chakra(FaLock);

export const User = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

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
        <Avatar bg="teal.500" size='xl'/>
        <Heading color="teal.400">Registrar Usuario</Heading>
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
                    children={<CFaUserAlt color="gray.400" />}
                  />
                  <Input type="user" placeholder="Nombre Completo" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaRegEnvelope color="gray.400" />}
                  />
                  <Input type="user" placeholder="Correo Electrónico" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.400" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select variant="filled" placeholder="Selecciona el rol">
                      <option value="ADMIN_ROLE">Administrador</option>
                      <option value="USER_ROLE">Usuario</option>
                    </Select>
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

export default User;

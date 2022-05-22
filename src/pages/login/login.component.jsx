import { useState } from "react";
import axios from "axios";
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
  Image,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const postLogin = async (email, password) => {
    const data = {
      correo: email,
      password,
    };
    const url = `http://localhost:8080/api/auth/login`;

    const config = {
      method: "post",
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };
    try {
      const { data } = await axios(config);
      if (data.msg === "login ok") {
        localStorage.setItem("user", JSON.stringify(data.usuario));
        console.log(
          "🚀 ~ file: login.component.jsx ~ line 45 ~ postLogin ~ data",
          data
        );
        navigate("/index");
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: login.component.jsx ~ line 47 ~ postLogin ~ error",
        error
      );
      return error;
    }
  };
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection='column'
      width='100wh'
      height='100vh'
      backgroundColor='gray.200'
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        flexDir='column'
        mb='2'
        justifyContent='center'
        alignItems='center'
      >
        <Image
          borderRadius='full'
          boxSize='180px'
          src='https://kelurahan-bahagia.bekasikab.go.id/thinq_web_bahagia/static/src/img/service.png'
          alt='Inventory'
        />
        <Heading color='teal.400'>Inventory</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p='1rem'
              backgroundColor='whiteAlpha.900'
              boxShadow='md'
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaUserAlt color='gray.300' />}
                  />
                  <Input type='email' placeholder='Email' />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    children={<CFaLock color='gray.300' />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder='Password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type='submit'
                variant='solid'
                colorScheme='teal'
                width='full'
                onClick={(e) => {
                  e.preventDefault();
                  postLogin("test1@test.com", "123456");
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;

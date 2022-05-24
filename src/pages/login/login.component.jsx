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
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/actions/authActionsCreator";
import { useForm } from "react-hook-form";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => postLogin(data.email, data.password);
  const postLogin = async (email, password) => {
    const res = await dispatch(fetchLogin(email, password));
    if (res === "ok") {
      navigate("/index");
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Input
                    type='email'
                    placeholder='Email'
                    autoComplete='true'
                    {...register("email", { required: true })}
                  />
                </InputGroup>
                {errors.email && <span>Escribir un correo</span>}
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
                    autoComplete='true'
                    {...register("password", { required: true })}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && <span>Escribir una contraseña</span>}
              </FormControl>
              <Button
                borderRadius={0}
                type='submit'
                variant='solid'
                colorScheme='teal'
                width='full'
                /* onClick={(e) => {
                  e.preventDefault();
                  postLogin("test1@test.com", "123456");
                }} */
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

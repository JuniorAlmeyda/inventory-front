import { useState } from 'react';
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
import { FaUserAlt, FaRegEnvelope, FaLock } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import UploadImage from '../../../components/upload/upalodImage.component';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchLogin } from '../../../store/actions/UserActionsCreator';
import axios from 'axios';
const CFaUserAlt = chakra(FaUserAlt);
const CFaRegEnvelope = chakra(FaRegEnvelope);
const CFaLock = chakra(FaLock);

export const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleShowClick = () => setShowPassword(!showPassword);
  const onChangeFile = (e) => {
    e.preventDefault();
    const img = e.target.files[0];

    setImage(img);
  };
  const onSubmit = (data) => createUser(data);
  const createUser = async (form) => {
    const res = await dispatch(fetchLogin(form));
    const user = await res.usuario.uid;
    await uploadImage(user);
    if (res === 'ok') {
      navigate('/index');
    }
  };
  const uploadImage = async (uid) => {
    let formData = new FormData();
    formData.append('archivo', image);
    const url = `http://localhost:8080/api/uploads/usuarios/${uid}`;
    const config = {
      method: 'put',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
    };
    const res = await axios(config);
    console.log(
      '🚀 ~ file: user.component.jsx ~ line 70 ~ uploadImage ~ res',
      res
    );
  };

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
        <Avatar bg='teal.500' size='xl' />
        <Heading color='teal.400'>Registrar Usuario</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
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
                    children={<CFaUserAlt color='gray.400' />}
                  />
                  <Input
                    type='text'
                    placeholder='Nombre Completo'
                    {...register('nombre', { required: true })}
                  />
                </InputGroup>
                {errors.nombre && <span> ingrese nombre hdp!!</span>}
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaRegEnvelope color='gray.400' />}
                  />
                  <Input
                    type='text'
                    placeholder='Correo Electrónico'
                    {...register('correo', { required: true })}
                  />
                </InputGroup>
                {errors.correo && <span> ingrese correo</span>}
              </FormControl>
              <FormControl>
                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    children={<CFaLock color='gray.400' />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    {...register('password', { required: true })}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && <span> ingrese una contraseña</span>}
              </FormControl>
              <FormControl>
                <Select
                  variant='filled'
                  placeholder='Selecciona el rol'
                  {...register('rol', { required: true })}
                >
                  <option value='ADMIN_ROLE'>Administrador</option>
                  <option value='USER_ROLE'>Usuario</option>
                </Select>
              </FormControl>
              <FormControl>
                <Input
                  type='file'
                  accept='image/*'
                  onChange={onChangeFile}
                ></Input>
              </FormControl>
              {/* <UploadImage onchangeFile={onChangeFile}/> */}

              <Stack mt='10' spacing={4} direction='row' align='center'>
                <Button
                  borderRadius={0}
                  type='submit'
                  variant='solid'
                  colorScheme='teal'
                  width='50%'
                  onClick={() => navigate('/index')}
                >
                  Cancelar
                </Button>

                <Button
                  borderRadius={0}
                  type='submit'
                  variant='solid'
                  colorScheme='teal'
                  width='50%'
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

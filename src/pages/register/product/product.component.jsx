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
  Select,
} from '@chakra-ui/react';
import {
  FaBoxOpen,
  FaDollarSign,
  FaBoxes,
  FaCommentDots,
} from 'react-icons/fa';

import UploadImage from '../../../components/upload/upalodImage.component';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../store/actions/categoryActionsCreator';
import { postAddProduct } from '../../../store/services/productServices';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const CFaBoxOpen = chakra(FaBoxOpen);
const CFaDollarSign = chakra(FaDollarSign);
const CFaBoxes = chakra(FaBoxes);

const CFaCommentDots = chakra(FaCommentDots);

export const RegisterProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.categorias);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState();
  const onChangeFile = (e) => {
    e.preventDefault();
    const img = e.target.files[0];

    setImage(img);
  };
  const onSubmit = (data) => createProduct(data);
  const createProduct = async (form) => {
    const res = await postAddProduct(form);
    const id = await res.data._id;
    const response = await uploadImage(id);
    if (response.statusText === 'OK') {
      Swal.fire(
        'el producto ha sido creado',
        '"',
        'success'
      )
      navigate('/index');
    }
  };
  const uploadImage = async (uid) => {
    let formData = new FormData();
    formData.append('archivo', image);
    const url = `http://localhost:8081/api/uploads/productos/${uid}`;
    const config = {
      method: 'put',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
    };
    const res = await axios(config);
    return res;
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
        <CFaBoxOpen boxSize={20} color='teal.500' />
        <Heading color='teal.400'>Registrar Producto</Heading>
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
                    children={<CFaBoxOpen color='gray.400' />}
                  />
                  <Input
                    type='text'
                    placeholder='Nombre de Producto'
                    {...register('nombre', { required: true })}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaDollarSign color='gray.400' />}
                  />
                  <Input
                    type='number'
                    placeholder='Precio'
                    {...register('precio', { required: true })}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <Select
                  variant='filled'
                  placeholder='Selecciona la categoria'
                  {...register('categoria', { required: true })}
                >
                  {data.map((categoria) => (
                    <option value={categoria._id} key={categoria._id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaCommentDots color='gray.400' />}
                  />
                  <Input
                    type='text'
                    placeholder='Descripción'
                    {...register('description', { required: true })}
                  />
                </InputGroup>
              </FormControl>

              <UploadImage onChangeFile={onChangeFile} />

              <Stack mt='10' spacing={4} direction='row' align='center'>
                <Button
                  borderRadius={0}
                  type='submit'
                  variant='solid'
                  colorScheme='teal'
                  width='50%'
                  onClick={() => navigate('/crud/producto')}
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

export default RegisterProduct;

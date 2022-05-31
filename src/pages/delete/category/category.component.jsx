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
  Select
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteCategoryById } from "../../../store/services/categoryServices";
import Swal from 'sweetalert2';
import { fetchCategories } from "../../../store/actions/categoryActionsCreator";
const CFaTrash = chakra(FaTrash);
 const DeleteCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.categorias);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    const res =await deleteCategoryById(data.id)
    if (res.statusText === 'OK') {
      Swal.fire(
        'la categoria ha sido eliminado',
        '"',
        'success'
      )
      navigate('/index');
    };
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
        <CFaTrash boxSize={20} color='teal.500' />
        <Heading color='teal.400'>Eliminar Categoría</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p='1rem'
              backgroundColor='whiteAlpha.900'
              boxShadow='md'
            >
              {/* <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaTrash color='gray.400' />}
                  />
                  <Input
                    type='user'
                    placeholder='Id de la Categoría a Eliminar'
                    {...register("id", { required: true })}
                  />
                </InputGroup>
                {errors.id && <span>ingresar un id</span>}
              </FormControl> */}
              <FormControl>
                <Select
                  variant='filled'
                  placeholder='Selecciona la categoria'
                  {...register('id', { required: true })}
                >
                  {data.map((categoria) => (
                    <option value={categoria._id} key={categoria._id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <Stack mt='10' spacing={4} direction='row' align='center'>
                <Button
                  borderRadius={0}
                  type='submit'
                  variant='solid'
                  colorScheme='teal'
                  width='50%'
                  onClick={() => navigate("/crud/categoria")}
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
                  Eliminar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default DeleteCategory;

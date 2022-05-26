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
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { deleteProductById } from '../../../store/services/productServices';
import Swal from 'sweetalert2';
const CFaTrash = chakra(FaTrash);

 const DeleteProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res= await  deleteProductById(data.id)
    console.log('🚀 ~ file: product.component.jsx ~ line 28 ~ onSubmit ~ res', res)
    if (res.statusText === 'OK') {
      Swal.fire(
        'el producto ha sido eliminado',
        '"',
        'success'
      )
      navigate('/index');
    };
  }
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
        <Heading color='teal.400'>Eliminar Producto</Heading>
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
                    children={<CFaTrash color='gray.400' />}
                  />
                  <Input
                    type='user'
                    placeholder='Id del Producto a Eliminar'
                    {...register("id", { required: true })}
                  />
                </InputGroup>
                {errors.nombre && <span>ingresar un id</span>}
              </FormControl>

              <Stack mt='10' spacing={4} direction='row' align='center'>
                <Button
                  borderRadius={0}
                  type='submit'
                  variant='solid'
                  colorScheme='teal'
                  width='50%'
                  onClick={() => navigate("/crud/producto")}
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

export default DeleteProduct;
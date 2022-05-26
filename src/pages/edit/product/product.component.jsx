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
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editProduct } from "../../../store/services/productServices";
import Swal from 'sweetalert2';
const CFaEdit = chakra(FaEdit);

export const EditCategory = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const res = await editProduct(data.id,data.nombre)
    if (res.statusText === 'OK') {
      Swal.fire(
        'el producto ha sido editada',
        '"',
        'success'
      )
      navigate('/index');
    }
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
        <CFaEdit boxSize={20} color='teal.500' />
        <Heading color='teal.400'>Editar Producto</Heading>
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
                    children={<CFaEdit color='gray.400' />}
                  />
                  <Input
                    type='user'
                    placeholder='Id del producto a Editar'
                    {...register("id", { required: true })}
                  />
                </InputGroup>
                {errors.nombre && <span>ingresar un id</span>}
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaEdit color='gray.400' />}
                  />
                  <Input
                    type='user'
                    placeholder='Nuevo Nombre del Producto'
                    {...register("nombre", { required: true })}
                  />
                </InputGroup>
                {errors.nombre && <span>ingresar una producto</span>}
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
                  Editar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default EditCategory;

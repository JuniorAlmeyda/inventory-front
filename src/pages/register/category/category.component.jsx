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
import { FaBoxes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postAddCategory } from "../../../store/services/categoryServices";
import Swal from 'sweetalert2';
const CFaBoxes = chakra(FaBoxes);

export const RegisterCategory = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
  const res=await  postAddCategory(data.nombre)
  console.log('🚀 ~ file: category.component.jsx ~ line 28 ~ onSubmit ~ res', res)
    if (res.statusText === 'Created') {
      Swal.fire(
        'la categoria ha sido creado',
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
        <CFaBoxes boxSize={20} color='teal.500' />
        <Heading color='teal.400'>Registrar Categoría</Heading>
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
                    children={<CFaBoxes color='gray.400' />}
                  />
                  <Input
                    type='user'
                    placeholder='Nombre de Categoría'
                    {...register("nombre", { required: true })}
                  />
                </InputGroup>
                {errors.nombre && <span>ingresar una categoria</span>}
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

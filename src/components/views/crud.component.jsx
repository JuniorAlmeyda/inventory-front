import { useState } from "react";
import { Flex, Text, Button, Stack, Container } from "@chakra-ui/react";

import { UpDownIcon, AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";

export const Crud = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/");
  const handlerCreate = () => {
    if (path[2] === "categoria") {
      navigate("/categoria/crear");
    } else if (path[2] === "producto") {
      navigate("/producto/crear");
    }
  };
  const handlerList = () => {
    if (path[2] === "categoria") {
      navigate("/categoria/listar");
    } else if (path[2] === "producto") {
      navigate("/producto/listar");
    }
  };
  return (
    <Flex
      flexDirection='column'
      width='70%'
      height='100vh'
      backgroundColor='gray.100'
      justifyContent='center'
      alignItems='center'
    >
      <Stack m='10' direction='row' spacing={40} align='center'>
        <Button
          size='lg'
          leftIcon={<UpDownIcon boxSize={5} />}
          colorScheme='teal'
          variant='solid'
          width='200px'
          height='100px'
          p='20'
          onClick={handlerList}
        >
          <Text fontSize='xl'>Listar</Text>
        </Button>
        <Button
          size='lg'
          leftIcon={<AddIcon boxSize={5} />}
          colorScheme='teal'
          variant='solid'
          width='200px'
          height='100px'
          p='20'
          onClick={handlerCreate}
        >
          <Text fontSize='xl'>Crear</Text>
        </Button>
      </Stack>

      <Stack m='10' direction='row' spacing={40} align='center'>
        <Button
          size='lg'
          leftIcon={<EditIcon boxSize={5} />}
          colorScheme='teal'
          variant='solid'
          width='200px'
          height='100px'
          p='20'
        >
          <Text fontSize='xl'>Editar</Text>
        </Button>
        <Button
          size='lg'
          leftIcon={<DeleteIcon boxSize={5} />}
          colorScheme='teal'
          variant='solid'
          width='200px'
          height='100px'
          p='20'
        >
          <Text fontSize='xl'>Eliminar</Text>
        </Button>
      </Stack>
    </Flex>
  );
};

export default Crud;

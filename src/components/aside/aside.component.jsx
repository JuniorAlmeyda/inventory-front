import { useState } from "react";
import { Box, Flex, Image, Button, Stack } from "@chakra-ui/react";

import { CheckCircleIcon, EmailIcon, SettingsIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Aside = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  return (
    <Flex
      flexDirection='column'
      width='30%'
      height='100vh'
      backgroundColor='gray.200'
      justifyContent='center'
      alignItems='center'
    >
      <Image
        borderRadius='full'
        boxSize='250px'
        src={user.img}
        alt='Dan Abramov'
      />
      <Box mt='10' fontSize='xl'>
        <CheckCircleIcon width={5} height={5} color='teal.500' /> {user.nombre}
      </Box>

      <Box mt='10' fontSize='xl'>
        <EmailIcon width={5} height={5} color='teal.500' /> {user.correo}
      </Box>

      <Box mt='10' fontSize='xl'>
        <SettingsIcon width={5} height={5} color='teal.500' /> {user.rol}
      </Box>

      <Stack mt='10' spacing={4} direction='row' align='center'>
        <Button
          colorScheme='teal'
          variant='solid'
          size='lg'
          onClick={() => navigate("/createUser")}
        >
          Crear Cuenta
        </Button>
        <Button
          colorScheme='teal'
          variant='solid'
          size='lg'
          onClick={() => navigate("/index")}
        >
          Inicio
        </Button>
      </Stack>
    </Flex>
  );
};

export default Aside;

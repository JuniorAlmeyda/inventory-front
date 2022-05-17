import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react'

import { CheckCircleIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons'


export const Aside = () => {
  const [user] = useState('Junior Almeyda Ortiz');
  const [email] = useState('jr.almeyda7@gmail.com');
  const [rol] = useState('ADMIN_ROLE');
  return (
    <Flex
      flexDirection="column"
      width="30%"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        borderRadius='full'
        boxSize='250px'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
      />
      <Box mt='10' fontSize='xl'> 
        <CheckCircleIcon width={5} height={5} color="teal.500"/> {user}
      </Box>

      <Box mt='10' fontSize='xl'> 
        <EmailIcon width={5} height={5} color="teal.500"/> {email}
      </Box>

      <Box mt='10' fontSize='xl'> 
        <SettingsIcon width={5} height={5} color="teal.500"/> {rol}
      </Box>

      <Stack mt='10' spacing={4} direction='row' align='center'>
        <Button colorScheme='teal' variant='solid' size='lg'>
          Crear Cuenta
        </Button>

        <Button colorScheme='teal' variant='solid' size='lg'>
          Editar Perfil
        </Button>
      </Stack>

    </Flex>

  );

}

export default Aside;
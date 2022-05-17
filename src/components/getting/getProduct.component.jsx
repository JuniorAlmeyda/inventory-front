
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Image,
} from '@chakra-ui/react'


export const GetProducts = () => {
  
  return (

    <Flex
    flexDirection="column"
    width="70%"
    height="100vh"
    backgroundColor="gray.100"
    >
   
    <TableContainer >
      <Table variant='simple'>
        <TableCaption>Lista de Productos</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Usuario</Th>
            <Th isNumeric>Precio</Th>
            <Th>Categoría</Th>
            <Th>Imagen</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>nombre del producto</Td>
            <Td>nombre del usuario </Td>
            <Td isNumeric>10</Td>
            <Td>nombre de la caegoria</Td>
            <Td>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Td>
          </Tr>

          <Tr>
            <Td>nombre del producto</Td>
            <Td>nombre del usuario </Td>
            <Td isNumeric>10</Td>
            <Td>nombre de la caegoria</Td>
            <Td>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Td>
          </Tr>

          <Tr>
            <Td>nombre del producto</Td>
            <Td>nombre del usuario </Td>
            <Td isNumeric>10</Td>
            <Td>nombre de la caegoria</Td>
            <Td>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Td>
          </Tr>

          <Tr>
            <Td>nombre del producto</Td>
            <Td>nombre del usuario </Td>
            <Td isNumeric>10</Td>
            <Td>nombre de la caegoria</Td>
            <Td>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Td>
          </Tr>

          <Tr>
            <Td>nombre del producto</Td>
            <Td>nombre del usuario </Td>
            <Td isNumeric>10</Td>
            <Td>nombre de la caegoria</Td>
            <Td>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Td>
          </Tr>
          
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nombre</Th>
            <Th>Usuario</Th>
            <Th isNumeric>Precio</Th>
            <Th>Categoría</Th>
            <Th>Imagen</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
</Flex>
  );

}

export default GetProducts;




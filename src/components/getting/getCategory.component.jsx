
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


export const GetCategories = () => {
  
  return (

    <Flex
    flexDirection="column"
    width="70%"
    height="100vh"
    backgroundColor="gray.100"
    alignItems="center"
    >
   
    <TableContainer >
      <Table variant='simple'>
        <TableCaption>Lista de Categorías</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>nombre de la categoria</Td>
          </Tr>

          <Tr>
            <Td>nombre de la categoria</Td>
          </Tr>

          <Tr>
            <Td>nombre de la categoria</Td>
          </Tr>

          <Tr>
            <Td>nombre de la categoria</Td>
          </Tr>

          <Tr>
            <Td>nombre de la categoria</Td>
          </Tr>
          
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nombre</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
</Flex>
  );

}

export default GetCategories;




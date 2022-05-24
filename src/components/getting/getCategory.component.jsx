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
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/actions/categoryActionsCreator";
export const GetCategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.categorias);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Flex
      flexDirection='column'
      width='70%'
      height='100vh'
      backgroundColor='gray.100'
      alignItems='center'
    >
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Lista de Categorías</TableCaption>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((categoria) => (
              <Tr>
                <Td key={categoria._id}>{categoria.nombre}</Td>
              </Tr>
            ))}

            {/*   <Tr>
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
            </Tr> */}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Nombre</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Button
        borderRadius={0}
        type='submit'
        variant='solid'
        colorScheme='teal'
        width='50%'
        onClick={() => navigate("/index")}
      >
        ir a inicio
      </Button>
    </Flex>
  );
};

export default GetCategories;

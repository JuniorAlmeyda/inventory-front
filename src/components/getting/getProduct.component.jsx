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
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions/productActionsCreator";

export const GetProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.productos);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Flex
      flexDirection='column'
      width='70%'
      height='100vh'
      backgroundColor='gray.100'
    >
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>
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
          </TableCaption>
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
            {data.map((producto) => (
              <Tr key={producto._id}>
                <Td>{producto?.nombre}</Td>
                <Td>{producto?.usuario?.nombre} </Td>
                <Td isNumeric>{producto?.precio}</Td>
                <Td>{producto?.categoria?.nombre}</Td>
                <Td>
                  <Image
                    boxSize='100px'
                    objectFit='cover'
                    src={producto.img}
                    alt='Dan Abramov'
                  />
                </Td>
              </Tr>
            ))}
            {/*  <Tr>
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
            </Tr> */}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>Nombre</Th>
              <Th>Usuario</Th>
              <Th isNumeric>Precio</Th>
              <Th>Categoría</Th>
              <Th>Imagen</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default GetProducts;

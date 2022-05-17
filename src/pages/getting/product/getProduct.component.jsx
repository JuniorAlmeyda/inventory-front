
import Aside from '../../../components/aside/aside.component'
import GetProducts from '../../../components/getting/getProduct.component';

import {
  Flex,
} from '@chakra-ui/react'

export const GetProductsWithAside = () => {

  return(
    <Flex>
      <Aside/>
      <GetProducts/>
    </Flex>
  );

}

export default GetProductsWithAside;
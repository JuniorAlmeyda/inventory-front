
import Aside from '../../../components/aside/aside.component'
import GetCategories from '../../../components/getting/getCategory.component';

import {
  Flex,
} from '@chakra-ui/react'

export const GetCategoriesWithAside = () => {

  return(
    <Flex>
      <Aside/>
      <GetCategories/>
    </Flex>
  );

}

export default GetCategoriesWithAside;
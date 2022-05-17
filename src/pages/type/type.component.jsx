
import Aside from '../../components/aside/aside.component';
import Type from '../../components/views/type.component';

import {
  Flex,
} from '@chakra-ui/react'

export const TypeWithAside = () => {

  return(
    <Flex>
      <Aside/>
      <Type/>
    </Flex>
  );

}

export default TypeWithAside;
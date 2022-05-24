import Aside from "../../components/aside/aside.component";
import Crud from "../../components/views/crud.component";

import { Flex } from "@chakra-ui/react";

const CrudWithAside = () => {
  return (
    <Flex>
      <Aside />
      <Crud />
    </Flex>
  );
};

export default CrudWithAside;

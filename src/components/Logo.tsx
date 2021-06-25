import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoMdMicrophone } from "react-icons/io";

export default function Logo() {
  return (
    <Flex
      alignItems="center"
      px={2}
      py={1}
      borderRadius="md"
      border="1px"
      borderColor="brand.500"
      color="brand.500"
    >
      <Icon as={IoMdMicrophone} mr={2} /> <Text>PODCASTER</Text>
    </Flex>
  );
}

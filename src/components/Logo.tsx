import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoMdMicrophone } from "react-icons/io";

export default function Logo() {
  return (
    <Flex alignItems="center" borderRadius="md" color="brand.500">
      <Icon as={IoMdMicrophone} mr={1} />{" "}
      <Text fontWeight="black">Podcaster</Text>
    </Flex>
  );
}

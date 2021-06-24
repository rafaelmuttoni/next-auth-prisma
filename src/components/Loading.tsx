import { Flex, Text, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Spinner size="xl" thickness="2px" mb={2} />{" "}
      <Text fontWeight="light">Carregando...</Text>
    </Flex>
  );
}

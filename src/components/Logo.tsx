import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoIosAnalytics } from "react-icons/io";
import NextLink from "next/link";

export default function Logo() {
  return (
    <NextLink href="/">
      <Flex
        as="a"
        alignItems="center"
        borderRadius="md"
        color="brand.500"
        _hover={{ color: "brand.600", cursor: "pointer" }}
      >
        <Icon as={IoIosAnalytics} mr={1} />{" "}
        <Text fontWeight="black">Analytics</Text>
      </Flex>
    </NextLink>
  );
}

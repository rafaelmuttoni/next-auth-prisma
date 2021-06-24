import { useState } from "react";
import { GetServerSideProps } from "next";
import NextLink from "next/link";
import {
  Flex,
  Box,
  Divider,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { signIn, getSession } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleClick = () => {
    setLoading(true);
    signIn("google", null);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Crie sua conta</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            para aproveitar todas nossas funcionalidades{" "}
            <Text fontWeight="bold" as="span" color="brand.500">
              fodas ✌️
            </Text>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Button
              w={"full"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              onClick={handleGoogleClick}
              isLoading={loading}
            >
              <Text>Cadastrar com Google</Text>
            </Button>
            <Flex alignItems="center">
              <Divider />
              <Text color="gray.600" mx="2">
                ou
              </Text>
              <Divider />
            </Flex>
            <Button
              w={"full"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
            >
              <Text>Cadastrar com Facebook</Text>
            </Button>
            <Button w="full" colorScheme="twitter" leftIcon={<FaTwitter />}>
              Cadastrar com Twitter
            </Button>
          </Stack>
        </Box>
        <Text textAlign="center">
          Já possui conta?{" "}
          <NextLink href="/login">
            <Button as="a" variant="link" colorScheme="brand">
              Fazer login
            </Button>
          </NextLink>
        </Text>
      </Stack>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};

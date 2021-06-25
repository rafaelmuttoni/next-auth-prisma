import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaAngleRight } from "react-icons/fa";
import { signIn } from "../services/auth";

type LoginFormProps = {
  register?: boolean;
};

export default function LoginForm({ register }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginClick = async (provider: string, email?: string) => {
    setLoading(true);

    if (email) {
      const res = await signIn(provider, email);
      console.log(res);
    } else {
      const res = await signIn(provider, null);
      console.log(res);
    }
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
          <Heading fontSize={"4xl"}>
            {register ? "Crie" : "Entre na"} sua conta
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            para aproveitar todas nossas funcionalidades{" "}
            <Text fontWeight="bold" as="span" color="brand.600">
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
              onClick={() => handleLoginClick("google")}
              isLoading={loading}
            >
              <Text>{register ? "Cadastrar" : "Fazer Login"} com Google</Text>
            </Button>
            <Button
              w={"full"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
            >
              <Text>{register ? "Cadastrar" : "Entrar"} com Facebook</Text>
            </Button>
            <Flex alignItems="center">
              <Divider />
              <Text color="gray.600" mx="2">
                ou
              </Text>
              <Divider />
            </Flex>
            <FormControl id="email">
              <FormLabel>Qual o seu e-mail?</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ronaldinho@gaucho.com.br"
              />
              <FormHelperText>
                Enviaremos um link para você confirmar o seu e-mail.
              </FormHelperText>
            </FormControl>
            <Button
              w={"full"}
              colorScheme="brand"
              rightIcon={<FaAngleRight />}
              onClick={() => handleLoginClick("email", email)}
            >
              <Text>Continuar com E-mail</Text>
            </Button>
          </Stack>
        </Box>
        <Text textAlign="center">
          {register ? "Já" : "Não"} possui conta?{" "}
          <NextLink href={register ? "/login" : "/register"}>
            <Button as="a" variant="link">
              {register ? "Fazer login" : "Cadastrar-se"}
            </Button>
          </NextLink>
        </Text>
      </Stack>
    </Flex>
  );
}

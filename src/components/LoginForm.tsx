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
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaAngleRight } from "react-icons/fa";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

type LoginFormProps = {
  register?: boolean;
};

export default function LoginForm({ register }: LoginFormProps) {
  const toast = useToast();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean | string>(false);

  const handleLoginClick = async (provider: string, email?: string) => {
    setLoading(provider);

    try {
      const res = await signIn(provider, {
        redirect: false,
        email: email ? email : null,
      });

      if (email && res) {
        toast({
          title: "Link de confirmação enviado.",
          description:
            "Entre no e-mail informado e clique no link para verificar.",
          status: "info",
        });
      }

      setLoading(false);
      router.push("/dashboard");

      return;
    } catch (err) {
      console.log(err);
    }

    toast({
      title: "Ocorreu um erro na sua autenticação.",
      description: "Caso precise de ajude, entre em contato.",
      status: "error",
    });
    setLoading(false);
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
              disabled={Boolean(loading)}
              isLoading={loading === "google"}
            >
              <Text>{register ? "Cadastrar" : "Fazer Login"} com Google</Text>
            </Button>
            <Button
              w={"full"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
              disabled={Boolean(loading)}
              isLoading={loading === "facebook"}
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
              disabled={Boolean(loading)}
              isLoading={loading === "email"}
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

import { Box, Heading } from "@chakra-ui/react";
import { useSession } from "../services/auth";

export default function Home() {
  const [session, loading] = useSession();

  if (loading) return <h1>Loading..</h1>;

  return (
    <Box>
      <Heading color="red.500">{JSON.stringify(session)}</Heading>
    </Box>
  );
}

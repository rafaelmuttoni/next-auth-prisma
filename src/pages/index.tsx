import { Heading } from "@chakra-ui/react";
import { useSession } from "../services/auth";
import OpenLayout from "../layouts/Open";

export default function Home() {
  const [session, loading] = useSession();

  if (loading) return <h1>Loading..</h1>;

  return (
    <OpenLayout>
      <Heading color="red.500">{JSON.stringify(session)}</Heading>
    </OpenLayout>
  );
}

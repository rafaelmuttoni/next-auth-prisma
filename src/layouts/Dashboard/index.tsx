import { Box } from "@chakra-ui/react";
import { useSession } from "../../services/auth";

import Navbar from "./Navbar";
import Loading from "../../components/Loading";

function Wrapper({ children }) {
  return (
    <Box h={[null, null, "100vh"]}>
      <Navbar />
      {children}
    </Box>
  );
}

export default function DashboardLayout({ children }) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (!session) {
    return <Wrapper>Sorry, you're not authenticated.</Wrapper>;
  }

  return <Wrapper>{children}</Wrapper>;
}

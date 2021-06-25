import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { useSession } from "../../services/auth";

import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";

interface WrapperProps {
  children: ReactNode;
  avatar?: string;
}

function Wrapper({ children, avatar }: WrapperProps) {
  return (
    <Box h={[null, null, "100vh"]}>
      <Navbar layout="dashboard" avatar={avatar} />
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

  return <Wrapper avatar={session.user?.image}>{children}</Wrapper>;
}

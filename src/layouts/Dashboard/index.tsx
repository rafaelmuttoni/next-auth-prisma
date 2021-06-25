import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "../../components/Navbar";

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

export default function DashboardLayout({ children, session }) {
  return <Wrapper avatar={session.user?.image}>{children}</Wrapper>;
}

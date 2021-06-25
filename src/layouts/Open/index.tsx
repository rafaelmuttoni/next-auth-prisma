import { Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";

export default function OpenLayout({ children }) {
  return (
    <Box>
      <Navbar layout="open" />
      {children}
    </Box>
  );
}

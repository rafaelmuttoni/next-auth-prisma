import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function OpenLayout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}

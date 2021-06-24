import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
        borderRadius: "lg",
        _hover: {
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;

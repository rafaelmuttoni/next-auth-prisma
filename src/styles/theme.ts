import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
  },
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

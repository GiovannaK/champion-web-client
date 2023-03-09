import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const colors: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Rubik Iso',
    body: 'Rubik Iso',
  }
};

export const theme = extendTheme({ colors });

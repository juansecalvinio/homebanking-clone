import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
  fonts: {
    body: "'Ubuntu', system-ui, sans-serif",
    heading: "'Ubuntu', Arial, sans-serif",
  },
});

export default theme;

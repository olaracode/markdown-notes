import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#FFFBEC",
        background: "#474955",
      },
    },
  },
  colors: {
    brand: {
      light: "#FFFBEC",
      accent: "#B1C1BD",
      main: "#507995",
      dark: "#42505F",
      card: "#4E505D",
    },
    text: {
      main: "#FFFBEC",
      clear: "#FFFBEC",
      hover: "#000",
    },
  },
});

export const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#495869",
        background: "#fafafa",
      },
    },
  },
  colors: {
    brand: {
      light: "#F9E8C4",
      card: "#ffffff",
      accent: "#B1C1BD",
      main: "#507995",
      dark: "#495869",
    },
    text: {
      main: "#495869",
      clear: "#FFFBEC",
      hover: "#457B9D",
    },
  },
});

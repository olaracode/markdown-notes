import { useContext } from "react";
import { darkTheme, lightTheme } from "./theme";
import { ChakraProvider, Box } from "@chakra-ui/react";
import useStore from "hooks/useStore";
const ThemeProvider = ({ children }) => {
  const { store } = useStore();
  return (
    <ChakraProvider
      overflowX={"hidden"}
      bg="brand.bg"
      theme={store.isDarkTheme ? darkTheme : lightTheme}
    >
      <Box>{children}</Box>
    </ChakraProvider>
  );
};

export default ThemeProvider;

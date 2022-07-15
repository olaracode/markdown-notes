import React, { useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
} from "@chakra-ui/react";
import CustomButton from "@/atoms/CustomButton";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "context";
const Navbar = () => {
  const { isDarkTheme, setDarkTheme } = useContext(AppContext);
  return (
    <Box
      w="100%"
      position={"fixed"}
      top="0px"
      zIndex="999"
      backgroundColor="brand.card"
    >
      <Flex justify={"space-between"} h={"60px"} mx={"6%"} align="center">
        <Flex align="center">
          <CustomButton content={"Kanagawa"} bg="none" hover main />
        </Flex>
        <Flex gap={2} align="center">
          <Button
            bg="none"
            _hover={{ bg: "brand.light", color: "brand.dark" }}
            onClick={() => setDarkTheme(!isDarkTheme)}
          >
            <FontAwesomeIcon icon={faMoon} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

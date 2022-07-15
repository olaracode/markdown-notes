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
    <Box w="100%" bg="brand.card" shadow={"md"}>
      <Flex justify={"space-between"} h={"60px"} mx={"6%"} align="center">
        <Flex justify={"center"} align="center" gap="3">
          <Text
            as="p"
            fontSize="16px"
            cursor="pointer"
            color={"brand.accent"}
            fontWeight={"bold"}
          >
            Techie
          </Text>
        </Flex>
        <Flex gap={2} align="center" display={{ base: "none", md: "flex" }}>
          <Button
            bg="none"
            _hover={{ bg: "brand.light", color: "brand.dark" }}
            onClick={() => setDarkTheme(!isDarkTheme)}
          >
            <FontAwesomeIcon icon={faMoon} />
          </Button>
          <CustomButton bg="none" hover content="About" />
          <CustomButton bg="none" content="Login" hover="true" />
          <CustomButton hover={true} content="register" />
        </Flex>
        <Box display={{ sm: "block", md: "none", lg: "none", xl: "none" }}>
          <Menu>
            <MenuButton
              border="2px solid"
              borderColor="brand.accent"
              py="10px"
              px="15px"
              color="brand.accent"
              borderRadius="8px"
            >
              <FontAwesomeIcon icon={faBars} />
            </MenuButton>
            <MenuList
              p={1}
              py={3}
              bg={"brand.card"}
              borderColor="transparent"
              shadow={"md"}
            >
              <MenuItem
                _hover={{
                  color: "text.clear",
                  bg: "brand.accent",
                  filter: "brightness: 50%",
                }}
                borderRadius="8px"
                onClick={() => setDarkTheme(!isDarkTheme)}
              >
                <Flex gap={2} w="100%" align="center">
                  <FontAwesomeIcon icon={faMoon} />
                  <Text>Theme</Text>
                </Flex>
              </MenuItem>
              <MenuItem
                _hover={{
                  color: "text.clear",
                  bg: "brand.accent",
                  filter: "brightness: 50%",
                }}
                borderRadius="8px"
              >
                About
              </MenuItem>
              <MenuItem
                _hover={{
                  color: "text.clear",
                  bg: "brand.accent",
                  filter: "brightness: 50%",
                }}
                borderRadius="8px"
              >
                Login
              </MenuItem>
              <MenuItem
                my="3"
                _hover={{
                  color: "text.clear",
                  bg: "brand.accent",
                  filter: "brightness: 50%",
                }}
                color="brand.light"
                borderRadius="8px"
                bg={"brand.dark"}
              >
                <Text textAlign={"center"} w="100%">
                  Register
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

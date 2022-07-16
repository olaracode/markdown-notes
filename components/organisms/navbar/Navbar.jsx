import React from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  SkeletonCircle,
  MenuDivider,
} from "@chakra-ui/react";
import CustomButton from "@/atoms/CustomButton";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStore from "hooks/useStore";
import { useRouter } from "next/router";
const Navbar = () => {
  // ! Temporary solution while we work on backend and user authentication
  const router = useRouter();
  const shouldBeAuthenticated = "/notebook";

  const { store, actions } = useStore();

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
        {router.asPath == shouldBeAuthenticated ? (
          <Flex gap={2} align="center">
            <Menu>
              <MenuButton
                as={Button}
                bgColor="transparent"
                _active={{ bgColor: "brand.light", color: "brand.dark" }}
                _hover={{ color: "brand.dark", bgColor: "brand.light" }}
              >
                <FontAwesomeIcon icon={faBars} />
              </MenuButton>
              <MenuList
                p="0"
                borderColor="brand.light"
                bgColor="brand.card"
                color="text.main"
              >
                <MenuItem
                  _hover={{ color: "brand.dark", bgColor: "brand.light" }}
                  gap="1"
                >
                  <SkeletonCircle w="30px" />
                  <Text>@olaracode</Text>
                </MenuItem>
                <MenuDivider p="0" />
                <MenuItem
                  _hover={{ color: "brand.dark", bgColor: "brand.light" }}
                  gap="3"
                >
                  <Text>NoteBook</Text>
                </MenuItem>
                <MenuItem
                  _hover={{ color: "brand.dark", bgColor: "brand.light" }}
                  gap="3"
                >
                  <Text>My Blog</Text>
                </MenuItem>
                <MenuItem
                  _hover={{ color: "brand.dark", bgColor: "brand.light" }}
                  gap="3"
                >
                  <Text>All the blogs</Text>
                </MenuItem>
                <MenuItem
                  _hover={{ color: "brand.dark", bgColor: "brand.light" }}
                  onClick={() => actions.setDarkTheme(!store.isDarkTheme)}
                  _focus={{ bgColor: "brand.light", color: "brand.dark" }}
                  gap="1"
                >
                  <FontAwesomeIcon icon={faMoon} />
                  <Text>Theme</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          <Flex gap={2} align="center">
            <Button
              bg="none"
              _hover={{ bg: "brand.light", color: "brand.dark" }}
              onClick={() => actions.setDarkTheme(!store.isDarkTheme)}
            >
              <FontAwesomeIcon icon={faMoon} />
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;

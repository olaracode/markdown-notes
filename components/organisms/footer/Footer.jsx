import React from "react";
import { Box, Text, Flex, Link, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const handleRouter = (url) => {
    router.p;
  };
  return (
    <Flex
      backgroundColor="brand.card"
      p="5"
      gap="10"
      direction={"column"}
      align={"center"}
      justify="center"
    >
      <Flex gap="3">
        <Link fontWeight={"black"}>Kanagawa</Link>
        <Link>Login</Link>
        <Link>Register</Link>
        <Link>Blogs</Link>
        <Link>About</Link>
      </Flex>
      <Divider maxW="460px" border="5px" borderRadius={"100px"} />
      <Flex maxW="330px">
        <Text textAlign={"justify"}>
          Kanagawa is a digital notebook and blog that uses markdown developed
          on Next.js with chakra-ui. This app was started by{" "}
          <Link>@olaracode</Link>. Want to contribute? Jump into the repository
          and see where you can make yourself useful :)
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;

import { Box, Flex, Text, Input } from "@chakra-ui/react";
import { CustomButton, CustomInput } from "@/atoms/index";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <Flex
      h="100vh"
      w="100vw"
      top={"0px"}
      backgroundImage="/assets/imgs/kanagawa.jpeg"
      bgPosition={"center"}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      justify="center"
      align={"center"}
    >
      <Flex
        w={["90%", "80%", "70%", "60%"]}
        maxW="600px"
        backgroundColor="brand.card"
        borderRadius="18px"
        px="10"
        py="10"
        direction="column"
        shadow={"2xl"}
      >
        <Text align="center">
          Kanagawa is a note taking application meant to be a case study of
          next, seo optimization and fullstack development. Login is required to
          continue
        </Text>
        <Flex mt="10" mx="5" direction={"column"} gap="5">
          <CustomInput
            placeholder="Email"
            type="email"
            _placeholder={{ color: "text.main" }}
          />
          <CustomInput
            placeholder="Password"
            type="password"
            _placeholder={{ color: "text.main" }}
          />
        </Flex>
        <Flex
          justify={"center"}
          align="center"
          mt="6"
          direction={"column"}
          gap="1"
        >
          <CustomButton
            bg="none"
            onClick={() => router.push("/notebook")}
            content="Inicia sesion"
            maxW="160"
          />
          <Text textAlign={"center"} fontSize="xs">
            Don&apos;t have an account?{" "}
            <Text
              as={"span"}
              fontWeight={"black"}
              cursor="pointer"
              _hover={{ textDecor: "underline" }}
            >
              Register Now!
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

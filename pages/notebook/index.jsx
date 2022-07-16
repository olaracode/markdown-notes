import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import defaultNotes from "pages/api/defaultNotes";
const Notebookmain = ({ posts }) => {
  const published = posts
    ? posts.filter((note, index) => {
        return note.isPublished === true;
      })
    : 0;
  return (
    <Flex direction="column" gap="3" my="80px" minH="60vh" mx={"6%"}>
      <Flex justify="space-between">
        <Text fontWeight={"light"}>Notes: {posts.length}</Text>{" "}
        <Text fontWeight={"light"}>Published: {published.length}</Text>
      </Flex>
      {posts?.map((note, index) => {
        return (
          <Flex
            key={index}
            minH="100px"
            p="3"
            bgColor="brand.card"
            borderRadius="18px"
            boxShadow={"md"}
          >
            <Box>
              <Text>{note.title}</Text>
              <Text fontSize="sm" fontWeight={"light"}>
                {note.content}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
export async function getStaticProps() {
  const posts = [...defaultNotes];
  return {
    props: {
      posts,
    },
  };
}
export default Notebookmain;

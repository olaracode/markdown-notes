import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ content, bg, ftColor, hover, main, ...props }) => {
  return (
    <Button
      {...props}
      bg={bg ? bg : "brand.accent"}
      _hover={
        main
          ? {
              bg: "brand.card",
              border: "2px solid",
              borderColor: "brand.light",
              brightness: "10%",
            }
          : hover
          ? hover
          : { bg: "brand.light", color: "black" }
      }
      _active={{ bgColor: "brand.light", color: "brand.dark" }}
      _focus={{ border: "none" }}
      color={ftColor ? ftColor : "text.light"}
    >
      {content}
    </Button>
  );
};

export default CustomButton;

import React from "react";
import { Input } from "@chakra-ui/react";
const CustomInput = ({ ...props }) => {
  return (
    <Input
      borderColor="brand.main"
      focusBorderColor="brand.light"
      _hover={{ borderColor: "brand.accent" }}
      {...props}
    />
  );
};

export default CustomInput;

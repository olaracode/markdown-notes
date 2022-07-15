import React from "react";
import Navbar from "./organisms/navbar/Navbar";
import Footer from "./organisms/footer/Footer";
import { Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;

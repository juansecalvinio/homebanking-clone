import { Flex } from "@chakra-ui/react";
import React from "react";

export const PageContainer = ({ children }) => {
  return (
    <Flex
      mt={"60px"}
      as="section"
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      gap={"2rem"}
    >
      {children}
    </Flex>
  );
};

import React from "react";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";

export const Header = () => {
  return (
    <Flex
      as="header"
      h={"60px"}
      w={"100%"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      backgroundColor={"#ec0000"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      pt={"10px"}
    >
      <Flex
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <IconButton
          aria-label="menu"
          variant={"ghost"}
          colorScheme={"whiteAlpha"}
          fontSize={"20px"}
          icon={<AiOutlineMenu color={"white"} />}
        />
        <Heading size={"md"} color={"white"} fontWeight={"light"}>
          Homebanking
        </Heading>
        <IconButton
          aria-label="menu"
          variant={"ghost"}
          colorScheme={"whiteAlpha"}
          fontSize={"20px"}
          icon={<AiOutlineBell color={"white"} />}
        />
      </Flex>
      <Flex
        w={"100%"}
        borderBottom={"30px solid"}
        borderBottomColor={"#ec0000"}
        borderBottomLeftRadius={"50%"}
        borderBottomRightRadius={"50%"}
      ></Flex>
    </Flex>
  );
};

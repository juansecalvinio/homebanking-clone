import React, { useState } from "react";
import { Box, Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { PiEyeClosed, PiEye } from "react-icons/pi";

export const AccountsInfo = () => {
  const [showBalances, setShowBalances] = useState<boolean>(false);

  return (
    <Flex as="section" h={"100%"} w={"100%"}>
      <Box
        h={"200px"}
        w={"100%"}
        backgroundColor={"white"}
        border={"1px solid"}
        borderColor={"gray.200"}
        borderRadius={"10px"}
        boxShadow={"md"}
        p={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Flex
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text fontSize={"12px"}>Cuenta 577-352122/1</Text>
          <IconButton
            size={"sm"}
            aria-label="ver-saldos"
            color={"cyan.800"}
            icon={showBalances ? <PiEyeClosed /> : <PiEye />}
            onClick={() => setShowBalances(!showBalances)}
          />
        </Flex>
        <Flex
          display={"flex"}
          flexDirection={"column"}
          alignSelf={"flex-start"}
          gap={"0.5rem"}
        >
          <Heading size={"lg"} fontWeight={"light"} alignSelf={"flex-start"}>
            $ <strong>{showBalances ? "45.678,50" : "· · · · · · ·"}</strong>
          </Heading>
          <Heading size={"lg"} fontWeight={"light"} alignSelf={"flex-start"}>
            U$S <strong>{showBalances ? "290,50" : "· · · · ·"}</strong>
          </Heading>
        </Flex>
        <Flex
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Button size="sm" fontSize={"12px"} fontWeight={"normal"}>
            Ver movimientos
          </Button>
          <Button size="sm" fontSize={"12px"} fontWeight={"normal"}>
            Consultar Alias / CBU
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

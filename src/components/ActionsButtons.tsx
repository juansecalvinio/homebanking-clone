import React from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { ImQrcode } from "react-icons/im";

const actionsButtons = [
  {
    title: "Transferir",
    icon: <LiaExchangeAltSolid />,
  },
  {
    title: "Pagar servicios",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Pagar con QR",
    icon: <ImQrcode />,
  },
  {
    title: "Más acciones",
    icon: <AiOutlinePlus />,
  },
];

const ActionButton = ({ title, icon }) => {
  return (
    <Flex
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"0.5rem"}
    >
      <IconButton
        aria-label={title}
        icon={icon}
        size={"lg"}
        variant={"outline"}
        backgroundColor={"white"}
        boxShadow={"md"}
        color={"cyan.800"}
      />
      <Text fontSize={"12px"} textAlign={"center"} fontWeight={"normal"}>
        {title}
      </Text>
    </Flex>
  );
};

export const ActionsButtons = () => {
  return (
    <Flex
      as="section"
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      gap={"2rem"}
    >
      {actionsButtons.map((actionButton) => (
        <ActionButton title={actionButton.title} icon={actionButton.icon} />
      ))}
    </Flex>
  );
};

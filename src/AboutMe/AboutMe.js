import { Box, Icon, Text } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import scrollToElement from "../Utils/ScrollToElement";

export default function AboutMe() {
  return (
    <>
      <Box w={"100%"} align="center" my={8}>
        <Icon
          as={MdOutlineKeyboardArrowUp}
          boxSize={8}
          onClick={() => scrollToElement("projects")}
        />
      </Box>
      <Box w={"100%"} align="center">
        <Text fontSize={30} as={"b"}>
          Who am I?
        </Text>
      </Box>
      <Box w={"100%"} align="center" my={8}>
        <Icon
          as={MdOutlineKeyboardArrowDown}
          boxSize={8}
          onClick={() => scrollToElement("about-me")}
        />
      </Box>
    </>
  );
}

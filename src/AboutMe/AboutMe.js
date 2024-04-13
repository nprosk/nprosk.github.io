import { Box, Text } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import ScrollToElementBtn from "../Utils/ScrollToElementBtn";

export default function AboutMe() {
  return (
    <>
    <ScrollToElementBtn scrollTo={"projects"} icon={MdOutlineKeyboardArrowUp}/>
      <Box w={"100%"} align="center">
        <Text fontSize={30} as={"b"}>
          Who am I?
        </Text>
      </Box>
      <ScrollToElementBtn scrollTo={"about-me"} icon={MdOutlineKeyboardArrowDown}/>
    </>
  );
}

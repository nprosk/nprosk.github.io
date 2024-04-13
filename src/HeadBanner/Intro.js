import {
  Box,
  Button,
  Image,
  LightMode,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";
import scrollToElement from "../Utils/ScrollToElement";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ScrollToElementBtn from "../Utils/ScrollToElementBtn";

export default function Intro() {
  return (
    <>
      <Stack
        direction={{base: "column", sm: "row"}}
        spacing={4}
        align={{base: "center", sm: "flex-start"}}
        justify="center"
        mt={20}
      >
        <Image
          objectFit="cover"
          borderRadius="full"
          maxW={{ base: "50%", sm: "200px", md: "300px", lg: "400px"}}
          src="pic_of_me.JPG"
          alt="Me in an esports jersey"
        />

        <Stack ml={{ base: 0, sm: 3 }} align={{ base: "center", sm: "start" }}>
          <Text fontSize="3xl" as="b">
            Nicolas Proskauer Valerio
          </Text>

          <Text py="2" maxW={{ base: "100&", sm: "400px" }}>
            Software Engineer with a passion for esports and gaming. I am a
            rising senior attending Northeastern University.
          </Text>
          <SocialLinks />

          <Link
            href="./Nicolas_Proskauer_Valerio_Resume.pdf"
            download="./Nicolas_Proskauer_Valerio_Resume.pdf"
            className="social-icons"
          >
            <LightMode>
              <Button size={"lg"} width={"200px"}>
                <Text>Resume</Text>
              </Button>
            </LightMode>
          </Link>
        </Stack>
      </Stack>
      <Box w="100%" align="center" mt={20}>
        <Box>
          <LightMode>
            <Button
              onClick={() => scrollToElement("projects")}
              mx={8}
              size={"lg"}
              className="social-icons"
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToElement("about-me")}
              mx={8}
              size={"lg"}
            >
              About Me
            </Button>
          </LightMode>
        </Box>
        <ScrollToElementBtn scrollTo="projects" icon={MdOutlineKeyboardArrowDown} />
      </Box>
    </>
  );
}

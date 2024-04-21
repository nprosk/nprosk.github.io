import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Image,
  LightMode,
  Link,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";
import scrollToElement from "../Utils/ScrollToElement";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiChakraui, SiTypescript } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";

export default function Intro() {
  const tabs = [
    {
      title: "About Me",
      onClick: () => scrollToElement("about-me"),
    },
    {
      title: "Projects",
      onClick: () => scrollToElement("projects"),
    },
    {
      title: "Work Experience",
      onClick: () => scrollToElement("work-experience"),
    },
    {
      title: "Rocket League 🚗",
      onClick: () => scrollToElement("rocket-league"),
    },
  ];

  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align={{ base: "center", sm: "flex-start" }}
        justify="center"
        mt={20}
      >
        <Image
          objectFit="cover"
          borderRadius="full"
          maxW={{ base: "40%", sm: "200px", md: "300px" }}
          src="pic_of_me.JPG"
          alt="Me in an esports jersey"
        />

        <Stack align={"center"}>
          <Text fontSize="3xl" as="b">
            Nicol&#225;s Proskauer Valerio
          </Text>

          <Text maxW={{ base: "100%", sm: "200px", md: "300px", lg: "400px" }}>
            Computer Science at Northeastern
          </Text>
          <Text maxW={{ base: "100%", sm: "200px", md: "300px", lg: "400px" }}>
            Software Concentration with a minor in Game Design
          </Text>
          <Text
            pb="2"
            maxW={{ base: "100%", sm: "200px", md: "300px", lg: "400px" }}
          >
            Rising Senior
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
      <Container alignItems={"center"} my={6}>
        <HStack width={"100vw"}>
          <Icon as={FaReact} w={10} h={10} className="social-icons" />
          <Icon as={TbBrandNextjs} w={10} h={10} className="social-icons" />
          <Icon as={FaJava} w={10} h={10} className="social-icons" />
          <Icon as={FaPython} w={10} h={10} className="social-icons" />
          <Icon as={IoLogoJavascript} w={10} h={10} className="social-icons" />
          <Icon as={SiTypescript} w={10} h={10} className="social-icons" />
          <Icon as={FaHtml5} w={10} h={10} className="social-icons" />
          <Icon as={FaCss3} w={10} h={10} className="social-icons" />
          <Icon as={SiChakraui} w={10} h={10} className="social-icons" />
          <Icon as={FaBootstrap} w={10} h={10} className="social-icons" />
          <Icon as={FaNodeJs} w={10} h={10} className="social-icons" />
          <Icon as={FaUnity} w={10} h={10} className="social-icons" />
        </HStack>
      </Container>
      <Box w="100%" align="center" mt={{ base: 5, sm: 10, md: 20 }}>
        <Box>
          <LightMode>
            <Tabs align="center">
              <TabList borderBottomStyle={"none"}>
                {tabs.map((tab, index) => (
                  <Tab
                    onClick={tab.onClick}
                    mx={{ base: 2, sm: 4, md: 8 }}
                    size={"lg"}
                    className="social-icons"
                    _selected={{ borderBottomStyle: "none" }}
                    fontSize={{ base: "sm", md: "lg" }}
                    key={index}
                  >
                    {tab.title}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </LightMode>
        </Box>
      </Box>
    </Box>
  );
}

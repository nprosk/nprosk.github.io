import {
  Box,
  Button,
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

export default function Intro() {
  const tabs = [
    {
      title: "Projects",
      onClick: () => scrollToElement("projects")
    },
    {
      title: "About Me",
      onClick: () => scrollToElement("about-me")
    },
    {
      title: "Work Experience",
      onClick: () => scrollToElement("work-experience")
    },
    {
      title: "Rocket League 🚗",
      onClick: () => scrollToElement("rocket-league")
    }
  ]

  return (
    <>
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

          <Text
            py="2"
            maxW={{ base: "100%", sm: "200px", md: "300px", lg: "400px" }}
          >
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
      <Box w="100%" align="center" mt={{ base: 5, sm: 10, md: 20 }}>
        <Box>
          <LightMode>
            <Tabs align="center">
              <TabList borderBottomStyle={'none'}>
                {tabs.map((tab, index) => (
                  <Tab
                    onClick={tab.onClick}
                    mx={{ base: 2, sm: 4 , md: 8}}
                    size={"lg"}
                    className="social-icons"
                    _selected={{ borderBottomStyle: 'none'}}
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
    </>
  );
}
